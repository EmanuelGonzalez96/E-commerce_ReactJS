import React from 'react';
import ItemCount from './containers/ItemCount';

const Item = ({detail}) => {

  return (
    <div className="item">
      <figure class="img">
        <img src={detail.pictureUrl} alt={detail.name} />
      </figure>
      <h4 class="title">{detail.name}</h4>
      <p class="description">{detail.description}</p>
      <span class="price">${detail.price}</span>
      <p class="stock">Stock: {detail.stock} unidades</p>
      <ItemCount stock={detail.stock} />
    </div>
  )
}

export default Item