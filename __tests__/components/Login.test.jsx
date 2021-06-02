import React from 'react';
import {render} from '@testing-library/react';
import Login from 'LoginForm';

describe('Login', () => {
    it('renders without crashing', () => {
        const { container } = render(<Login />);    
        container.querySelector('.test')
    });
});