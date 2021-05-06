import React,{Component, useState} from 'react';
import {Items, Items2, Items3, Items4} from './items'
import Modals from "./modal" 
import Modal from 'react-modal';

import laptop from "../../pics/laptop.jpg";
import rating_icon from "../../pics/rating_icon.png";
// import Modal from "./modal";

function ItemBox({image, itemName, orgPrice, rating, desc}){
   
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    return  <div className="item-box" onClick={() => setModalIsOpen(true)}>
                <div className="itemImage" val = {image}><img src={image} alt="macbook air retina"/></div>
                <div className="item-name"><p>{itemName}</p></div>
                <div className="price"><p>R {orgPrice}
                    {/* <span className="original-price">  was R {this.orgPrice} </span> */}
                </p></div>
                <div className="rating">
                    <img src={rating_icon} alt="rating"/>
                    <span>{rating}</span>
                </div>

                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <div className="modal-content">
                        <div className="new">

                            {/* <div className="closeModal" onClick={() => setModalIsOpen(false)}><span id="close">&times;</span></div> */}
                            {/* <div className="modal-discount-tag">35% off</div> */}

                            <div className="item-info">
                                <div className="modalImage"><img className="itemImage" src={image} alt="macbook air retina"/></div>
                                <div className="modal-itemName"><p>{itemName}</p></div>
                                <p className="modalPrice">R {orgPrice}</p>
                                    {/* <span className="original-price">  was R {this.orgPrice} </span>

                                {/* <div className="rating">
                                    <img src={rating_icon} alt="rating"/>
                                    <span>{this.rating}</span>
                                </div> */}
                                <div>
                                <button onClick={() => setModalIsOpen(false)}>&#43; Add to Cart</button>

                                </div>
                                
                            </div> 

                            <div className="item-extra-info">
                                {/* <button>Product Description</button> */}
                                {/* <button id ="item-desc" className="selected" onClick={this.changeSelected}>Product Description</button> */}
                                {/* <button id="item-stock-info" onClick={this.changeSelected}>Product Infomation</button> */}
                                {/* <button id="item-reviews" onClick={this.changeSelected}>Product Reviews</button> */}
                                <div id="extra-info-container" className="extra-info-container">
                                    <p id="item-extra-info-content">{desc}</p>
                                </div>
                            </div>
                        </div>
                        <div className="closeModal">
                            <p>Press <div className="esc"><p>Esc</p></div>to Exit</p>
                        </div>
                    </div>
                 </Modal>
            </div>;
}
export default ItemBox;
