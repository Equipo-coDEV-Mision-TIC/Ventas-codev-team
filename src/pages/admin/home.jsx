import React from 'react'
import LayoutAdmin from '../../layouts/LayoutAdmin'
import BarraTitulo from '../../components/barraTitulo'

const home = () => {
    return (
        <LayoutAdmin>
                <BarraTitulo>
                    Home
                </BarraTitulo>

                <div>
                    HOLA,ESTA ES LA PAGINA DE HOME
                </div>
        </LayoutAdmin>  
    )
}

export default home
