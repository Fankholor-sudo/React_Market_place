import React,{Component} from 'react';


class Footer extends Component{
    render(){
        return  <div className="footer">
                   <div className="footer-item">
                        <h3>Shop</h3>
                        <p>Daily Deals</p>
                        <p>Gift Vouchers</p>
                    </div>

                    <div className="footer-item">
                        <h3>Help</h3>
                        <p>Help</p>
                        <p>Contact Us</p>
                        <p>Submit an Idea</p>
                        <p>Suggest a Product</p>
                        <p>Shipping & Delivery</p>
                        <p>Exchanges & Returns</p>
                    </div>

                    <div className="footer-item">
                        <h3>Account</h3>
                        <p>My Account</p>
                        <p>Track Order</p>
                        <p>Exchanges & Returns</p>
                        <p>Invoices</p>
                    </div>
                    <div className="footer-item">
                        <h3>Company</h3>
                        <p>About Us</p>  
                        <p>Careers</p>
                        <p>Sell on Wits Marketplace</p>
                        <p>Deliver for Wits Marketplace</p>
                        <p>Press & News</p>
                        <p>Competitions</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>

                </div>;
    }
}

export default Footer;