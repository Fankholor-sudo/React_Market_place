import React,{Component} from 'react';

class OrderBox extends Component{

    constructor(){
        super();
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

        var photo = this.props.Product[0].PICTURE.split(",");
        var price = this.props.Product[0].PRICE.split(",");

        if(this.state.viewDetails === false){
            return <div className="order">   
                    <h6>Delivered: {this.props.date}</h6>
                    <button className="orderDetails" onClick={this.viewDetailsHandler}>Order Details</button>
                    <p>Signed by: {this.props.Name}</p>
                    <span className="orderImages">
                        {photo.map((item)=><img src={item} alt="{order pictures}" width="100px"/>)}
                    </span>
                    <div className="details values">
                        <div >
                            <h6 className="address">Shipping address</h6>
                            <p> {this.props.deliveryAddress}
                            </p>
                        </div>
                        <div>
                            <h6 className="method">Delivery method</h6>
                            <p>Deliver/Pickup</p>
                        </div>
                        <div>
                            <h6 className="summary">Order summary</h6>
                            <p> {this.props.count} items  R {this.props.price}</p>
                            <p> Delivery fee  R 0</p>
                        </div>
                    </div>
                </div>
       
    } 
    else if(this.state.viewDetails){
              return  <div className="order">
              <p className="backtoSummary" onClick={this.viewSummaryHandler} >back to order summary</p>
              <span className="details">
                  <h6>Order #{this.props.orderNumber}</h6>
                  <h6>Ordered: {this.props.date}</h6>
              </span>
              <div className="details values">
                  <div >
                      <h6 className="address">Shipping address</h6>
                      <p> {this.props.Name} </p>
                       <p>   
                          {this.props.Address.Street +' '+ this.props.Address.Surburb +' '+ this.props.Address.City}
                      </p>
                  </div>
                  <div>
                      <h6 className="method">Delivery method</h6>
                      <p>Deliver</p>
                  </div>
                  <div>
                      <h6 className="summary">Order summary</h6>
                            {price.map((item)=><p> R {item}</p>)}
                      <p> Delivery fee  R 0</p>
                  </div>
              </div>
          </div>
        }
    }
}
export default OrderBox;
