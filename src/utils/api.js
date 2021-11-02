import axios from 'axios'


export const obtenerProductos= async(succesCallback,errorCallback)=>{
    const options = {method: 'GET', url: 'http://localhost:5000/productos'};

    await axios
    .request(options)
    .then(succesCallback).catch(errorCallback) 
}