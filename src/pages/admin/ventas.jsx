import React, {useEffect, useState, useRef} from 'react'
import BarraTitulo from '../../components/barraTitulo'
import { ToastContainer, toast } from 'react-toastify';
//import { Dialog} from '@material-ui/core@';
import 'react-toastify/dist/ReactToastify.css';
import {nanoid} from 'nanoid';
import {crearVenta, editarVentas, eliminarVentas, obtenerUsuarios, obtenerVentas,} from '../../utils/api.js'




const Ventas = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState("Registrar nueva venta");
    const [Ventas, setVentas] = useState([]);
    const[ejecutarConsulta,setEjecutarConsulta] = useState(false)

    useEffect(() => {
        
            if(ejecutarConsulta){
            obtenerVentas((response)=>{
                setVentas(response.data)
            },(error)=>{
                console.error(error)
            })  
            setEjecutarConsulta(false);
        }   
    }, [ejecutarConsulta])


    useEffect(() => {  
        if (mostrarTabla){
        setEjecutarConsulta(true) 
        } 
    }, [mostrarTabla])    
    

    useEffect(()=>{
        if (mostrarTabla){
            setTextoBoton('Registrar nueva venta')
        }else{
            setTextoBoton('Ver listado de Ventas')
        }
    },[mostrarTabla]);
    
    return (
        <div className='flex w-screen'>
            <BarraTitulo>
                    Informacion Ventas
            </BarraTitulo>
            <div className='flex flex-col w-full items-center justify-center'>
                <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className='bg-indigo-400 text-white rounded-full font-extrabold w-52 p-2 m-3'>{textoBoton}</button>
                
                {mostrarTabla ? <TablaVentas listaVentas = {Ventas} setEjecutarConsulta = {setEjecutarConsulta}/>:<FormularioCreacionVentas setMostrarTabla={setMostrarTabla}/>}
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                />
            </div>           
        </div> 
    )
}

const TablaVentas = ({listaVentas,setEjecutarConsulta,setAgregarVenta}) =>{
    const[busqueda,setBusqueda]=useState('')
    const[VentasFiltrados,setVentasFiltrados]=useState(listaVentas)

    useEffect(() => {
        setVentasFiltrados(
            listaVentas.filter((elemento)=>{
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase())
            })
        )
        
    },[busqueda,listaVentas])

    const form = useRef(null);
    const submitEdit =(e)=>{
        e.preventDefault();
    
        const fd = new FormData(form.current);
 
        const nuevoVenta ={};
        fd.forEach((value,key) => {
            nuevoVenta[key] =value;
        });
        
        setAgregarVenta([...listaVentas,nuevoVenta])
    }

    return(
        <form ref={form} onSubmit={submitEdit} className='flex flex-col items-center justify-center w-full'>
            <input placeholder='Buscar' className='flex border border-gray-700 px-3 py-1 my-2 mx-3  rounded-md self-start hover:border-blue-700'
                    value={busqueda}
                    onChange={e=>setBusqueda(e.target.value)}
                
                />
            <table className='tabla w-full'>
                <thead className='bg-blue-200'>
                    <tr>
                        <th className='w-64'>IDVentas</th>
                        <th className='w-64'>IDCliente</th>
                        <th className='w-64'>Cliente</th>
                        <th className='w-64'>Vendedor</th>
                        <th>Producto</th>
                        <th>Valor</th>
                        <th className='w-32'>ACCIONES</th>
                    </tr>
                </thead>
                <tbody className='bg-white'>
                    {VentasFiltrados.map((Ventas)=>{
                        return <FilaVentas key={nanoid()} Ventas = {Ventas} setEjecutarConsulta = {setEjecutarConsulta}/>
                    })}
                    
                </tbody>
            </table>
        </form>
        
        
    )
}

