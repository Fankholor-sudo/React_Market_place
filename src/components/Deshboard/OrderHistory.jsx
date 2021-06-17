import React from 'react';
import Header from "./Header";
import Footer from "./Footer"
import OrderHistoryBody from './OrderHistoryBody';

function OrderHistory() {
  return(
  <div>
    <Header />
    <OrderHistoryBody/>
    <Footer />
  </div>);
}
export default OrderHistory;
