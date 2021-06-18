import React, { useState } from 'react';

function Search(){
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
                
                <a data-testid="btn" href="/searchResults" onClick={stateSetter}><button><img className="icons" src="./icons/search.png" alt="search" /></button ></a>

        </div>
    </div>
    );
}    

export default Search;

