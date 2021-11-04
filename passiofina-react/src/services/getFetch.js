const db = [{
        id: 1,
        name: "Producto 1",
        pictureUrl: "./fruncidasMicrotul.jpeg",
        description: "Descripción de producto 1",
        category: "Packs",
        price: 1000,
        stock: 10
    },
    {
        id: 2,
        name: "Producto 2",
        pictureUrl: "./colalessPuntilla.jpeg",
        description: "Descripción de producto 2",
        category: "Packs",
        price: 2000,
        stock: 20
    },
    {
        id: 3,
        name: "Producto 3",
        pictureUrl: "./pijamaPink.jpeg",
        description: "Descripción de producto 3",
        category: "Pijamas",
        price: 500,
        stock: 5
    },
    {
        id: 4,
        name: "Producto 4",
        pictureUrl: "conjunto.jpeg",
        description: "Descripción de producto 4",
        category: "Conjuntos",
        price: 200,
        stock: 2
    },
];

export const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(db);
    }, 2000);
})

export const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(db[0]);
    }, 2000);
})