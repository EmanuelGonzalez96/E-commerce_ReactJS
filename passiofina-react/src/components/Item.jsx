import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({detail}) => {

  return (
    <div>
      <Link to={`/detalle/${detail.id}`}>
        <figure>
          <img src={detail.pictureUrl} alt={detail.name} />
        </figure>
        <h4>{detail.name}</h4>
      </Link>
      <p>{detail.description}</p>
      <span>${detail.price}</span>
    </div>
  )
}

export default Item