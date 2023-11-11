import React from "react";
import CarsForExample from "./cars_for_example";
import MainParagraph from "./Main_paragraph";
import old1 from "./images/photo_5316733247306191974_x.jpeg";
import old2 from "./images/photo_5316733247306191975_x.jpeg";
import logo from "./images/logo512.png"

function MainSection(){
    return(
      <section className='Home_page-main'>
        <h2>Home page</h2>
        <img src={logo} className='main_logo' alt='logo'></img>
        <MainParagraph />
        <div className='old_site'>
          <h3>Here you can see design of old version of this site:</h3>
          <img src={old1} className='old_photo' alt='Home from old site'></img>
          <img src={old2} className='old_photo' alt='Add from old site'></img>
        </div>
        <div className="examples"> 
            <h4>Examples:</h4>
            <CarsForExample />
        </div>
      </section>
    )
  }

export default MainSection;