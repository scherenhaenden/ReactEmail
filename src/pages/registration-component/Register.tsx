import React from 'react';
import InputBoxPlaceholder from '../../components/input-box-placeholder';
import { RegisterService } from '../../services/register-services';
import IYoProps from '../login/IYoProps';

interface IState {    
  loginName: string;
  firstName: string;
  lastName: string;
  createPass: string;
  reWritePass: string;  
}


class Register extends React.Component<IYoProps, IState> {

  private inputTypeLoginName="Login";
  private inputTypeFirstName="First name";
  private inputTypeLastName="Last name";
  private inputTypecreatePass="Create a Password";
  private inputTypeReWritePass="Rewrite your password";  

  private loginName = "";
  private firstName = "";
  private lastName="";
  private createPass="";
  private reWritePass="";


  state: Readonly<IState> = {
    loginName: this.loginName,
    firstName: this.firstName,
    lastName: this.lastName,
    createPass: this.createPass,
    reWritePass: this.reWritePass,
  }


  private sendRegistration(): boolean{

    const registerService = new RegisterService();

    registerService.sendRegistration(this.state.loginName, this.state.firstName, this.state.lastName, this.state.createPass);    

    return false;

  }

  handlerLogin(value: any ) {
    this.setState({
      loginName : value
    });
  }

  handlerFirstName(value: any ) {
    this.setState({
      firstName : value
    });
  }

  handlerLastName(value: any ) {
    this.setState({
      lastName : value
    });
  }

  handlerPass1(value: any ) {
    this.setState({
      createPass : value
    });
  }

  handlerPass2(value: any ) {
    this.setState({
      reWritePass : value
    });
  }


  render() {
    return (


<div>

    <InputBoxPlaceholder  
    inputName={this.inputTypeLoginName} 
    input={this.state.loginName}  
    handler={this.handlerLogin.bind(this)}
    type="text" />
    <label /*for="inputEmail"*/>{this.inputTypeLoginName}</label>

    <InputBoxPlaceholder  inputName={this.inputTypeFirstName} input={this.state.firstName}  handler={this.handlerFirstName.bind(this)}
    type="text"
    />
    <label /*for="inputEmail"*/>{this.inputTypeFirstName}</label>


    <InputBoxPlaceholder  inputName={this.inputTypeLastName} input={this.state.lastName}  handler={this.handlerLastName.bind(this)}
    type="text"
    />
    <label /*for="inputEmail"*/>{this.inputTypeLastName}</label>

    <InputBoxPlaceholder  inputName={this.inputTypecreatePass} input={this.state.createPass}  handler={this.handlerPass1.bind(this)} 
    
    type="password"
    />
    <label /*for="inputEmail"*/>{this.inputTypecreatePass}</label>

    <InputBoxPlaceholder  inputName={this.inputTypeReWritePass} input={this.state.reWritePass}  handler={this.handlerPass2.bind(this)} 
    
    type="password"
    
    />
    <label /*for="inputEmail"*/>{this.inputTypeReWritePass}</label>
    
    <button className="btn btn-lg btn-primary btn-block" type="button" onClick={(event) => 
        {
          event.stopPropagation();
          this.sendRegistration()
        }
      }>Sign up</button> 
    <span>DO NOT USE ANY REAL EMAIL ACCOUNT BECAUSE THIS IS AN EXPERIMENTAL APP</span>       
</div>  
    );
  }
}

export default Register;