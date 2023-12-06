import React from "react";

function CartBottom(){
    return(
        <div>
            <a href="/catalog"><button className="cart_bottom_button" id="back_to_catalog">Back to catalog</button></a>
            <button className="cart_bottom_button" id="continue">Continue</button>
        </div>
    )
}

export default CartBottom;