import React from 'react';
import {render} from '@testing-library/react';
import {Items2,Items3, Items, Items4, Items5} from 'Items';
import Header from 'Header';

describe('Landing_Page renders withoout crashing', () => {
    it('Books', () => {
        const { container } = render(<Items />);    
        container.querySelector('.items')
    });

    it('Electronics', () => {
        
        const { container } = render(<Items2 />);    
        container.querySelector('.items')
    });

    it('Clothing', () => {
        const { container } = render(<Items3 />); 
            container.querySelector('.items');
    });

    it('Health and Hygiene', () => {
        const { container } = render(<Items4 />); 
            container.querySelector('.items');
    });

    it('Sporting and Training', () => {
        const { container } = render(<Items5 />);    
        container.querySelector('.items')
    });

    it('Header', () => {
        const { container } = render(<Header />);    
        container.querySelector('.parent')
    });

});


