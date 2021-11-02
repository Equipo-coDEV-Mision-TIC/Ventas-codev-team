import React, {useEffect, useState, useRef} from 'react'
import BarraTitulo from '../../components/barraTitulo'
import { ToastContainer, toast } from 'react-toastify';
//import { Dialog} from '@material-ui/core@';
import 'react-toastify/dist/ReactToastify.css';
import {nanoid} from 'nanoid';
import axios from "axios";


const Productos = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState("Registrar nuevo producto");
    const [productos, setProductos] = useState([]);
    const[ejecutarConsulta,setEjecutarConsulta] = useState(false)

    useEffect(() => {
        const obtenerProductos= async()=>{
            const options = {method: 'GET', url: 'http://localhost:5000/productos'};

            await axios
            .request(options)
            .then(function (response) {
                setProductos(response.data);
                console.log(response.data)
            }).catch(function (error) {
                console.error(error);
            });
        }
            if(ejecutarConsulta){
            obtenerProductos()  
            setEjecutarConsulta(false)
            }   
    }, [ejecutarConsulta])


    useEffect(() => {  
        if (mostrarTabla){
        setEjecutarConsulta(true) 
        } 
    }, [mostrarTabla])    
    

    useEffect(()=>{
        if (mostrarTabla){
            setTextoBoton('Registrar nuevo producto')
        }else{
            setTextoBoton('Ver listado de productos')
        }
    },[mostrarTabla]);
    
    return (
        <div className='flex w-screen'>
            <BarraTitulo>
                    Informacion productos
            </BarraTitulo>
            <div className='flex flex-col w-full items-center justify-center'>
                <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className='bg-indigo-400 text-white rounded-full font-extrabold w-52 p-2 m-3'>{textoBoton}</button>
                
                {mostrarTabla ? <TablaProductos listaProductos = {productos} setEjecutarConsulta = {setEjecutarConsulta}/>:<FormularioCreacionProductos setMostrarTabla={setMostrarTabla}/>}
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                />
            </div>           
        </div> 
    )
}

const TablaProductos = ({listaProductos,setEjecutarConsulta,setAgregarProducto}) =>{
    const[busqueda,setBusqueda]=useState('')
    const[productosFiltrados,setProductosFiltrados]=useState(listaProductos)

    useEffect(() => {
        setProductosFiltrados(
            listaProductos.filter((elemento)=>{
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase())
            })
        )
        
    },[busqueda,listaProductos])

    const form = useRef(null);
    const submitEdit =(e)=>{
        e.preventDefault();
    
        const fd = new FormData(form.current);
 
        const nuevoProducto ={};
        fd.forEach((value,key) => {
            nuevoProducto[key] =value;
        });
        
        setAgregarProducto([...listaProductos,nuevoProducto])
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
                        <th className='w-64'>ID PRODUCTOS</th>
                        <th className='w-64'>CATEGORIA</th>
                        <th>DESCRIPCION</th>
                        <th>PRECIO</th>
                        <th className='w-32'>ACCIONES</th>
                    </tr>
                </thead>
                <tbody className='bg-white'>
                    {productosFiltrados.map((productos)=>{
                        return <FilaProductos key={nanoid()} productos = {productos} setEjecutarConsulta = {setEjecutarConsulta}/>
                    })}
                    
                </tbody>
            </table>
        </form>
        
        
    )
}

