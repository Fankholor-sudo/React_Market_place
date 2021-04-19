import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="regNavBar" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav  navbar>
          <NavItem>
              <NavLink href="/LoginForm"><span className="regNavBar">Login</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Register"><span className="regNavBar">Register</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><span className="regNavBar">Orders</span></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret caret-color="warning">
              <span className="regNavBar">My Account</span>
              </DropdownToggle>
              
              <div className="droplist">
                <DropdownMenu right color="primary">
                    <DropdownItem>
                    My Account
                    </DropdownItem>

                    <DropdownItem>
                    Track Order
                    </DropdownItem>

                    <DropdownItem>
                    Invoices
                    </DropdownItem>

                    <DropdownItem>
                    Personal Details
                    </DropdownItem>

                    <DropdownItem>
                    Help
                    </DropdownItem>
                </DropdownMenu>
              </div>

            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
