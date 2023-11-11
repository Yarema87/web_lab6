import React from "react";
import logo1 from "./images/logo192.png"

function Header(){
    return(
      <header className="Home_page-header">
          <img src={logo1} className='logo' alt='logo'></img>
          <a href="/"><button>Home</button></a> 
          <a href="/catalog"><button>Catalog</button></a>
          <a href="/cart"><button>Cart</button></a>
        </header>
    )
  };

export default Header