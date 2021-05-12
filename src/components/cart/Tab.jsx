import React from 'react'
import { Button, Row, Col, Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

function Tab({ name, price, desc, itemNo, img }) {
    return (
        <div>
            <Card class="card" style={{
                boxShadow: '5px 0px 8px 6px rgba(0,0,0,0.08)',
                marginRight: '2rem',
                marginBottom: '15px', marginTop: '5px', width: '51rem'
            }}>
                <div class="card-body" style={{margin: '-10px'}}>
                    <Row>
                        {/* './img/emptCartIcon.png' */}
                        <Image src={"https://lamp.ms.wits.ac.za/home/s1671848/uploads/"+img} style={{ border: 'none', height: '100px', width: '100px', marginTop: '15px', marginLeft: '15px' }} />
                        <Col style={{marginLeft: '0px' }}>
                            <h4 class="card-title">{name}</h4>
                            <div style={{ width: '24rem', marginTop: '2%'}}>
                                <h9 class="card-text">{desc}</h9>
                            </div>
                        </Col>

                        <Col >
                            <div >
                                <Row>
                                    <Col >
                                        <h6 style={{ marginTop: '2.3rem', marginLeft: '15px' }}>{itemNo}</h6>
                                        <h6>Items</h6>
                                    </Col>

                                    <Row style={{ width: '5rem', marginLeft: '-4.3rem' , marginTop: '1.5rem'}}>
                                        <Button style={{ background: 'white' }} >
                                            <Image src='./img/increment.png' style={{ width: '15px' }}></Image>
                                        </Button>

                                        <Button style={{ background: 'white' }}>
                                            <Image src='./img/decrement.png' style={{ width: '15px' }}></Image>
                                        </Button>
                                    </Row>
                                </Row>
                            </div>
                        </Col>
                        <Col>
                            <h4 style={{marginLeft: '20px'}}>R{price}</h4>
                            <Button
                                style={{ background: '#06042E', width: '7rem', marginTop: '25px', marginLeft: '20px' }}
                            >
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
