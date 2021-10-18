import React, {useEffect, useState, useRef} from 'react'
import BarraTitulo from '../../components/barraTitulo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {nanoid} from 'nanoid';

const productosBackend = [
    {
        IDproducto: "DATO1",
        Descripción: "DATO2",
        Categoria: "DATO3",
        Precio: "DATO4",
        Acciones: 
                 <div className='flex w-full justify-around'>
                    <i class="fas fa-pencil-alt " >
                    </i> <i class="far fa-trash-alt"></i> 
                  </div>
    }]



const Productos = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState("Registrar nuevo producto");
    const [productos, setProductos] = useState([]);
    

    useEffect(()=>{
        setProductos(productosBackend)
    },[]);
    
    

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
                {mostrarTabla ? <TablaProductos listaProductos = {productos}/>:<FormularioCreacionProductos setMostrarTabla={setMostrarTabla} listaProductos={productos} setAgregarProducto ={setProductos}/>}
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                />
            </div>           
        </div> 
    )
}

const TablaProductos = ({listaProductos,setMostrarTabla,setAgregarProducto}) =>{
    const form = useRef(null);
    const submitEdit =(e)=>{
        e.preventDefault();
    
        const fd = new FormData(form.current);
        

        const nuevoProducto ={};
        fd.forEach((value,key) => {
            nuevoProducto[key] =value;
        });
        setMostrarTabla(true);
        toast.success("Producto Actualizado correctamente");
        setAgregarProducto([...listaProductos,nuevoProducto])
    }

    return(
        <form ref={form} onSubmit={submitEdit} className='flex items-center justify-center w-full'>
            <table className='tabla w-3/4'>
                <thead className='bg-blue-200'>
                    <tr>
                        <th className='w-64'>ID PRODUCTOS</th>
                        <th className='w-40'>CATEGORIA</th>
                        <th>DESCRIPCION</th>
                        <th>PRECIO</th>
                        <th className='w-32'>ACCIONES</th>
                    </tr>
                </thead>
                <tbody className='bg-white'>
                    {listaProductos.map((productos)=>{
                        return <FilaProductos key={nanoid()} productos = {productos}/>
                    })}
                    
                </tbody>
            </table>
        </form>
        
        
    )
}
const FilaProductos =({productos})=>{
    const [edit,setEdit] = useState(false)
    return(
    
        <tr>
            {edit ?(
            <>
                <td>{productos.IDproducto}</td>
                <td><input name='Categoria' type="text" defaultValue ={productos.Categoria} className='bg-white border border-gray-600 p-2 rounded-lg m-2'/></td>
                <td><input name='Descripción' type="text" defaultValue ={productos.Descripción} className='bg-white border border-gray-600 p-2 rounded-lg m-2'/></td>
                <td><input name='Precio' type="text" defaultValue ={productos.Precio} className='bg-white border border-gray-600 p-2 rounded-lg m-2'/></td>
                <td>
                    <div className='flex w-full justify-around'>
                        <button type='submit'>
                            <i onClick={()=>setEdit(!edit)} className="fas fa-check text-green-500  hover:text-green-600"/> 
                        </button>
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
                <td>{productos.Descripción}</td>
                <td>{productos.Precio}</td>
                <td>
                    <div className='flex w-full justify-around'>
                        <i onClick={()=>setEdit(!edit)} className="fas fa-pencil-alt text-gray-500 hover:text-yellow-500"/> 
                        <i className="far fa-trash-alt text-gray-500 hover:text-red-500"></i> 
                    </div>
                </td>
            </>
           )}
        
        </tr>
     
    )
}

const FormularioCreacionProductos = ({setMostrarTabla,listaProductos,setAgregarProducto}) =>{
    const form = useRef(null);
    const submitForm =(e)=>{
        e.preventDefault();
    
        const fd = new FormData(form.current);

        const nuevoProducto ={};
        fd.forEach((value,key) => {
            nuevoProducto[key] =value;
        });
        setMostrarTabla(true);
        toast.success("Producto registrado correctamente");
        setAgregarProducto([...listaProductos,nuevoProducto])
    }

    return(
        <div className='flex flex-col items-center justify-center h-full w-full'>
            <BarraTitulo>
                Registro nuevo producto
            </BarraTitulo>
            <form ref={form} onSubmit={submitForm} className='grid grid-rows-1 w-96 border border-gray-600 bg-blue-200 m-2'>
                <label className='text-center font-extrabold'>Registre su producto aquí..</label>
                <label className='flex flex-col' htmlFor=" IDproducto">
                    ID Producto
                    <input name='IDproducto' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type='number' min={1001} max={9999} placeholder="1001" 
                     required/>
                </label>
                <label className='flex flex-col' htmlFor="Categoria">
                    Categoria
                    <select name='Categoria' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="text" required defaultValue={0}>
                        <option disabled value ={0}>Seleccione una categoria</option>
                        <option>Comedores</option>
                        <option>Escritorios</option>
                        <option>Juegos de Sala</option>
                        <option>Sillas de escritorio</option>
                        <option>Sofás</option>
                    </select>
                </label>
                <label className='flex flex-col' htmlFor="Descripción">
                    Descripción
                    <input name='Descripción' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="text" placeholder="Silla Gerente Ergonómica"
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
