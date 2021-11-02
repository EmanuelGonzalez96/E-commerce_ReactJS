import React, {useEffect, useState} from 'react';
import { getItem } from '../../services/getFetch';
import Loader from '../Loader';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItem
    .then(res => setProduct(res))
    .then(console.log(product))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  },[])

  return (
    <div>
      {
        loading
        ? <Loader />
        : <ItemDetail detail={product} />
      }
    </div>
  )
}

export default ItemDetailContainer