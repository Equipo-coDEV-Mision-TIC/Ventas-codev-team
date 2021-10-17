import React from 'react'
import logo from '../media/logo3.png'
import {Link} from 'react-router-dom'
import Fondo from '../media/fondoSideBar4.png'

const sidebar = () => {
    return (
            <nav className='w-80'>
                <img className='w-full h-full' src={Fondo} alt="Fondo"/>
                
                <ul className = "styleUl1">
                
                        <li className='logoSB'>
                            <img src={logo} alt="logo" width = "150" height = "150"/>
                        </li>

                    <Link to = '/Home'>
                        <li>
                            <button className = "buttonList">Home</button>
                        </li>
                    </Link>
                    
                    <Link to = '/Home/Productos'>
                        <li>
                            <button className = "buttonList">Productos</button>
                        </li>
                    </Link>
                    
                    <Link to = '/Home/Ventas'>
                        <li>
                            <button className = "buttonList">Ventas</button>
                        </li>
                    </Link>
                    
                    <Link to = '/Home/Usuarios'>
                        <li>
                            <button className = "buttonList">Usuarios</button>
                        </li>
                    </Link>
                </ul>

                <ul className = "styleUl2">
                    <li>
                        <button className = "buttonList">Settings</button>
                    </li>
                    
                    <Link to = '/'>
                        <li>
                            <button className = "buttonList">Salir</button>
                        </li>
                    </Link>
                </ul>


                

                
                
            </nav>
    )
}

export default sidebar
