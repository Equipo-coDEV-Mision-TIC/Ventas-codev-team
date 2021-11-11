import React from 'react'
import Sidebar from '../components/sidebar'
import PrivateRoute from '../components/PrivateRoute'
//import Cuadrotransparente from '../components/cuadrotransparente'

const LayoutAdmin = ({children}) => {
    return (
        <PrivateRoute>

        <div className='flex w-screen h-screen'>
            <div className ='flex flex-nowrap w-full h-full'>
                <Sidebar/>
                <main className='flex w-full bg-green-50 overflow-y-scroll  items-center justify-around'>
                    {children}
                </main>
            </div>
            
        </div>
        </PrivateRoute>
    )
}

export default LayoutAdmin

