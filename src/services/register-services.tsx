import { GenericServices } from "./generic-services";



export class RegisterService {


    private genericServices = new GenericServices();

    public async getInitialData(): Promise<void> {

        let data = await this.genericServices.requestGetWithoutBody(`http://localhost:5000/apipublic/Emails/init`);

        console.log('data', data);                        
        
    }


    public async sendRegistration(user:string, firstName: string, lastName: string, password: string ): Promise<void> {

        var registerUserModel =  {user, firstName, lastName, password};        

        let data = await this.genericServices.requestPost(`http://localhost:5000/apipublic/Emails/register`, registerUserModel);

        console.log('data', data);                        
        
    }

}