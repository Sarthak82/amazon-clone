import React  from "react";
import "./Checkout.css"
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {

  const [{basket,user}]=useStateValue();

  return (
    <div className="checkout">

      <div className="checkout__left">
        <img className="checkout__ad" src="https://th-i.thgim.com/public/incoming/kk3d6q/article66587586.ece/alternates/FREE_1200/Image%202.jpg" alt="aws"/>

        <div>
            {console.log(user)}
            <h3 className="checkout__name">Hello, {!user ? 'Guest' : user?.email.split('@')[0]}</h3>
            <h2 className="checkout__title">
                Your Shopping Basket
            </h2>
            
            {basket.map(item=>(
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
            ))}
        
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  );
}


export default Checkout;
