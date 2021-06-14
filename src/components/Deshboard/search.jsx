import React, { useEffect, useState } from 'react';
import ItemBox from "./itemBox";
import Header from '../Deshboard/Header';
import Footer from "../Deshboard/Footer";
import axios from 'axios';

function RenderSearch(items){
    return(
        <div>
            <Header/>
            
            <div className="body">

                <div className="feedCategories2">
                
                    <div className="titlebtn">
                        <h2 id="daily"></h2>
                    </div>
                    <div className="items">{items.map((item, index)=><ItemBox category="Daily deals" key={index} itemName={item.NAME.slice(0,30)} orgPrice={item.PRICE} image={item.PICTURE} discount="" rating="0(0)" desc={item.DESCRIPTION}></ItemBox>)}</div>
                </div>


            </div>
            <Footer/>
        </div>
    );
}

function Search(){
    const [items, setItems]= useState([])
    const [searchValue, setSearchValue] = useState('');

    useEffect(()=>
    {
    const getSearchRequest = async (searchValue) =>{
        await axios.post("https://lamp.ms.wits.ac.za/home/s2172765/searchProducts.php", {ID: searchValue})
        .then(response => setItems(response.data))
        .catch(error => console.log(error))
    };
    getSearchRequest(searchValue)
    },[searchValue]);
    console.log(items)
    return (
        <div className="search">
            <div className="input">
                <input type = "text" placeholder = "Search...." onChange={(event) => setSearchValue(event.target.value)} value={searchValue} /></div>
                <div><button onClick={RenderSearch(items)}><img className="icons" src="./icons/search.png" alt="search" /></button ></div>
        </div>
    );
}    
     
export {Search, RenderSearch};