import React, { useState } from 'react';
import Header from '../Deshboard/Header';
import { Row } from 'react-bootstrap';
import Summary from './Summary';
import Tab from './Tab';
import Empty from './Empty';

function Cart() {
<<<<<<< HEAD
=======
    // localStorage.clear()
>>>>>>> 6a113119946d4a49aab04dbd5ed03a6395450489
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
<<<<<<< HEAD
=======
                {/* {console.log('listFst:',CartItems)}
                {CartItems[0]['PRICE']=200}
                {console.log('listScnd:',CartItems)} */}
>>>>>>> 6a113119946d4a49aab04dbd5ed03a6395450489
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
                            {/* summary tab goes at the bottom of the list*/}
                            <Summary />
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}


export default Cart;