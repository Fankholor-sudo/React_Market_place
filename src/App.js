import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/LoginReg/Register';
import LoginForm from './components/LoginReg/LoginForm';
import LandingPage from './components/Deshboard/LandingPage'
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
        
        <Route path="/LandingPage" exact={true}>
              <LandingPage />
        </Route>
    
        </Switch>
      </Router>
    </div>
  );
}

export default App;