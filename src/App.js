import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/LoginReg/Register';
import LoginForm from './components/LoginReg/LoginForm';
import Header from './components/Header';
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact={true}>
              <LoginForm />
        </Route>

        <Route path="/LoginForm" exact={true}>
              <LoginForm />
        </Route>

        <Route path="/Register" exact={true}>
              <Register />
        </Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default withRouter(App);
