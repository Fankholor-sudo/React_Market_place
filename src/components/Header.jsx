import React from 'react';
import DropdownBtn from "./dropdownBtn";
import Example from "./regNavBar";
import Search from "./search";
import {Favorites, Cart} from "./favCart";

function Header(){
    return(
    
        <div className="parent">
            <img className="logo" src="./images/LOGO.svg" alt = "App Logo"/>
                
            <div className="dropSearch">
                <DropdownBtn />
                <Search />
            </div>
                
            <div className="regFavCart">
                 <Example/>

               <div className="favCart">
                    <Favorites />
                    <Cart />
                </div>
            </div>
                
        </div>
    );
}

export default Header;