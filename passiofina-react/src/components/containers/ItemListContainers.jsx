import React from "react";

import ItemList from "../ItemList";

const ItemListContainers = ({ nameProduct }) => {
    return (
        <div>
            <h4> {nameProduct}</h4>
            <ItemList />
        </div>
    )
}

export default ItemListContainers