import React from 'react';
import './../styles.css';
import './Login.css';


class Login extends React.Component<{}, {}> {
  render() {
    return (

<div className="App">
<form className="form-signin">       
      
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
      <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button> 
      <span>Information got to be here</span>       
    </form>
</div>

        
    );
  }
}

export default Login;
