import { useState } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({detail}) => {  //const ItemCount = ({stock, initial, onAdd}) => {

 const [count, setCount] = useState(1)  //useState(initial)
 const [button, setButton] = useState(false)

 const onAdd = () => {
    alert(`Se agregó al carrito '${detail.name}' ---> ${count} unidades.`)
  }

 const handlerOnAdd = () => {
    onAdd();
    setCount(1);
    setButton(true);
  }


    const moreCount = () => {
        if (count === detail.stock){
            return count
        }else{
            setCount(count + 1)
            console.log(`Se agrega ${count + 1} unidades al carrito`)
        }
    }
    
    const lessCount = () => {
        if (count === 1){
            return count
        }else{
            setCount(count - 1)
            console.log(`Se agrega ${count - 1} unidades al carrito`)
        }

    }
      
      
    return (
        <div>
            <div>
              <button onClick={moreCount}>+</button>
              <button>Cantidad {count}</button>
              <button onClick={lessCount}>-</button>
            </div>
            {
             button 
             ? <Link to="/cart">Terminar compra</Link>
             : <button onClick={handlerOnAdd}>Agregar al carrito</button>
            }
        </div>
    );
}
//<button onClick={() => onAdd(count)}>Agregar al carrito</button>

export default ItemCount