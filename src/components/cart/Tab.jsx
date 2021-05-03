import React from 'react'
import { Button, Row, Col, Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

function Tab() {
    return (
        <div>
            <Card class="card" style={{ boxShadow: '5px 0px 8px 6px rgba(0,0,0,0.08)', marginBottom: '15px', marginTop: '5px', marginLeft: '8%', marginRight: '8%' }}>

                <div class="card-body">
                    <Row>





                        <Image src='./img/emptCartIcon.png' style={{ border: 'none', height: '100px', width: '100px', marginTop: '0px', marginLeft: '8px' }} />
                        <Col >
                            <h4 class="card-title">Product Name</h4>
                            <div style={{ width: '24rem', marginTop: '2%' }}>
                                <h9 class="card-text">discreption of the product comes here. the length of the string that comes here may increase rhe sixe of the this tab</h9>
                            </div>
                        </Col>

                        <Col >
                            <div >
                                <Row>
                                    <Col >
                                        <h6 style={{ marginTop: '1rem', marginLeft: '10%' }}>1</h6>
                                        <h6>Iterms</h6>
                                    </Col>


                                    <Row style={{ width: '5rem', marginLeft: '-6.5rem' }}>
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
                        <Col >
                            <h2>R100000.00</h2>
                            <Button style={{ background: '#06042E', width: '7rem', marginTop: '4%' }}>
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
