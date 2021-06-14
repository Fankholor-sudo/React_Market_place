import React from 'react';
import Header from "./Header";
import Footer from "./Footer"
import OrderHistoryBody from './OrderHistoryBody';
import Invoices from './invoices';

function OrderHistory() {
  return(
  <div>
    <Header />
    <OrderHistoryBody/>
    <Footer />
    <Invoices/>
  </div>);
}
export default OrderHistory;