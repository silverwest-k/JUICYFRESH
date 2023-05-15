import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Contents from "./components/Contents";

function App() {

    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="mes_container">
                    <Sidebar/>
                    <Contents/>
                </div>
            </div>
        </div>
    );
}

export default App;
