import React from 'react';

function Clothing() {

    return (
        <div className="viewMore_departments">
            <h3 className="departmentHeading">Departments</h3>

                    <ul className="departmentItems">
                        
                        <li><h3 className="viewMore_department">Clothing</h3>
                            <ul className="viewMore_subDept">
                                <li><a href="#">All Fashion</a></li>
                                <li><a href="#">Men</a></li>
                                <li><a href="#">Women</a></li>
                                <li><a href="#">Kids</a></li>
                                <li><a href="#">Watches</a></li>
                                <li><a href="#">Eyewear</a></li>
                                <li><a href="#">Footwear</a></li>
                                <li><a href="#">Head gear</a></li>
                            </ul>
                        </li>
                    </ul>

        </div> );
}

export default Clothing;