import React, { Component } from 'react';

import laptop from "../pics/laptop.jpg";
import rating_icon from "../pics/rating_icon.png";

class Modal extends Component {

    itemName =this.props.itemName;
    orgPrice =this.props.orgPrice;
    discount =this.props.discount;
    rating =this.props.rating;

    itemPrice = 11830; //hardcoded for now
    category = this.props.category;
    desc=`Apples thinnest and lightest notebook, the MacBook Air gets supercharged with the Apple M1 chip. Tackle your projects with the blazing-fast 8-core CPU. Take graphics-intensive apps and games to the next level with a 7-core GPU. And accelerate machine learning tasks with the 16-core Neural Engine. All with a silent, fan-less design and the longest battery life everup to 18 hours 1. Still perfectly portable. MacBook Air is now a lot more powerful.

    This MacBook Air 13inch, 2018 Retina Edition features a 1,6GHz Intel Core 8GB, SSD 256GB
    
    MPN: MRE82LL/A
    
    Model Number: A1932
    
    Type: Pre-Owned
    
    Cosmetic Condition: CPO - Grade B- Device is in excellent condition. Keys A and E are faded on the keyboard.
    
        6-month warranty
        7-Day Return Policy
        Accessories not included
        20+ inspection done on all devices and is fully functional`;
    

    render() { 
        return (  
            <div className="modal-content">
                <span id="close" onClick={this.closeModal}>&times;</span>
                <div className="modal-discount-tag">35% off</div>
                <img className="itemImage" src={laptop} alt="macbook air retina"/>

                <div className="item-info">
                    <p className="modal-itemName">{this.itemName}</p>
                    <p className="price">R {this.itemPrice}
                        <span className="original-price">  was R {this.orgPrice} </span>
                    </p>

                    <div className="rating">
                        <img src={rating_icon} alt="rating"/>
                        <span>{this.rating}</span>
                    </div>

                    <button className="add-cart">&#43; Add to cart</button>
                </div>

                <div className="item-extra-info">
                    <button id ="item-desc" className="selected" onClick={this.changeSelected}>Product Description</button>
                    <button id="item-stock-info" onClick={this.changeSelected}>Product Infomation</button>
                    <button id="item-reviews" onClick={this.changeSelected}>Product Reviews</button>
                    <div id="extra-info-container" className="extra-info-container">
                        <p id="item-extra-info-content">{this.desc}</p>
                    </div>
                </div>
            </div>
        );
    }

    closeModal(){
        var modal =document.getElementById('modal');
        modal.style.display="none";
    }

    //TODO: to get this info from the backend api
    changeSelected(e){
        var id =e.target.id;
        // var description = this.desc;
        // console.log(description);

        document.getElementById(id).className="selected";
        
        
        if(id ==="item-desc"){
            document.getElementById("item-stock-info").className="";
            document.getElementById("item-reviews").className="";
            document.getElementById("item-extra-info-content").innerHTML=`Apples thinnest and lightest notebook, the MacBook Air gets supercharged with the Apple M1 chip. Tackle your projects with the blazing-fast 8-core CPU. Take graphics-intensive apps and games to the next level with a 7-core GPU. And accelerate machine learning tasks with the 16-core Neural Engine. All with a silent, fan-less design and the longest battery life everup to 18 hours 1. Still perfectly portable. MacBook Air is now a lot more powerful.

            This MacBook Air 13inch, 2018 Retina Edition features a 1,6GHz Intel Core 8GB, SSD 256GB
            
            MPN: MRE82LL/A
            
            Model Number: A1932
            
            Type: Pre-Owned
            
            Cosmetic Condition: CPO - Grade B- Device is in excellent condition. Keys A and E are faded on the keyboard.
            
                6-month warranty
                7-Day Return Policy
                Accessories not included
                20+ inspection done on all devices and is fully functional`;
        }
        if(id ==="item-stock-info"){
            document.getElementById("item-desc").className="";
            document.getElementById("item-reviews").className="";

            document.getElementById("item-extra-info-content").innerHTML=`Apples thinnest and lightest notebook, the MacBook Air gets supercharged with the Apple M1 chip. Tackle your projects with the blazing-fast 8-core CPU. Take graphics-intensive apps and games to the next level with a 7-core GPU. And accelerate machine learning tasks with the 16-core Neural Engine. All with a silent, fan-less design and the longest battery life everup to 18 hours 1. Still perfectly portable. MacBook Air is now a lot more powerful.This MacBook Air 13inch, 2018 Retina Edition features a 1,6GHz Intel Core 8GB, SSD 256GB MPN: MRE82LL/A
            111111111111111111111111111111111111111 458888888888888888888888238723838386538685ree79r69`;
        }
        if(id ==="item-reviews"){
            document.getElementById("item-stock-info").className="";
            document.getElementById("item-desc").className="";
            document.getElementById("item-extra-info-content").innerHTML=`Apples thinnest and lightest notebook, the MacBook Air gets supercharged with the Apple M1 chip. Tackle your projects with the blazing-fast 8-core CPU. Take graphics-intensive apps and games to the next level with a 7-core GPU. And accelerate machine learning tasks with the 16-core Neural Engine. All with a silent, fan-less design and the longest battery life everup to 18 hours 1. Still perfectly portable. MacBook Air is now a lot more powerful.This MacBook Air 13inch, 2018 Retina Edition features a 1,6GHz Intel Core 8GB, SSD 256GB MPN: MRE82LL/A
        67rb    oiguffgyp0tg798 87t0goi hgiuu  i7gu po9ghy puhp ough`;
        }
    }
    
}
 
export default Modal;