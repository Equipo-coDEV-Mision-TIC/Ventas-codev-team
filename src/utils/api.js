import axios from 'axios'

//CRUD PARA PRODUCTOS
const getToken = () => {
    return `Bearer ${localStorage.getItem('token')}`;
  };
  
  export const obtenerProductos = async (successCallback, errorCallback) => {
    const options = {
      method: 'GET',
      url: `http://localhost:5000/Productos/`,
      headers: {
        Authorization: getToken(),
      },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };


export const crearProducto= async(data, succesCallback,errorCallback)=>{
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/Productos',
        headers: {'Content-Type': 'application/json',Authorization: getToken()},
        data,
        
        }
        await axios
        .request(options)
        .then(succesCallback).catch(errorCallback) 
}

export const editarProductos= async(id,data,succesCallback,errorCallback)=>{

    const options = {
        method: 'PATCH',
        url: `http://localhost:5000/Productos/${id}/`,
        headers: {'Content-Type': 'application/json',Authorization: getToken()},
        data,
        };
    

    await axios
    .request(options)
    .then(succesCallback).catch(errorCallback) 
}

export const eliminarProductos= async(id,succesCallback,errorCallback)=>{

    const options = {
        method: 'DELETE',
        url: `http://localhost:5000/Productos/${id}/`,
        headers: {'Content-Type': 'application/json',Authorization: getToken()},
        };
    

    await axios
    .request(options)
    .then(succesCallback).catch(errorCallback) 
    }


//CRUD PARA VENTAS

export const obtenerVentas= async(succesCallback,errorCallback)=>{
        const options = {method: 'GET', url: 'http://localhost:5000/Ventas',
        headers: {
            Authorization: getToken(),
          },
        };
        await axios
        .request(options)
        .then(succesCallback).catch(errorCallback) 
}
    
export const crearVenta= async(data, succesCallback,errorCallback)=>{
        const options = {
            method: 'POST',
            url: 'http://localhost:5000/Ventas',
            headers: {'Content-Type': 'application/json',Authorization: getToken()},
            data
            }
            await axios
            .request(options)
            .then(succesCallback).catch(errorCallback) 
}
    
export const editarVentas= async(id,data,succesCallback,errorCallback)=>{
    
        const options = {
            method: 'PATCH',
            url: `http://localhost:5000/Ventas/${id}/`,
            headers: {'Content-Type': 'application/json',Authorization: getToken()},
            data
            };
        
    
        await axios
        .request(options)
        .then(succesCallback).catch(errorCallback) 
}
    
export const eliminarVentas= async(id,succesCallback,errorCallback)=>{
    
        const options = {
            method: 'DELETE',
            url: `http://localhost:5000/Ventas/${id}/`,
            headers: {'Content-Type': 'application/json',Authorization: getToken()},
            };
        
    
        await axios
        .request(options)
        .then(succesCallback).catch(errorCallback) 
}

//CRUD PARA USUARIOS

export const obtenerUsuarios= async(succesCallback,errorCallback)=>{
    const options = {method: 'GET', url: 'http://localhost:5000/Usuarios',
    headers: {
        Authorization: getToken(),
      },
    }

    await axios
    .request(options)
    .then(succesCallback).catch(errorCallback) 
}

export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
    const options = {
      method: 'GET',
      url: 'http://localhost:5000/Usuarios/self',
      headers: {
        Authorization: getToken(), // 3. enviarle el token a backend
      },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };