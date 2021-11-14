import axios from 'axios'
//const baseURL = "http://localhost:5000"
const baseURL = 'https://thawing-springs-56523.herokuapp.com';

//CRUD PARA PRODUCTOS
const getToken = () => {
    return `Bearer ${localStorage.getItem('token')}`;
  };
  
  export const obtenerProductos = async (successCallback, errorCallback) => {
    const options = {
      method: 'GET',
      url: `${baseURL}/Productos`,
      headers: {
        Authorization: getToken(),
      },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };


export const crearProducto= async(data, succesCallback,errorCallback)=>{
    const options = {
        method: 'POST',
        url: `${baseURL}/Productos`,
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
        url: `${baseURL}/Productos/${id}/`,
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
        url: `${baseURL}/Productos/${id}/`,
        headers: {'Content-Type': 'application/json',Authorization: getToken()},
        };
    

    await axios
    .request(options)
    .then(succesCallback).catch(errorCallback) 
    }


//CRUD PARA VENTAS

export const obtenerVentas= async(succesCallback,errorCallback)=>{
        const options = {method: 'GET', url: `${baseURL}/Ventas`,
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
            url: `${baseURL}/Ventas`,
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
            url: `${baseURL}/Ventas/${id}/`,
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
            url: `${baseURL}/Ventas/${id}/`,
            headers: {'Content-Type': 'application/json',Authorization: getToken()},
            };
        
    
        await axios
        .request(options)
        .then(succesCallback).catch(errorCallback) 
}

//CRUD PARA USUARIOS

export const obtenerUsuarios= async(succesCallback,errorCallback)=>{
    const options = {method: 'GET', url: `${baseURL}/Usuarios`,
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
      url: `${baseURL}/Usuarios/self`,
      headers: {
        Authorization: getToken(), // 3. enviarle el token a backend
      },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };