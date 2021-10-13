import React from 'react'
import BarraTitulo from './barraTitulo'

const FormularioCreacionVehiculos = () => {
    return (
        <div className='flex flex-col items-center justify-center h-full w-full'>
            <BarraTitulo>
                Registro nuevo producto
            </BarraTitulo>
            <form className='grid grid-rows-1 w-96 border border-gray-600 bg-blue-200'>
                <label className='text-left font-extrabold'>Registre su producto aquí..</label>
                <input className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="text" placeholder="ID producto"/>
                <input className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="text" placeholder="Descripción"/>
                <input className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="text" placeholder="Categoría"/>
                <input className='bg-white border border-gray-600 p-2 rounded-lg m-2' type="number" placeholder="Valor unitario" />
                <button className='bg-indigo-600 border border-gray-600 p-4 rounded-full m-2 text-white text-3xl font-extrabold hover:translate-x-52'>Guardar producto</button>
            </form>
        </div>
    )
}

export default FormularioCreacionVehiculos
