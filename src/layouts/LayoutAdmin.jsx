import React from 'react';
import Sidebar from '../components/sidebar'
//import Cuadrotransparente from '../components/cuadrotransparente'

const LayoutAdmin = ({children}) => {
    return (
        <div className='flex w-screen h-screen'>
            <div className ='flex flex-nowrap w-full h-full'>
                <Sidebar/>
                <main className='flex w-full bg-green-50 overflow-y-scroll items-center justify-center'>
                    {children}
                </main>
            </div>
            
        </div>
    );
};

export default LayoutAdmin;

