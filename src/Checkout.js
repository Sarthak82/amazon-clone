import React  from "react";
import "./Checkout.css"
import Subtotal from "./Subtotal";


function Checkout() {
  return (
    <div className="checkout">

      <div className="checkout__left">
        <img className="checkout__ad" src="https://th-i.thgim.com/public/incoming/kk3d6q/article66587586.ece/alternates/FREE_1200/Image%202.jpg" alt="aws"/>

        <div>
            <h2 className="checkout__title">
                Your Shopping Basket
            </h2>
            {/* BaksetItem */}
            {/* BaksetItem */}
            {/* BaksetItem */}
            {/* BaksetItem */}
            {/* BaksetItem */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  );
}


export default Checkout;