const FilaVentas =({Ventas, setEjecutarConsulta})=>{
    const [edit,setEdit] = useState(false)
    const [infoNuevoVenta, setInfoNuevoVenta] = useState({

        IDventa: Ventas.IDventa,
        IDCliente: Ventas.IDCliente,
        Cliente: Ventas.Cliente,
        Vendedor: Ventas.Vendedor,
        Producto: Ventas.Producto,
        Valor: Ventas.Valor
    })

    const[vendedores,setVendedores] = useState([])

    useEffect(() => {
        const fetchVendedores = async () => {

            await obtenerUsuarios(
                (response)=>{
                    setVendedores(response.data)
                    console.log('respuesta de usuarios', response)
                },
                (error)=>{console.error(error)}
                );
        }
        fetchVendedores();
    }, [])

    const actualizarVenta = async () =>{
        
        await editarVentas(Ventas._id,infoNuevoVenta,
            (response)=>{
                console.log(response.data);
                toast.success('Venta modificada con éxito')
                setEjecutarConsulta(true)
                setEdit(false)
            },
            
            (error)=>{
                console.error('Error modificando la Venta')
                console.error(error);
            }
        )
            
    }

    const eliminarVenta = async () =>{

        await eliminarVentas(Ventas._id,
            (response)=>{
                console.log(response.data);
                toast.success('Venta eliminada con éxito')
                setEjecutarConsulta(true)
                setEdit(false)
            },
            
            (error)=>{
                console.error('Error eliminando Venta')
                console.error(error);
            }
        )
    }
    return(
    





        <tr>
            {edit ?(
            <>
                <td>{infoNuevoVenta.IDventa}</td>
                <td><input name='IDCliente' type="text"  className='bg-white border border-gray-600 p-2 rounded-lg m-2' value={infoNuevoVenta.IDCliente} onChange={(e)=> setInfoNuevoVenta({...infoNuevoVenta, IDCliente: e.target.value})}/></td>
                <td><input name='Cliente' type="text"  className='bg-white border border-gray-600 p-2 rounded-lg m-2' value={infoNuevoVenta.Cliente} onChange={(e)=> setInfoNuevoVenta({...infoNuevoVenta, Cliente: e.target.value})}/></td>
                <td>
                <label className='flex flex-col' htmlFor="Vendedor">
                    <select name='Vendedor' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="text" required defaultValue={0} value={infoNuevoVenta.Vendedor} onChange={(e)=> setInfoNuevoVenta({...infoNuevoVenta, Vendedor: e.target.value})}>
                        <option disabled value ={0}>Seleccione un vendedor</option>
                        {vendedores.map((el)=>{
                            return <option>{`${el.Nombre}${el.Apellido}`}</option>
                        })}
                    </select>
                </label>
                </td>
                <td><input name='Producto' type="text"   className='bg-white border border-gray-600 p-2 rounded-lg m-2' value={infoNuevoVenta.Producto} onChange={(e)=> setInfoNuevoVenta({...infoNuevoVenta, Producto: e.target.value})}/></td>
                <td><input name='Valor' type="text"   className='bg-white border border-gray-600 p-2 rounded-lg m-2' value={infoNuevoVenta.Valor} onChange={(e)=> setInfoNuevoVenta({...infoNuevoVenta, Valor: e.target.value})}/></td>
                <td>
                    <div className='flex w-full justify-around'>
                        <i onClick={()=> actualizarVenta()} className="fas fa-check text-green-500  hover:text-green-600"/>
                        <i className="far fa-trash-alt text-gray-500 hover:text-red-500"></i> 
                    </div>
                </td>
            </>                    
           ):(
            <>
                <td>{Ventas.IDventa}</td>
                <td>{Ventas.IDCliente}</td>
                <td>{Ventas.Cliente}</td>
                <td>
                    {Ventas.Vendedor}
                </td>
                <td>{Ventas.Producto}</td>
                <td>{Ventas.Valor}</td>
                <td>
                    <div className='flex w-full justify-around'>
                        <i onClick={()=>setEdit(!edit)} className="fas fa-pencil-alt text-gray-500 hover:text-yellow-500"/> 
                        <i onClick = {()=>eliminarVenta()} className="far fa-trash-alt text-gray-500 hover:text-red-500"></i> 
                    </div>
                </td>
            </>
           )}
        
        </tr>
     
    )
}

const FormularioCreacionVentas = ({setMostrarTabla}) =>{

    const[vendedores,setVendedores] = useState([])

    useEffect(() => {
        const fetchVendedores = async () => {

            await obtenerUsuarios(
                (response)=>{
                    setVendedores(response.data)
                    console.log('respuesta de usuarios', response)
                },
                (error)=>{console.error(error)}
                );
        }
        fetchVendedores();
    }, [])

    const form = useRef(null);
    const submitForm = async (e)=>{
        e.preventDefault();
    
        const fd = new FormData(form.current);

        const nuevaVenta ={};
        fd.forEach((value,key) => {
            nuevaVenta[key] =value;
        });
        await crearVenta({
            
            IDventa: nuevaVenta.IDventa,
            IDCliente: nuevaVenta.IDCliente,
            Cliente: nuevaVenta.Cliente,
            Vendedor: nuevaVenta.Vendedor,
            Producto: nuevaVenta.Producto,
            Valor: nuevaVenta.Valor
        },
        
        (response)=>{
            console.log(response.data);
            toast.success('Venta creada con éxito')
        },
        
        (error)=>{
            console.error('Error creando la Venta')
        }
          )
        
      setMostrarTabla(true)  
    }

    return(
        <div className='flex flex-col items-center justify-between p-0.1'>
            <BarraTitulo>
                Registro nueva venta
            </BarraTitulo>
            <form ref={form} onSubmit={submitForm} className='grid grid-rows-1 w-96 border border-gray-600 bg-blue-200 m-2'>
                <label className='text-center font-extrabold'>Registre su venta aquí..</label>
                <label className='flex flex-col' htmlFor=" IDventa">
                    IDVenta
                    <input name='IDventa' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type='number' min={1001} max={9999} placeholder="1001" 
                     required/>
                </label>
                <label className='flex flex-col' htmlFor="IDCliente">
                    IDCliente
                    <input name='IDCliente' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="number" placeholder="1049875123" 
                     required/>
                </label>
                <label className='flex flex-col' htmlFor="Cliente">
                    Cliente
                    <input name='Cliente' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="text" placeholder="Juan Gonzalez"
                     required/>
                </label>
                <label className='flex flex-col' htmlFor="Vendedor">
                    Vendedor
                    <select name='Vendedor' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="text" required defaultValue={0}>
                        <option disabled value ={0}>Seleccione un vendedor</option>
                        {vendedores.map((el)=>{
                            return <option>{`${el.Nombre}${el.Apellido}`}</option>
                        })}
                    </select>
                </label>
                <label className='flex flex-col' htmlFor="Producto">
                    Producto
                    <input name='Producto' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="text" placeholder="Ipad 2"
                     required/>
                </label>
                <label className='flex flex-col' htmlFor="Valor">
                    Valor
                    <input name='Valor' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="number" placeholder="1000000" 
                     required/>
                </label>
                
                <button type='submit' className='bg-indigo-600 border border-gray-600 p-4 rounded-full m-2 text-white text-3xl font-extrabold hover:translate-x-52'>Guardar venta</button>
            </form>
        </div>
    )
}

export default Ventas
