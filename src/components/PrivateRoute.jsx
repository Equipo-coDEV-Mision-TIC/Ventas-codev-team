import { useUser  } from 'context/userContext';
import React, {useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ roleList, children }) => {
  const {isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  useEffect(()=>{

    const fetchAuth0Token = async ()=>{
     
      const accesToken = await getAccessTokenSilently({
      audience: `Api-Auth-TiendaTec`,
      
    });
    console.log(accesToken)
    };
    if(isAuthenticated){

      fetchAuth0Token();
    }
  },[isAuthenticated, getAccessTokenSilently])

  if (isLoading) return<div className='text-9xl text-red-500 '>Loading...</div>;

  return isAuthenticated ? <>{children}</> : <div className='text-9xl text-red-500 '>No estás autorizado para ver este sitio.</div>;
  } 
export default PrivateRoute;