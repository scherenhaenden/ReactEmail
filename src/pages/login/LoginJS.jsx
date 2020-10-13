import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import Register from '../registration-component/Register';
import {LoginService} from  './../../services/login-service';
import './Login.css';

const LoginJS = () => {

    const [data, setData] = React.useState ([]);   
    
    const [isLoading, setIsLoading] = React.useState (true);   

    useEffect(() => {
        async function fetchData() {
          
          const  loginService = new LoginService();
          const myData = await loginService.getInitialData();
  
          setData(myData);
          setIsLoading(false);
          // ...
        }
        fetchData();
    }, []);   

    if(isLoading || data === undefined)  {
        return <Spinner  animation="border"/>

    }

    if(data.length < 1)  {
        return <Register name = ""/> 
               
    }   
    

    return (


        <p>1</p>        
    )
};

export default LoginJS;