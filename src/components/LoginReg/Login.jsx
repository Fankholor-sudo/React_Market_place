import React, { useState } from 'react';
import {useHistory } from 'react-router-dom';
import { Form, Button, Row, Col,Alert } from 'react-bootstrap';
import LgnImgHolder from './LgnImgHolder';
import Header from './Header';
import axios from 'axios';

function Login(props){
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
    const handleSubmit = e => {
        e.preventDefault();
        let formData = new FormData();

        formData.append('email', state.email);
        formData.append('password', state.password);
        const url = 'https://lamp.ms.wits.ac.za/home/s1671848/mc_app_login.php';

        axios.post(url, formData)
            .then(function (res) {
                console.log('results_data: ', res.data[0]);
                console.log('results_email: ', res.data[0].email);
                console.log('results_username: ', res.data[0].username);
                
                var status = res.data[0].login_status;

                console.log('status: ', status);

                if (status === 1) { history.push('/Register'); }
                else {
                    setState({
                        error: res.data[0].login_message
                    });
                }

            }).catch((err) => { return console.log('error: ', err) });
    }
        return (
            <div>
                <Header link={'/Register'} linkName={'Do not have an account? Register'} />
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
                                    />
                                    <Form.Control.Feedback type="invalid">Email is required</Form.Control.Feedback>
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

export default Login;