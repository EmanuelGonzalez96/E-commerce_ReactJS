import React from 'react';
import ItemCount from "./ItemCount";
import { Card, Button } from 'react-bootstrap';


const ItemDetail = ({detail}) => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={detail.pictureUrl} />
        <Card.Body>
          <Card.Title>{detail.name}</Card.Title>
          <Card.Text>{detail.description}
          </Card.Text>
          <Button disabled variant="primary">${detail.price}</Button>
        </Card.Body>
        <Button variant="secondary"><ItemCount stock={detail.stock} /></Button>
      </Card>
    </>
  )
}

export default ItemDetail