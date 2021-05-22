import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Deshboard/Header';
import Footer from "../Deshboard/Footer";
import ItemBox from "../Deshboard/itemBox";
import DepartmentsBar from "../Deshboard/departmentsBar"
import {Body, departmentCode} from "../Deshboard/Body";


function SubDepartments(){
    const [items, setItems]= useState([])
    const dept_code = sessionStorage.getItem('SubdeptCode');
    useEffect(()=>
    {
    const getItems= async () =>{
        await axios.post("https://lamp.ms.wits.ac.za/home/s2172765/products.php", {ID: 6 })
        .then(response => setItems(response.data))
        .catch(error => console.log(error))
    };
    getItems()
    },[dept_code])

    return(
        <div>
            <Header/>
            
            <div className="body">
                {/* <DepartmentsBar/> */}
                <div className="items">{items.map((item, index)=><ItemBox category="Daily deals" key={index} itemName={item.NAME.slice(0,30)} orgPrice={item.PRICE} image={item.PICTURE} discount="" rating="0(0)" desc={item.DESCRIPTION}></ItemBox>)}</div>

            </div>
            
            <Footer/>
        </div>

    );
}

export default SubDepartments;