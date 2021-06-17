import React from 'react';

function CatNavBar(){
  const allBooks = () =>{
    sessionStorage.setItem('deptCode', 3)
}

const allClothing = () =>{
  sessionStorage.setItem('deptCode', 6)
}

const allElectro = () =>{
  sessionStorage.setItem('deptCode', 1)
}

const allSports = () =>{
  sessionStorage.setItem('deptCode', 10)
}

const allHygiene = () =>{
  sessionStorage.setItem('deptCode', 8)
}
  return (
   
      <div className="catDiv">
        <a href='/viewMore' onClick={allBooks}><div className="">
             <span className="catNavBar"><img className="icons" src="./icons/book.svg" alt="book" />Books</span> 
        </div></a>

        <a href='/viewMore' onClick={allClothing}><div className="">
             <span className="catNavBar"><img className="icons" src="./icons/tshirt.svg" alt="clot" /> Clothing</span>  
        </div></a>

        <a href='/viewMore' onClick={allElectro}><div className="">
             <span className="catNavBar"><img className="icons" src="./icons/technology.svg" alt="tech" />Electronics</span> 
        </div></a>

        <a href='/viewMore' onClick={allHygiene}><div className="">
           <span className="catNavBar"><img className="icons" src="./icons/shampoo.png" alt="health" />Health & Hygiene</span>     
        </div></a>

        <a href='/viewMore' onClick={allSports}><div className="">
          <span className="catNavBar"><img className="icons" src="./icons/sports.svg" alt="sport" />Sport & Training</span> 
        </div></a>
        
      </div>

  );
}

export default CatNavBar;



// import React, { useState } from 'react';
// import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap';

// const Example = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);
{/* <div className="catDiv">
<Navbar className="catNavBar" light expand="md">
  <NavbarToggler onClick={toggle} />
  <Collapse isOpen={isOpen} navbar>
    <Nav className="mr-auto" navbar>
    <div className="">
      <NavItem>
        <NavLink href=""><span className="catNavBar"><img className="icons" src="./icons/tshirt.svg" alt="clot" /> Clothing</span></NavLink>
      </NavItem>
      </div>

      <NavItem>
        <NavLink href=""><span className="catNavBar"><img className="icons" src="./icons/technology.svg" alt="tech" />Technology</span></NavLink>
      </NavItem>
      <NavItem>
        <NavLink href=""><span className="catNavBar"><img className="icons" src="./icons/book.svg" alt="book" />Books</span></NavLink>
      </NavItem>
      <NavItem>
        <NavLink href=""><span className="catNavBar"><img className="icons" src="./icons/accessories.svg" alt="acc" />Accessories</span></NavLink>
      </NavItem>
      <NavItem>
        <NavLink href=""><span className="catNavBar"><img className="icons" src="./icons/sports.svg" alt="sport" />Sport</span></NavLink>
      </NavItem>
      <NavItem>
        <NavLink href=""><span className="catNavBar"><img className="icons" src="./icons/stationary.svg" alt="stat" />Stationary</span></NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>
</div> */}