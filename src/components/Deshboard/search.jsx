import React, { useEffect, useState } from 'react';
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

    const stateSetter = () =>{
        sessionStorage.setItem('state', document.getElementById("myInput").value);
    }
    return (
    <div>
        <div className="search">
            <div className="input">
                <input type = "text" placeholder = "Search...." value = {State.SearchValue} id="myInput" /></div>
                
                <a href="/searchResults" onClick={stateSetter}><button><img className="icons" src="./icons/search.png" alt="search" /></button ></a>

        </div>
    </div>
    );
}    

export default Search;