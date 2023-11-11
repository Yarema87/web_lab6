import React from "react";
import youtube from "./images/youtube.svg"
import twitter from "./images/twitter.png"
import linkedin from "./images/linkedin.png"
import instagram from "./images/insta.png"
import facebook from "./images/facebook.png"
import logo from "./images/logo192.png"

function Footer(){
    return(
      <footer className='Home_page-footer'>
        <span>
        <h3>Contact us</h3>
        </span>
        <img src={logo} className='logo' id='foo_logo' alt='logo'></img>
        <div className='social_medias'> 
          <p className='foo_text'>Our social medias:</p>
          <img src={facebook} className='social_media' alt='Facebook logo'></img>
          <img src={instagram} className='social_media' alt='Instagram logo'></img>
          <img src={linkedin} className='social_media' alt='LinkedIn logo'></img>
          <img src={twitter} className='social_media' alt='Twitter logo'></img>
          <img src={youtube} className='social_media' alt='YouTube logo'></img>
        </div>
        <div>
            <p className="lowest_text">IoT 2023. All rights reserved.</p>
        </div>
      </footer>
    )
  };

export default Footer;