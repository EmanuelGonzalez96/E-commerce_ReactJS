import 'bootstrap/dist/css/bootstrap.min.css';
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
        /header> <
        main >
        <
        ItemListContainers nameProduct = "Cards de productos" / >
        <
        /main> <
        /div>
    );
}

export default App;