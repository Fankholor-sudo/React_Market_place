import React, { useState } from 'react';
import axios from 'axios';
//import { useWatch } from 'react-hook-form';               
import ItemBox from "./itemBox";


function Search(){
    sessionStorage.setItem("search", '')
    const [state, setState]= useState('')

    const handleSearch = async e => {
        setState(prevState => ({
            ...prevState,
            item: e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(state.item != ''){
            const URL = "https://lamp.ms.wits.ac.za/home/s2172765/searchProducts.php"
            axios.post(URL,{ID: state.item}).then(res => sessionStorage.setItem('search',JSON.stringify(res))).catch(err => sessionStorage.setItem())

        }
    }
    return (
    <div>
         {/* <Header/> */}
        <div className="search">
            <div className="input">
                <input type = "text"  /></div>

            <div><button ><img className="icons" src="./icons/search.png" alt="search" /></button ></div>

        </div>
        
    </div>
    );
}    
           

export default Search;

