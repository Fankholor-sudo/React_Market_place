import React from "react";
import { Form, Button, Col, Row } from 'react-bootstrap';
import Header from './Header';
import LgnImgHolder from './LgnImgHolder';
import * as Yup from "yup";
import { Formik } from "formik";

const schema = Yup.object({
    email: Yup.string()
        .email()
        .required('Required'),
    password: Yup.string()
        .required('Required')
});

function LoginForm() {
    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                email: '',
                password: ''
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
                        <Header pageUrl={'/Register'} title={' Do not have an account? Register '} />
                        <Row>
                            <Col>

                                <Form style={{ width: '90%', marginLeft: '5%', marginTop: '20%' }} noValidate onSubmit={handleSubmit}>
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
                                    <Button
                                        href='/LandingPage'
                                        type='submit'
                                        style={{ background: '#FFCE2E', width: '100px' }}
                                    >Login</Button>

                                </Form>
                            </Col>
                            <Col>
                                <LgnImgHolder />
                            </Col>
                        </Row>
                    </div>
                )
            }
        </Formik>
    )
}

export default LoginForm;