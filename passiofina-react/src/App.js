import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar.jsx";
import { Items } from "./components/containers/ItemListContainers";

function App() {
    return ( <
        div className = "App" >
        <
        NavBar / >
        <
        Items greeting = "Cards de productos" / >
        <
        /div>
    )
}

export default App;