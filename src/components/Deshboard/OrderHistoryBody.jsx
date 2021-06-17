import React,{useState,useEffect} from 'react';
import MyAccountBar from './MyAccountBar';
import OrderBox from './orderBox';
import axios from 'axios';


function OrderBody(){
    const user = JSON.parse(localStorage.getItem('userDetails'));
    const email = user['data'][0]['email'];
   
    return(
        <div className="orderBody">
            <MyAccountBar/>

            <div className="orders">
                <h3 className="">Orders</h3>
                 {GetItems(email)}
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
        },[dept_code,items])
        return (
            <div className="items">{items.map((item)=><OrderBox Name={User} orderNumber={item.ORDER_NO} Product={JSON.parse(item.PRODUCT_NAME)} date={item.DATE} Address = {JSON.parse(item.ADDRESS)} ></OrderBox>)}</div>
             )
    }
}

export default OrderBody;