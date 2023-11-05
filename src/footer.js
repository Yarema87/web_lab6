import React from "react";

function Footer(){
    return(
      <footer className='Home_page-footer'>
        <span>
        <h3>Contact us</h3>
        </span>
        <img src='./logo192.png' className='logo' id='foo_logo' alt='logo'></img>
        <div className='social_medias'> 
          <p className='foo_text'>Our social medias:</p>
          <img src='./facebook.png' className='social_media' alt='Facebook logo'></img>
          <img src='./insta.png' className='social_media' alt='Instagram logo'></img>
          <img src='./linkedin.png' className='social_media' alt='LinkedIn logo'></img>
          <img src='./twitter.png' className='social_media' alt='Twitter logo'></img>
          <img src='./youtube.svg' className='social_media' alt='YouTube logo'></img>
        </div>
        <div>
            <p className="lowest_text">IoT 2023. All rights reserved.</p>
        </div>
      </footer>
    )
  };

export default Footer;