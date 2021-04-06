import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Row, Col, Image } from 'react-bootstrap';
import Register from './components/Register';
import RegImgHolder from './components/RegImgHolder';
import Login from './components/Login';
import LgnImgHolder from './components/LgnImgHolder';

function App() {
  return (
    <div className="App">
      <header>
        <Row class="d-flex">
          <div class="d-flex align-items-center" >
            <Image src='./img/trans_logo.png' style={{marginLeft:'50px' ,marginTop:'5px',width: '50px'}}/>
          </div>
          <p style={{ marginLeft: '3%',marginTop: '30px' ,fontSize:'16px'}}>
            We have everything that you need and like. Clothing | Technology | Books | Accessories | Sports | Stationary</p>
          <p style={{ marginLeft: '15%', marginTop: '30px' }}>
            <a href='./'>Already have an account? Login</a></p>
          {/* <p style={{marginLeft: '60%', marginTop:'110px'}}><a href='./'>Do not have an account? Register</a></p> */}
        </Row>
      </header>

      <Row className="landing">
        <Col><Register /></Col>
        <Col><RegImgHolder /></Col>
      </Row>
       {/* <Row className="landing">
        <Col><Login /></Col>
        <Col><LgnImgHolder /></Col>
      </Row> */}
    </div>
  );
}

export default App;
