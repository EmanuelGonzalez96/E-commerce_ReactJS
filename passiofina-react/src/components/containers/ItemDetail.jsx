import React from 'react';
import ItemCount from "./ItemCount";
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCartContext } from '../CartContext';

const ItemDetail = ({product}) => {
  
  const [count, setCount] = useState(1);

  const {cartList, showCartList, addItem} = useCartContext();
  
  const onAdd = (quantityToAdd) => {
    setCount(quantityToAdd);
    addItem({...product, quantity: quantityToAdd});
  }


  return (
    <>
      <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={`../${product.pictureUrl}`} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <span>Categoria: <Link to={`/categoria/${product.category}`}>{product.category}</Link></span>
          <hr />
          <Card.Text>Descripción: {product.description}</Card.Text>
          <Button disabled variant="primary">${product.price}</Button>
          <Card.Text>{product.stock} unidades disponibles</Card.Text>
        </Card.Body>
        <ItemCount initial={count} stock={product.stock} product={product} onAdd={onAdd} />
      </Card>
    </>
  )
}

export default ItemDetail