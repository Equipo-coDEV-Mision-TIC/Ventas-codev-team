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
        <div>
            <BarraTitulo>
                    Informacion productos
                </BarraTitulo>
                
                <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className='fixed bg-indigo-400 text-white w-64 h-12 rounded-3xl font-extrabold right-96 top-72'>{textoBoton}</button>
                {mostrarTabla ? <TablaProductos listaProductos = {productos}/>:<FormularioCreacionProductos/>}
                
                
        </div> 
    )
}

const TablaProductos = ({listaProductos}) =>{
    return(
        <table className='tabla'>
            <thead>
                <tr>
                    <th>ID PRODUCTOS</th>
                    <th>DESCRIPCION</th>
                    <th>CATEGORIA</th>
                    <th>VALOR UNITARIO</th>
                </tr>
            </thead>
            <tbody>
                {listaProductos.map((productos)=>{
                    return(
                        <tr>
                            <th>{productos.IDproducto}</th>
                            <th>{productos.Descripción}</th>
                            <th>{productos.Categoria}</th>
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
