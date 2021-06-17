import React, { useEffect, useState} from 'react';
import Header from '../Deshboard/Header';
import { Row } from 'react-bootstrap';
import Suggest from './Summary';
import Tab from './Tab';
import Empty from './Empty';
import axios from 'axios';

function Address(email){
    const [items, setItems]= useState([{}])
    useEffect(()=>
    {
    const getItems= async () =>{
        await axios.post("https://lamp.ms.wits.ac.za/home/s2172765/getAddress.php", {ID: email})
        .then(response => setItems(response.data))
        .catch(error => console.log(error))
    }
    getItems();
    localStorage.setItem("Address", JSON.stringify(items))
    },[email, items]);  
}

function Cart() {
    const CartItems = JSON.parse(localStorage.getItem("CartItems"));
    
    let email;
    if(JSON.parse(localStorage.getItem('userDetails')) !== null){
        const user = JSON.parse(localStorage.getItem('userDetails'));
        email = user['data'][0]['email'];
    }
    else{
        email = '';
    }
    Address(email);
    var temp = JSON.parse(localStorage.getItem("Address"));
    console.log(temp)

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
                                        <Tab name={data.NAME} img={data.PICTURE} price={data.PRICE} itemNo={data.COUNT}
                                            desc={data.DESCRIPTION} setDisplay={setDisplay} index={key} />
                                    </div>
                                ))}

                            </div>
                            <Suggest />
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}


export default Cart;