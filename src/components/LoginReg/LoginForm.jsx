import React, { useState } from 'react';
import axios from 'axios';
import {useHistory } from 'react-router-dom';
import { Form, Button, Row, Col,Alert } from 'react-bootstrap';
import LgnImgHolder from './LgnImgHolder';
import Header from './Header';
import qs from "qs";


function LoginForm(props){
    const [state, setState]= useState({
        password: "",
        email: "",
        error:""
    })
    const handleEmail = async e => {
        setState(prevState => ({
            ...prevState,
            email: e.target.value
        }))
    }
    const handlePassword = async e => {
        setState(prevState => ({
            ...prevState,
            password: e.target.value
        }))
    }
    const history = useHistory();
    /*const*/
    var handleSubmit = e => {
        e.preventDefault();

        const formData = {
            email: state.email,
            password: state.password
        }
        // let formData = new FormData();
        // formData.append('email', state.email);
        // formData.append('password', state.password);

        const url = 'https://lamp.ms.wits.ac.za/home/s1671848/market_place_login.php';

        axios.post(url, qs.stringify(formData))
        .then(function (res) {
            var status = res.data[0].login_status;
    
            console.log('results_data: ', res.data[0]);
            console.log('results_email: ', res.data[0].email);
            console.log('results_username: ', res.data[0].firstname);
            console.log('status: ', status);

            /////////-----Redirect to main page when login success-----/////////
            status===1? history.push('/LandingPage')
            :setState({
                error: res.data[0].login_message //"Incorrect email or password, please make sure your password and email are correct!"
            });
        })
        .catch((err) => { return console.log('error: ', err) });
    }
    return (
        <div>
            <Header pageUrl={'/Register'} title={' Do not have an account? Register '} />
            <Row>
                <Col>
                    <div>
                        <Form style={{ width: '90%', marginLeft: '5%', marginTop: '20%' }}>
                            {(state.error !== "") ? (<div><Alert variant='danger'>{state.error}</Alert></div>):""}
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    onChange={handleEmail}
                                    type='email'
                                    style={{ background: '#ECF6F9' }}
                                    placeholder='Enter your email'
                                    required
                                    // isInvalid 
                                />
                                <Form.Control.Feedback type='invalid'>Email is required</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    onChange={handlePassword}
                                    type='password'
                                    style={{ background: '#ECF6F9' }}
                                    placeholder='Enter your password'
                                    required
                                />
                                <Form.Control.Feedback type="invalid">Password is required</Form.Control.Feedback>
                            </Form.Group>
                            <Button
                                onClick={handleSubmit}
                                type='submit'
                                style={{ background: '#FFCE2E', width: '100px' }}
                            >
                                Login
                            </Button>
                        </Form>
                    </div>
                </Col>
                <Col><LgnImgHolder /></Col>
            </Row>
        </div>
    )
}

export default LoginForm;
