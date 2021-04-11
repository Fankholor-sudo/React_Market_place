import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'

const DropdownBtn = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div className='dropdown'>
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
            All Departments
        </DropdownToggle>

        <div className='droplist'>
        <DropdownMenu>
            <DropdownItem>Books & Courses</DropdownItem>
            <DropdownItem>Cellphones & Wearables</DropdownItem>
            <DropdownItem>Fashion</DropdownItem>
            <DropdownItem>Computers & Electronics</DropdownItem>
            <DropdownItem>Gaming</DropdownItem>
            <DropdownItem>Health & Hygiene</DropdownItem>
            <DropdownItem>Appliances</DropdownItem>
            <DropdownItem>Office & Stationery</DropdownItem>
            <DropdownItem>Sport & Training</DropdownItem>
            <DropdownItem>Toys</DropdownItem>
        </DropdownMenu>
        </div>

        </ButtonDropdown>
    </div>
  );
}

export default DropdownBtn;
