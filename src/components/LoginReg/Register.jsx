import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Form, Button, Col, Row, Alert } from 'react-bootstrap';
import Header from './Header';
import RegImgHolder from './RegImgHolder';

function Register(props) {
    const history = useHistory();
    const [state, setState] = useState({
        firstname: "",
        lastname: "",
        email: "",
        dateOfBirth: "",
        password: "",
        comfirmPassword: ""
    })
    const [stateErr, setStateErr] = useState({
        error: ""
    })

    const handleFirstName = async e => {
        setState(prevState => ({
            ...prevState,
            firstname: e.target.value,
        }))
    }
    const handleLastName = async e => {
        setState(prevState => ({
            ...prevState,
            lastname: e.target.value
        }))
    }

    const handleEmail = async e => {
        setState(prevState => ({
            ...prevState,
            email: e.target.value,
        }))
    }
    const handleDateOfBirth = async e => {
        setState(prevState => ({
            ...prevState,
            dateOfBirth: e.target.value,
        }))
    }


    const handlePassword = async e => {
        setState(prevState => ({
            ...prevState,
            password: e.target.value
        }))
    }
    const handleComfirmPassword = async e => {
        setState(prevState => ({
            ...prevState,
            comfirmPassword: e.target.value
        }))
    }


    const handleSubmit = async e => {
        e.preventDefault();

        if (state.firstname !== undefined && state.lastname !== undefined && state.email !== undefined
            && state.password !== undefined && state.comfirmPassword !== undefined && state.dateOfBirth !== undefined) {
            if (state.firstname.trim() && state.lastname.trim() && state.email.trim()
                && state.password.trim() && state.comfirmPassword.trim() && state.dateOfBirth.trim()) {
                if (state.password === state.comfirmPassword) {
                    let formData = new FormData();
                    formData.append('firstname', state.firstname);
                    formData.append('lastname', state.lastname);
                    formData.append('email', state.email);
                    formData.append('dateOfBirth', state.dateOfBirth);
                    formData.append('password', state.password);
                    const url = 'https://lamp.ms.wits.ac.za/home/s2172765/market_place_register.php';

                    axios.post(url, formData)
                        .then(function (res) {
                            var status = res.data[0].register_status;

                            //////////------------set the details of the user-----------/////////
                            localStorage.setItem("userDetails", JSON.stringify(res))
                            
                            /////////-----Redirect to main page when login success-----/////////
                            status === '1' ? history.push('/LandingPage')
                                : setStateErr({
                                    error: res.data[0].status_message
                                });
                        })
                        .catch((err) => { setStateErr({ error: err }) });
                }
                else {
                    setStateErr({ error: "Passwords do not match." });
                }
            }
            else {
                setStateErr({ error: "Please make sure all fields are filled." });
            }
        }
    }

    return (
        <div className="test">
            <Header pageUrl={'/LoginForm'} title={' Aready have an account? Login '} />
            <Row>
                <Col>
                    <Form style={{ width: '80%', marginLeft: '5%', marginTop: '10%' }} noValidate>
                        <Form.Group>
                            <Form.Label htmlFor='firstname'>First Name</Form.Label>
                            <Form.Control
                                name="firstname"
                                type='firstname'
                                id='firstname'
                                style={{ background: '#ECF6F9' }}
                                placeholder='Enter your first name'
                                required
                                onChange={handleFirstName}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='lastname'>Last Name</Form.Label>
                            <Form.Control
                                name="lastname"
                                type='lastname'
                                id='lastname'
                                style={{ background: '#ECF6F9' }}
                                placeholder='Enter your last name'
                                required
                                onChange={handleLastName}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='email'>Email</Form.Label>
                            <Form.Control
                                name="email"
                                type='email'
                                id='email'
                                style={{ background: '#ECF6F9' }}
                                placeholder='Enter your email'
                                required
                                onChange={handleEmail}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='password'>Password</Form.Label>
                            <Form.Control
                                name="password"
                                type='password'
                                id='password'
                                style={{ background: '#ECF6F9' }}
                                placeholder='Enter your password'
                                required
                                onChange={handlePassword}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='confirmPassword'>Confirm Password</Form.Label>
                            <Form.Control
                                name="me"
                                type='password'
                                id='confirmPassword'
                                style={{ background: '#ECF6F9' }}
                                placeholder='confirm password'
                                required
                                onChange={handleComfirmPassword}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='birthdate'>Date of birth</Form.Label>
                            <Form.Control
                                name='Date of birth'
                                type='date'
                                id='birthdate'
                                style={{ background: '#ECF6F9' }}
                                onChange={handleDateOfBirth}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Button
                            className='reg-btn'
                            onClick={handleSubmit}
                            type='submit'
                            style={{ background: '#FFCE2E', width: '100px' }}
                        >Register</Button>
                        <br /><br />
                        {(stateErr.error !== "" && stateErr.error !== undefined) ? (<div><Alert variant='danger'>{stateErr.error}</Alert></div>) : ""}
                        <br /><br />
                    </Form>
                </Col>
                <Col>
                    <RegImgHolder />
                </Col>
            </Row>
        </div>
    )
}

export default Register;