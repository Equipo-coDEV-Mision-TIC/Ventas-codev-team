import React from 'react'
import logo from '../media/logo3.png'
import fondo from '../media/fondo.jpeg'
import LayoutLogin from '../layouts/LayoutLogin'
import Google from '../media/google_logo.png';

const paginaLogin = () => {
    return (
        <LayoutLogin> 
            
                <img src= {fondo} alt="imagen fondo" width = '1922px' height = '915px'/>             
            

            <div className = 'rectanguloLogin flex flexcol items-center justify-center' >
                    <img src= {logo} alt="imagen fondo" className='w-96 h-96'/>
                
                    <button type='submit'
                            className='h-10 py-2 px-4 m-8 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                        >
                            <div className='flex items-center justify-start'>
                            <img src={Google} alt='Logo Google' className='h-6 w-6' />
                            <span className='mx-4'>Continúa con Google</span>
                            </div>
                    </button>
            </div>
            
            
          </LayoutLogin>
    )
}

export default paginaLogin





