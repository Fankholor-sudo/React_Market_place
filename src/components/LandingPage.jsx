import React from 'react';
import Header from "./Header";
import CatNavBar from "./catNavBar";
import Body from "./Body";
import Footer from "./Footer"
import Modals from "./modal";

function LandingPage() {
  return(
  <div className="">
    <Header />
    <CatNavBar />
    <Body />
    <Footer />
    {/* <Modals /> */}
  </div>);
}

export default LandingPage;
