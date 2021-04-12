import React,{Component} from 'react';

import laptop from "../../pics/laptop.jpg";
import rating_icon from "../../pics/rating_icon.png";
// import Modal from "./modal";


class ItemBox extends Component{
    
    itemName =this.props.itemName;
    orgPrice =this.props.orgPrice;
    discount =this.props.discount;
    rating =this.props.rating;
    //itemPrice = orgPrice-((discount/100) * orgPrice);
    itemPrice = 11890000; //hardcoded for now
    // category = this.props.category;
    // category = true;
    

    render(){
        // var discount = "35% OFF"
        // var openModal = false;
        // const [modalIsOpen, setModalIsOpen] = useState(false);

        return  <div className="item-box">
                    <div className="itemImage"><img src={laptop} alt="macbook air retina"/></div>
                    <div className="item-name"><p>{this.itemName}</p></div>
                    <div className="price"><p>R {this.itemPrice}
                        {/* <span className="original-price">  was R {this.orgPrice} </span> */}
                    </p></div>
                    <div className="rating">
                        <img src={rating_icon} alt="rating"/>
                        <span>{this.rating}</span>
                    </div>
                </div>;
                // <Modal isOpen={modalIsOpen} />
    }

    openModal(){
        this.category = true;
    }
    
}

export default ItemBox;