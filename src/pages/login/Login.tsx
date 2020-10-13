import React from 'react';
import { LoginService } from '../../services/login-service';
import Register from '../registration-component/Register';
import './../../styles.css';
import  IYoProps  from './IYoProps';
import './Login.css';

class Login extends React.Component {

  public loginService = new LoginService();
  constructor(props: IYoProps) {
    super(props);
    this.init();    
  }

  private anyRegistredUsers = false;

  private async init (): Promise<void> {

    this.loginService.getInitialData();
  }

  public showRegister(something: boolean): JSX.Element {    

   return (
    <Register name = ""/>
   );   
  }

  public doLogin(){}

  public showLogin(): JSX.Element {    

    return (
     <div>
         <div className="form-label-group">
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address"/* requiredTxt="" autofocus=""*//>
        <label /*for="inputEmail"*/>Email address</label>
      </div>
    
      <div className="form-label-group">
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" /*required=""*//>
        <label /*for="inputPassword"*/>Password</label>
      </div>
    
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> Remember me
        </label>
      </div>      
   
      <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={(event) => {this.doLogin()}}>Sign in</button> 
      <span>Information got to be here</span>    

     </div>
    );   
   }

  public loginOrRegister(): JSX.Element{

    if(!this.anyRegistredUsers) {
      return this.showRegister(this.anyRegistredUsers);

    }

    return this.showLogin();
  }  
  render() {
    return (      

<div className="App">
<form className="form-signin">   
        {this.showRegister(this.anyRegistredUsers)}
    </form>
</div>        
    );
  }
}

export default Login;
