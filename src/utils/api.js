import axios from 'axios'


export const obtenerProductos= async(setProductos)=>{
    const options = {method: 'GET', url: 'http://localhost:5000/productos'};

    await axios
    .request(options)
    .then((response)=> {
        setProductos(response.data);
        console.log(response.data)
    }).catch((error) =>{
        console.error(error);
    });
}