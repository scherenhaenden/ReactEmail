import React, { Component } from "react";
import ReactDOM from "react-dom";
import { GenericServices } from "./generic-services";



export class RegisterService {


    private genericServices = new GenericServices();


    public async getInitialData(): Promise<void> {


        let data = await this.genericServices.requestGetWithoutBody(`http://localhost:5000/apipublic/Emails/init`);

        console.log('data', data);


        /*let datata= fetch(`http://localhost:5000/apipublic/Emails/init`)
                        .then(res => res.json());

                        console.log('datata', datata);*/


                        
        
    }

}