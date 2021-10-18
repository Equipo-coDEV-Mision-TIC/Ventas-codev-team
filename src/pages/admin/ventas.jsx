

//const ventas = () => {
   // return (
      //  <div>
           // <BarraTitulo>
           //     VENTAS
           // </BarraTitulo>

           // <div>
           //     HOLA,ESTA ES LA PAGINA DE VENTAS
           // </div>
        //</div> 
 //   )
//}

//export default ventas

import React, {useEffect, useState, useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import BarraTitulo from '../../components/barraTitulo'
//import 'styles/ventas.css';
import 'react-toastify/dist/ReactToastify.css';



const VentasBackend = [
    {
        IDventa: "2524",
        Cliente: "cHRISTIAN PEREZ",
        ClienteId: "1090452106",
        Precio: "2500",
        Fecha: "04/06/1992"
        
    },
    {
        IDVenta: "2625",
        Cliente: "ANDRES ARCINIEGAS",
        ClienteId: "1090452106",
        Precio: "5000",
        Fecha: "20/10/2021"
    }
]

const Ventas = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState("Registrar nueva venta");
    const [Ventas, setVentas] = useState([]);
    

    useEffect(()=>{
        setVentas(VentasBackend)
    },[]);
    
    

    useEffect(()=>{
        if (mostrarTabla){
            setTextoBoton('Registrar nueva venta')
        }else{
            setTextoBoton('Ver listado de ventas')
        }
    },[mostrarTabla]);
    return (
        <div className='flex w-full'>
            <BarraTitulo>
                    Informacion ventas
            </BarraTitulo>
            <div className='flex flex-col w-full items-center'>
                <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className='bg-indigo-400 text-white rounded-full font-extrabold w-52 p-2 m-3'>{textoBoton}</button>
                {mostrarTabla ? <TablaVentas listaVentas = {Ventas}/>:<FormularioCreacionVentas setMostrarTabla={setMostrarTabla} listaVentas={Ventas} setAgregarVenta ={setVentas}/>}
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                />
            </div>           
        </div> 
    )
}

const TablaVentas = ({listaVentas}) =>{
    return(
        <table className='tabla w-3/4'>
            <thead className='bg-blue-200'>
                <tr>
                    <th>ID VENTA</th>
                    <th>CLIENTE</th>
                    <th>CLIENTE ID</th>
                    <th>PRECIO</th>
                    <th>FECHA</th>
                </tr>
            </thead>
            <tbody className='bg-white'>
                {listaVentas.map((ventas)=>{
                    return(
                        <tr>
                            <th>{ventas.IDventa}</th>
                            <th>{ventas.Cliente}</th>
                            <th>{ventas.ClienteId}</th>
                            <th>{ventas.Precio}</th>
                            <th>{ventas.Fecha}</th>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
        
    )
}

const FormularioCreacionVentas = ({setMostrarTabla,listaVentas,setAgregarVenta}) =>{
    const form = useRef(null);
    const submitForm =(e)=>{
        e.preventDefault();
    
        const fd = new FormData(form.current);

        const nuevaVenta ={};
        fd.forEach((value,key) => {
            nuevaVenta[key] =value;
        });
        setMostrarTabla(true);
        toast.success("Venta registrada correctamente");
        setAgregarVenta([...listaVentas,nuevaVenta])
    }

    return(
        <div className='flex flex-col items-center justify-center h-full w-full'>
            <BarraTitulo>
                Registrar nueva venta
            </BarraTitulo>
            <form ref={form} onSubmit={submitForm} className='grid grid-rows-1 w-96 border border-gray-600 bg-blue-200 m-2'>
                <label className='text-center font-extrabold'>Registre su venta aquí..</label>
                <label className='flex flex-col' htmlFor=" IDventa">
                    ID Venta
                    <input name='IDventa' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type='number' min={1001} max={9999} placeholder="1001" 
                     required/>
                </label>
                <label className='flex flex-col' htmlFor="Cliente">
                    Cliente
                    <input name='Cliente' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type='text'  placeholder="Antonio Garzon" 
                    required/>
                </label>
                <label className='flex flex-col' htmlFor="ClienteId">
                    Cliente Id
                    <input name='ClienteId' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="text" placeholder="1090488521"
                     required/>
                </label>
                <label className='flex flex-col' htmlFor="Precio">
                    Precio
                    <input name='Precio' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="number" placeholder="25000" 
                     required/>
                </label>
                <label className='flex flex-col' htmlFor="Fecha">
                    Fecha
                    <input name='Fecha' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="text" placeholder="DD/MM/AAA" 
                     required/>
                </label>
                
                <button type='submit' className='bg-indigo-600 border border-gray-600 p-4 rounded-full m-2 text-white text-3xl font-extrabold hover:translate-x-52'>Crear Venta</button>
            </form>
        </div>
    )
}

export default Ventas
