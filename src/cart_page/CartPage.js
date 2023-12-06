import React from "react";
import Header from "../header";
import Footer from "../footer";
import CatalogInCart from "./CatalogInCart";
import CartBottom from "./cart_bottom";


function CartPage() {
  return (
        <div>
            <Header />
            <CatalogInCart />
            <CartBottom />
            <Footer />
        </div>
  );
}

export default CartPage;
