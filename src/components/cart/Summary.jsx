import React from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';

function Summary() {
    return (
        <div>
            <Card class="card" style={{ boxShadow: '5px 0px 8px 6px rgba(0,0,0,0.08)', marginBottom: '15px', marginTop: '5px', marginLeft: '8%', marginRight: '8%' }}>

                <div class="card-body">
                    <h3>Summary</h3>
                    <Row>

                        {/* <Image src='./img/emptCartIcon.png' style={{ border: 'none', height: '130px', width: '130px', marginTop: '0px', marginLeft: '0px' }} /> */}

                        <Col >
                            <h5 class="card-subtitle" >Address</h5>
                            <div style={{ width: '22rem', marginTop: '1rem' }}>
                                <p class="card-text">Adress to ship the product to the user have to provide one everytime the make an order</p>
                            </div>
                        </Col>


                        <Col style={{ marginLeft: '-1rem' }}>
                            <h5 class="card-subtitle" >Number of Iterms</h5>
                            <div style={{ marginTop: '1rem' }}>
                                <p class="card-text" style={{ marginLeft: '4rem' }}>26</p>
                            </div>
                        </Col>


                        <Col >
                            <div >
                                <Row >
                                    <h6 style={{ marginTop: '-3rem', marginBottom: '1rem' }}>Total: <span>R100000.00</span></h6>
                                    <Button style={{ background: 'green', width: '200px' }} >
                                        Order
                    </Button>

                                    <Button style={{ background: 'red', width: '200px', marginTop: '1rem' }}>
                                        Discard
                    </Button>
                                </Row>
                            </div>
                        </Col>
                    </Row>

                </div>
            </Card>
        </div>
    )
}

export default Summary;
