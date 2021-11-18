import React from 'react';
import Item from './Item';


const ItemList = ({items}) => {
  return (
    <div>
      {
        items.map(art => <Item key={art.id} detail={art} />)
      }
    </div>
  )
}


export default ItemList