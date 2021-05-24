import React, { Component, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const DepartmentsBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [deptCode, setDeptCode]= useState();
    sessionStorage.setItem('SubdeptCode', deptCode);
    // sessionStorage.setItem('deptCode', deptCode);

    return (
        <div className="departments">
            <h3 className="departmentHeading">Departments</h3>

            {/* <ul className="departmentItems" > */}

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
                                            
                                            {/* <DropdownItem  onClick={()=>setDeptCode(3)}>
                                            <a href="/viewMore">All Books</a>
                                            </DropdownItem> */}

                                            <DropdownItem  onClick={()=>setDeptCode(104)}>
                                            <a href="/subDepartments">Fiction</a>
                                            </DropdownItem>

                                            <DropdownItem  onClick={()=>setDeptCode(103)}>
                                            <a href="/subDepartments">Non Fiction</a>
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
                                        <span class="department">Clothing</span>
                                    </DropdownToggle>


                                    <div className="depDroplist"  >
                                        <DropdownMenu left color="primary">
                                            <DropdownItem onClick={()=>setDeptCode(6)}>
                                                <a href="/viewMore">All Fashion</a>
                                            </DropdownItem>

                                            <DropdownItem  onClick={()=>setDeptCode(109)}>
                                                <a href="/subDepartments">Men</a>
                                            </DropdownItem>

                                            <DropdownItem  onClick={()=>setDeptCode(111)}>
                                                <a href="/subDepartments">Women</a>
                                            </DropdownItem>

                                            <DropdownItem  onClick={()=>setDeptCode(110)}>
                                                <a href="/subDepartments">Kids</a>
                                            </DropdownItem>

                                            <DropdownItem  onClick={()=>setDeptCode(129)}>
                                                <a href="/subDepartments">Eyewear</a>
                                            </DropdownItem>

                                            <DropdownItem  onClick={()=>setDeptCode(131)}>
                                                <a href="/subDepartments">Footwear</a>
                                            </DropdownItem>

                                            <DropdownItem  onClick={()=>setDeptCode(128)}>
                                                <a href="/subDepartments">Watches</a>
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

                                                <DropdownItem  onClick={()=>setDeptCode(100)}>
                                                    <a href="/subDepartments">Laptops</a>
                                                </DropdownItem>

                                                <DropdownItem  onClick={()=>setDeptCode(112)}>
                                                    <a href="/subDepartments">Phones</a>
                                                </DropdownItem>

                                                <DropdownItem  onClick={()=>setDeptCode(121)}>
                                                    <a href="/subDepartments">Monitors</a>
                                                </DropdownItem>

                                                <DropdownItem>
                                                <a href="#">Desktop</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem>
                                                <a href="#">Computer Components</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem>
                                                <a href="#">Computer Accessories</a>
                                                
                                                
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
                                            <span class="department">Health & Hygiene</span>
                                        </DropdownToggle>


                                        <div className="depDroplist"  >
                                            <DropdownMenu left color="primary">

                                                <DropdownItem  onClick={()=>setDeptCode(118)}>
                                                    <a href="/subDepartments">Toiletries</a>
                                                </DropdownItem>

                                                <DropdownItem  onClick={()=>setDeptCode(114)}>
                                                    <a href="/subDepartments">Sanitize & First Aid</a>
                                                </DropdownItem>

                                                <DropdownItem  onClick={()=>setDeptCode(119)}>
                                                    <a href="/subDepartments">Bathroom</a>
                                                </DropdownItem>

                                                <DropdownItem  onClick={()=>setDeptCode(120)}>
                                                    <a href="/subDepartments">Dental Hygiene</a>
                                                </DropdownItem>

                                                <DropdownItem  onClick={()=>setDeptCode(116)}>
                                                    <a href="/subDepartments">Body Hygiene</a>
                                                </DropdownItem>

                                                <DropdownItem  onClick={()=>setDeptCode(115)}>
                                                    <a href="/subDepartments">Shaving/Grooming</a>
                                                </DropdownItem>

                                                <DropdownItem>
                                                <a href="#">Health Care</a>
                                                
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
                                                
                                                <DropdownItem  onClick={()=>setDeptCode(124)}>
                                                    <a href="/subDepartments">Cycling</a>
                                                </DropdownItem>

                                                <DropdownItem  onClick={()=>setDeptCode(122)}>
                                                    <a href="/subDepartments">Gym Equipment</a>
                                                </DropdownItem>

                                                <DropdownItem  onClick={()=>setDeptCode(127)}>
                                                    <a href="/subDepartments">Sport Equipment</a>
                                                </DropdownItem>
                                                
                                                <DropdownItem  onClick={()=>setDeptCode(125)}>
                                                    <a href="/subDepartments">Sports Nutrition</a>
                                                </DropdownItem>

                                                <DropdownItem  onClick={()=>setDeptCode(126)}>
                                                    <a href="/subDepartments">Sports Clothing</a>
                                                </DropdownItem>

                                                <DropdownItem  onClick={()=>setDeptCode(123)}>
                                                    <a href="/subDepartments">Yoga</a>
                                                </DropdownItem>

                                                <DropdownItem>
                                                <a href="#">Individual Sports</a>
                                                
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
                                                <a href="#">Treadmills & Bikes</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Dumbbells</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Yoga Mats</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Recovery</a>
                                                
                                                </DropdownItem>

                                                <DropdownItem >
                                                <a href="#">Sport Wearable Tech</a>
                                                
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