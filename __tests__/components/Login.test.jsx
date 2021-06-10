import React from 'react';
import {act, fireEvent, render, waitFor} from '@testing-library/react';
import Login from 'LoginForm';
import axiosMock from "axios";

export default {
    get: jest.fn(() => Promise.resolve({ data: {} }) )
};
  
describe('testing internet requests', () => {
    it('internet reqwst working', async () => {
        axiosMock.get.mockResolvedValue({ data: { title: 'some title' } })
        const {container, getByTestId, rerender } = render(<Login />);

        fireEvent.click(container.querySelector('.login-btn'));
        const resolvedEl = await waitFor(() => getByTestId("testid"));
        expect((resolvedEl).textContent).toBe("")
      
        expect(axiosMock.get).toHaveBeenCalledTimes(1);
        // expect(axiosMock.get).toHaveBeenCalledWith(url);
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