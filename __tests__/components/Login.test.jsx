import React from 'react';
import {act, fireEvent, render, waitFor} from '@testing-library/react';
import Login from 'LoginForm';
import Axios from "axios";

// export default {
//     get: jest.fn(() => Promise.resolve({ data: {} }) )
// };

// Axios.get = jest.fn();
Axios.get = jest.fn(() => Promise.resolve({ data: {} }));

describe('testing internet requests', () => {
    it('internet request working', async () => {
        Axios.get.mockResolvedValue({ data: { title: 'some title' } })
        const {container, getByTestId, getByLabelText } = render(<Login />);

        const emailInputNode = getByLabelText('Email');
        const passwordInputNode = getByLabelText('Password');
        expect(emailInputNode.value).toMatch('');
        expect(passwordInputNode.value).toMatch('');
        fireEvent.change(emailInputNode, { target: { value: 'testing' } });
        fireEvent.change(passwordInputNode, { target: { value: '123456' } });

        expect(emailInputNode.value).toMatch('testing'); 
        expect(passwordInputNode.value).toMatch('123456');
        
        // const resolvedEl = container.querySelector('.test_id');
        // expect((resolvedEl).textContent).toBe("");
        fireEvent.click(container.querySelector('.login-btn'));
        // const resolvedEl = await waitFor(() => getByTestId("testid"));
        // expect((resolvedEl).textContent).toBe("Please make sure all fields are filled.");
      
        expect(Axios.get).toHaveBeenCalledTimes(0);
        // expect(Axios.get).toHaveBeenCalledWith(url);
    });
});

describe('Login States are working', () => {
    it('first state testing', () => {
        const { container } = render(<Login />);
        const testing =  container.querySelector('.test');
        fireEvent.click(container.querySelector('.login-btn'));
        expect(testing).not.toBeNull();
    });
});
describe('Login renders', () => {
    it('renders without crashing', () => {
        const { container } = render(<Login />);    
        container.querySelector('.test');
    });

    it('email field working', () => {
        const {container, getByLabelText } = render(<Login />);
        const emailInputNode = getByLabelText('Email');
        expect(emailInputNode.value).toMatch('');
        fireEvent.change(emailInputNode, { target: { value: 'testing' } });

        act(() => {fireEvent.click(container.querySelector('.login-btn'));});
        expect(emailInputNode.value).toMatch('testing');
    });

    it('password field working', () => {
        const {getByLabelText } = render(<Login />); 
        const passwordInputNode = getByLabelText('Password');
        expect(passwordInputNode.value).toMatch('');
        fireEvent.change(passwordInputNode, { target: { value: '123456' } });
        expect(passwordInputNode.value).toMatch('123456');
    });
});
describe('Login Form is working', () => {
    it('Form', () => {
        const {container} = render(<Login />);
        container.querySelector('Form');
    });
    it('Form.Group', () => {
        const {container} = render(<Login />);
        container.querySelector('Form.Group');
    });
    it('Form.Control', () => {
        const {container} = render(<Login />);
        container.querySelector('Form.Control');
    });
    
    it('Testing form with inputs and trigger', () => {
        const {container ,getByLabelText } = render(<Login />);
        
        const emailInputNode = getByLabelText('Email');
        expect(emailInputNode.value).toMatch('');
        const passwordInputNode = getByLabelText('Password');
        expect(passwordInputNode.value).toMatch('');

        fireEvent.change(emailInputNode, { target: { value: 'testing' } });
        fireEvent.change(passwordInputNode, { target: { value: '123456' } });
        
        act(() => {fireEvent.click(container.querySelector('.login-btn'));});
        expect(emailInputNode.value).toMatch('testing'); 
        expect(passwordInputNode.value).toMatch('123456');
    });
});