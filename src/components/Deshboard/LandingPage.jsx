import React from 'react';
import Header from "./Header";
import CatNavBar from "./catNavBar";
import {Body} from "./Body";
import Footer from "./Footer"

function LandingPage() {
  return(
  <div>
    <Header />
    <CatNavBar />
    <Body />
    <Footer />
    {/* <Modals /> */}
  </div>);
}
export default LandingPage;
