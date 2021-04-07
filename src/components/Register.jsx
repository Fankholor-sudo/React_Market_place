import React from 'react';
import {Form,Button} from 'react-bootstrap';

const Register = () => {
    var ageArr = [];
    for (var n = 10; n < 100; ++n) ageArr.push(n);
    return (
        <div>
            <Form style={{width: '90%', margin: '5%'}}>
                <Form.Group>
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control style={{background: '#ECF6F9'}} placeholder='Enter your firstname' required/>
                    <Form.Control.Feedback type="invalid">firstname is required</Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control style={{background: '#ECF6F9'}} placeholder='Enter your lastname' required/>
                    <Form.Control.Feedback type="invalid">lastname is required</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' style={{background: '#ECF6F9'}} placeholder='Enter your email' required />
                    <Form.Control.Feedback type="invalid">Email is required</Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <Form.Control as="select" style={{background: '#ECF6F9'}} placeholder='Enter your age'>
                        {ageArr.map((item, idx) => {
                            return <option>{item} years old</option>
                        })}
                    </Form.Control>
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' style={{background: '#ECF6F9'}} placeholder='Enter your password' required />
                    <Form.Control.Feedback type="invalid">Password is required</Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Re-enter Password</Form.Label>
                    <Form.Control type='password' style={{background: '#ECF6F9'}} placeholder='Re-enter your password' required />
                    <Form.Control.Feedback type="invalid">Password comfirmation is required</Form.Control.Feedback>
                </Form.Group>

                <Button type='submit' style={{background: '#FFCE2E', width: '100px'}}>Register</Button>
            </Form>
        </div>
    )
}

export default Register;