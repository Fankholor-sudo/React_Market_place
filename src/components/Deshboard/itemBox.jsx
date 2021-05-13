import React,{useState} from 'react';
import Modal from 'react-modal';

const addCartItems = ({image, itemName, orgPrice, desc, index}) => {
     var item;
    if(JSON.parse(localStorage.getItem("CartItems"))=== null){
        item = [{
            "PICTURE": image,
            "NAME": itemName,
            "PRICE": orgPrice,
            "DESCRIPTION": desc,
            "KEY": index
        }]
        localStorage.setItem("CartItems", JSON.stringify(item))
    }
    else{
        item = {
            "PICTURE": image,
            "NAME": itemName,
            "PRICE": orgPrice,
            "DESCRIPTION": desc,
            "KEY": index
        }
        var storedItems = JSON.parse(localStorage.getItem("CartItems"));
        storedItems.push(item);;
        localStorage.setItem("CartItems", JSON.stringify(storedItems));
    }
}

    function ItemBox({image, itemName, orgPrice, index, desc}){
   
        const [modalIsOpen, setModalIsOpen] = useState(false);
        
        return  <div className="item-box" onClick={() => setModalIsOpen(true)}>
                    <div className="itemImage" key={index}><img src={image} alt="Not Available"/></div>
                    <div className="item-name"><p>{itemName}</p></div>
                    <div className="price"><p>R {orgPrice}
                        {/* <span className="original-price">  was R {this.orgPrice} </span> */}
                    </p></div>
                    {/* RATING */}
                    {/* <div className="rating">
                        <img src={rating_icon} alt="rating"/>
                        <span>{rating}</span>
                    </div> */}
    
                    <div className="addcart">
                        <img className="favIcon" src="./icons/addcart.svg" alt="cart" onClick={() => addCartItems({image, itemName, orgPrice, desc, index})} />
                    </div>
    
                    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                        <div className="modal-content">
                            <div className="new">
    
                                {/* <div className="closeModal" onClick={() => setModalIsOpen(false)}><span id="close">&times;</span></div> */}
                                {/* <div className="modal-discount-tag">35% off</div> */}
    
                                <div className="item-info">
                                    <div className="modalImage"><img className="itemImage" src={image} alt="Not Available"/></div>
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