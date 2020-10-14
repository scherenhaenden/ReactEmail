import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import Register from '../registration-component/Register';
import {LoginService} from  './../../services/login-service';
import './Login.css';

import InputBoxPlaceholder from '../../components/input-box-placeholder';



const LoginJS = () => {

    const [data, setData] = React.useState ([]);   
    
    const [isLoading, setIsLoading] = React.useState (true);   

    const [userInfo = {userLogin: "", userPassword: ""}, setUserInfo] = React.useState ({});

    useEffect(() => {
        async function fetchData() {
          
          const loginService = new LoginService();
          const myData = await loginService.getInitialData();
  
          setData(myData);
          setIsLoading(false);
          // ...
        }
        fetchData();
    }, []);   

    const handlerLogin = (value ) => {      
        console.log('value:', value);
        console.log('value:', userInfo); 
        setUserInfo(
            {userLogin: value, userPassword: userInfo.userPassword}
        );
    }


    const handlerPass = (value ) => {
        console.log('value:', value);
        console.log('value:', userInfo);
        setUserInfo(
            {userLogin: userInfo.userLogin, userPassword: value}
        );
    }

    const login = () => {

        const loginService = new LoginService();
        loginService.loginIntoApp(userInfo.userLogin, userInfo.userPassword );
       
    }


    if(isLoading || data === undefined)  {
        return <Spinner  animation="border"/>

    }

    if(data.length < 1)  {
        return <Register name = ""/> 
               
    }   
    

    return (
        <div>


            <InputBoxPlaceholder  inputName="Login"
            input=""
            handler={handlerLogin}
            type="text"
            />

            <label /*for="inputEmail"*/>Login</label>



            <InputBoxPlaceholder  inputName="Password"
             input=""
             handler={handlerPass}             
             type="password"
            />
            <label /*for="inputEmail"*/>Password</label>

            <button className="btn btn-lg btn-primary btn-block" type="button" onClick={(event) => 
        {
          event.stopPropagation();
          login();
        }
      }>Sign up</button> 
        </div>
    )
};

export default LoginJS;