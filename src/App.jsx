import './App.css';
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Contents from "./components/Contents";

function App() {

    // 사이드바
    const [display, setDisplay] = useState("false");
    const toggleDisplay = (display) => {
        return display ? {display: "block"} : {display: "none"};
    };

    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="mes_container">
                    <Sidebar
                        toggleDisplay={toggleDisplay}
                        display={display}
                        setDisplay={setDisplay}
                    />
                    <Contents/>
                </div>
            </div>
        </div>
    );
}

export default App;
