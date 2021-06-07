import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Deshboard/Header';
import Footer from "../Deshboard/Footer";


function Search(){
    const [items, setItems]= useState([])
    const [State, setState]= useState('');

   const handleOnChange = async e => {
    setState(prevState => ({
        ...prevState,
        SearchValue: e.target.value,
    }))
}
    const handleSearch=()=>{
        // const search=(ID)=>{
        //     axios.post(`https://lamp.ms.wits.ac.za/home/s2172765/searchProducts.php?ID=${ID}`)
        //     .then(response => console.log(response.data))
        //     .catch(error => console.log(error))
        // }
        // search(State.SearchValue);
    };
    
    return (
    <div>
         <Header/>
        <div className="search">
            <div className="input">
                <input type = "text" placeholder = "Search...." onChange = {handleOnChange}/></div>

            <div><button onClick = {handleSearch}><img className="icons" src="./icons/search.png" alt="search" /></button ></div>

        </div>
        <Footer/>
    </div>
    );
}    
           

export default Search;

