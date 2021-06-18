import React, { Component, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function Sports() {

    const Cycling = () =>{
        sessionStorage.setItem('SubdeptCode', 124)
    }
    
    const Gym = () =>{
        sessionStorage.setItem('SubdeptCode', 122)
    }
    const SportsEquipment = () =>{
        sessionStorage.setItem('SubdeptCode', 127)
    }
    const SportsNutrition = () =>{
        sessionStorage.setItem('SubdeptCode', 125)
    }
    const SportsClothing = () =>{
        sessionStorage.setItem('SubdeptCode', 126)
    }
    const Yoga = () =>{
        sessionStorage.setItem('SubdeptCode', 123)
    }

    return (
        <div className="viewMore_departments2">
            <h3 className="departmentHeading">Departments</h3>

                    <ul className="departmentItems">
                        
                        <li><h3 className="viewMore_department">Sports & Training</h3>
                            <ul className="viewMore_subDept">
                                <li><a href="/subDepartments" onClick={Cycling}>Cycling</a></li>
                                <li><a href="/subDepartments" onClick={Gym}>Gym Equipment</a></li>
                                <li><a href="/subDepartments" onClick={SportsEquipment}>Sports Equipment</a></li>
                                <li><a href="/subDepartments" onClick={SportsNutrition}>Sports Nutrition</a></li>
                                <li><a href="/subDepartments" onClick={SportsClothing}>Sports Clothing</a></li>
                                <li><a href="/subDepartments" onClick={Yoga}>Yoga</a></li>
                                <li><a href="#">Individual Sports</a></li>
                                <li><a href="#">Running</a></li>
                                <li><a href="#">Team Sports</a></li>
                                <li><a href="#">Watersports</a></li>
                                <li><a href="#">Recovery</a></li> 
                                <li><a href="#">Sport Wearable Tech</a></li>
                                <li><a href="#">Sports Footwear</a></li>
                            </ul>
                        </li>
                    </ul>

        </div> );
}

export default Sports;