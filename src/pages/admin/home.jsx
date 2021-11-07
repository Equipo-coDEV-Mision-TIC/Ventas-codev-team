import React from 'react'
import BarraTitulo from '../../components/barraTitulo'
import logo from '../../media/logo3.png'

const home = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
                <BarraTitulo>
                    Bienvenido...
                </BarraTitulo>
                <div>
                    <img src={logo} alt="logo" width = "500" height = "500"/>
                </div>

                <div className='text-4xl'>
                    Gestión de ventas coDev team
                </div >
        </div>  
    )
}

export default home
