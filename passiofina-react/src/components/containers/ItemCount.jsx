import { useState } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({stock, initial, onAdd}) => {  //const ItemCount = ({stock, initial, onAdd}) => {

 const [count, setCount] = useState(initial)  //useState(initial)
 const [button, setButton] = useState(false)

 /*
 const onAdd = () => {
    alert(`Se agregó al carrito '${detail.name}' ---> ${count} unidades.`)
  }
 */

 const handlerOnAdd = () => {
    onAdd(count);
    setButton(true);
  }
            
    return (
        button 
        ? 
            <div>
                <Link to="/cart">Terminar compra</Link>
            </div>
        :
             
            <div>
                <button disabled={count === initial} onClick={()=>setCount(count - 1)}>-</button>
                <span>Cantidad {count}</span>
                <button disabled={count === stock} onClick={()=>setCount(count + 1)}>+</button>
                <button onClick={handlerOnAdd}>Agregar al carrito</button>      
            </div>
            /*
                const moreCount = () => {
                if (count === detail.stock){
                    return count
                }else{
                    setCount(count + 1)
                    console.log(`Se agrega ${count + 1} unidades al carrito`)
                }
                }

                <button onClick={moreCount}>+</button>
                <button>Cantidad {count}</button>
            
                const lessCount = () => {
                  if (count === 1){
                    return count
                  }else{
                    setCount(count - 1)
                    console.log(`Se agrega ${count - 1} unidades al carrito`)
                  }
        
                } 
             
             <button onClick={lessCount}>-</button>
             <button onClick={handlerOnAdd}>Agregar al carrito</button>
            
            */
    )
}

export default ItemCount