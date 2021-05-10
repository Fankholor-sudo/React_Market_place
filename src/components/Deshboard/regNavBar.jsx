import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.removeItem("userDetails");
    history.push('/LoginForm')
  }

  return (
    <div>

      <Navbar color="regNavBar" light expand="md" >
        <NavbarToggler onClick={toggle}  />
        <Collapse isOpen={isOpen} navbar >
          <Nav navbar>

            {localStorage.getItem("userDetails") === null ? (
              <div>
                <Row>
                  <NavItem>
                    <NavLink href="/LoginForm"><span className="regNavBar">Login</span></NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink href="/Register"><span className="regNavBar">Register</span></NavLink>
                  </NavItem>
                </Row>
              </div>


            ) :
              <div>
                <Row>
                  <NavItem>
                    <NavLink >
                      <span className="regNavBar">
                      {localStorage.getItem("userDetails") !== null ? (
                    <div className="regNavBar">
                        {console.log()}
                        {"Hi, " + JSON.parse(localStorage.getItem("userDetails")).data[0].firstname + " " + JSON.parse(localStorage.getItem("userDetails")).data[0].lastname}
                    </div>

                ) : ""}
                      </span>
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink href="/OrderHistory"><span className="regNavBar">Orders</span></NavLink>
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

                        <DropdownItem>
                          <NavItem>
                            <NavLink href="/LoginForm"><span style={{ marginLeft: '-5px' }} onClick={handleSubmit}>Log out</span></NavLink>
                          </NavItem>
                        </DropdownItem>

                      </DropdownMenu>
                    </div>
                  </UncontrolledDropdown>



                </Row>
              </div>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;