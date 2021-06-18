import React from 'react';
import LOGO from "../../logo.svg";

function Table({ItemDetails,DATE,OrderNum}){

    const handleItems = ()=>{
        const table = document.getElementById('invoice-items');
        var items = JSON.parse(localStorage.getItem("Items"))
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
    date = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    const user = JSON.parse(localStorage.getItem('userDetails'));
    const User = user['data'][0]['firstname'] + ' ' + user['data'][0]['lastname'];
    var name = ItemDetails[0].NAME.split(",")
    var price = ItemDetails[0].PRICE.split(",")
    var ppp = 0
    var both = [];
    for (var i =1;i<price.length;i++){
        var temp = {Name: name[i], Price: price[i]}
        both.push(temp);
    }
    for(var i = 0; i< price.length; i++){
        ppp+=Number(price[i])
    }

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
                    {User}<br/>
                    22 Jorissen street<br/>
                    Braamfontein,<br/>
                    Johannesburg,<br/>
                    South Africa<br/>
                </div>
                <div className="invoice-info">
                    <strong>INVOICE #</strong><br/>
                    {OrderNum}<br/>
                    <strong>DATE</strong><br/>
                    {date}<br/>
                </div>
            </div>

            <div className="items-table">
                <table id="invoice-items">
                    <tr>
                        <th>description</th>
                        <th>quantity</th>
                        <th>price(r)</th>
                        <th>Date</th>
                    </tr>                    
                    {both.map((item)=><tr>
                        <td>{item.Name}</td>
                        <td>{1}</td>
                        <td>{item.Price}</td>
                        <td>{DATE}</td>
                        </tr>)}
                    <tr>
                        <td><strong>TOTAL</strong></td>
                        <td></td>
                        <td></td>
                        <td><strong>R {ppp}</strong></td>
                    </tr>
                </table>
            </div>
            <div className="thanks">
                <p>THANK YOU FOR SHOPPING WITH US</p>
            </div>
        </div>
    )
}
export default Table;