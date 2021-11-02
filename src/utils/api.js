import axios from 'axios'


export const obtenerProductos= async(succesCallback,errorCallback)=>{
    const options = {method: 'GET', url: 'http://localhost:5000/productos'};

    await axios
    .request(options)
    .then(succesCallback).catch(errorCallback) 
}

export const crearProducto= async(data, succesCallback,errorCallback)=>{
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/Productos',
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
        url: `http://localhost:5000/Productos/${id}/`,
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
        url: `http://localhost:5000/Productos/${id}/`,
        headers: {'Content-Type': 'application/json'},
        };
    

    await axios
    .request(options)
    .then(succesCallback).catch(errorCallback) 
    }

