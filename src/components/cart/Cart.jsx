import React from 'react';
import Header from '../Deshboard/Header';
import DepartmentsBar from '../Deshboard/departmentsBar';   
import Summary from './Summary';
import Empty from './Empty';
import Tab from './Tab';

function Cart(props) {

    return (
        <div>
            <Header />
            <div className="body">
                <DepartmentsBar />
                <div className="feed" >{/*style={{height: '700px', overflowY:'scroll'}}*/}
                    <div>
                        {/* display only when the cart is empty */}
                        <Empty/> 
                        {/* creating a card as our building block */}
                        <Tab/>
                        {/* summary tab goes at the bottom of the list */}
                        <Summary/>

                        
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;