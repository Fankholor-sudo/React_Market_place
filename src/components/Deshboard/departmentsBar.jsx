import React, { Component, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const DepartmentsBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="departments">
            <h3 className="departmentHeading">Departments</h3>

            <div>
                <Navbar light expand="md" >
                    <NavbarToggler onClick={toggle}  />
                    <Collapse isOpen={isOpen} navbar >
                        <Nav navbar >
                            <div >
                                    
                                <UncontrolledDropdown nav inNavbar >

                                    <DropdownToggle nav caret caret-color="primary" >
                                        <span class="department" >Books</span>
                                    </DropdownToggle>

                                    <div className="depDroplist"  >
                                        
                                        <DropdownMenu left color="primary" >
                                            <DropdownItem  >
                                            <a href="#">Fiction</a>
                                            {/* Fiction */}
                                            </DropdownItem>

                                            <DropdownItem>
                                            <a href="#">Non Fiction</a>
                                            
                                            </DropdownItem>

                                            <DropdownItem>
                                            <a href="#">Inspired Reading</a>
                                            
                                            </DropdownItem>

                                            <DropdownItem>
                                            <a href="#">Children's Books</a>
                                            
                                            </DropdownItem>

                                            <DropdownItem >
                                            <a href="#">Christian Living</a>
                                            
                                            </DropdownItem>

                                            <DropdownItem >
                                            <a href="#">Cookbooks</a>
                                               
                                            </DropdownItem>

                                            <DropdownItem >
                                            <a href="#">Bestsellers</a>
                                            
                                            </DropdownItem>

                                        </DropdownMenu>
                                    </div>
                                </UncontrolledDropdown> 
                            </div>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>

            <div>
            <Navbar light expand="md" >
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar >
                        <Nav navbar>
                            <div>
                                    
                                <UncontrolledDropdown nav inNavbar >

                                    <DropdownToggle nav caret caret-color="warning" >
                                        <span class="department">Clothing & Bags</span>
                                    </DropdownToggle>


                                    <div className="depDroplist"  >
                                        <DropdownMenu left color="primary">
                                            <DropdownItem>
                                            <a href="#">All Fashion</a>
                                            
                                            </DropdownItem>

                                            <DropdownItem>
                                            <a href="#">Men</a>
                                            
                                            </DropdownItem>

                                            <DropdownItem>
                                            <a href="#">Women</a>
                                            
                                            </DropdownItem>

                                            <DropdownItem>
                                            <a href="#">Kids</a>
                                            
                                            </DropdownItem>

                                            <DropdownItem >
                                            <a href="#">Watches</a>
                                            
                                            </DropdownItem>

                                            <DropdownItem >
                                            <a href="#">Eyewear</a>
                                               
                                            </DropdownItem>

                                            <DropdownItem >
                                            <a href="#">Footwear</a>
                                            
                                            </DropdownItem>

                                            <DropdownItem >
                                            <a href="#">Head gear</a>
                                            
                                            </DropdownItem>

                                        </DropdownMenu>
                                    </div>
                                </UncontrolledDropdown> 
                            </div>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>






                <div>
                <Navbar light expand="md" >
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar >
                            <Nav navbar>
                                <div>
                                    
                                    <UncontrolledDropdown nav inNavbar >

                                        <DropdownToggle nav caret caret-color="warning" >
                                            <span class="department">Computer & Electronics</span>
                                        </DropdownToggle>


                                        <div className="depDroplist"  >
                                            <DropdownMenu left color="primary">
                                                <DropdownItem>
                                                <a href="#">Desktop</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem>
                                                <a href="#">Monitors</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem>
                                                <a href="#">Computer Components</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem>
                                                <a href="#">Computer Accessories</a>
                                                
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Laptops</a>
                                                
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Laptop Accessories</a>
                                                   
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Networking</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Software</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Storage Devices</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Photography</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Action Cams & Drones</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                    <a href="#">Vlogging</a>
                                                
                                                </DropdownItem>

                                            </DropdownMenu>
                                        </div>
                                    </UncontrolledDropdown> 
                                </div>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>



                <div>
                <Navbar light expand="md" >
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar >
                            <Nav navbar>
                                <div>
                                    
                                    <UncontrolledDropdown nav inNavbar >

                                        <DropdownToggle nav caret caret-color="warning" >
                                            <span class="department">Healthy & Hygiene</span>
                                        </DropdownToggle>


                                        <div className="depDroplist"  >
                                            <DropdownMenu left color="primary">
                                                <DropdownItem>
                                                <a href="#">Health Care</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem>
                                                <a href="#">Toiletries</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem>
                                                <a href="#">Sanitize & First Aid</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem>
                                                <a href="#">Medicine & Treatments</a>
                                                
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Health Care Devices</a>
                                                
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Sexual Health</a>
                                                   
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Wellness Store</a>
                                                
                                                </DropdownItem>

                                            </DropdownMenu>
                                        </div>
                                    </UncontrolledDropdown> 
                                </div>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>


                <div>
                <Navbar light expand="md" >
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar >
                            <Nav navbar>
                                <div>
                                    
                                    <UncontrolledDropdown nav inNavbar >

                                        <DropdownToggle nav caret caret-color="warning" >
                                            <span class="department">Sport & Training</span>
                                        </DropdownToggle>


                                        <div className="depDroplist"  >
                                            <DropdownMenu left color="primary">
                                                <DropdownItem>
                                                <a href="#">All Sport</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem>
                                                <a href="#">Individual Sports</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem>
                                                <a href="#">Cycling</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem>
                                                <a href="#">Running</a>
                                                
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Team Sports</a>
                                                
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Watersports</a>
                                                   
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Gym Equipment</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Treadmills & Bikes</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Dumbbells</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Yoga</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Yoga Mats</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Recovery</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Sports Nutrition</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Sport Wearable Tech</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Sports Clothing</a>
                                                
                                                </DropdownItem>

                                            </DropdownMenu>
                                        </div>
                                    </UncontrolledDropdown> 
                                </div>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>



                <div>
                <Navbar light expand="md" >
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar >
                            <Nav navbar>
                                <div>
                                    
                                    <UncontrolledDropdown nav inNavbar >

                                        <DropdownToggle nav caret caret-color="warning" >
                                            <span class="department">Other</span>
                                        </DropdownToggle>


                                        <div className="depDroplist"  >
                                            <DropdownMenu left color="primary">
                                                <DropdownItem>
                                                <a href="#">Others</a>
                                                
                                                </DropdownItem>

                                                

                                            </DropdownMenu>
                                        </div>
                                    </UncontrolledDropdown> 
                                </div>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>














                {/* <li><a href="#" className="department">Books</a>   
                <ul id="booksStationery" className="subDepartment">
                        
                        <li><a href="#">Non Fiction</a></li>
                        <li><a href="#">Inspired Reading</a></li>
                        <li><a href="#">Children's Books</a></li>
                        <li><a href="#">Christian Living</a></li>
                        <li><a href="#">Cookbooks</a></li>
                        <li><a href="#">Bestsellers</a></li>

                    </ul>
                    
                </li> */}

                {/* <li><a href="#" className="department">Clothing & Bags</a>
                    <ul id="clothing-bags" className="subDepartment">
                        <li><a href="#">All Fashion</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Kids</a></li>
                        <li><a href="#">Watches</a></li>
                        <li><a href="#">Eyewear</a></li>
                        <li><a href="#">Footwear</a></li>
                        <li><a href="#">Head gear</a></li>
                    </ul>
                </li> */}

                {/* <li><a href="#" className="department">Computer & Electronics</a>
                    <ul id="computerElectronics" className="subDepartment">
                        <li><a href="#">Desktop</a></li>
                        <li><a href="#">Monitors</a></li>
                        <li><a href="#">Computer Components</a></li>
                        <li><a href="#">Computer Accessories</a></li>
                        <li><a href="#">Laptops</a></li>
                        <li><a href="#">Laptop Accessories</a></li>
                        <li><a href="#">Networking</a></li>
                        <li><a href="#">Software</a></li>
                        <li><a href="#">Storage Devices</a></li>
                        <li><a href="#">Photography</a></li>
                        <li><a href="#">Action Cams & Drones</a></li>
                        <li><a href="#">Vlogging</a></li>
                    </ul>
                </li> */}

                {/* <li><a href="#" className="department">Healthy & Hygiene</a>
                    <ul id="healthy-hygiene" className="subDepartment">
                        <li><a href="#">Health Care</a></li>
                        <li><a href="#">Toiletries</a></li>
                        <li><a href="#">Sanitize & First Aid</a></li>
                        <li><a href="#">Medicine & Treatments</a></li>
                        <li><a href="#">Health Care Devices</a></li>
                        <li><a href="#">Sexual Health</a></li>
                        <li><a href="#">Wellness Store</a></li>
                    </ul>

                </li> */}

                {/* <li><a href="#" className="department">Sport & Training</a>
                    <ul id="sporting" className="subDepartment">
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
                        <li><a href="#">Sports Clothing</a></li>
                    </ul>
                </li> */}

                {/* <li><a href="#" className="department">Other</a>
                    <ul id="other" className="subDepartment">

                    </ul>
                </li> */}
            {/* </ul> */}
        </div>);
}

export default DepartmentsBar;