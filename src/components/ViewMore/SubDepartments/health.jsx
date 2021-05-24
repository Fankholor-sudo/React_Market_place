import React, { Component, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function Health() {

    return (
        <div className="viewMore_departments2">
            <h3 className="departmentHeading">Departments</h3>

                    <ul className="departmentItems">
                        
                        <li><h3 className="viewMore_department">Health & Hygiene</h3>
                            <ul className="viewMore_subDept">
                                <li><a href="#">Health Care</a></li>
                                <li><a href="#">Toiletries</a></li>
                                <li><a href="#">Sanitize & First Aid</a></li>
                                <li><a href="#">Medicine & Treatments</a></li>
                                <li><a href="#">Health Care Devices</a></li>
                                <li><a href="#">Sexual Health</a></li>
                                <li><a href="#">Wellness Store</a></li>
                            </ul>
                        </li>
                    </ul>

        </div> );
}

export default Health;