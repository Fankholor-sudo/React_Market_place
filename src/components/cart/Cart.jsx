import React from 'react';
import Header from '../Deshboard/Header';
import { Row, Col } from 'react-bootstrap';
import {useLocation } from 'react-router-dom';
import Summary from './Summary';
import Empty from './Empty';
import Tab from './Tab';

function Cart(props) {

    const location = useLocation();
    var data = [
        {
            "name": "Ambrella",
            "price": 120.90,
            "desc": "discreption of the product comes here. the length of the string that comes here may increase rhe sixe of the this tab",
            "itemNo": 5,
        },
        {
            'name': 'Snipet',
            'price': 1875.21,
            'desc': 'discreption of the product comes here. the length of the string that comes here may increase rhe sixe of the this tab',
            'itemNo': 2,
        },
        {
            'name': 'Nike Shoes',
            'price': 210.00,
            'desc': 'discreption of the product comes here. the length of the string that comes here may increase rhe sixe of the this tab',
            'itemNo': 3,
        },
        {
            'name': 'Round Eggo',
            'price': 1000.00,
            'desc': 'discreption of the product comes here. the length of the string that comes here may increase rhe sixe of the this tab',
            'itemNo': 1,
        },
    ];

    const dt = location.state;
    return (
        <div>
            <Header />
            <div className="body" style={{height:'40rem'}}>
                <div >
                    <Row>
                        <div style={{overflowY:'scroll', overflowX:'hidden', height:'38rem'}}>
                            {dt.map((d, key) => {
                                return (
                                    <div key={key}>
                                        <Tab name={d.username} price={125.25} itemNo={Math.ceil(d.total_rating)}
                                            desc={data[0].desc+d.skills + d.city} img={d.profile_pic}/>
                                    </div>
                                );
                            })}
                             

                        </div>
                        {/* summary tab goes at the bottom of the list*/}
                        <Summary />
                    </Row>
                </div>
            </div>
        </div>
    );
}


export default Cart;