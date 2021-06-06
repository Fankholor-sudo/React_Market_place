import React, { useState} from 'react';
import axios from 'axios';
import {useHistory } from 'react-router-dom';
import { Form, Button, Row, Col,Alert } from 'react-bootstrap';
import LgnImgHolder from './LgnImgHolder';
import Header from './Header';
import { func } from 'joi';


function LoginForm(props)
{
    const history = useHistory();

    const [state, setState]= useState({
        password: "",
        email: ""
    })
    const [stateErr, setStateLogInErr] = useState({
        error: ""
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
    const handleSubmit = e => {
        e.preventDefault();

        if (state.email !== undefined && state.password !== undefined)
        {
            if (state.email.trim() && state.password.trim()) 
            {
                let formData = new FormData();
                formData.append('email', state.email);
                formData.append('password', state.password);
                const url = 'https://lamp.ms.wits.ac.za/home/s2172765/market_place_login.php';

                axios.post(url, formData)
                    .then(function (res) {
                        var status = res.data[0].login_status;

                        //////////------------set the details of the user-----------/////////
                        localStorage.setItem("userDetails", JSON.stringify(res))

                        /////////-----Redirect to main page when login success-----/////////
                        status === 1 ? history.push('/LandingPage')
                            : setStateLogInErr({
                                error: res.data[0].login_message //"Incorrect email or password, please make sure your password and email are correct!"
                            });
                    })
                    .catch((err) => { setStateLogInErr({ error: err }); });
            }
            else
            {
                setStateLogInErr({ error: "Please make sure all fields are filled." });
            }
        }
    }

    return (
        <div className="test">
            <Header pageUrl={'/Register'} title={' Do not have an account? Register '} />
            <Row>
                <Col>
                    <div>
                        {localStorage.removeItem("loginDetails")}
                        <Form style={{ width: '90%', marginLeft: '5%', marginTop: '20%' }}>
                            {(stateErr.error !== "" && stateErr.error !== undefined) ? (<div><Alert variant='danger'>{stateErr.error}</Alert></div>):""}
                            <Form.Group>
                                <Form.Label htmlFor='email'>Email</Form.Label>
                                <Form.Control
                                    onChange={handleEmail}
                                    type='email'
                                    id='email'
                                    style={{ background: '#ECF6F9' }}
                                    placeholder='Enter your email'
                                    required 
                                />
                                <Form.Control.Feedback type='invalid'>Email is required</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor='password'>Password</Form.Label>
                                <Form.Control
                                    onChange={handlePassword}
                                    type='password'
                                    id='password'
                                    style={{ background: '#ECF6F9' }}
                                    placeholder='Enter your password'
                                    required
                                />
                                <Form.Control.Feedback type="invalid">Password is required</Form.Control.Feedback>
                            </Form.Group>
                            <Button
                                className='login-btn'
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