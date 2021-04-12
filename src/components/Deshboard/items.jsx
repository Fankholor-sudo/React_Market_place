import React, { Component } from 'react';

import ItemBox from "./itemBox";
import Modals from "./modal"

class Items extends Component{

    render() {
        var department = false;
        return  <div className="items">
                    <ItemBox category="Books" itemName="Everything I Never Told" orgPrice="186" discount="./images/everything.jpg" rating="0(0)"/>
                    <ItemBox category={department} itemName="Rich Dad Poor Dad" orgPrice="159" discount="./images/rich.jpeg" rating="0(0)"/>
                    <ItemBox category={department} itemName="Think Again" orgPrice="299" discount="./images/think.webp" rating="0(0)"/>
                    <ItemBox category={department} itemName="The Alchemist" orgPrice="159" discount="./images/alchemist.jpg" rating="0(0)"/>
                    <Modals itemName="Macbook Air Retina 2019" orgPrice="18199" discount="./images/rich.jpeg" rating="0(0)" desc="Apples thinnest and lightest notebook, the MacBook Air gets supercharged with the Apple M1 chip. Tackle your projects with the blazing-fast 8-core CPU. Take graphics-intensive apps and games to the next level with a 7-core GPU. And accelerate machine learning tasks with the 16-core Neural Engine. All with a silent, fan-less design and the longest battery life everup to 18 hours 1. Still perfectly portable. MacBook Air is now a lot more powerful.

This MacBook Air 13inch, 2018 Retina Edition features a 1,6GHz Intel Core 8GB, SSD 256GB
.
MPN: MRE82LL/A
.
Model Number: A1932
.
Type: Pre-Owned
.
Cosmetic Condition: CPO - Grade B- Device is in excellent condition. Keys A and E are faded on the keyboard.
.

    6-month warranty
. 7-Day Return Policy
. Accessories not included
. 20+ inspection done on all devices and is fully functional"/>

                </div>
    }

    testing(){
        return<h1>Hello world</h1>
    }
    
}

class Items2 extends Component{
    render(){    
        return(
                <div className="items">
                    <ItemBox category="Daily deals" itemName='Samsung Curved Monitor' orgPrice="R 3 599" discount="./images/monitor.jpg" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="MacBook Air 13-inch" orgPrice="15 999" discount="./images/laptop1.jpg" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="Asus light 14-inch" orgPrice="5 749" discount="./images/laptop3.jpg" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="ASUS ZenScreen Monitor" orgPrice="4 899" discount="./images/tab.jpg" rating="0(0)"/>
                </div>
        );
    }
}

class Items3 extends Component{
    render(){    
        return(
                <div className="items">
                    <ItemBox category="Daily deals" itemName="Great Hall Sweater" orgPrice="349" discount="./images/ff.png" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="Navy Tracksuit" orgPrice="859" discount="./images/dd.png" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="Wits Sport Hoodie" orgPrice="521" discount="./images/index.jpg" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="Wits Black Hoodie" orgPrice="149" discount="./images/jersey.jpg" rating="0(0)"/>
                </div>
        );
    }
}

class Items4 extends Component{
    render(){    
        return(
                <div className="items">
                    <ItemBox category="Daily deals" itemName="PVP Game Console" orgPrice="270" discount="./images/pvp.jpg" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="Minecraft Bobble Head" orgPrice="72" discount="./images/mine.jpg" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="Xbox One S 1TB Console" orgPrice="7 999" discount="./images/xbox.jpg" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="Hitman 3 XB1" orgPrice="1 309" discount="./images/hitman.png" rating="0(0)"/>
                </div>
        );
    }
}
export {Items, Items2, Items3, Items4};