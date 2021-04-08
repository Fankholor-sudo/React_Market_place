import React,{Component} from 'react';

import laptop from "../pics/laptop.jpg";
import rating_icon from "../pics/rating_icon.png";


class ItemBox extends Component{
    itemName =this.props.itemName;
    orgPrice =this.props.orgPrice;
    discount =this.props.discount;
    rating =this.props.rating;
    //itemPrice = orgPrice-((discount/100) * orgPrice);
    itemPrice = 11830; //hardcoded for now
    category = this.props.category;

    render(){
        return  <div className="item-box" onClick={this.openModal}>
                    <div className="discount-tag">
                        35% off
                    </div>
                    <img src={laptop} alt="macbook air retina"/>
                    <p className="item-name">{this.itemName}</p>
                    <p className="price">R {this.itemPrice}
                        <span className="original-price">  was R {this.orgPrice} </span>
                    </p>
                    <div className="rating">
                        <img src={rating_icon} alt="rating"/>
                        <span>{this.rating}</span>
                    </div>
                </div>;
    }

    openModal(){
        document.getElementById('modal').style.display = "block";
    }
}

export default ItemBox;