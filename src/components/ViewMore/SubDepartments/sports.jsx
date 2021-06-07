import React, { Component, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function Sports() {

    return (
        <div className="viewMore_departments2">
            <h3 className="departmentHeading">Departments</h3>

                    <ul className="departmentItems">
                        
                        <li><h3 className="viewMore_department">Sports & Training</h3>
                            <ul className="viewMore_subDept">
                                <li><a href="#">All Sport</a></li>
                                <li><a href="#">Individual Sports</a></li>
                                <li><a href="#">Cycling</a></li>
                                <li><a href="#">Running</a></li>
                                <li><a href="#">Team Sports</a></li>
                                <li><a href="#">Watersports</a></li>
                                <li><a href="#">Gym Equipment</a></li>
                                <li><a href="#">Treadmills & Bikes</a></li>
                                <li><a href="#">Dumbbells</a></li>
                                <li><a href="#">Yoga</a></li>
                                <li><a href="#">Yoga Mats</a></li>
                                <li><a href="#">Recovery</a></li> 
                                <li><a href="#">Sports Nutrition</a></li>
                                <li><a href="#">Sport Wearable Tech</a></li>
                                <li><a href="#">Sports Clothing</a></li>
                                <li><a href="#">Sports Footwear</a></li>
                            </ul>
                        </li>
                    </ul>

        </div> );
}

export default Sports;