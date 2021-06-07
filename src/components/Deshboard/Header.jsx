import React from 'react';
import DropdownBtn from "./dropdownBtn";
import Example from "./regNavBar";
import Search from "./search";
import { Favorites, Cart } from "./favCart";

function Header() {
    return (

        <div className="parent">
            <a href="LandingPage"><div className="logo"><img src="./images/LOGO.png" alt="App Logo" /></div></a>

            <div className="dropSearch">
                <DropdownBtn />
                <Search />
            </div>

            <div className="regFavCart">
                <Example />

                <div className="favCart">
                    <Favorites />
                    <Cart />
                </div>
            </div>

        </div>
    );
}

export default Header;