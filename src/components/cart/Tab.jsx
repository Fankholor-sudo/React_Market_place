import React, { useState } from 'react'
import { Button, Row, Col, Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

function Tab({ name, price, desc, itemNo, img, setDisplay, index }) {
    const prices = Number(price)
    var m = JSON.parse(localStorage.getItem("CartItems"))

    const [numItem, setNumItem] = useState({
        value: JSON.parse(localStorage.getItem("CartItems"))[index].COUNT
    })
    const [priceItem, setPriceItem] = useState({
        price: prices
    })



    const increment = (e) => {
        setNumItem({
            value: numItem.value + 1
        })
        setPriceItem({
            price: priceItem.price + m[index].ORIGINAL_PRICE
        })
        // updating the count and the price 
        m[index].PRICE = priceItem.price + m[index].ORIGINAL_PRICE
        m[index].COUNT = numItem.value + 1
        var mString = JSON.stringify(m)
        localStorage.setItem("CartItems", mString)
    }

    const decrement = (e) => {

        if (numItem.value > 1) {
            setNumItem({
                value: numItem.value - 1
            })
            setPriceItem({
                price: priceItem.price - m[index].ORIGINAL_PRICE
            })
            // updating the count and the price 
            m[index].PRICE = priceItem.price - m[index].ORIGINAL_PRICE
            m[index].COUNT = numItem.value - 1
            var mString = JSON.stringify(m)
            localStorage.setItem("CartItems", mString)
        }

    }
    return (
        <div>
            <Card className="card" style={{
                boxShadow: '5px 0px 8px 6px rgba(0,0,0,0.08)',
                marginRight: '2rem',
                marginBottom: '15px', marginTop: '5px', width: '51rem'

            }}>
                <div className="card-body" style={{ margin: '-10px' }}>
                    <Row>
                        <Image src={img} style={{ border: 'none', height: '100px', width: '100px', marginTop: '15px', marginLeft: '15px' }} />
                        <Col style={{ marginLeft: '0px' }}>
                            <h4 className="card-title">{name}</h4>
                            <div style={{ width: '24rem', marginTop: '2%' }}>
                                <p className="card-text">{desc}</p>
                            </div>
                        </Col>

                        <Col >
                            <div >
                                <Row>
                                    <Col >
                                        <h6 style={{ marginTop: '3rem', marginLeft: '15px' }}>{m[index].COUNT}</h6>
                                        <h6>Items</h6>
                                    </Col>

                                    <div style={{ marginTop: '2rem' }}>
                                        <Row style={{ width: '5rem' }}>
                                            <Button style={{ background: 'white' }} onClick={(e) => increment(e)} >
                                                <Image src='./img/increment.png' style={{ width: '15px' }}></Image>
                                            </Button>

                                            <Button style={{ background: 'white' }} onClick={(e) => decrement(e)}>
                                                <Image src='./img/decrement.png' style={{ width: '15px' }}></Image>
                                            </Button>
                                        </Row>
                                    </div>
                                </Row>
                            </div>
                        </Col>
                        <Col>
                            <h4 style={{ marginLeft: '20px' }}><span>R{m[index].PRICE}</span></h4>
                            <Button
                                onClick={() => setDisplay({ idx: index })}
                                style={{ background: '#06042E', width: '7rem', marginTop: '25px', marginLeft: '20px' }}>
                                Remove
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Card>
        </div>
    )
}

export default Tab;
