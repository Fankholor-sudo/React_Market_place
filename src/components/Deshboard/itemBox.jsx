import React,{useState} from 'react';
import Modal from 'react-modal';
//import 'font-awesome/css/font-awesome.min.css';

    function ItemBox({image, itemName, orgPrice, index, desc }){
   
        const price = Number(orgPrice)
        const [modalIsOpen, setModalIsOpen] = useState(false);

        const addCartItems = () => {
            var item;
            setModalIsOpen(false);

           if(JSON.parse(localStorage.getItem("CartItems"))=== null){
               item = [{
                   "PICTURE": image,
                   "NAME": itemName,
                   "PRICE": price,
                   "ORIGINAL_PRICE": price,
                   "DESCRIPTION": desc,
                   "COUNT": 1,
                   "KEY": index
               }]
               localStorage.setItem("CartItems", JSON.stringify(item))
           }
           else{
               item = {
                   "PICTURE": image,
                   "NAME": itemName,
                   "PRICE": price,
                   "ORIGINAL_PRICE": price,
                   "DESCRIPTION": desc,
                   "COUNT": 1,
                   "KEY": index
               }
               var storedItems = JSON.parse(localStorage.getItem("CartItems"));
               storedItems.push(item);
               localStorage.setItem("CartItems", JSON.stringify(storedItems));
           }
       }
       
        var photo = image.split(",");
    const [stateIndex, setIndex] = useState({
        currentIndex: 0,
        translateValue: 0
    });

    const goToPrevSlide = () => {
        if(stateIndex.currentIndex === 0)
          return;

        setIndex(prevIndex => ({
          currentIndex: prevIndex.currentIndex - 1,
          translateValue: prevIndex.translateValue + slideWidth()
        }))
      }
    const goToNextSlide = () => {

        if(stateIndex.currentIndex === photo.length - 1) {
          return setIndex({
            currentIndex: 0,
            translateValue: 0
          })
        }
        setIndex(prevIndex => ({
            currentIndex: prevIndex.currentIndex + 1,
            translateValue: prevIndex.translateValue + -(slideWidth())
          }));
      }
    const slideWidth = () => {
        return document.querySelector('.modalImage img').clientWidth
     }

     const Slide = ({ images }) => {
        const styles = {
          backgroundImage: `url(${images})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 60%'
        }
        return <img className="modalImage img" style={styles}></img>
      }
        
        return  <div className="item-box" >
                    <a href="#"><div className="itemImage" onClick={() => setModalIsOpen(true)} key={index}><img src={photo[0]} alt="Not Available"/></div></a>
                    <div className="item-name"><p>{itemName}</p></div>
                    <div className="price"><p>R {orgPrice}
                    </p></div>

                    <div className="addcart">
                        <img className="favIcon" src="./icons/addcart.svg" alt="cart" onClick={() => addCartItems({photo, itemName, orgPrice, desc, index})} />
                    </div>
    
                    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                        <div className="modal-content">
                            <div className="new">
                                
                                <div className="closeModal" onClick={() => setModalIsOpen(false)}><a href="#"><img src="./icons/close.png" id="close"/></a></div>

                                <div className="item-info">
                                    <div className="modalImage">
                                    <div className="modalImage-wrap" 
                                		style={{transform: `translateX(${stateIndex.translateValue}px)`,
                                        	transition: 'transform ease-out 0.45s'
                                    }}>
                                        { photo.map((photo, i) => (
                                            <Slide key = {i} images={photo}/>
                                        ))}
                                	</div> 
                                <div className= "backArrow arrow" onClick={goToPrevSlide}><i className="fa fa-angle-left fa-3x"></i></div>
                                <div className= "nextArrow arrow" onClick={goToNextSlide}><i className="fa fa-angle-right fa-3x"></i></div>
                               </div>
                                    <div className="modal-itemName"><p>{itemName}</p></div>
                                    <p className="modalPrice">R {orgPrice}</p>

                                    <div>
                                    <button onClick={() => addCartItems({image, itemName, orgPrice, desc, index})}>&#43; Add to Cart</button>
    
                                    </div>
                                    
                                </div> 
    
                                <div className="item-extra-info">

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