import React from "react";

function Header(){
    return(
      <header className="Home_page-header">
          <img src='./logo192.png' className='logo' alt='logo'></img>
          <a href="/"><button>Home</button></a> 
          <a href="/catalog"><button>Catalog</button></a>
          <a href="/cart"><button>Cart</button></a>
        </header>
    )
  };

export default Header