<<<<<<< HEAD
import React from 'react';
=======
import React,{useState} from 'react';
>>>>>>> 6a113119946d4a49aab04dbd5ed03a6395450489

function Books() {

    // sessionStorage.clear();
    // const [deptCode, setDeptCode] = useState(null)
    // sessionStorage.setItem('SubdeptCode', deptCode)

    // these are the functions for individual links, the codes im passing are just random because i dont know them
    const allBooks = () =>{
        sessionStorage.setItem('deptCode', 3)
    }
    
    const Fiction = () =>{
        sessionStorage.setItem('SubdeptCode', 104)
    }
    const NonFiction = () =>{
        sessionStorage.setItem('SubdeptCode', 103)
    }
    const InspiredReading = () =>{
        sessionStorage.setItem('SubdeptCode', 123)
    }
    const ChildrenBooks = () =>{
        sessionStorage.setItem('SubdeptCode', 114)
    }
    const ChristianLiving = () =>{
        sessionStorage.setItem('SubdeptCode', 113)
    }
    const Cookbooks = () =>{
        sessionStorage.setItem('SubdeptCode', 109)
    }
    const Bestsellers = () =>{
        sessionStorage.setItem('SubdeptCode', 114)
    }

    return (
        <div className="viewMore_departments">
            <h3 className="departmentHeading">Departments</h3>

                    <ul className="departmentItems">
                        
                        <li><h3 className="viewMore_department">Books</h3>
                            <ul className="viewMore_subDept">

                                <li><a href="/viewMore" onClick={allBooks}>All Books</a></li>

                                <li><a href="/subDepartments" onClick={Fiction}>Fiction</a></li>
                                <li><a href="/subDepartments" onClick={NonFiction}>Non Fiction</a></li>
                                <li><a href="#" >Inspired Reading</a></li>
                                <li><a href="#" >Children's Books</a></li>
                                <li><a href="#" >Christian Living</a></li>
                                <li><a href="#" >Cookbooks</a></li>
                                <li><a href="#" >Bestsellers</a></li>
                            </ul>
                        </li>
                    </ul>

        </div> );
}

export default Books;