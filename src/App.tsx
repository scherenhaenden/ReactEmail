import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import { LoginPage } from './pages/login/Login-Page';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={LoginPage} />
          <Route exact={true} path="/Dashboard" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
