import axios from 'axios'

//CRUD PARA PRODUCTOS
export const obtenerProductos= async(succesCallback,errorCallback)=>{
    const options = {
        method: 'GET', 
        url: 'http://localhost:5000/Productos',
        headers: {
    Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlhoLTdwMDROOGNDbThISlRYMEFPTiJ9.eyJpc3MiOiJodHRwczovL3ZlbnRhcy1taXNpb250aWMudXMuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDYxODg2MGRmYTllZTEwMDA3MTdkYTRmOCIsImF1ZCI6WyJBcGktQXV0aC1UaWVuZGFUZWMiLCJodHRwczovL3ZlbnRhcy1taXNpb250aWMudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTYzNjUxMDEyMywiZXhwIjoxNjM2NTk2NTIzLCJhenAiOiIzcmZFSnVPY1dYeGttTkZzUUpYalowNnAyVkNOallQbCIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.sTSIZb9-UJ-nNNYoWycO8gDbTSvHM_Z_XQqQIb3Mp0O01aEg8f9x26l_yIdiIor9fEGRSKU2TlG5bf3ls4zeC0VxpISQ9YIJ_BT8N2ABHbG_iWYe2MIrmkq0i1EgnXtbrv0AytJiingurItf7xfH7t8AGCnjosNtRvl2CVvHNkgjKWNu1j9-UgZlNWhtLTKvzQl59-0G_N-53b4RbrmTaxBEopdFAsJOzg4ruGTfVatdXo6s4C8zeO6GVJvWnwxz-MZDM2M9faN0rGkAUlNNRslphOAcPv1m5g9H3kOAbQ8y7AaAhBtDHErXwpqqmNcc5JfvNjeivWqw5a0s0ojjtw'
  }};

    await axios
    .request(options)
    .then(succesCallback).catch(errorCallback) 
}

export const crearProducto= async(data, succesCallback,errorCallback)=>{
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/Productos',
        headers: {'Content-Type': 'application/json'},
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
        headers: {'Content-Type': 'application/json'},
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