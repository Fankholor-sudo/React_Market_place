import React, { useState } from 'react';
import { Form, Button, Row, Col, Card} from 'react-bootstrap';
import Modal from 'react-modal';

function Summary() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleConfirmPurchase=()=>{
        alert("Your has been successfully received. More info will be communicated via email");
        localStorage.removeItem('CartItems');
    }

    // const handleNumberOfItems=(number)=>{
    //     var numberHtml = document.getElementById('numberOfItems');
    //     numberHtml.innerHTML = number;
    // }

    

    const handleOrder=()=>{
        setModalIsOpen(true); 
        let cartItems = JSON.parse(localStorage.getItem('CartItems'));
        console.log('cart items number is '+ cartItems.length);
        
        // setInterval(handleNumberOfItems(cartItems.length),100);
    };
    
    return (
        <div>
            <Card className="card" style={{ boxShadow: '5px 0px 8px 6px rgba(0,0,0,0.08)',
                marginBottom: '15px', marginTop: '5px',
                marginLeft: '3%', marginRight: '3%', width: '310px'
            }}>
                <div className="card-body">
                    <h3>Summary</h3>
                    <br/>
                    <Col>
                        <div style={{ marginLeft: '-1rem',marginBottom:'10px' }}>
                            <h6 className="card-subtitle" >Number of Items: </h6><span id="numberOfItems">26</span>
                        </div>
                        {/* <div style={{marginLeft: '-1rem'}}>
                            <h6 className="card-subtitle" >Address :</h6>
                            <span><p>Adress to ship the product to the user
                            have to provide one everytime the make an order,
                            and should always make sure that their address is correct.
                            Adress to ship the product to the user
                            have to provide one everytime the make an order,
                                and should always make sure that their address is correct.</p></span>
                        </div> */}
                        <br/><br/><br/>
                        <div>
                            {/* <h5 style={{ marginTop: '-3rem', marginBottom: '1rem'}}>Total: <span>R100000.00</span></h5> */}
                            <Row>
                                <Button style={{ background: 'green', width: '110px', height:'50px'}} onClick={handleOrder} >
                                    Order
                                </Button>

                                <Button style={{ background: 'red', width: '110px', height:'50px', marginLeft: '1rem' }}>
                                    Discard
                                </Button>
                            </Row>
                        </div>
                    </Col>
                </div>
            </Card>

            <Modal id="shipping-modal" isOpen={modalIsOpen}>
                <p id="close" onClick={()=>setModalIsOpen(false)} style={{cursor: 'pointer'}}>X</p>
                
                <div className="shipping-details">
                    <h2>Shipping Details</h2>
                    <h5>Delivery Address</h5>
                    <Form style={{ width: '80%', marginLeft: '5%', marginTop: '10px',marginBottom: '10px' }} noValidate>
                        <Form.Group>
                            <Form.Label>Street</Form.Label>
                            <Form.Control
                                name="street"
                                type='street'
                                style={{ background: '#ECF6F9' }}
                                placeholder='Enter your street'
                                required
                                // onChange={handleFirstName}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Surburb</Form.Label>
                            <Form.Control
                                name="surburb"
                                type='firstname'
                                style={{ background: '#ECF6F9' }}
                                placeholder='Enter your surburb'
                                required
                                // onChange={handleLastName}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                name="city"
                                type='firstname'
                                style={{ background: '#ECF6F9' }}
                                placeholder='Enter your city'
                                required
                                // onChange={handleEmail}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                name="country"
                                type='firstname'
                                style={{ background: '#ECF6F9' }}
                                placeholder='Enter your city'
                                required
                                // onChange={handlePassword}
                            />
                        </Form.Group>
                       
                    </Form>

                    <div class="shipping-order">
                        <h5>Order Summary</h5>
                        <div className="summary">
                            <div class="desc">
                                <p>(number of items in cart)</p>
                                <p>Delivery</p>
                            </div>
                            <div className="amount">
                                <p>(R price)</p>
                                <p>(Delivery fee)</p>
                            </div>
                        </div>
                        <p id="change" onClick={()=> setModalIsOpen(false)}>change</p>
                    </div>

                    <div className="confirm">
                        <Button style={{ background: 'green', width: '50%', height:'50px'}} onClick={handleConfirmPurchase}>
                            Confirm Purchase
                        </Button>
                    </div>
                </div>
        
            </Modal>
        </div>
    )
}

export default Summary;