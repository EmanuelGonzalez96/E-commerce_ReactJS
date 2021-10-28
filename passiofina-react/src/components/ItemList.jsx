import React, {useState, useEffect} from 'react';
import Item from './Item';
import { getFetch } from '../services/getFetch';
import Loader from './Loader';


const ItemList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch
    .then(res => setData(res))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  }, [])


  return (
    <div>
      {loading ? <Loader />: data.map(prod => <Item key={prod.id} detail={prod} />)}
    </div>
  )
}

export default ItemList