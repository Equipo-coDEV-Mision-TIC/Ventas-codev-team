import React from 'react';
import Sidebar from '../components/sidebar'
//import Cuadrotransparente from '../components/cuadrotransparente'

const LayoutAdmin = ({children}) => {
    return (
        <div className='flex w-screen h-screen'>
            <Sidebar/>
            <main className='flex w-screen bg-green-50'>
                {children}
            </main>
        </div>
    );
};

export default LayoutAdmin;

