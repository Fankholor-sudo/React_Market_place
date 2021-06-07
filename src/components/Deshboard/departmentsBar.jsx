import React, { Component, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const DepartmentsBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [deptCode, setDeptCode]= useState();
    sessionStorage.setItem('SubdeptCode', deptCode);

    const allFashion = () =>{
        sessionStorage.setItem('deptCode', 6)
    }

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
                                            <DropdownItem onClick={allFashion}>
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
                </div>);
}

export default DepartmentsBar;