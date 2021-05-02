import React from 'react';
import Header from '../Deshboard/Header';
import DepartmentsBar from '../Deshboard/departmentsBar';
import { Button, Row, Col, Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

function Cart(props) {

    return (
        <div>
            <Header />
            <div className="body">
                <DepartmentsBar />
                <div className="feed" >{/*style={{height: '700px', overflowY:'scroll'}}*/}
                    <div>











                        {/* display only when the cart is empty */}
                        <div style={{ marginLeft: '30%', marginTop: '12%' }}>
                            <Image src='./img/emptCartIcon.png' style={{ border: 'none', height: '270px', width: '270px' }} />
                            <h2 >Your cart is empty!</h2>
                        </div>









                        {/* creating a card as our building block */}
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








                        {/* summary tab goes at the bottom of the list */}
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
                </div>
            </div>
        </div>
    );
}

export default Cart;