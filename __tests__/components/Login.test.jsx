import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Login from 'LoginForm';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Login States are working', () => {
    it('first state testing', () => {
        const {container} = render(<Login />);
        fireEvent.click(container.querySelector('.login-btn'));
    });
});
describe('Login renders', () => {
    it('renders without crashing', () => {
        const { container } = render(<Login />);    
        container.querySelector('.test');
    });

    it('email field working', () => {
        const { getByLabelText } = render(<Login />);
        const emailInputNode = getByLabelText('Email');
        expect(emailInputNode.value).toMatch('');
        fireEvent.change(emailInputNode, { target: { value: 'testing' } });
        expect(emailInputNode.value).toMatch('testing');
    });

    it('password field working', () => {
        const { getByLabelText } = render(<Login />); 
        const passwordInputNode = getByLabelText('Password');
        expect(passwordInputNode.value).toMatch('');
        fireEvent.change(passwordInputNode, { target: { value: '123456' } });
        expect(passwordInputNode.value).toMatch('123456');
    });
});
