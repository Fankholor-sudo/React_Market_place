import React, { useState } from 'react';
import Header from '../Deshboard/Header';
import { Row } from 'react-bootstrap';
import Summary from './Summary';
import Tab from './Tab';
import Empty from './Empty';

function Cart() {
    const CartItems = JSON.parse(localStorage.getItem("CartItems"));
    
    const [removed, setDisplay] = useState({
        idx: -1
    })
    const [rmv,setStr] = useState({
        updatedCartItem: CartItems
    })
    
    const Remove = () => {
        var array = [rmv.updatedCartItem]
        if (removed.idx !== -1) {
            array = rmv.updatedCartItem.filter((_, i) => i !== removed.idx)
            setStr({updatedCartItem: array});
            setDisplay({idx: -1});
            localStorage.removeItem("CartItems")
            localStorage.setItem("CartItems", JSON.stringify(rmv.updatedCartItem))
        }
        localStorage.removeItem("CartItems")
        localStorage.setItem("CartItems", JSON.stringify(rmv.updatedCartItem))
    }
    if (CartItems === null) {
        return (
            <div>
                <Header />
                <Empty />
            </div>
        )
    }
    else {
        return (
            <div>
                {Remove()}
                <Header />
                <div className="body" style={{ height: '40rem' }}>
                    <div >
                        <Row>
                            <div style={{ overflowY: 'scroll', overflowX: 'hidden', height: '38rem' }}>
                                {rmv.updatedCartItem.map((data, key) => (
                                    <div key={key}>
                                        <Tab name={data.NAME} img={data.PICTURE} price={data.PRICE} itemNo={0}
                                            desc={data.DESCRIPTION} setDisplay={setDisplay} index={key} />
                                    </div>
                                ))}

                            </div>
                            <Summary />
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}


export default Cart;