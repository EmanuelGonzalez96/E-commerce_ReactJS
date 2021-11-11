import React from 'react';
import ItemCount from "./ItemCount";
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCartContext } from '../CartContext';

const ItemDetail = ({detail}) => {
  
  const [count, setCount] = useState(1);

  const {cartList, showCartList, addItem} = useCartContext();
  
  const onAdd = (quantityToAdd) => {
    setCount(quantityToAdd);
    addItem({...detail, quantity: quantityToAdd});
  }


  return (
    <>
      <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={`../${detail.pictureUrl}`} />
        <Card.Body>
          <Card.Title>{detail.name}</Card.Title>
          <span>Categoria: <Link to={`/categoria/${detail.category}`}>{detail.category}</Link></span>
          <hr />
          <Card.Text>Descripción: {detail.description}</Card.Text>
          <Button disabled variant="primary">${detail.price}</Button>
          <Card.Text>{detail.stock} unidades disponibles</Card.Text>
        </Card.Body>
        <ItemCount initial={count} stock={detail.stock} detail={detail} onAdd={onAdd} />
      </Card>
    </>
  )
}

export default ItemDetail