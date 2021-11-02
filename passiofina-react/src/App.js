import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from "./components/containers/ItemDetailContainer.jsx";
import { NavBar } from "./components/NavBar.jsx";
import ItemListContainers from "./components/containers/ItemListContainers.jsx";


function App() {
    return ( <
        div className = "App" >
        <
        header >
        <
        NavBar / >
        <
        /header>  <
        main >
        <
        ItemListContainers nameProduct = "Cards de productos" / >
        <
        ItemDetailContainer / >
        <
        /main> <
        /div>
    );
}

export default App;