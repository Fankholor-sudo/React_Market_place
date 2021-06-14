import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Deshboard/Header';
import Footer from "../Deshboard/Footer";
//import { useWatch } from 'react-hook-form';
import ItemBox from "./itemBox";


function Search(){
    const [items, setItems]= useState([])
    const [searchValue, setSearchValue] = useState('');

	const getSearchRequest = async (searchValue) => {
		const url = `https://lamp.ms.wits.ac.za/home/s2172765/searchProducts.php?ID=${searchValue}`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setItems(responseJson.Search);
		}
	};

	/*useEffect(() => {
		getSearchRequest(searchValue);
	}, [searchValue]);*/

    return (
    <div>
         <Header/>
        <div className="search">
            <div className="input">
                <input type = "text" placeholder = "Search...." onChange={(event) => setSearchValue(event.target.value)} value = {searchValue} /></div>

            <div><button onClick={getSearchRequest(searchValue)}><img className="icons" src="./icons/search.png" alt="search" /></button ></div>

        </div>
        <div className="body">

            <div className="feedCategories">
            
                <div className="titlebtn">
                </div>

                <div className="items">{items.map((item, index)=><ItemBox category="Daily deals" key={index} itemName={item.NAME.slice(0,30)} orgPrice={item.PRICE} image={item.PICTURE} discount="" rating="0(0)" desc={item.DESCRIPTION}></ItemBox>)}</div>

            </div>
        </div>
        <Footer/>
    </div>
    );
}    
     
export default Search;