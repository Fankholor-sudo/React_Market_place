import React ,{useState} from 'react';
import Header from '../Deshboard/Header';
import Search from './search';

function SearchDisplay() {
    const [display, setDisplay] = useState(false)
    var Item = JSON.parse(sessionStorage.getItem("Item"));  
    
        return (
        <div>
            <Header />
            <div className="body" >
                <div >
                     <div classname = "Items" /*style={}*/>
                        {Item.map((data, key) => (
                                <div key={key}>
                                {(<Search  img={data.PICTURE} name={data.NAME} price={data.PRICE} 
                                     setDisplay={setDisplay} />)
                                   }
                             </div>
                        ))}
                     </div>
                </div>
            </div>
        </div>
    );
    }




export default SearchDisplay;