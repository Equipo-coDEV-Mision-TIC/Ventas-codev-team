import React, {useEffect, useState} from 'react'
import BarraTitulo from '../../components/barraTitulo'



const productosBackend = [
    {
        IDproducto: "DATO1",
        Descripción: "DATO2",
        Categoria: "DATO3",
        ValorUnitario: "DATO4"
    },
    {
        IDproducto: "DATO1",
        Descripción: "DATO2",
        Categoria: "DATO3",
        ValorUnitario: "DATO4"
    },
    {
        IDproducto: "DATO1",
        Descripción: "DATO2",
        Categoria: "DATO3",
        ValorUnitario: "DATO4"
    },
    {
        IDproducto: "DATO1",
        Descripción: "DATO2",
        Categoria: "DATO3",
        ValorUnitario: "DATO4"
    },
    {
        IDproducto: "DATO1",
        Descripción: "DATO2",
        Categoria: "DATO3",
        ValorUnitario: "DATO4"
    },
    {
        IDproducto: "DATO1",
        Descripción: "DATO2",
        Categoria: "DATO3",
        ValorUnitario: "DATO4"
    },
    {
        IDproducto: "DATO1",
        Descripción: "DATO2",
        Categoria: "DATO3",
        ValorUnitario: "DATO4"
    }
]

const Productos = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState("Registrar nuevo producto");
    const [productos, setproductos] = useState([]);
    

    useEffect(()=>{
        setproductos(productosBackend)
    },[]);
    
    

    useEffect(()=>{
        if (mostrarTabla){
            setTextoBoton('Registrar nuevo producto')
        }else{
            setTextoBoton('Ver listado de productos')
        }
    },[mostrarTabla]);
    return (
        <div className='flex w-full'>
            <BarraTitulo>
                    Informacion productos
            </BarraTitulo>
            <div className='flex flex-col w-full items-center'>
                <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className='bg-indigo-400 text-white rounded-full font-extrabold w-52 p-2 m-3'>{textoBoton}</button>
                {mostrarTabla ? <TablaProductos listaProductos = {productos}/>:<FormularioCreacionProductos/>}     
            </div>   
                     
        </div> 
    )
}

const TablaProductos = ({listaProductos}) =>{
    return(
        <table className='tabla'>
            <thead className='bg-blue-200'>
                <tr>
                    <th>ID PRODUCTOS</th>
                    <th>CATEGORIA</th>
                    <th>DESCRIPCION</th>
                    <th>VALOR UNITARIO</th>
                </tr>
            </thead>
            <tbody className='bg-white'>
                {listaProductos.map((productos)=>{
                    return(
                        <tr>
                            <th>{productos.IDproducto}</th>
                            <th>{productos.Categoria}</th>
                            <th>{productos.Descripción}</th>
                            <th>{productos.ValorUnitario}</th>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
        
    )
}

const FormularioCreacionProductos = () =>{
    const [idProductos, setIDproductos] = useState();
    const [categoria, setCategoria] = useState();
    const [descripcion, setDescripcion] = useState();
    const [valorUnitario, setValorUnitario] = useState();

    const enviarDatosAlBackend = ()=>{
        
    }

    return(
        <div className='flex flex-col items-center justify-center h-full w-full'>
            <BarraTitulo>
                Registro nuevo producto
            </BarraTitulo>
            <form className='grid grid-rows-1 w-96 border border-gray-600 bg-blue-200 m-2'>
                <label className='text-center font-extrabold'>Registre su producto aquí..</label>
                <label className='flex flex-col' htmlFor=" ID Producto">
                    ID Producto
                    <input name='ID Producto' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type='number' min={1001} max={9999} placeholder="0001" 
                    value={idProductos} onChange={(e)=>{setIDproductos(e.target.value)}}/>
                </label>
                <label className='flex flex-col' htmlFor="Categoria">
                    Categoria
                    <input name='Categoria' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="text" placeholder="Anillado 100 hojas" 
                    value={categoria} onChange={(e)=>{setCategoria(e.target.value)}}/>
                </label>
                <label className='flex flex-col' htmlFor="Descripción">
                    Descripción
                    <input name='Descripción' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="text" placeholder="Cuaderno"
                    value={descripcion} onChange={(e)=>{setDescripcion(e.target.value)}}/>
                </label>
                <label className='flex flex-col' htmlFor="Valor Unitario">
                    Valor Unitario
                    <input name='Valor Unitario Categoria' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="number" placeholder="5500" 
                    value={valorUnitario} onChange={(e)=>{setValorUnitario(e.target.value)}}/>
                </label>
                
                <button className='bg-indigo-600 border border-gray-600 p-4 rounded-full m-2 text-white text-3xl font-extrabold hover:translate-x-52'
                onClick={()=>{enviarDatosAlBackend()}}>Guardar producto</button>
            </form>
        </div>
    )
}

export default Productos
