import React from 'react';
import DepartmentsBar from "./departmentsBar"
import {Items, Items2, Items3} from "./items";

function Body(){
    return(
    <div className="body">
        <DepartmentsBar />

        <div className="feed">
            
            <div className="feedCategories">
                <div className="titlebtn">
                    <h2 id="daily">Books</h2>
                    <button href="#">View More</button>
                </div>

                <Items />
            </div>

            <div className="feedCategories">
                <div className="titlebtn">
                    <h2 id="computer">Computer & Electronics</h2>
                    <button href="#">View More</button>
                </div>

                <Items2 />
            </div>

            <div className="feedCategories">
                <div className="titlebtn">
                    <h2 id="computer">Clothing</h2>
                    <button href="#">View More</button>
                </div>

                <Items3 />
            </div>

            <div className="feedCategories">
                <div className="titlebtn">
                    <h2 id="computer">Gaming</h2>
                    <button href="#">View More</button>
                </div>

                <Items3 />
            </div> 

        </div>

    </div>

    );
}

export default Body;