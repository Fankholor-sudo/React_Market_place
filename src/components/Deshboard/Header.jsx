import React from 'react';
import DropdownBtn from "./dropdownBtn";
import Example from "./regNavBar";
import Search from "./search";
import { Favorites, Cart } from "./favCart";

function Header() {
    return (

        <div className="parent">
            <div className="logo"><img src="./images/LOGO.png" alt="App Logo" /></div>

            <div className="dropSearch">
                {localStorage.getItem("userDetails") !== null ? (
                    <div className="regNavBar">
                        {console.log()}
                        {JSON.parse(localStorage.getItem("userDetails")).data[0].firstname + " " + JSON.parse(localStorage.getItem("userDetails")).data[0].lastname}
                    </div>

                ) : ""}
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