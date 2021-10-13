import React from 'react'
import BarraTitulo from './barraTitulo'

const FormularioCreacionVehiculos = () => {
    return (
        <div className='flex flex-col items-center justify-center h-full w-full'>
            <BarraTitulo>
                Registro nuevo producto
            </BarraTitulo>
            <form className='grid grid-rows-1 w-96 border border-gray-600 bg-blue-200 m-2'>
                <label className='text-center font-extrabold'>Registre su producto aquí..</label>
                <label className='flex flex-col' htmlFor=" ID Producto">
                    ID Producto
                    <input name='ID Producto' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type='number' min={1001} max={9999} placeholder="0001"/>
                </label>
                <label className='flex flex-col' htmlFor="Categoria">
                    Categoria
                    <input name='Categoria' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="text" placeholder="Anillado 100 hojas"/>
                </label>
                <label className='flex flex-col' htmlFor="Descripción">
                    Descripción
                    <input name='Descripción' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="text" placeholder="Cuaderno"/>
                </label>
                <label className='flex flex-col' htmlFor="Valor Unitario">
                    Valor Unitario
                    <input name='Valor Unitario Categoria' className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="number" placeholder="5500" />
                </label>
                
                <button className='bg-indigo-600 border border-gray-600 p-4 rounded-full m-2 text-white text-3xl font-extrabold hover:translate-x-52'>Guardar producto</button>
            </form>
        </div>
    )
}

export default FormularioCreacionVehiculos
