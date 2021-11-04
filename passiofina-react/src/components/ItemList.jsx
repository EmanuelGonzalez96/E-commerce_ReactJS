import React from 'react';
import Item from './Item';


const ItemList = ({articulos}) => {
  return (
    <div>
      {
        articulos.map(art => <Item key={art.id} detail={art} />)
      }
    </div>
  )
}


export default ItemList