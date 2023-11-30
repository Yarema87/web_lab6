import React from "react";
import MainSection from "./Home_main_section";
import Header from '../header';
import Footer from '../footer';

function HomePage(){
  return(
    <div className="Home_page">
      <Header />
      <MainSection />
      <Footer />
    </div>
  )
}

export default HomePage;