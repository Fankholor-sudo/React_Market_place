import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Login from 'LoginForm';
import { act } from 'react-dom/test-utils';

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