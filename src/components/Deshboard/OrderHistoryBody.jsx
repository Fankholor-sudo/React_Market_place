import React from 'react';
import MyAccountBar from './MyAccountBar';
import OrderBox from './orderBox';
import { useEffect, useState} from 'react';
import axios from 'axios';


function OrderBody(){

    var user = JSON.parse(localStorage.getItem("userDetails")).data[0];
    console.log(user);
    const [items, setItems]= useState([])
    useEffect(()=>
    {
    const getItems= async () =>{
        await axios.post("https://lamp.ms.wits.ac.za/home/s2172765/fetchorders.php", {user: user.email})
        .then(response => setItems(response.data))
        .catch(error => console.log(error))
    };
    getItems()
    },[user])

    return(
        
        <div className="orderBody">
            <MyAccountBar/>
            
            <div className="orders">
                <h3 className="">Orders</h3>
                <div>{items.map((item, index)=> <OrderBox customerName={user.firstName + " " + user.lastName} date={item.DATE} orderNumber={item.ORDER_NO}></OrderBox>)}</div>
            </div>
        </div>

        
    );
}

export default OrderBody;