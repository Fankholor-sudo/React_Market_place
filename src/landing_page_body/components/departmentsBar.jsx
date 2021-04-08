import React,{Component} from 'react';


class DepartmentsBar extends Component{
    render(){
        return  <div className="departments">
                    <h3 className="departmentHeading">Departments</h3>
                    
                    <ul className="departmentItems">
                        
                        <li><a href="#">Books & Stationery</a>
                            <ul id="booksStationery" className="subDepartment">

                            </ul>
                        </li>
                        
                        <li><a href="#">Clothing & Bags</a>
                            <ul id="clothing-bags" className="subDepartment">
                                <li><a href="#">All Fashion</a></li>
                                <li><a href="#">Men</a></li>
                                <li><a href="#">Women</a></li>
                                <li><a href="#">Kids</a></li>
                                <li><a href="#">Watches</a></li>
                                <li><a href="#">Eyewear</a></li>
                                <li><a href="#">Footwear</a></li>
                                <li><a href="#">Haed gear</a></li>
                            </ul>
                        </li>
                        
                        <li><a href="#">Computer & Electronics</a>
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
                        </li>
                        
                        <li><a href="#">Healthy & Hygiene</a>
                            <ul id="healthy-hygiene" className="subDepartment">

                            </ul>
                        </li>
                        
                        <li><a href="#">Sporting</a>
                            <ul id="sporting" className="subDepartment">

                            </ul>
                        </li>
                        
                        <li><a href="#">Accessories</a>
                            <ul id="accessories" className="subDepartment">

                            </ul>
                        </li>
                        
                        <li><a href="#">Other</a>
                            <ul id="other" className="subDepartment">

                            </ul>
                        </li>
                    </ul>
                </div>;
    }
}

export default DepartmentsBar;