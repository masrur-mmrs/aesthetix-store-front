"use client"
import { useEffect, useState } from "react";
import CartDropdown from "../cart-dropdown"
import { clx } from "@medusajs/ui";

export default function CartButton({cart}: any) {
  const [cartItems, setCartItems] = useState(0)
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    if (cart) {
      setCartItems(cart.items.length)
    }
    return () => {
      setAnimation(true);
      setTimeout(() => {
        setAnimation(false);
      }, 300);
      
    };
  }, [cart, cartItems]);
  
  

  return (
  <div className={clx(animation?"scale-125":"scale-100" , "lg:scale-100 transition duration-300 ease-linear")}>
    <CartDropdown cart={cart} />
  </div>
)
}
