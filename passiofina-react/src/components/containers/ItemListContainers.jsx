import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import ItemList from "../ItemList";
//import { getFetch } from "../../services/getFetch";
import Loader from '../Loader';
import { getFirestore } from '../../services/getFirestore';


// const ItemListContainers = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
    
//     const { idCategory } = useParams();

//     useEffect(() => {
//         if(idCategory){
//           getFetch
//           .then(res => setData(res.filter(el => el.category === idCategory)))
//           .catch(err => console.log(err))
//           .finally(()=> setLoading(false))
//         }else{
//           getFetch
//           .then(res => setData(res.sort((a, b) => a.id - b.id)))
//           .catch(err => console.log(err))
//           .finally(()=> setLoading(false))
//         }
//       }, [idCategory])
    

//     return (
//         <div>
//             {
//             loading 
//             ? <Loader />
//             : <ItemList articulos={data} />
//             }
//         </div>
//     )
// }

const ItemListContainers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { idCategory } = useParams();

  useEffect(() => {
    if(idCategory){
      const db = getFirestore();
      const dbQuery = db.collection("items").where("category","==",idCategory).get();
      dbQuery
      .then(res => setData(res.docs.map( item => ({id:item.id, ...item.data()}) )))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false));
    }else{
      const db = getFirestore();
      const dbQuery = db.collection("items").get();
      dbQuery
      .then(res => setData(res.docs.map( item => ({id:item.id, ...item.data()}) )))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false));
    }
  }, [idCategory])

  return (
    <div className="item-list-container">
      {
        loading 
        ? <Loader />
        : idCategory 
          ? <>
              <h2><span>Categoría: </span>{idCategory}</h2>
              <ItemList  items={data} />
            </>
          : <>
              <h2><span>Categoría: </span>Todos</h2>
              <ItemList items={data} />
            </>
      }
    </div>
  )
}

export default ItemListContainers