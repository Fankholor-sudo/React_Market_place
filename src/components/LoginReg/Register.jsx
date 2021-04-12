import React from "react";
import { Form, Button, Col, Row } from 'react-bootstrap';
import Header from './Header';
import RegImgHolder from './RegImgHolder';
import * as Yup from "yup";
import { Formik } from "formik";


const schema = Yup.object({

    firstname: Yup.string()
        .max(15,'must be than 15 characters or less')
        .required('Required'),

    lastname: Yup.string()
        .max(20,'must be 20 characters or less')
        .required('Required'),

    email: Yup.string()
        .email()
        .required('Required'),

    password: Yup.string()
        .min(6, 'Password should be 6 characters long')
        .required(),

    me: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirm password')
});
function Register() {
    var ageArr = [];
    for (var n = 10; n < 100; ++n) ageArr.push(n);
    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                age:null,
                cpx:'',
                me:''
            }}
        >
            {
                ({
                    handleSubmit,
                    handleChange,
                    values,
                    touched,
                    errors
                }) => (
                    
                    <div className >
                        {console.log(values)}
                        <Header pageUrl={'/LoginForm'} title={' Aready have an account? Login '} />
                        <Row>
                            <Col>

                                <Form style={{ width: '80%', marginLeft: '5%', marginTop: '10%' }} noValidate onSubmit={handleSubmit}>

                                    <Form.Group>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            name="firstname"
                                            type='firstname'
                                            style={{ background: '#ECF6F9' }}
                                            placeholder='Enter your first name'
                                            required
                                            value={values.firstname}
                                            onChange={handleChange}

                                        />
                                        {(errors.firstname !== "" && touched.firstname === true) ? (<div className="error" style={{ color: '#e30000' }}>{errors.firstname}</div>) : ""}
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            name="lastname"
                                            type='lastname'
                                            style={{ background: '#ECF6F9' }}
                                            placeholder='Enter your last name'
                                            required
                                            value={values.lastname}
                                            onChange={handleChange}

                                        />
                                        {(errors.lastname !== "" && touched.lastname === true) ? (<div className="error" style={{ color: '#e30000' }}>{errors.lastname}</div>) : ""}
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            name="email"
                                            type='email'
                                            style={{ background: '#ECF6F9' }}
                                            placeholder='Enter your email'
                                            required
                                            value={values.email}
                                            onChange={handleChange}

                                        />
                                        {(errors.email !== "" && touched.email === true) ? (<div className="error" style={{ color: '#e30000' }}>{errors.email}</div>) : ""}
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control as="select" style={{ background: '#ECF6F9' }} placeholder='Enter your age' value={values.age} onChange={handleChange}>
                                            {ageArr.map((item, idx) => {
                                                return <option>{item} years old</option>
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
                                            value={values.password}
                                            onChange={handleChange}

                                        />
                                        {(errors.password !== "" && touched.password === true) ? (<div className="error" style={{ color: '#e30000' }}>{errors.password}</div>) : ""}
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control
                                            name="me"
                                            type='password'
                                            style={{ background: '#ECF6F9' }}
                                            placeholder='confirm password'
                                            required
                                            value={values.me}
                                            onChange={handleChange}

                                        />
                                        {(errors.me !== "" && touched.me === true) ? (<div className="error" style={{ color: '#e30000' }}>{errors.me}</div>) : ""}
                                    </Form.Group>
                                    <Button
                                        href='/LandingPage'
                                        type='submit'
                                        style={{ background: '#FFCE2E', width: '100px' }}
                                    >Register</Button>

                                </Form>
                            </Col>
                            <Col>
                                <RegImgHolder />
                            </Col>
                        </Row>
                    </div>
                )
            }
        </Formik>
    )
}

export default Register;
