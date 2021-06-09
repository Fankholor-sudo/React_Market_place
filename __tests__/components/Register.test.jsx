import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Register from 'RegisterForm';
import { act } from 'react-dom/test-utils';

describe('Register are working', () => {
    it('first state testing', () => {
        const {container} = render(<Register />);
        const testing =  container.querySelector('.test');
        fireEvent.click(container.querySelector('.reg-btn'));
        expect(testing).not.toBeNull();
    });
});

describe('Register renders', () => {
    it('renders without crashing', () => {
        const { container } = render(<Register />);    
        container.querySelector('.test')
    });

    it('firstname field working', () => {
        const {container, getByLabelText } = render(<Register />); 
        const nameInputNode = getByLabelText('First Name');
        expect(nameInputNode.value).toMatch('');
        fireEvent.change(nameInputNode, { target: { value: 'testing' } });
        act(() => { fireEvent.click(container.querySelector('.reg-btn')); });
        expect(nameInputNode.value).toMatch('testing');
    });

    it('lastname field working', () => {
        const { getByLabelText } = render(<Register />); 
        const nameInputNode = getByLabelText('Last Name');
        expect(nameInputNode.value).toMatch('');
        fireEvent.change(nameInputNode, { target: { value: 'testing' } });
        expect(nameInputNode.value).toMatch('testing');
    });

    it('email field working', () => {
        const { getByLabelText } = render(<Register />); 
        const emailInputNode = getByLabelText('Email');
        expect(emailInputNode.value).toMatch('');
        fireEvent.change(emailInputNode, { target: { value: 'testing' } });
        expect(emailInputNode.value).toMatch('testing');
    });

    it('password field working', () => {
        const { getByLabelText } = render(<Register />); 
        const passwordInputNode = getByLabelText('Password');
        expect(passwordInputNode.value).toMatch('');
        fireEvent.change(passwordInputNode, { target: { value: '123456' } });
        expect(passwordInputNode.value).toMatch('123456');
    });

    it('Confirm Password field working', () => {
        const { getByLabelText } = render(<Register />); 
        const passwordInputNode = getByLabelText('Confirm Password');
        expect(passwordInputNode.value).toMatch('');
        fireEvent.change(passwordInputNode, { target: { value: '12345' } });
        expect(passwordInputNode.value).toMatch('12345');
    });

    it('birthdate field working', () => {
        const {getByLabelText } = render(<Register />); 
        const dateInputNode = getByLabelText('Date of birth');
        expect(dateInputNode.value).toMatch('');
        fireEvent.change(dateInputNode, { target: { value: '03/06/2021' } });
        expect(dateInputNode.value).not.toMatch('03/06/2021');
    });

    it('Testing form with inputs and trigger', () => {
        const {container ,getByLabelText } = render(<Register />);
        
        const emailInputNode = getByLabelText('Email');
        const passwordInputNode = getByLabelText('Password');
        const fnameInputNode = getByLabelText('First Name');
        const lnameInputNode = getByLabelText('Last Name');
        const passwordInputNode2 = getByLabelText('Confirm Password');
        const dateInputNode = getByLabelText('Date of birth');

        expect(fnameInputNode.value).toMatch('');
        expect(lnameInputNode.value).toMatch('');
        expect(emailInputNode.value).toMatch('');
        expect(passwordInputNode.value).toMatch('');
        expect(passwordInputNode2.value).toMatch('');
        expect(dateInputNode.value).toMatch('');

        fireEvent.change(fnameInputNode, { target: { value: 'testing fname' } });
        fireEvent.change(lnameInputNode, { target: { value: 'testing lname' } });
        fireEvent.change(emailInputNode, { target: { value: 'testing email' } });
        fireEvent.change(passwordInputNode, { target: { value: '123456' } });
        fireEvent.change(passwordInputNode2, { target: { value: '123456' } });
        fireEvent.change(dateInputNode, { target: { value: '03/06/2021' } });
        
        act(() => {fireEvent.click(container.querySelector('.reg-btn'));});
        expect(fnameInputNode.value).toMatch('testing fname');
        expect(lnameInputNode.value).toMatch('testing lname');
        expect(emailInputNode.value).toMatch('testing email'); 
        expect(passwordInputNode.value).toMatch('123456');
        expect(passwordInputNode2.value).toMatch('123456');
        expect(dateInputNode.value).not.toMatch('03/06/2021');
    });

    it('Testing form with not matching passwords and trigger', () => {
        const {container ,getByLabelText } = render(<Register />);
        
        const emailInputNode = getByLabelText('Email');
        const passwordInputNode = getByLabelText('Password');
        const fnameInputNode = getByLabelText('First Name');
        const lnameInputNode = getByLabelText('Last Name');
        const passwordInputNode2 = getByLabelText('Confirm Password');
        const dateInputNode = getByLabelText('Date of birth');

        expect(fnameInputNode.value).toMatch('');
        expect(lnameInputNode.value).toMatch('');
        expect(emailInputNode.value).toMatch('');
        expect(passwordInputNode.value).toMatch('');
        expect(passwordInputNode2.value).toMatch('');
        expect(dateInputNode.value).toMatch('');

        fireEvent.change(fnameInputNode, { target: { value: 'testing fname' } });
        fireEvent.change(lnameInputNode, { target: { value: 'testing lname' } });
        fireEvent.change(emailInputNode, { target: { value: 'testing email' } });
        fireEvent.change(passwordInputNode, { target: { value: '123456' } });
        fireEvent.change(passwordInputNode2, { target: { value: '12456' } });
        fireEvent.change(dateInputNode, { target: { value: '03/06/2021' } });
        
        act(() => {fireEvent.click(container.querySelector('.reg-btn'));});
        expect(fnameInputNode.value).toMatch('testing fname');
        expect(lnameInputNode.value).toMatch('testing lname');
        expect(emailInputNode.value).toMatch('testing email'); 
        expect(passwordInputNode.value).toMatch('123456');
        expect(passwordInputNode2.value).toMatch('12456');
        expect(dateInputNode.value).not.toMatch('03/06/2021');
    });

    
});
