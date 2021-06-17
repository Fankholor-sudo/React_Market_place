import React, { Component, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function Health() {

<<<<<<< HEAD
=======
    const Toiletries = () =>{
        sessionStorage.setItem('SubdeptCode', 118)
    }
    
    const Sanitize = () =>{
        sessionStorage.setItem('SubdeptCode', 114)
    }
    const Bathroom = () =>{
        sessionStorage.setItem('SubdeptCode', 119)
    }
    const Dental = () =>{
        sessionStorage.setItem('SubdeptCode', 120)
    }
    const BodyHygiene = () =>{
        sessionStorage.setItem('SubdeptCode', 116)
    }
    const Shaving = () =>{
        sessionStorage.setItem('SubdeptCode', 115)
    }

>>>>>>> 6a113119946d4a49aab04dbd5ed03a6395450489
    return (
        <div className="viewMore_departments2">
            <h3 className="departmentHeading">Departments</h3>

                    <ul className="departmentItems">
                        
                        <li><h3 className="viewMore_department">Health & Hygiene</h3>
                            <ul className="viewMore_subDept">
<<<<<<< HEAD
                                <li><a href="#">Health Care</a></li>
                                <li><a href="#">Toiletries</a></li>
                                <li><a href="#">Sanitize & First Aid</a></li>
                                <li><a href="#">Medicine & Treatments</a></li>
                                <li><a href="#">Health Care Devices</a></li>
                                <li><a href="#">Sexual Health</a></li>
                                <li><a href="#">Wellness Store</a></li>
=======
                                <li><a href="/subDepartments" onClick={Toiletries}>Toiletries</a></li>
                                <li><a href="/subDepartments" onClick={Sanitize}>Sanitize & First Aid</a></li>
                                <li><a href="/subDepartments" onClick={Bathroom}>Bathroom</a></li>
                                <li><a href="/subDepartments" onClick={Dental}>Dental Hygiene</a></li>
                                <li><a href="/subDepartments" onClick={BodyHygiene}>Body Hygiene</a></li>
                                <li><a href="/subDepartments" onClick={Shaving}>Shaving/Grooming</a></li>
                                <li><a href="#">Health Care</a></li>
>>>>>>> 6a113119946d4a49aab04dbd5ed03a6395450489
                            </ul>
                        </li>
                    </ul>

        </div> );
}

export default Health;