import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar.jsx";
import ItemListContainers from "./components/containers/ItemListContainers.jsx";

function App() {
    return ( <
        div className = "App" >
        <
        NavBar / >
        <
        ItemListContainers nameProduct = "Cards de productos" / >
        <
        /div>
    )
}

export default App;