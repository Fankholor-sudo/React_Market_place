import React from 'react';

function CatNavBar(){
  return (
   
    // nihal comment
      <div className="catDiv">
        
        <a href="#" ><div className="" >
             <span className="catNavBar"><img className="icons" src="./icons/tshirt.svg" alt="clot" /> Clothing</span>  
        </div></a>

        <a href="#" ><div className="">
             <span className="catNavBar"><img className="icons" src="./icons/technology.svg" alt="tech" />Technology</span> 
        </div></a>
        
        <a href="#" ><div className="">
             <span className="catNavBar"><img className="icons" src="./icons/book.svg" alt="book" />Books</span> 
        </div></a>

        <a href="#" ><div className="">
           <span className="catNavBar"><img className="icons" src="./icons/accessories.svg" alt="acc" />Accessories</span>     
        </div></a>

        <a href="#" ><div className="">
          <span className="catNavBar"><img className="icons" src="./icons/sports.svg" alt="sport" />Sport</span> 
        </div></a>

        <a href="#" ><div className="">
             <span className="catNavBar"><img className="icons" src="./icons/stationary.svg" alt="stat" />Stationary</span>
        </div></a>
        
      </div>

  );
}

export default CatNavBar;
