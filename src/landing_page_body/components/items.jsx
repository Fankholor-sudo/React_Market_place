import React, { Component } from 'react';

import ItemBox from "./itemBox";

class Items extends Component{

    render() {
        return  <div className="items">
                    <ItemBox category="Daily deals" itemName="Macbook Air Retina 2018" orgPrice="18199" discount="35" rating="4.7(147)"/>
                    <ItemBox category="Daily deals" itemName="Macbook Air Retina 2018" orgPrice="18199" discount="35" rating="4.7(147)"/>
                    <ItemBox category="Daily deals" itemName="Macbook Air Retina 2018" orgPrice="18199" discount="35" rating="4.7(147)"/>
                    <ItemBox category="Daily deals" itemName="Macbook Air Retina 2018" orgPrice="18199" discount="35" rating="4.7(147)"/>
                </div>
    }
}

export default Items;