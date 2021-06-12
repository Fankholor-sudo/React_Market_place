import React, { useState } from 'react';
import axios from 'axios';


function Search(){
    //const [items, setItems]= useState([])
    sessionStorage.setItem('search','')
    const [State, setState]= useState({item:""})

  const  handleSearch = async e => { 
        setState(prevState =>({
            ...prevState,
            item: e.target.value
        }))
        
    };
   const handleSubmit= e =>{
       e.preventDefault();
       if(State.item != ""){
           const URL = "https://lamp.ms.wits.ac.za/home/s2172765/searchProducts.php" 
            axios.post(URL, {ID : State.item})
           .then(response => sessionStorage.setItem('search',JSON.stringify(response)))
            .catch(error => sessionStorage.setItem('search',JSON.stringify(error)))
       }

    }
        

    return (
    <div>
         
        <div className="search">
            <div className="input">
                <input 
                type = "text"
                placeholder = "Search...." 
                onChange = {handleSearch} /></div>

            <div><button type = 'submit'    
                        onClick = {handleSubmit}><img className="icons" src="./icons/search.png" alt="search" /></button ></div>

        </div>
        
    </div>
    );
}    
           

export default Search;

