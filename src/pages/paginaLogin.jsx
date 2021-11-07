import React from 'react'
import logo from '../media/logo3.png'
import fondo from '../media/fondo.jpeg'
import LayoutLogin from '../layouts/LayoutLogin'
import { useAuth0 } from "@auth0/auth0-react";


const PaginaLogin = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <LayoutLogin> 
            
            <div className='flex w-full h-1/4'>
                <img src= {fondo} alt="imagen fondo"/>             
            </div>
            

            <div className = 'rectanguloLogin flex flexcol items-center justify-center' >
                    <img src= {logo} alt="imagen fondo" className='w-96 h-96'/>
            
                        <button onClick={() => loginWithRedirect()}
                                className='h-10 py-2 px-4 m-8 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                            >
                                <div className='flex items-center justify-start'>
                                <span className='mx-4'>LOGIN</span>
                                </div>
                        </button>
        
            </div>
            
            
          </LayoutLogin>
    )
}

export default PaginaLogin





