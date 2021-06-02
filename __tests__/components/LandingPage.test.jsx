import React from 'react';
import {render} from '@testing-library/react';
import {Items2,Items3, Items, Items4, Items5} from 'Items';
import Header from 'Header';

describe('Books', () => {
    it('renders without crashing', () => {
        const { container } = render(<Items />);    
        container.querySelector('.items')
    });
});

describe('Electronics', () => {
    it('renders without crashing', () => {
        
        const { container } = render(<Items2 />);    
        container.querySelector('.items')
    });
});

describe('Clothing', () => {
    it('renders without crashing', () => {
        const { container } = render(<Items3 />); 
            container.querySelector('.items');
    });
});

describe('Health and Hygiene', () => {
    it('renders without crashing', () => {
        const { container } = render(<Items4 />); 
            container.querySelector('.items');
    });
});


describe('Sporting and Training', () => {
    it('renders without crashing', () => {
        const { container } = render(<Items5 />);    
        container.querySelector('.items')
    });
});

describe('Header', () => {
    it('renders without crashing', () => {
        const { container } = render(<Header />);    
        container.querySelector('.parent')
    });
});

