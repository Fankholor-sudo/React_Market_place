import React,{useState,useEffect} from 'react';
import MyAccountBar from './MyAccountBar';
import OrderBox from './orderBox';
import axios from 'axios';

function OrderBody(){
    return(

        <div className="orderBody">
            <MyAccountBar/>

            <div className="orders">
                <h3 className="">Orders</h3>
                {/* <OrderBox customerName="User1" date="Mon, 19 Apr 2021" orderNumber="000001"/>
                <OrderBox customerName="User1" date="Tue, 20 Apr 2021" orderNumber="000002"/>
                <OrderBox customerName="User1" date="Wed, 21 Apr 2021" orderNumber="000003"/> */}
                {GetItems(3)}
            </div>
        </div>


    );

    function GetItems(dept_code){
        const [items, setItems]= useState([])

        var dt = new Date();
        var today =`${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`;



        useEffect(()=>
        {
        const getItems= async () =>{
            await axios.post("https://lamp.ms.wits.ac.za/home/s2172765/products.php", {ID: dept_code})
            .then(response => setItems(response.data))
            .catch(error => console.log(error))
        };
        getItems()
        },[dept_code])

        return (
            <div className="items">{items.slice(0,4).map((item, index)=><OrderBox customerName="User1" orderNumber={index}  orgPrice={item.PRICE} image={item.PICTURE} date={today}></OrderBox>)}</div>
             )
    }
}

export default OrderBody;