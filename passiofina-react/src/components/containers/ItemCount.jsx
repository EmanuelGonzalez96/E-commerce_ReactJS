import { useState } from "react";

const ItemCount = ({stock, initial}) => {

 const [count, setCount] = useState(initial)

    const moreCount = () => {
        if (count === stock){
            return count
        }else{
            setCount(count + 1)
            console.log(`Se agrega ${count + 1} unidades al carrito`)
        }
    }
    
    const lessCount = () => {
        if (count === initial){
            return count
        }else{
            setCount(count - 1)
            console.log(`Se agrega ${count - 1} unidades al carrito`)
        }

    }
      
      
    return (
        <div>
            <button onClick={moreCount}>+</button>
            <button>Cantidad {count}</button>
            <button onClick={lessCount}>-</button>
        </div>
    );
}


export default ItemCount