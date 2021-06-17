import React,{useState} from 'react';
import LOGO from "../../logo.svg";
// import laptop from "../../pics/laptop.jpg";


function Invoices (){

    let items;
    
    const handleItems = ()=>{

        items = JSON.parse(localStorage.getItem('CartItems'));
        console.log(items);

        const table = document.getElementById('invoice-items');

        items.forEach(element => {
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2)
            cell1.innerHTML = element[0];
            cell2.innerHTML = element[1];
            cell3.innerHTML = element[2];
        });
    }    

    let date = new Date();
    const number = `${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
    date = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

    
    return (
        <div id="invoice" className="invoice" >
           
            <div className="header">
                <img src={LOGO} alt="Wits Marketplace Logo" className="invoice-logo" width="150px"  height="150px"/>
                <div className="address">
                    <p><strong>WITS MARKETPLACE </strong><br/>
                    1 Jan Smuts Ave<br/>
                    Braamfontein<br/>
                    Johannesburg<br/>
                    2000<br/>
                    South Africa<br/>
                    </p>
                </div>
            </div>

            <div className="invoice-for">
                <div className="billto">
                    <strong>BILL TO:<br/></strong>
                    User1<br/>
                    22 Jorissen street<br/>
                    Braamfontein,<br/>
                    Johannesburg,<br/>
                    South Africa<br/>
                </div>
                <div className="invoice-info">
                    <strong>INVOICE #</strong><br/>
                    {number}<br/>
                    <strong>DATE</strong><br/>
                    {date}<br/>
                </div>
            </div>

            <div className="items-table">
                <table id="invoice-items">
                    <tr>
                        <th>items</th>
                        <th>description</th>
                        <th>quantity</th>
                        <th>price(r)</th>
                        <th>amount (r)</th>
                    </tr>
                    <tr>
                        <td>Book</td>
                        <td>Rich dad Poor dad</td>
                        <td>1</td>
                        <td>159</td>
                        <td>159</td>
                    </tr>
                    <tr>
                        <td>Book</td>
                        <td>Hartedief</td>
                        <td>1</td>
                        <td>205</td>
                        <td>205</td>
                    </tr>
                    <tr>
                        <td>Book</td>
                        <td>Beyond Order</td>
                        <td>1</td>
                        <td>279</td>
                        <td>279</td>
                    </tr>
                    <tr>
                        <td>Book</td>
                        <td>Intro to Business</td>
                        <td>1</td>
                        <td>600</td>
                        <td>600</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><strong>TOTAL</strong></td>
                        <td></td>
                        <td></td>
                        <td><strong>R 1243</strong></td>
                    </tr>
                </table>
            </div>
            <div className="thanks">
                <p>THANK YOU FOR SHOPPING WITH US</p>
            </div>
            {/* {handleItems} */}
        </div>
    )
}

export default Invoices;
