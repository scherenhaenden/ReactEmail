import React, { Component } from "react";
import ReactDOM from "react-dom";
import RequestGetWithoutBody, { GenericServices } from "./generic-services";


export class LoginService {

    private genericServices = new GenericServices();    
    

    public async getInitialData(): Promise<void> {


        const h= RequestGetWithoutBody(`http://localhost:5000/apipublic/Emails/init`);

        console.log('hd', h);

        let data = await this.genericServices.requestGetWithoutBody(`http://localhost:5000/apipublic/Emails/init`);

        console.log('data', data);
    }

}