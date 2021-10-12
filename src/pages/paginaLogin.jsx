import React from 'react'
import logo from '../media/logo3.png'
import fondo from '../media/fondo.jpeg'
import LayoutLogin from '../layouts/LayoutLogin'

const paginaLogin = () => {
    return (
        <LayoutLogin> 
            <div className = 'seccionImagenLogin'>
                <img src= {fondo} alt="imagen fondo" width = '1922px' height = '915px'/>             
            </div>
            <div className = 'rectanguloLogin'>
                <img src= {logo} alt="imagen fondo" className ='logo'/>
                
            </div>
            
            
          </LayoutLogin>
    )
}

export default paginaLogin





