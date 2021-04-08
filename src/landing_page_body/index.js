import React from 'react';
import ReactDOM from 'react-dom';

import Items from './components/items';
import Category from './components/category';
import Departments from './components/departmentsBar';
import Footer from './components/footer';
import Modal from './components/modal';

import './css/index.css';


ReactDOM.render(<Departments/>, document.getElementById('departments-bar'));

ReactDOM.render(<Category category="Daily deals"/>, document.getElementById('daily'));
ReactDOM.render(<Items/>, document.getElementById('daily-items'));

ReactDOM.render(<Category category="Clothing"/>, document.getElementById('clothing'));
ReactDOM.render(<Items/>, document.getElementById('clothing-items'));

ReactDOM.render(<Category category="Computer & Electronics"/>, document.getElementById('computer-electronics'));
ReactDOM.render(<Items/>, document.getElementById('computer-electronics-items'));

ReactDOM.render(<Category category="Books & Stationery"/>, document.getElementById('books-stationery'));
ReactDOM.render(<Items/>, document.getElementById('books-stationery-items'));

ReactDOM.render(<Footer/>, document.getElementById('footer'));

ReactDOM.render(<Modal category="Daily deals" itemName="Macbook Air Retina 2018" orgPrice="18199" discount="35" rating="4.7(147)"/>,document.getElementById('modal'));