import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from "./components/containers/ItemDetailContainer.jsx";
import { NavBar } from "./components/NavBar.jsx";
import ItemListContainers from "./components/containers/ItemListContainers.jsx";
import Cart from './components/Cart.jsx';


function App() {
    return ( <
        div >
        <
        BrowserRouter >
        <
        NavBar / >
        <
        Switch >
        <
        Route exact path = '/' >
        <
        ItemListContainers nameProduct = "Cards de productos" / >
        <
        /Route>

        <
        Route exact path = '/categoria/:idCategory'
        component = { ItemListContainers }
        /> <
        Route exact path = '/detalle/:idProduct'
        component = { ItemDetailContainer }
        /> <
        Route exact path = '/cart'
        component = { Cart }
        /> <
        /Switch> <
        /BrowserRouter> <
        /div>
    );
}

export default App;