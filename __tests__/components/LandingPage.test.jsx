import React from 'react';
import {fireEvent,render} from '@testing-library/react';
import { Items2, Items3, Items, Items4, Items5 } from 'Items';
import ItemBox from 'ItemBox';
import Example from 'RegNavBar';
import {Favorites, Cart} from 'FavCart';
import Header from 'Header';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

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
        const query = container.querySelector('.items');
        expect(query).not.toBeNull();
    });

    it('Header', () => {
        const { container } = render(<Header />);    
        const query = container.querySelector('.parent');
        expect(query).not.toBeNull();
    });

    it('itemBox', () => {
        const { container } = render(<ItemBox image={'https://lamp.ms.wits.ac.za/home/s2172765/Books/book10.jpg'}
            itemName={'testing'} orgPrice={100} index={0} desc={'testing thats all'}/>);
        
        const query = container.querySelector('.item-box');
        const query2 = container.querySelector('.itemImage');
        // const query3 = container.querySelector('.item-name');
        // const query4 = container.querySelector('.price');


        expect(query).not.toBeNull();
        // expect(query13).not.toBeNull();
        // expect(query14).not.toBeNull();
        // expect(query17).not.toBeNull();
        fireEvent.click(query);
        // fireEvent.click(query13);
        // fireEvent.click(query14);
        // fireEvent.click(query17);
        expect(query2).not.toBeNull();
    });

    it('favorites', () => {
        const { container } = render(<Favorites />);
        const query = container.querySelector('.favIcon');
        const query2 = container.querySelector('.fav');
        expect(query).not.toBeNull();
        fireEvent.click(query);
        expect(query2).not.toBeNull();
    });

    it('Cart', () => {
        const { container } = render(<Cart />);
        const query = container.querySelector('.favIcon');
        expect(query).not.toBeNull();
    });

    it('regNavBar', () => {
        const {container} = render(<Example />);    
        const query = container.querySelector('.regNav');
        const query2 = container.querySelector('.regNavBar');

        expect(query2).not.toBeNull();
        fireEvent.click(query2);
        expect(query).not.toBeNull();
    });
});


