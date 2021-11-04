import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import ItemList from "../ItemList";
import { getFetch } from "../../services/getFetch";
import Loader from '../Loader';
//import ItemCount from "./ItemCount";

//    const handleClick=(total) =>{
//        alert(`Se agregó ${total} al carrito`)
//    }
const ItemListContainers = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const { idCategory } = useParams();

    useEffect(() => {
        if(idCategory){
          getFetch
          .then(res => setData(res.filter(el => el.category === idCategory)))
          .catch(err => console.log(err))
          .finally(()=> setLoading(false))
        }else{
          getFetch
          .then(res => setData(res.sort((a, b) => a.id - b.id)))
          .catch(err => console.log(err))
          .finally(()=> setLoading(false))
        }
      }, [idCategory])
    

    return (
        <div>
            {
            loading 
            ? <Loader />
            : <ItemList articulos={data} />
            }
        </div>
    )
}

//<ItemCount stock={10} initial={1} onAdd={handleClick}/>

export default ItemListContainers