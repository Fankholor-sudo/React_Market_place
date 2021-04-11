import React from 'react';
import Items from './items'
function Containers(){
    return (
        <div>   
            <div id ="departments-bar" className="departments-bar"></div>
         
            <div id="modal" class="modal"></div>
                
            <div class="container">
                <div id="daily"></div>
                <div id="daily-items" class="items"></div>
                
                <div id="books-stationery"></div>
                <div id="books-stationery-items" class="items"></div>
                
                <div id="clothing"></div>
                <div id="clothing-items" class="items"></div>
                
                <div id="computer-electronics"></div>
                <div id="computer-electronics-items" class="items"></div>

                <div class="search-items"></div>
            </div>
  
            
        </div>
    );
}

export default Containers;