import React from 'react'
import BarraTitulo from '../../components/barraTitulo'

const home = () => {
    return (
        <div>
                <BarraTitulo>
                    Home
                </BarraTitulo>

                <div className='w-60 h-60 bg-blue-300 text-white rounded-md'>
                    Bienvenido...Esta es la página de gestión de ventas
                    navega por cada uno de los botones de la barra lateral izquierda para acceder a cada uno de los módulos.
                </div>
        </div>  
    )
}

export default home
