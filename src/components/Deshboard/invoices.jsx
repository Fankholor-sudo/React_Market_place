import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Table from "./invoiceTemplate";

function Invoices (){

    const [items, setItems]= useState([])

        const user = JSON.parse(localStorage.getItem('userDetails'));
        const email = user['data'][0]['email'];
        
        useEffect(()=>
        {
        const getItems= async () =>{
            await axios.post("https://lamp.ms.wits.ac.za/home/s2172765/fetchorders.php", {ID: email})
            .then(response => setItems(response.data))
            .catch(error => console.log(error))
        };
        getItems()
        localStorage.setItem("Items",JSON.stringify(items));
        },[email,items])

    return (
        <div>
            {items.map((item, index)=><Table ItemDetails={JSON.parse(item.PRODUCT_NAME)} DATE={item.DATE} OrderNum ={item.ORDER_NO}></Table>)}
        </div>
    )
}

export default Invoices;

        