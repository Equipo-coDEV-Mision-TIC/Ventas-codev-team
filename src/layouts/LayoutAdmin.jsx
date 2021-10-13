import React from 'react'
import Sidebar from '../components/sidebar'
//import Cuadrotransparente from '../components/cuadrotransparente'

const LayoutAdmin = ({children}) => {
    return (
        <div className='flex w-screen h-screen'>
            <div className ='flex flex-nowrap w-full h-full'>
                <Sidebar/>
                <main className='flex w-screen bg-green-50'>
                    {children}
                </main>
            </div>
            
        </div>
    )
}

export default LayoutAdmin

