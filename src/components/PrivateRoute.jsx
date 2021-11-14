
import React, {useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {obtenerDatosUsuario} from '../utils/api'

const PrivateRoute = ({ children }) => {
  const {isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  useEffect(()=>{

    const fetchAuth0Token = async ()=>{
    const accesToken = await getAccessTokenSilently({
    audience: `Api-Auth-TiendaTec`,  
    });
    localStorage.setItem('token', accesToken);
    console.log(accesToken)
    console.log('fin token')
    obtenerDatosUsuario((response)=>{
      console.log('response',response)
    },
    (err)=>{
      console.log('err',err)
    });
    };
    console.log('prueba de fucionamiento')
    if(isAuthenticated){
      fetchAuth0Token();
    }
  },[isAuthenticated, getAccessTokenSilently])

  if (isLoading) return<div className='text-9xl text-red-500 '>Loading...</div>;

  return isAuthenticated ? <>{children}</> : <div className='text-9xl text-red-500 '>No estás autorizado para ver este sitio.</div>;
  } 
export default PrivateRoute