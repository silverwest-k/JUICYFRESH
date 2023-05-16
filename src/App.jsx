import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Contents from "./components/Contents";

// 사이드바에서 메뉴 선택하면 헤더에 값 받아와서 떠야함 > 전역관리 useContext

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
