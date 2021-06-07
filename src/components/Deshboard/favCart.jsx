import React from 'react';

function Favorites(){
    return(
        <a href="#" ><div className="fav">
            <img className="favIcon" src="./icons/heart.svg" alt="heart" onClick={() => localStorage.removeItem("CartItems")}/>
        </div></a>
    );
}

function Cart(){
    return(
        <a href="/Cart" ><div className="cart">
            <img className="favIcon" src="./icons/cart2.svg" alt="cart" />
        </div></a>
    );
}

export {Favorites, Cart};