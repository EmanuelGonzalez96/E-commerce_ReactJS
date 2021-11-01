import { useState } from "react";


const ItemCount = ({stock, onAdd}) => {

 const [count, setCount] = useState(1)

    const moreCount = () => {
        if (count === stock){
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
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
}


export default ItemCount