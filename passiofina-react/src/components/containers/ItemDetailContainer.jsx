import React, {useEffect, useState} from 'react';
import { getFetch } from '../../services/getFetch';
import { useParams } from 'react-router';
import Loader from '../Loader';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const { idProduct } = useParams();

  useEffect(() => {
    getFetch
    .then(res => setDetail(res.find(prod => prod.id === parseInt(idProduct))))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  }, [idProduct])

  return (
    <div>
      {
        loading
        ? <Loader />
        : <ItemDetail detail={detail} />
      }
    </div>
  )
}

export default ItemDetailContainer