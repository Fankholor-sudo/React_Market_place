import React,{Component} from 'react';
import jsPDF from 'jspdf';
import html2canvas from "html2canvas";

class MyAccountBar extends Component{
    
    render(){
        return  <div className="departments">
                    <h3 className="departmentHeading">My Account</h3>
                    
                    <ul className="departmentItems">
                        
                        <li><a href="#" className="department">Orders</a>
                            <ul id="booksStationery" className="subDepartment">
                                <li><a href="#">Orders</a></li>
                                <li><a href="#" onClick={()=>{
                                    const input = document.getElementById("invoice");
                                    html2canvas(input)
                                        .then((canvas) => {
                                            const imgData = canvas.toDataURL('image/png');
                                            const pdf = new jsPDF();
                                            pdf.addImage(imgData, 'JPEG', 0, 0);
                                            pdf.save(`wits_marketplace_invoice.pdf`);
                                        }).finally(()=>{
                                            window.open("http://localhost:3000/OrderHistory","_self");
                                        }
                                        )

                                }}>Invoices</a></li>
                                {/* <li><a href="#">Exchanges & Returns</a></li> */}
                            </ul>
                        </li>
                        
                        <li><a href="#" className="department">Payments & Credit</a>
                            <ul id="clothing-bags" className="subDepartment">
                                <li><a href="#">Credit & Refunds</a></li>
                                <li><a href="#">Redeem Gift Vouchers</a></li>
                            </ul>
                        </li>
                        
                        <li><a href="#" className="department">Customer Information</a>
                            <ul id="computerElectronics" className="subDepartment">
                                <li><a href="#">Personal Details</a></li>
                                <li><a href="#">Address Book</a></li>
                                <li><a href="#">Newsletter Subscription</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>;
    }
}

export default MyAccountBar;