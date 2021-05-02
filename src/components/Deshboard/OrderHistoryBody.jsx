import React from 'react';
import MyAccountBar from './MyAccountBar';
import OrderBox from './orderBox';



function OrderBody(){
    return(
        
        <div className="orderBody">
            <MyAccountBar/>
            
            <div className="orders">
                <h3 className="">Orders</h3>
                <OrderBox customerName="User1" date="Mon, 19 Apr 2021" orderNumber="000001"/>
                <OrderBox customerName="User1" date="Tue, 20 Apr 2021" orderNumber="000002"/>
                <OrderBox customerName="User1" date="Wed, 21 Apr 2021" orderNumber="000003"/>
            </div>
        </div>

        
    );
}

export default OrderBody;