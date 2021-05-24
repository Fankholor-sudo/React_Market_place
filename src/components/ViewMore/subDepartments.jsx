import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Deshboard/Header';
import Footer from "../Deshboard/Footer";
import ItemBox from "../Deshboard/itemBox";
import DepartmentsBar from "../Deshboard/departmentsBar"
import {Body, departmentCode} from "../Deshboard/Body";
import Books from "./SubDepartments/books"
import Clothing from "./SubDepartments/clothing"
import Computers from "./SubDepartments/computers"
import Sports from "./SubDepartments/sports"
import Health from "./SubDepartments/health"


function SubDepartments(){
    const [items, setItems]= useState([])
    const dept_code = sessionStorage.getItem('SubdeptCode');
    const book_dept_code = sessionStorage.getItem('BookdeptCode');
    
    useEffect(()=>
    {
    const getItems= async () =>{
        await axios.post("https://lamp.ms.wits.ac.za/home/s2172765/sub_products.php", {ID: dept_code })
        .then(response => setItems(response.data))
        .catch(error => console.log(error))
    };
    getItems()
    },[dept_code])

    // SET THE CATEGORY TITLE DYNAMICALLY
    var category = "";
    var dept = <Clothing/>;

    if (dept_code == 100 || dept_code == 112 || dept_code == 121){
        category = "Computer & Electronics";
        dept = <Computers/>;
        
    }
    else if (dept_code == 104 || dept_code == 103 || book_dept_code == 104 || book_dept_code == 103){
        category = "Books";
        dept = <Books/>;

    }
    else if (dept_code == 109 || dept_code == 111 || dept_code == 110 || dept_code == 128){
        category = "Clothing";
        dept = category;
        dept = <Clothing/>;

    }

    else if (dept_code == 122 || dept_code == 123 || dept_code == 127 || dept_code == 125 || dept_code == 126 || dept_code == 124){
        category = "Sports & Training";
        dept = <Sports/>;
    }

    else if (dept_code == 114 || dept_code == 115|| dept_code == 116 || dept_code == 118 || dept_code == 120 || dept_code == 119){
        category = "Health & Hygiene";
        dept = category;
        dept = <Health/>;

    }

    return(
        <div>
            <Header/>
            
            <div className="body">
                {dept}

                <div className="feedCategories2">
                
                    <div className="titlebtn">
                        <h2 id="daily">{category}</h2>
                    </div>

                    <div className="items">{items.map((item, index)=><ItemBox category="Daily deals" key={index} itemName={item.NAME.slice(0,30)} orgPrice={item.PRICE} image={item.PICTURE} discount="" rating="0(0)" desc={item.DESCRIPTION}></ItemBox>)}</div>

                </div>


            </div>
            
            <Footer/>
        </div>

    );
}

export default SubDepartments;