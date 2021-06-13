import React from 'react';
import { Form, Button, Row, Col, Card} from 'react-bootstrap';
import Modal from 'react-modal';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';


    function isLoggedIn(){
        const user = JSON.parse(localStorage.getItem('userDetails'));
        try{return [user['data'][0]['login_status'], user['data'][0]['email']];}
        catch(e){
            return 'Please Login to complete the purchase'
        }
    }

    function getCity(value) {
        const Address = JSON.parse(localStorage.getItem("Address")); 
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
      
        return inputLength === 0 ? [] : Address.filter(lang =>
          lang.city.toLowerCase().slice(0, inputLength) === inputValue
        );
      }
    
    function getStreet(value) {
        const Address = JSON.parse(localStorage.getItem("Address")); 
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
      
        return inputLength === 0 ? [] : Address.filter(lang =>
          lang.street.toLowerCase().slice(0, inputLength) === inputValue
        );
    }
    
    function getSurburb(value) {
        const Address = JSON.parse(localStorage.getItem("Address")); 
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
      
        return inputLength === 0 ? [] : Address.filter(lang =>
          lang.surburb.toLowerCase().slice(0, inputLength) === inputValue
        );
      }
    
      function getCountry(value) {
        const Address = JSON.parse(localStorage.getItem("Address")); 
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
      
        return inputLength === 0 ? [] : Address.filter(lang =>
          lang.country.toLowerCase().slice(0, inputLength) === inputValue
        );
      }
      
      function getSuggestionCity(suggestion) {
        return suggestion.city;
      }

      function getSuggestionStreet(suggestion) {
        return suggestion.street;
      }
      function getSuggestionSurburb(suggestion) {
        return suggestion.surburb;
      }
      function getSuggestioCountry(suggestion) {
        return suggestion.country;
      }
      
      function renderStreet(suggestion) {
        return (
           <div>{suggestion.street}</div>
        );
      }
    
      function renderCity(suggestion) {
        return (
           <div>{suggestion.city}</div>
        );
      }
    
      function renderSurburb(suggestion) {
        return (
           <div>{suggestion.surburb}</div>
        );
      }
    
      function renderCountry(suggestion) {
        return (
           <div>{suggestion.country}</div>
        );
      }

class Suggest extends React.Component {
    constructor() {
      super();
  
      this.state = {
        street: '',
        surburb: '',
        city: '',
        country: '',
        suggestions: [],
        modalIsOpen: false,
        numberOfItems: 0,
        email: '',
        order: '',
        totalPrice: 0 
      };    
    }

    HandleDiscard=()=>{
      localStorage.setItem("CartItems", null);
      window.open("http://localhost:3000/","_self");
    } 

    handleOrder=()=>{
        this.setState({modalIsOpen: true})
        var cartItems = JSON.parse(localStorage.getItem('CartItems'));
        let userInfo = isLoggedIn();
        if(userInfo[0] !== 1){
            window.open("http://localhost:3000/LoginForm","_self"); 
        }
        else{
            this.setState ({
                email: userInfo[1], 
                order: JSON.stringify(cartItems)
            });
        }
    };

    handleNumberOfItems=()=>{
        let cartItems = JSON.parse(localStorage.getItem('CartItems'));
        var count = 0;
        var price = 0;
        if (cartItems != null){
            for(var i = 0; i < cartItems.length; i++){
                count = count + cartItems[i].COUNT;
                price = price + cartItems[i].PRICE;
            }
        }
        this.setState ({
            totalPrice: price, 
            numberOfItems: count
        });
    }

    SaveAddress=(Address)=>{
        
        var temp = JSON.parse(localStorage.getItem("Address"));
        if(temp !== null){
            if(temp.length < 2){
                temp.push(Address);
            }
            else{
                temp.shift();
                temp.push(Address);
            }
            localStorage.setItem("Address",JSON.stringify(temp));
        }
        else{
            var address = [];
            address.push(Address);
            localStorage.setItem("Address",JSON.stringify(address));
        }
    }

    SaveOrder=() =>{
        const { street,surburb,city,country, email, order} = this.state;
        var deliveryaddress = {street: street, surburb: surburb, city: city, country: country};
        this.SaveAddress(deliveryaddress);
            axios.post(`https://lamp.ms.wits.ac.za/home/s2172765/insertOrders.php?userEmail=${email}&order=${order}&deliveryAddress=${JSON.stringify(deliveryaddress)}`)
            .then((response) => {
                if(response.status === 200){
                    if(response.data === "Successful"){
                        alert("Your order has been successfully received. Thank you for shopping with us");
                        localStorage.removeItem('CartItems');
                        window.open("http://localhost:3000/","_self");
                    }
                    else{
                        alert(response.data + " Please try again later");
                        window.open("http://localhost:3000/","_self");
                    }
                }
                else{
                    alert(response.statusText)
                    window.open("http://localhost:3000/","_self");
                }
            }, (error) => {
                alert(error)
                console.log(error)
            });
    };

