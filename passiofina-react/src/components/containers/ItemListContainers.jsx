import React from "react";
import ItemList from "../ItemList";
import ItemCount from "./ItemCount";

const ItemListContainers = ({ nameProduct }) => {
    const handleClick=(total) =>{
        alert(`Se agregó ${total} al carrito`)
    }

    return (
        <div>
            <h4> {nameProduct}</h4>
            <ItemList />
            <ItemCount onAdd={handleClick}/>
        </div>
    )
}

export default ItemListContainers