const FilaProductos =({productos, setEjecutarConsulta})=>{
    const [edit,setEdit] = useState(false)
    const [infoNuevoArticulo, setInfoNuevoArticulo] = useState({

        IDproducto: productos.IDproducto,
        Categoria: productos.Categoria,
        Descripcion: productos.Descripcion,
        Precio: productos.Precio
    })

    const actualizarArticulo = async () =>{
        const options = {
            method: 'PATCH',
            url: `http://localhost:5000/Productos/${productos._id}/`,
            headers: {'Content-Type': 'application/json'},
            data: {...infoNuevoArticulo},
            };

            await axios
            .request(options)
            .then(function (response) {
            console.log(response.data);
            toast.success('Articulo modificado con éxito')
            setEjecutarConsulta(true)
            setEdit(false)
            }).catch(function (error) {
            toast.error('Error modificando articulo')
            console.error(error);
            });
        //console.log(infoNuevoArticulo)
        //setEdit(!edit)
    }

    const eliminarArticulo = async () =>{
    const options = {
        method: 'DELETE',
        url: `http://localhost:5000/Productos/${productos._id}/`,
        headers: {'Content-Type': 'application/json'},
        //data: {id: productos._id}
        };

        await axios
        .request(options).then(function (response) {
        console.log(response.data);
        toast.success('Articulo eliminado con éxito')
        setEjecutarConsulta(true)
        }).catch(function (error) {
        console.error(error);
        toast.error('Error eliminando artículo')
    });
    }
    return(
    
        <tr>
            {edit ?(
            <>
                <td>{infoNuevoArticulo.IDproducto}</td>
                <td><input name='Categoria' type="text"  className='bg-white border border-gray-600 p-2 rounded-lg m-2' value={infoNuevoArticulo.Categoria} onChange={(e)=> setInfoNuevoArticulo({...infoNuevoArticulo, Categoria: e.target.value})}/></td>
                <td><input name='Descripcion' type="text"   className='bg-white border border-gray-600 p-2 rounded-lg m-2' value={infoNuevoArticulo.Descripcion} onChange={(e)=> setInfoNuevoArticulo({...infoNuevoArticulo, Descripcion: e.target.value})}/></td>
                <td><input name='Precio' type="text"   className='bg-white border border-gray-600 p-2 rounded-lg m-2' value={infoNuevoArticulo.Precio} onChange={(e)=> setInfoNuevoArticulo({...infoNuevoArticulo, Precio: e.target.value})}/></td>
                <td>
                    <div className='flex w-full justify-around'>
                        <i onClick={()=> actualizarArticulo()} className="fas fa-check text-green-500  hover:text-green-600"/>
                        <i className="far fa-trash-alt text-gray-500 hover:text-red-500"></i> 
                    </div>
                </td>
            </>                    
           ):(
            <>
                <td>{productos.IDproducto}</td>
                <td>
                    {productos.Categoria}
                </td>
                <td>{productos.Descripcion}</td>
                <td>{productos.Precio}</td>
                <td>
                    <div className='flex w-full justify-around'>
                        <i onClick={()=>setEdit(!edit)} className="fas fa-pencil-alt text-gray-500 hover:text-yellow-500"/> 
                        <i onClick = {()=>eliminarArticulo()} className="far fa-trash-alt text-gray-500 hover:text-red-500"></i> 
                    </div>
                </td>
            </>
           )}
        
        </tr>
     
    )
}

const FormularioCreacionProductos = ({setMostrarTabla}) =>{
    const form = useRef(null);
    const submitForm = async (e)=>{
        e.preventDefault();
    
        const fd = new FormData(form.current);

        const nuevoProducto ={};
        fd.forEach((value,key) => {
            nuevoProducto[key] =value;
        });

        const options = {
            method: 'POST',
            url: 'http://localhost:5000/Productos',
            headers: {'Content-Type': 'application/json'},
            data: {
              IDproducto: nuevoProducto.IDproducto,
              Categoria: nuevoProducto.Categoria,
              Descripcion: nuevoProducto.Descripcion,
              Precio: nuevoProducto.Precio
            }
          };

        await axios
        .request(options).then(function (response) {
            console.log(response.data);
            toast.success("Producto registrado correctamente");
          }).catch(function (error) {
            console.error(error);
            toast.error("No se pudo agregar el producto");
        });
        setMostrarTabla(true);
        
        
    }

    return(
        <div className='flex flex-col items-center justify-center h-full w-full'>
            <BarraTitulo>
                Registro nuevo producto
            </BarraTitulo>
            <form ref={form} onSubmit={submitForm} className='grid grid-rows-1 w-96 border border-gray-600 bg-blue-200 m-2'>
                <label className='text-center font-extrabold'>Registre su producto aquí..</label>
                <label className='flex flex-col' htmlFor=" IDproducto">
                    IDProducto
                    <input name='IDproducto' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type='number' min={1001} max={9999} placeholder="1001" 
                     required/>
                </label>
                <label className='flex flex-col' htmlFor="Categoria">
                    Categoria
                    <select name='Categoria' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="text" required defaultValue={0}>
                        <option disabled value ={0}>Seleccione una categoria</option>
                        <option>Accesorios Celular</option>
                        <option>Celulares</option>
                        <option>Computadores</option>
                        <option>Tablets</option>
                        <option>Televisores</option>
                    </select>
                </label>
                <label className='flex flex-col' htmlFor="Descripcion">
                    Descripcion
                    <input name='Descripcion' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="text" placeholder="Silla Gerente Ergonómica"
                     required/>
                </label>
                <label className='flex flex-col' htmlFor="Precio">
                    Precio
                    <input name='Precio' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="number" placeholder="1000000" 
                     required/>
                </label>
                
                <button type='submit' className='bg-indigo-600 border border-gray-600 p-4 rounded-full m-2 text-white text-3xl font-extrabold hover:translate-x-52'>Guardar producto</button>
            </form>
        </div>
    )
}

export default Productos
