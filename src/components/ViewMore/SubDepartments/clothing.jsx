import React from 'react';

function Clothing() {

    const allFashion = () =>{
        sessionStorage.setItem('deptCode', 6)
    }
    
    const Men = () =>{
        sessionStorage.setItem('SubdeptCode', 109)
    }
    const Women = () =>{
        sessionStorage.setItem('SubdeptCode', 111)
    }
    const Kids = () =>{
        sessionStorage.setItem('SubdeptCode', 110)
    }
    const Eyewear = () =>{
        sessionStorage.setItem('SubdeptCode', 129)
    }
    const Watches = () =>{
        sessionStorage.setItem('SubdeptCode', 128)
    }
    const Footwear = () =>{
        sessionStorage.setItem('SubdeptCode', 131)
    }

    return (
        <div className="viewMore_departments">
            <h3 className="departmentHeading">Departments</h3>

                    <ul className="departmentItems">
                        
                        <li><h3 className="viewMore_department">Clothing</h3>
                            <ul className="viewMore_subDept">
                                <li><a href="/viewMore" onClick={allFashion}>All Fashion</a></li>
                                <li><a href="/subDepartments" onClick={Men}>Men</a></li>
                                <li><a href="/subDepartments" onClick={Women}>Women</a></li>
                                <li><a href="/subDepartments" onClick={Kids}>Kids</a></li>
                                <li><a href="/subDepartments" onClick={Watches}>Watches</a></li>
                                <li><a href="/subDepartments" onClick={Eyewear}>Eyewear</a></li>
                                <li><a href="/subDepartments" onClick={Footwear}>Footwear</a></li>
                                <li><a href="#">Head gear</a></li>
                            </ul>
                        </li>
                    </ul>

        </div> );
}

export default Clothing;