import React, { Component } from "react";
import ReactDOM from "react-dom";
import { GenericServices } from "./generic-services";


export class LoginService {

    private genericServices = new GenericServices();       

    public async getInitialData(): Promise<any> {        

        return this.genericServices.requestGetWithoutBody(`http://localhost:5000/apipublic/Emails/init`);        
    }

}