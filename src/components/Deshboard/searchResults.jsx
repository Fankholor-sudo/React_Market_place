import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from "./Footer";
import Nav from './catNavBar';
import ItemBox from "./itemBox";


function Search(){
    const [items, setItems]= useState([])
    const state = sessionStorage.getItem('state');
    useEffect(()=>
    {
    const getItems= async () =>{
        await axios.post("https://lamp.ms.wits.ac.za/home/s2172765/searchProducts.php", {ID: state})
        .then(response => setItems(response.data))
        .catch(error => console.log(error))
    };
    getItems()
    },[state])

    return (
    <div>
        <Header />
        <Nav />

        <div>
            <h1>Search Results for  "{state}": </h1>
        </div>
        <div className="items">{items.slice(0,5).map((item, index)=><ItemBox category="Daily deals" key={index} itemName={item.NAME.slice(0,30)} orgPrice={item.PRICE} image={item.PICTURE} discount="" rating="0(0)" desc={item.DESCRIPTION}></ItemBox>)}</div>
        <Footer/>
    </div>
    );
}    

export default Search;