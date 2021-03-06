import React, {useEffect, useState} from 'react'
import BarraTitulo from '../../components/barraTitulo'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const usuariosBackend = [
    {
        IDUsuario: "1049616123",
        NombreUsuario: "Yeison Alberto Buitrago Suescun",
        Rol: "",
        Estado: "Activo",
         
    },
    {
        IDUsuario: "7234767",
        NombreUsuario: "Pepito Perez",
        Rol: "",
        Estado: "Inactivo",
        
    },
    {
        IDUsuario: "74897694",
        NombreUsuario: "Maria Martinez",
        Rol: "",
        Estado: "Activo",
        Acciones: <div className='flex w-full justify-around'>
                    <i class="fas fa-pencil-alt " >
                    </i> <i class="far fa-trash-alt"></i> 
                  </div> 
    },
    {
        IDUsuario: "59786422",
        NombreUsuario: "Pepita Gonzalez",
        Rol: "DATO3",
        Estado: "Activo",
        Acciones: <div className='flex w-full justify-around'>
                    <i class="fas fa-pencil-alt " >
                    </i> <i class="far fa-trash-alt"></i> 
                  </div> 
    }
 
]

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    //const [estado, setEstado] = useState("");
    

    useEffect(()=>{
        setUsuarios(usuariosBackend)
    },[]);
    
    return (
        <div className='flex w-full'>
            <BarraTitulo>
                    Informacion Usuarios
            </BarraTitulo>
            <div className='flex flex-col w-full items-center'>
                <TablaProductos listaUsuarios = {usuarios}/>
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                />
            </div>           
        </div> 
    )
}

const TablaProductos = ({listaUsuarios}) =>{
    return(
        <table className='tabla w-3/4'>
            <thead className='bg-blue-200'>
                <tr>
                    <th>ID Usuario</th>
                    <th>Nombre Usuario</th>
                    <th className='w-60'>Rol</th>
                    <th className='w-28'>Estado</th>
                </tr>
            </thead>
            <tbody className='bg-white'>
                {listaUsuarios.map((usuarios)=>{
                    return(
                        <tr>
                            <th>{usuarios.IDUsuario}</th>
                            <th>{usuarios.NombreUsuario}</th>
                            <th>
                                <label className='w-full'>
                                    <select defaultValue={0} className='w-full'>
                                        <option disabled value= {0}>Seleccione un rol</option>
                                        <option>Vendedor</option>
                                        <option>Administrador</option>
                                        <option>Sin rol</option>
                                    </select>
                                </label>
                            </th>
                            <th>{usuarios.Estado}
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                            </th>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
        
    )
}

export default Usuarios
