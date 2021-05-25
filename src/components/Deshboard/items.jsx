import  ItemBox from "./itemBox";
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Items(){ 
    
    return GetItems(3);
}  
function Items2(){    
    return GetItems(1);   
    }
    
function Items3(){    
    return GetItems(6)
    }

 function Items4(){    
    return GetItems(8)
}

 function Items5(){    
    return GetItems(10);   
 }

function GetItems(dept_code){
    const [items, setItems]= useState([])
    
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
        <div className="items">{items.slice(0,4).map((item, index)=><ItemBox category="Daily deals" key={index} itemName={item.NAME.slice(0,30)} orgPrice={item.PRICE} image={item.PICTURE} discount="" rating="0(0)" desc={item.DESCRIPTION}></ItemBox>)}</div>
         )
}
export {Items, Items2, Items3, Items4, Items5};
