import React from 'react';
import ItemCount from "./ItemCount";
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemDetail = ({detail}) => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={detail.pictureUrl} />
        <Card.Body>
          <Card.Title>{detail.name}</Card.Title>
          <span>Categoria: <Link to={`/categoria/${detail.category}`}>{detail.category}</Link></span>
          <hr />
          <Card.Text>Descripción: {detail.description}</Card.Text>
          <Button disabled variant="primary">${detail.price}</Button>
          <Card.Text>{detail.stock} unidades disponibles</Card.Text>
        </Card.Body>
        <ItemCount detail={detail} />
      </Card>
    </>
  )
}

export default ItemDetail