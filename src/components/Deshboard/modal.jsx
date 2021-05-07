import React, { Component } from 'react';
import Modal from 'react-modal';

class Modals extends Component {
    itemName =this.props.itemName;
    orgPrice =this.props.orgPrice;
    discount =this.props.discount;
    rating =this.props.rating;
    itemPrice = this.props.itemPrice;
    category = this.props.category;
    desc=this.props.desc;    
    modalOpen = this.props.modalOpen;
    image = this.props.image;
    render() { 
        // var openModal = false;
        
        return (  
            <Modal isOpen={true}>
                <div className="modal-content">
                <div className="new">

                    {/* <div className="closeModal"><span id="close" onClick={this.closeModal}>&times;</span></div> */}
                    {/* <div className="modal-discount-tag">35% off</div> */}

                    <div className="item-info">
                        <div className="modalImage"><img className="itemImage" src={this.image} alt="macbook air retina"/></div>
                        <div className className="modal-itemName"><p>{this.itemName}</p></div>
                        <p className="modalPrice">R {this.orgPrice}</p>
                            {/* <span className="original-price">  was R {this.orgPrice} </span>

                        {/* <div className="rating">
                            <img src={rating_icon} alt="rating"/>
                            <span>{this.rating}</span>
                        </div> */}
                        
                        <button>&#43; Add to Cart</button>
                        
                    </div> 

                    <div className="item-extra-info">
                        {/* <button>Product Description</button> */}
                        {/* <button id ="item-desc" className="selected" onClick={this.changeSelected}>Product Description</button> */}
                        {/* <button id="item-stock-info" onClick={this.changeSelected}>Product Infomation</button> */}
                        {/* <button id="item-reviews" onClick={this.changeSelected}>Product Reviews</button> */}
                        <div id="extra-info-container" className="extra-info-container">
                            <p id="item-extra-info-content">{this.desc}</p>
                        </div>
                    </div>
                </div>
                </div>
            </Modal>
        );
    }
}
 
export default Modals;