    onChangeStreet = (event, { newValue, method }) => {
        this.setState({
          street: newValue
        });
      };
      
    onChangeSurburb = (event, { newValue, method }) => {
        this.setState({
          surburb: newValue
        });
      };
   
    onChangeCity = (event, { newValue, method }) => {
        this.setState({
          city: newValue
        });
      };
  
    onChangeCountry = (event, { newValue, method }) => {
        this.setState({
          country: newValue
        });
      };
    onStreetFetchRequested = ({ value }) => {
        this.setState({
          suggestions: getStreet(value)
        });
      };
   
    onSurburbFetchRequested = ({ value }) => {
        this.setState({
          suggestions: getSurburb(value)
        });
      };
  
    onCityFetchRequested = ({ value }) => {
        this.setState({
          suggestions: getCity(value)
        });
      };
  
    onCountryFetchRequested = ({ value }) => {
        this.setState({
          suggestions: getCountry(value)
        });
      };
    
    onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
      };

    render(){

        setInterval(this.handleNumberOfItems,200);
        const { street,surburb,city,country, suggestions } = this.state;
        const StreetProps = {
          placeholder: "Street Name",
          value: street,
          onChange: this.onChangeStreet
          
        };
        
        const SurburbProps = {
          placeholder: "Surburb",
          value : surburb,
          onChange: this.onChangeSurburb
 
        };

        const CityProps = {
          placeholder: "City",
          value : city,
          onChange: this.onChangeCity
          
        };
        const CountryProps = {
          placeholder: "Country",
          value : country,
          onChange: this.onChangeCountry
          
        };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
                            <h6  className="card-subtitle" >Number of Items:<br/> <span id="numberOfItems">{this.state.numberOfItems}</span></h6>
                        </div>
                        <br/><br/><br/>
                        <div>
                            <h5 style={{ marginLeft: '-1rem',marginTop: '-4rem', marginBottom: '1rem'}}>Total: <br/><span>{this.state.totalPrice}</span></h5>
                            <Row>
                                <Button style={{ background: 'green', width: '110px', height:'50px'}} onClick={this.handleOrder} >
                                    Order
                                </Button>

                                <Button style={{ background: 'red', width: '110px', height:'50px', marginLeft: '1rem' }} onClick={this.HandleDiscard}>
                                    Discard
                                </Button>
                            </Row>
                        </div>
                    </Col>
                </div>
            </Card>

            <Modal id="shipping-modal" isOpen={this.state.modalIsOpen}>
                <p id="close" onClick={()=>{this.setState({modalIsOpen : false})}} style={{cursor: 'pointer'}}>X</p>
                <div className="shipping-details">
              <h2>Shipping Details</h2>
              <h5>Delivery Address</h5>
              <Form style={{ width: '80%', marginLeft: '5%', marginTop: '10px',marginBottom: '10px' }} noValidate>
                <Form.Group>
                <Form.Label>Street</Form.Label>
                <Autosuggest 
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={this.onStreetFetchRequested}
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionStreet}
                  renderSuggestion={renderStreet}
                  inputProps={StreetProps} 
                  />
                </Form.Group>

                <Form.Group>
                <Form.Label>Surburb</Form.Label>
                <Autosuggest 
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={this.onSurburbFetchRequested}
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionSurburb}
                  renderSuggestion={renderSurburb}
                  inputProps={SurburbProps} 
                  />
                </Form.Group>

                <Form.Group>
                <Form.Label>City</Form.Label>
                <Autosuggest 
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={this.onCityFetchRequested}
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionCity}
                  renderSuggestion={renderCity}
                  inputProps={CityProps} 
                  />
                </Form.Group>

                <Form.Group>
                <Form.Label>Country</Form.Label>
                <Autosuggest 
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={this.onCountryFetchRequested}
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestioCountry}
                  renderSuggestion={renderCountry}
                  inputProps={CountryProps} 
                  />
                </Form.Group>

              </Form>

              <div class="shipping-order">
                  <h5>Order Summary</h5>
                  <div className="summary">
                      <div class="desc">
                        <p>{this.state.numberOfItems} unique items</p>
                        <p>Delivery</p>
                      </div>
                    <div className="amount">
                      <p>R {this.state.totalPrice}</p>
                      <p>Free</p>
                    </div>
                  </div>
                  <p id="change" onClick={()=>{this.setState({modalIsOpen : false, totalPrice : 0})}}>change</p>
              </div>

              <div className="confirm">
                  <Button style={{ background: 'green', width: '50%', height:'50px'}} onClick={this.SaveOrder}>
                      Confirm Purchase
                  </Button>
              </div>
        </div> 
            </Modal>
        </div>
      );
    }
}

export default Suggest;