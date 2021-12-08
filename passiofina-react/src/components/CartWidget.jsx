import React from 'react';
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";

const CartWidget = () => {
    const {quantity} = useCartContext();
  
    return (
      <div>
        <Link to={"/cart"}>
          <i className="fas fa-shopping-cart"></i>
          {quantity !== 0 && <span className="quantity">{quantity}</span>}
          </Link>
        </div>
    )
  }
  
  export default CartWidget





/*
import cartImage from "../components/images/cart.svg";

export function IconCart() {
    return <img src={cartImage} alt="IconCart" style={{ width:'25px' , height:'25px' , margin: '5px'}}/>;
}
*/

