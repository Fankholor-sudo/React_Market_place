import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Register from 'RegisterForm';

describe('Register are working', () => {
    it('first state testing', () => {
        const {container} = render(<Register />);
        fireEvent.click(container.querySelector('.reg-btn'));
    });
});

describe('Register renders', () => {
    it('renders without crashing', () => {
        const { container } = render(<Register />);    
        container.querySelector('.test')
    });

    it('firstname field working', () => {
        const { getByLabelText } = render(<Register />); 
        const nameInputNode = getByLabelText('First Name');
        expect(nameInputNode.value).toMatch('');
        fireEvent.change(nameInputNode, { target: { value: 'testing' } });
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
        const { getByLabelText } = render(<Register />); 
        const dateInputNode = getByLabelText('Date of birth');
        expect(dateInputNode.value).toMatch('');
        fireEvent.change(dateInputNode, { target: { value: '03/06/2021' } });
        expect(dateInputNode.value).not.toMatch('03/06/2021');
    });

});
