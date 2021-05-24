import React, { Component, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function Books() {
    const [deptCode, setDeptCode]= useState();
    // sessionStorage.setItem('SubdeptCode', deptCode);
    // sessionStorage.setItem('deptCode', deptCode);

    return (
        <div className="viewMore_departments">
            <h3 className="departmentHeading">Departments</h3>

                    <ul className="departmentItems">
                        
                        <li><h3 className="viewMore_department">Books</h3>
                            <ul className="viewMore_subDept">
                                <li><a href="/subDepartments">All Books</a></li>
                                <li><a href="/subDepartments" onClick={()=>setDeptCode(104)}>Fiction</a></li>
                                <li><a href="/subDepartments">Non Fiction</a></li>
                                <li><a href="#">Inspired Reading</a></li>
                                <li><a href="#">Children's Books</a></li>
                                <li><a href="#">Christian Living</a></li>
                                <li><a href="#">Cookbooks</a></li>
                                <li><a href="#">Bestsellers</a></li>
                            </ul>
                        </li>
                    </ul>

        </div> );
}

export default Books;