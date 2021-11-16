import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { useCartContext } from './CartContext';

const Cart = () => {
  const {cartList, total, removeItem} = useCartContext();

  const length = cartList.length;

  return (
    length > 0
    ? 
    <div>
      <h2>RESUMEN DEL PEDIDO</h2>
      <div>
        {
          cartList.map((detail) => 
          <div key={detail.id}>
            <img src={`../${detail.pictureUrl}`} alt={detail.name} />
            <h4>{detail.name}</h4>
            <span>Precio unitario: ${detail.price}</span>
            <span> | Cantidad a comprar: {detail.quantity} </span>
            <button onClick={()=>removeItem(detail.id)}>-</button>
          </div>)
        }
      </div>
      <div>
        <h3>Total de la compra: </h3>
        <span>${total}</span>
      </div>
      
    </div>
    : 
    <div>
      <h2>No hay artículos en tu carrito</h2>
      <Link to="/"><Button text="Volver a la tienda"/></Link>
    </div>  
  )
}

export default Cart