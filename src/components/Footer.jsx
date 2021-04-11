import React,{Component} from 'react';


class Footer extends Component{
    render(){
        return  <div>
                <div className="footer">

                    <div className="footer-item">
                            <h3>Shop</h3>
                            <p><a href="#">Daily Deals</a></p>
                            <p><a href="#">Gift Vouchers</a></p>
                    <img src="./images/LOGO.svg" alt="Logo"/>

                        </div>

                        <div className="footer-item">
                            <h3>Help</h3>
                            <p><a href="#">Help</a></p>
                            <p><a href="#">Contact Us</a></p>
                            <p><a href="#">Submit an Idea</a></p>
                            <p><a href="#">Suggest a Product</a></p>
                            <p><a href="#">Shipping & Delivery</a></p>
                            <p><a href="#">Exchanges & Returns</a></p>
                        </div>

                        <div className="footer-item">
                            <h3>Account</h3>
                            <p><a href="#">My Account</a></p>
                            <p><a href="#">Track Order</a></p>
                            <p><a href="#">Exchanges & Returns</a></p>
                            <p><a href="#">Invoices</a></p>
                        </div>
                        <div className="footer-item">
                            <h3>Company</h3>
                            <p><a href="#">About Us</a></p>  
                            <p><a href="#">Careers</a></p>
                            <p><a href="#">Sell on Wits Marketplace</a></p>
                            <p><a href="#">Deliver for Wits Marketplace</a></p>
                            <p><a href="#">Press & News</a></p>
                            <p><a href="#">Competitions</a></p>
                            <p><a href="#">Terms & Conditions</a></p>
                            <p><a href="#">Privacy Policy</a></p>
                        </div>
                </div>;
                <div className="copyright">
                <p>Wits Marketplace &copy; 2021</p>
                </div>
            </div>

    }
}

export default Footer;