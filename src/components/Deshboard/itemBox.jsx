import React,{useState} from 'react';
import Modal from 'react-modal';

const addCartItems = (item) => {
    if(JSON.parse(localStorage.getItem("CartItems"))=== null){
        localStorage.setItem("CartItems", JSON.stringify(item))
    }
    else{
        var storedItems = JSON.parse(localStorage.getItem("CartItems"));
        storedItems.push(item);;
        localStorage.setItem("CartItems", JSON.stringify(storedItems));
    }
}


const ItemBox = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return(
    <>
    {props.items.slice(0,4).map((Items) => (
         <div className="item-box" key={Items.PRODUCT_ID} onClick={() => setModalIsOpen(true)}>
         <div className="itemImage" ><img src={Items.PICTURE} alt="Not Available"/></div>
         <div className="item-name"><p>{Items.NAME}</p></div>
         <div className="price"><p>R {Items.PRICE}</p></div>
         <div  className="addcart">
             <img className="favIcon" src="./icons/addcart.svg" alt="cart" onClick={() => addCartItems(Items)} />
         </div>
        
         <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
             <div className="modal-content">
                 <div className="new">

                     <div className="item-info">
                         <div className="modalImage"><img className="itemImage" src={Items.PICTURE} alt="Not Available"/></div>
                         <div className="modal-itemName"><p>{Items.NAME}</p></div>
                         <p className="modalPrice">R {Items.PRICE}</p>
     
                         <div>
                         <button onClick={() => setModalIsOpen(false)}>&#43; Add to Cart</button>

                         </div>
                         
                     </div> 

                     <div className="item-extra-info">
    
                         <div id="extra-info-container" className="extra-info-container">
                             <p id="item-extra-info-content">{Items.DESCRIPTION}</p>
                         </div>
                     </div>
                 </div>
                 <div className="closeModal">
                     <p>Press <div className="esc"><p>Esc</p></div>to Exit</p>
                 </div>
             </div>
          </Modal>
     </div>
    ))}
        
    </>
    ) 
}
export default ItemBox;
