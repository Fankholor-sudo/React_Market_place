import React, {useState} from 'react';
import DepartmentsBar from "./departmentsBar"
import {Items, Items2, Items3} from "./items";

function departmentCode(num){
    return num;
}

function Body(){
    const [deptCode, setDeptCode]= useState();
    sessionStorage.setItem('deptCode', deptCode);
    
    
    return(
    <div className="body">
        <DepartmentsBar />

        <div className="feed">
            
            <div className="feedCategories">
                <div className="titlebtn">
                    <h2 id="daily">Books</h2>
                    <a href='/viewMore'><button onClick={()=>setDeptCode(3)}>View More</button></a>
                </div>

                <Items />
            </div>

            <div className="feedCategories">
                <div className="titlebtn">
                    <h2 id="computer">Computer & Electronics</h2>
                    <a href='/viewMore'><button onClick={()=>setDeptCode(1)}>View More</button></a>
                </div>

                <Items2 />
            </div>

            <div className="feedCategories">
                <div className="titlebtn">
                    <h2 id="computer">Clothing</h2>
                    <a href='/viewMore'><button onClick={()=>setDeptCode(6)}>View More</button></a>
                </div>

                <Items3 />
            </div>

            <div className="feedCategories">
                <div className="titlebtn">
                    <h2 id="computer">Gaming</h2>
                    <a href='/viewMore'><button onClick={()=>setDeptCode(6)}>View More</button></a>
                </div>

                <Items3 />
            </div> 

        </div>

    </div>

    );
}

export {Body, departmentCode};