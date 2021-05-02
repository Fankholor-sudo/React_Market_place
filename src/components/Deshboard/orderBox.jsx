import React,{Component} from 'react';
import laptop from "../../pics/laptop.jpg";

class OrderBox extends Component{

    constructor(props){
        super(props);
        this.state={
            viewDetails : false
        }
    }
    
    viewDetailsHandler=()=>{//for the order details button
        this.setState({
            viewDetails: true
        })
    }

    viewSummaryHandler=()=>{//for the back to summary clickable text
        this.setState({
            viewDetails: false
        })
    }
    
    render(){
        if(this.state.viewDetails === false){
        return  <div className="order">
                    <h6>Delivered: {this.props.date}</h6>
                    <button className="orderDetails" onClick={this.viewDetailsHandler}>Order Details</button>
                    <p>Signed by: {this.props.customerName}</p>
                    <span className="orderImages">
                        <img src={laptop} alt="{order pictures}" width="100px"/>
                        <img src={laptop} alt="{order pictures}" width="100px"/>
                    </span>
                </div>;
    }
    else if(this.state.viewDetails){
        return  <div className="order">
                    <p className="backtoSummary" onClick={this.viewSummaryHandler}>back to order summary</p>
                    <span className="details">
                        <h6>Order #{this.props.orderNumber}</h6>
                        <h6>Ordered: {this.props.date}</h6>
                    </span>
                    <div className="details values">
                        <div >
                            <h6 className="address">Shipping address</h6>
                            <p> User
                                01 StreetName str,
                                Surburb,City
                                Zipcode 
                            </p>
                        </div>
                        <div>
                            <h6 className="method">Delivery method</h6>
                            <p>Deliver/Pickup</p>
                        </div>
                        <div>
                            <h6 className="summary">Order summary</h6>
                            <p> 2 items  R 23 798</p>
                            <p> Delivery fee  R 0</p>
                        </div>
                    </div>
                </div>
    }
}
}

export default OrderBox;