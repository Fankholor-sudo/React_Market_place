import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Deshboard/Header';
import Footer from "../Deshboard/Footer";
//import { useWatch } from 'react-hook-form';
import ItemBox from "./itemBox";


function Search(){
    const [items, setItems]= useState([])
    const [State, setState]= useState('')

  const  handleOnChange = event => { 
        setState(event.target.value);
        
    };
   const handleSearch=()=>{
        const getItems= async () =>{
            await axios.post("https://lamp.ms.wits.ac.za/home/s2172765/searchProducts.php", {ID : State.SearchValue})
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
        };
        getItems()
          };

    return (
    <div>
         <Header/>
        <div className="search">
            <div className="input">
                <input type = "text" placeholder = "Search...." onChange = {event => handleOnChange(event)} value = {State.SearchValue} /></div>

            <div><button onClick = {handleSearch}><img className="icons" src="./icons/search.png" alt="search" /></button ></div>

        </div>
        <Footer/>
    </div>
    );
}    
           

export default Search;

