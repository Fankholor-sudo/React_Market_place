import React ,{useState} from 'react';
import Header from '../Deshboard/Header';
import { Row} from 'react-bootstrap';
import Summary from './Summary';
import Tab from './Tab';
import Empty from './Empty';

function Cart() {
    const [removed, setDisplay] = useState(false)
    var CartItems = JSON.parse(localStorage.getItem("CartItems"));  
    if(CartItems === null){
        return (
        <div>
            <Header />
            <Empty /> 
         </div>
         )
        }
    else{
        return (
        <div>
            <Header />
            <div className="body" style={{height:'40rem'}}>
                <div >
                    <Row>
                        <div style={{overflowY:'scroll', overflowX:'hidden', height:'38rem'}}>
                        {CartItems.map((data, key) => (
                                <div key={key}>
                                {!removed?(<Tab name={data.NAME} img={data.PICTURE} price={data.PRICE} itemNo={0}
                                    desc={data.DESCRIPTION} setDisplay={setDisplay} />)
                                   :null}
                                </div>
                        ))}

                        </div>
                        {/* summary tab goes at the bottom of the list*/}
                        <Summary />
                    </Row>
                </div>
            </div>
        </div>
    );
    }
}


export default Cart;