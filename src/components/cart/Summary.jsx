import React, { useState } from 'react';
import { Form, Button, Row, Col, Card} from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';

function Summary() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [state, setState] = useState({
        street: "",
        surburb: "",
        city: "",
        country: "",
    })
    
    let [numberOfItems, setNumberOfItems] = useState(0);
    let [totalPrice,setTotalPrice] =useState(0);

    let [email,setEmail] = useState('');
    let [order,setOrder] = useState('');

    //checking if user is logged in 
    const user = JSON.parse(localStorage.getItem('userDetails'));
    const isLoggedIn =() =>{
        try{return [user['data'][0]['login_status'], user['data'][0]['email']];}
        catch(e){
            return 'Please Login to complete the purchase'
        }
    }

    const handleStreet = async e => {
        setState(prevState => ({
            ...prevState,
            street: e.target.value,
        }))
    }
    const handleSurburb = async e => {
        setState(prevState => ({
            ...prevState,
            surburb: e.target.value
        }))
    }

    const handleCity = async e => {
        setState(prevState => ({
            ...prevState,
            city: e.target.value,
        }))
    }
    const handleCountry = async e => {
        setState(prevState => ({
            ...prevState,
            country: e.target.value,
        }))
    }

    const handleNumberOfItems=()=>{
        let cartItems = JSON.parse(localStorage.getItem('CartItems'));
        setNumberOfItems(cartItems.length);
    }
    setInterval(handleNumberOfItems,1000)//to continually count the number of items cart

    const handleOrder=()=>{
        setModalIsOpen(true); 
        let cartItems = JSON.parse(localStorage.getItem('CartItems'));
        cartItems.forEach((item)=>{
            setTotalPrice( totalPrice += Number(item.PRICE));
        })

        let userInfo = isLoggedIn();
        if(userInfo[0] !== 1){
            window.open("http://localhost:3000/LoginForm","_self"); //need to login to complete the purchase
        }

        else{
            setEmail(userInfo[1]); 
            setOrder(JSON.stringify(cartItems));
        }
    };

/*************THE HANDLE CONFIRM PURCHASE FUNCTION HAS NOT BEEN TESTED BECAUSE AT THE TIME OF COMMITTING THIS FILE, THE DATABASE WAS KINDA CRASHED************/
    const handleConfirmPurchase=()=>{
        //send email and order items
        const SaveOrder=(mail, ordr, deliveryAddress) =>{
            axios.post(`https://lamp.ms.wits.ac.za/home/s2172765/insertOrders.php?userEmail=${mail}&order=${ordr}&deliveryAddress=${deliveryAddress}`);
        };

        let deliveryaddress = `${state.street}, ${state.surburb}, ${state.city}, ${state.country}`;
        SaveOrder(email,order,deliveryaddress);

        alert("Your order has been successfully received. More info will be communicated via email");
        localStorage.removeItem('CartItems');
        window.open("http://localhost:3000/","_self");
    }  
    
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
                            <h6 className="card-subtitle" >Number of Items: </h6><span id="numberOfItems">{numberOfItems}</span>
                        </div>
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
                <p id="close" onClick={()=>{setModalIsOpen(false); setTotalPrice(0)}} style={{cursor: 'pointer'}}>X</p>
                
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
                                onChange={handleStreet}
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
                                onChange={handleSurburb}
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
                                onChange={handleCity}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                name="country"
                                type='firstname'
                                style={{ background: '#ECF6F9' }}
                                placeholder='Enter your country'
                                required
                                onChange={handleCountry}
                            />
                        </Form.Group>
                       
                    </Form>

                    <div class="shipping-order">
                        <h5>Order Summary</h5>
                        <div className="summary">
                            <div class="desc">
                                <p>{numberOfItems} unique items</p>
                                <p>Delivery</p>
                            </div>
                            <div className="amount">
                                <p>R {totalPrice}</p>
                                <p>Free</p>
                            </div>
                        </div>
                        <p id="change" onClick={()=> {setModalIsOpen(false); setTotalPrice(0)}}>change</p>
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