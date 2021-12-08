import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import Loader from '../Loader';
import ItemDetail from './ItemDetail';
import { getFirestore } from '../../services/getFirestore';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { idProduct } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const dbQuery = db.collection("items").doc(idProduct).get();
    dbQuery
    .then(res => setProduct({id: res.id, ...res.data()}))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false));

  }, [idProduct])

  return (
    <div>
      {
        loading
        ? <Loader />
        : <ItemDetail product={product} />
      }
    </div>
  )
}

export default ItemDetailContainer