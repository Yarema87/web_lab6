import React from "react";
import CarsForExample from "./cars_for_example";
import MainParagraph from "./Main_paragraph";

function MainSection(){
    return(
      <section className='Home_page-main'>
        <h2>Home page</h2>
        <img src='./logo512.png' className='main_logo' alt='logo'></img>
        <MainParagraph />
        <div className='old_site'>
          <h3>Here you can see design of old version of this site:</h3>
          <img src='./photo_5316733247306191974_x.jpeg' className='old_photo' alt='Home from old site'></img>
          <img src='./photo_5316733247306191975_x.jpeg' className='old_photo' alt='Add from old site'></img>
        </div>
        <div className="examples"> 
            <h4>Examples:</h4>
            <CarsForExample />
        </div>
        <div>
          <a href="/catalog"><button className='View_more'>View more</button></a>
        </div>
      </section>
    )
  }

export default MainSection;