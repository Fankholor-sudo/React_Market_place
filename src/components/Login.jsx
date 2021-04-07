import React from 'react';
import {Form,Button} from 'react-bootstrap';

const Login = () => {
    return (
        <div>
            <Form style={{width: '90%', marginLeft: '5%',marginTop:'20%'}}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' style={{background: '#ECF6F9'}} placeholder='Enter your email' required />
                    <Form.Control.Feedback type="invalid">Email is required</Form.Control.Feedback>
                </Form.Group>
        
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' style={{background: '#ECF6F9'}} placeholder='Enter your password' required />
                    <Form.Control.Feedback type="invalid">Password is required</Form.Control.Feedback>
                </Form.Group>
                <Button type='submit' style={{background: '#FFCE2E', width: '100px'}}>Login</Button>
            </Form>
        </div>
    )
}

export default Login;