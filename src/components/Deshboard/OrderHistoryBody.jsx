import React,{useState,useEffect} from 'react';
import MyAccountBar from './MyAccountBar';
import OrderBox from './orderBox';
<<<<<<< HEAD
=======
import { useEffect, useState} from 'react';
>>>>>>> 6a113119946d4a49aab04dbd5ed03a6395450489
import axios from 'axios';


function OrderBody(){
<<<<<<< HEAD
    const user = JSON.parse(localStorage.getItem('userDetails'));
    const email = user['data'][0]['email'];
   
=======

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

>>>>>>> 6a113119946d4a49aab04dbd5ed03a6395450489
    return(

        <div className="orderBody">
            <MyAccountBar/>

            <div className="orders">
                <h3 className="">Orders</h3>
<<<<<<< HEAD
                 {GetItems(email)}
=======
                <div>{items.map((item, index)=> <OrderBox customerName={user.firstName + " " + user.lastName} date={item.DATE} orderNumber={item.ORDER_NO}></OrderBox>)}</div>
>>>>>>> 6a113119946d4a49aab04dbd5ed03a6395450489
            </div>
        </div>


    );

    function GetItems(dept_code){
        const user = JSON.parse(localStorage.getItem('userDetails'));
        const User = user['data'][0]['firstname'] + ' ' + user['data'][0]['lastname'];
        const [items, setItems]= useState([])
        
        useEffect(()=>
        {
        const getItems= async () =>{
            await axios.post("https://lamp.ms.wits.ac.za/home/s2172765/fetchorders.php", {ID: dept_code})
            .then(response => setItems(response.data))
            .catch(error => console.log(error))
        };
        getItems()
        localStorage.setItem("Items",JSON.stringify(items));
        },[dept_code])
        return (
            <div className="items">{items.map((item)=><OrderBox Name={User} orderNumber={item.ORDER_NO} Product={JSON.parse(item.PRODUCT_NAME)} date={item.DATE} Address = {JSON.parse(item.ADDRESS)} ></OrderBox>)}</div>
             )
    }
}

export default OrderBody;