import React, {useEffect, useState} from 'react'
import BarraTitulo from '../../components/barraTitulo'
import FormProductos from '../../components/FormularioCreacionVehiculos'


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
    return(
        <FormProductos/>
    )
}

export default Productos
