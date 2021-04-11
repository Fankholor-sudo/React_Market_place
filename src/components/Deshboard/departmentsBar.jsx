import React,{Component} from 'react';


class DepartmentsBar extends Component{
    render(){
        return  <div className="departments">
                    <h3 className="departmentHeading">Departments</h3>
                    
                    <ul className="departmentItems">
                        
                        <li><a href="#" className="department">Books</a>
                            <ul id="booksStationery" className="subDepartment">
                            <li><a href="#">All Books</a></li>
                                <li><a href="#">Fiction</a></li>
                                <li><a href="#">Non Fiction</a></li>
                                <li><a href="#">Inspired Reading</a></li>
                                <li><a href="#">Children's Books</a></li>
                                <li><a href="#">Christian Living</a></li>
                                <li><a href="#">Cookbooks</a></li>
                                <li><a href="#">Bestsellers</a></li>
                            </ul>
                        </li>
                        
                        <li><a href="#" className="department">Clothing & Bags</a>
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
                        </li>
                        
                        <li><a href="#" className="department">Computer & Electronics</a>
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
                        
                        <li><a href="#" className="department">Healthy & Hygiene</a>
                            <ul id="healthy-hygiene" className="subDepartment">
                                <li><a href="#">Health Care</a></li>
                                <li><a href="#">Toiletries</a></li>
                                <li><a href="#">Sanitize & First Aid</a></li>
                                <li><a href="#">Medicine & Treatments</a></li>
                                <li><a href="#">Health Care Devices</a></li>
                                <li><a href="#">Sexual Health</a></li>
                                <li><a href="#">Wellness Store</a></li>
                            </ul>
                            
                        </li>
                        
                        <li><a href="#" className="department">Sport & Training</a>
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
                                <li><a href="#">Sports Footwear</a></li>
                            </ul>
                        </li>
                        
                        {/* <li><a href="#" className="department">Accessories</a>
                            <ul id="accessories" className="subDepartment">

                            </ul>
                        </li> */}
                        
                        <li><a href="#" className="department">Other</a>
                            <ul id="other" className="subDepartment">

                            </ul>
                        </li>
                    </ul>
                </div>;
    }
}

export default DepartmentsBar;