import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Form, Button, Col, Row, Alert } from 'react-bootstrap';
import Header from './Header';
import RegImgHolder from './RegImgHolder';

function Register(props) {
    var ageArr = [];
    for (var n = 10; n < 100; ++n) ageArr.push(n);

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
        // const formData = {
        //     firstname: state.firstname,
        //     lastname: state.lastname,
        //     email: state.email,
        //     dateOfBirth: '2010-10-12',
        //     password: state.password
        // }

        if (state.firstname !== undefined && state.lastname !== undefined && state.email !== undefined
            && state.password !== undefined && state.comfirmPassword !== undefined)
        {
            if (state.firstname.trim() && state.lastname.trim() && state.email.trim()
                && state.password.trim() && state.comfirmPassword.trim())
            {
                let formData = new FormData();
                formData.append('firstname', state.firstname);
                formData.append('lastname', state.lastname);
                formData.append('email', state.email);
                formData.append('dateOfBirth', '2010-10-12');//state.dateOfBirth
                formData.append('password', state.password);
                const url = 'https://lamp.ms.wits.ac.za/home/s1671848/market_place_register.php';

                axios.post(url, formData)
                    .then(function (res) {
                        var status = res.data[0].register_status;
                        console.log('results_data: ', res.data[0]);
                        console.log('results_email: ', res.data[0].email);
                        console.log('results_username: ', res.data[0].username);
                        console.log('results_birthDate: ', res.data[0].dateOfBirth);
                        console.log('message: ', res.data[0].status_message);
                        console.log('status: ', status);

                        /////////-----Redirect to main page when login success-----/////////
                        status === '1' ? history.push('/LandingPage')
                            : setStateErr({
                                error: res.data[0].status_message
                            });
                    })
                    .catch((err) => {
                        console.log(err);
                        setStateErr({
                            error: "Fill all fields. " + err
                        })
                    });
            }
            else {
                setStateErr({ error: "Please make sure all fields are filled." });
                
                console.log("there is no input here, fill the form.");
                console.log('firstname: ', state.firstname);
                console.log('lastname: ', state.lastname);
                console.log('email: ', state.email);
                console.log('password: ', state.password);
                console.log('comfirmPassword: ', state.comfirmPassword);
            }
        }
        else {
            console.log("there is an undefined value bro!!...");
            console.log('firstname: ', state.firstname);
            console.log('lastname: ', state.lastname);
            console.log('email: ', state.email);
            console.log('password: ', state.password);
            console.log('comfirmPassword: ', state.comfirmPassword);

            setStateErr({error: "Please make sure all fields are filled." });
        }
    }

    return (
        <div>
            <Header pageUrl={'/LoginForm'} title={' Aready have an account? Login '} />
            <Row>
                <Col>
                    <Form style={{ width: '80%', marginLeft: '5%', marginTop: '10%' }} noValidate>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                name="firstname"
                                type='firstname'
                                style={{ background: '#ECF6F9' }}
                                placeholder='Enter your first name'
                                required
                                onChange={handleFirstName}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                name="lastname"
                                type='lastname'
                                style={{ background: '#ECF6F9' }}
                                placeholder='Enter your last name'
                                required
                                onChange={handleLastName}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                type='email'
                                style={{ background: '#ECF6F9' }}
                                placeholder='Enter your email'
                                required
                                onChange={handleEmail}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                as="select"
                                style={{ background: '#ECF6F9' }}
                                placeholder='Enter your age'
                                onChange={handleDateOfBirth}
                            >
                                {ageArr.map((item, idx) => {
                                    return <option key={idx}>{item} years old</option>
                                })}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                type='password'
                                style={{ background: '#ECF6F9' }}
                                placeholder='Enter your password'
                                required
                                onChange={handlePassword}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                name="me"
                                type='password'
                                style={{ background: '#ECF6F9' }}
                                placeholder='confirm password'
                                required
                                onChange={handleComfirmPassword}
                            />
                        </Form.Group>
                        <Button
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