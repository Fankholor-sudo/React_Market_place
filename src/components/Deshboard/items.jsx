import React, { Component } from 'react';

import ItemBox from "./itemBox";
import Modals from "./modal"

class Items extends Component{

    render() {
        var department = false;
        return  <div className="items">
                    <ItemBox category={department} itemName="Macbook Air Retina 2016" orgPrice="18199" discount="35" rating="0(0)"/>
                    <ItemBox category={department} itemName="Macbook Air Retina 2017" orgPrice="18199" discount="35" rating="0(0)"/>
                    <ItemBox category={department} itemName="Macbook Air Retina 2018" orgPrice="18199" discount="35" rating="0(0)"/>
                    <ItemBox category={department} itemName="Macbook Air Retina 2019" orgPrice="18199" discount="35" rating="0(0)"/>
                    <Modals category={department} itemName="Macbook Air Retina 2019" orgPrice="18199" discount="35" rating="0(0)" desc="Apples thinnest and lightest notebook, the MacBook Air gets supercharged with the Apple M1 chip. Tackle your projects with the blazing-fast 8-core CPU. Take graphics-intensive apps and games to the next level with a 7-core GPU. And accelerate machine learning tasks with the 16-core Neural Engine. All with a silent, fan-less design and the longest battery life everup to 18 hours 1. Still perfectly portable. MacBook Air is now a lot more powerful.

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
                    <ItemBox category="Daily deals" itemName="Macbook Air Retina 2016" orgPrice="18199" discount="35" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="Macbook Air Retina 2016" orgPrice="18199" discount="35" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="Macbook Air Retina 2016" orgPrice="18199" discount="35" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="Macbook Air Retina 2016" orgPrice="18199" discount="35" rating="0(0)"/>
                </div>
        );
    }
}

class Items3 extends Component{
    render(){    
        return(
                <div className="items">
                    <ItemBox category="Daily deals" itemName="Macbook Air Retina 2016" orgPrice="18199" discount="35" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="Macbook Air Retina 2016" orgPrice="18199" discount="35" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="Macbook Air Retina 2016" orgPrice="18199" discount="35" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="Macbook Air Retina 2016" orgPrice="18199" discount="35" rating="0(0)"/>
                </div>
        );
    }
}

class Items4 extends Component{
    render(){    
        return(
                <div className="items">
                    <ItemBox category="Daily deals" itemName="Macbook Air Retina 2016" orgPrice="18199" discount="35" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="Macbook Air Retina 2016" orgPrice="18199" discount="35" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="Macbook Air Retina 2016" orgPrice="18199" discount="35" rating="0(0)"/>
                    <ItemBox category="Daily deals" itemName="Macbook Air Retina 2016" orgPrice="18199" discount="35" rating="0(0)"/>
                </div>
        );
    }
}
export {Items, Items2, Items3, Items4};