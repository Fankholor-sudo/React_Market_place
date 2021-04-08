import React,{Component} from 'react';


class DepartmentsBar extends Component{
    render(){
        return  <div className="departments">
                    <h3 className="departmentHeading">Departments</h3>
                    
                    <ul className="departmentItems">
                        
                        <li><a>Books & Stationery</a>
                            <ul id="booksStationery" className="subDepartment">

                            </ul>
                        </li>
                        
                        <li><a>Clothing & Bags</a>
                            <ul id="clothing-bags" className="subDepartment">
                                <li>All Fashion</li>
                                <li>Men</li>
                                <li>Women</li>
                                <li>Kids</li>
                                <li>Watches</li>
                                <li>Eyewear</li>
                                <li>Footwear</li>
                                <li>Haed gear</li>
                            </ul>
                        </li>
                        
                        <li><a>Computer & Electronics</a>
                            <ul id="computerElectronics" className="subDepartment">
                                <li>Desktop</li>
                                <li>Monitors</li>
                                <li>Computer Components</li>
                                <li>Computer Accessories</li>
                                <li>Laptops</li>
                                <li>Laptop Accessories</li>
                                <li>Networking</li>
                                <li>Software</li>
                                <li>Storage Devices</li>
                                <li>Photography</li>
                                <li>Action Cams & Drones</li>
                                <li>Vlogging</li>   
                            </ul>
                        </li>
                        
                        <li><a>Healthy & Hygiene</a>
                            <ul id="healthy-hygiene" className="subDepartment">

                            </ul>
                        </li>
                        
                        <li><a>Sporting</a>
                            <ul id="sporting" className="subDepartment">

                            </ul>
                        </li>
                        
                        <li><a>Accessories</a>
                            <ul id="accessories" className="subDepartment">

                            </ul>
                        </li>
                        
                        <li><a>Other</a>
                            <ul id="other" className="subDepartment">

                            </ul>
                        </li>
                    </ul>
                </div>;
    }
}

export default DepartmentsBar;