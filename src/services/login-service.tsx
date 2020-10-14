import React, { Component } from "react";
import ReactDOM from "react-dom";
import { GenericServices } from "./generic-services";


export class LoginService {

    private genericServices = new GenericServices();       

    public async getInitialData(): Promise<any> {        

        return this.genericServices.requestGetWithoutBody(`http://localhost:5000/apipublic/Emails/init`);        
    }

    public async loginIntoApp(User: string, Password: string): Promise<any> {     
        
        var UserLoginModel =  {User, Password};
        console.log('UserLoginModel:', UserLoginModel)

        return this.genericServices.requestPost(`http://localhost:5000/apipublic/Emails/login`, UserLoginModel);        
    }

}