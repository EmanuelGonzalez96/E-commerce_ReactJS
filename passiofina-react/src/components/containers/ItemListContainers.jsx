import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainers = ({ nameProduct }) => {
    return (
        <div>
            <h4> {nameProduct}</h4>
            <ItemCount
            initial={1}
            stock={10}
            />
        </div>
    )
}

export default ItemListContainers