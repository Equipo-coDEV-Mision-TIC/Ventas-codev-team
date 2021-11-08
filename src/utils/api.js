import axios from 'axios'

//CRUD PARA PRODUCTOS
export const obtenerProductos= async(succesCallback,errorCallback)=>{
    const options = {method: 'GET', url: 'https://thawing-springs-56523.herokuapp.com/productos'};

    await axios
    .request(options)
    .then(succesCallback).catch(errorCallback) 
}

export const crearProducto= async(data, succesCallback,errorCallback)=>{
    const options = {
        method: 'POST',
        url: 'https://thawing-springs-56523.herokuapp.com/Productos',
        headers: {'Content-Type': 'application/json'},
        data
        }
        await axios
        .request(options)
        .then(succesCallback).catch(errorCallback) 
}

export const editarProductos= async(id,data,succesCallback,errorCallback)=>{

    const options = {
        method: 'PATCH',
        url: `https://thawing-springs-56523.herokuapp.com/Productos/${id}/`,
        headers: {'Content-Type': 'application/json'},
        data
        };
    

    await axios
    .request(options)
    .then(succesCallback).catch(errorCallback) 
}

export const eliminarProductos= async(id,succesCallback,errorCallback)=>{

    const options = {
        method: 'DELETE',
        url: `https://thawing-springs-56523.herokuapp.com/Productos/${id}/`,
        headers: {'Content-Type': 'application/json'},
        };
    

    await axios
    .request(options)
    .then(succesCallback).catch(errorCallback) 
    }


//CRUD PARA VENTAS

export const obtenerVentas= async(succesCallback,errorCallback)=>{
        const options = {method: 'GET', url: 'https://thawing-springs-56523.herokuapp.com/ventas'};
    
        await axios
        .request(options)
        .then(succesCallback).catch(errorCallback) 
}
    
export const crearVenta= async(data, succesCallback,errorCallback)=>{
        const options = {
            method: 'POST',
            url: 'https://thawing-springs-56523.herokuapp.com/Ventas',
            headers: {'Content-Type': 'application/json'},
            data
            }
            await axios
            .request(options)
            .then(succesCallback).catch(errorCallback) 
}
    
export const editarVentas= async(id,data,succesCallback,errorCallback)=>{
    
        const options = {
            method: 'PATCH',
            url: `https://thawing-springs-56523.herokuapp.com/Ventas/${id}/`,
            headers: {'Content-Type': 'application/json'},
            data
            };
        
    
        await axios
        .request(options)
        .then(succesCallback).catch(errorCallback) 
}
    
export const eliminarVentas= async(id,succesCallback,errorCallback)=>{
    
        const options = {
            method: 'DELETE',
            url: `https://thawing-springs-56523.herokuapp.com/Ventas/${id}/`,
            headers: {'Content-Type': 'application/json'},
            };
        
    
        await axios
        .request(options)
        .then(succesCallback).catch(errorCallback) 
}

//CRUD PARA USUARIOS

export const obtenerUsuarios= async(succesCallback,errorCallback)=>{
    const options = {method: 'GET', url: 'https://thawing-springs-56523.herokuapp.com/Usuarios'};

    await axios
    .request(options)
    .then(succesCallback).catch(errorCallback) 
}