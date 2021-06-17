import React from 'react';

function Computers() {

    const Laptops = () =>{
        sessionStorage.setItem('SubdeptCode', 100)
    }
    const Phones = () =>{
        sessionStorage.setItem('SubdeptCode', 112)
    }
    const Monitors = () =>{
        sessionStorage.setItem('SubdeptCode', 121)
    }

    return (
        <div className="viewMore_departments2">
            <h3 className="departmentHeading">Departments</h3>

                    <ul className="departmentItems">
                        
                        <li><h3 className="viewMore_department">Computer & Electronics</h3>
                            <ul className="viewMore_subDept">
                                <li><a href="/subDepartments" onClick={Laptops}>Laptops</a></li>
                                <li><a href="/subDepartments" onClick={Phones}>Phones</a></li>
                                <li><a href="/subDepartments" onClick={Monitors}>Monitors</a></li>
                                <li><a href="#">Desktop</a></li>
                                <li><a href="#">Computer Components</a></li>
                                <li><a href="#">Computer Accessories</a></li>
                                <li><a href="#">Networking</a></li>
                                <li><a href="#">Software</a></li>
                                <li><a href="#">Storage Devices</a></li>
                                <li><a href="#">Photography</a></li>
                                <li><a href="#">Action Cams & Drones</a></li>
                                <li><a href="#">Vlogging</a></li>
                            </ul>
                        </li>
                    </ul>

        </div> );
}

export default Computers;