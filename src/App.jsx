import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./pages/layout/Sidebar";
import Header from "./pages/layout/Header";
import Contents from "./pages/layout/Contents";

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
