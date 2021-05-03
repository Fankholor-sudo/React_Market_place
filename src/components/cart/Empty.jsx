import React from 'react';
import { Image } from 'react-bootstrap';


function Empty() {
    return (
        
            <div style={{ marginLeft: '30%', marginTop: '12%' }}>
                <Image src='./img/emptCartIcon.png' style={{ border: 'none', height: '270px', width: '270px' }} />
                <h2 >Your cart is empty!</h2>
            </div>
        
    )
}

export default Empty;
