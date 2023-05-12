import './App.css';
import logo from "./img/logo.png";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Obtain from "./components/Obtain";
import Obtainview from "./components/Obtainview";
import Orderview from "./components/Orderview";

function App() {

  // 사이드메뉴
  const [display, setDisplay] = useState("false");
  const toggleDisplay = (display) => {
    return display ? { display: "block" } : { display: "none" };
  };

  // 컴포넌트 스위치
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="navBar">
          <img src={logo}/>
          <label onClick={() =>{setDisplay(!display)}}>❖ 수주관리</label>
            <nav style={toggleDisplay(display)}>
              <ul>
                <li onClick={()=>{setPage(1)}}>수주관리</li>
                <li onClick={()=>{setPage(2)}}>수주현황</li>
              </ul>
            </nav>
          <label onClick={() =>{setDisplay(!display)}}>❖ 발주관리</label>
            <nav style={toggleDisplay(display)}>
              <ul>
                <li onClick={()=>{setPage(3)}}>원자재발주현황</li>
              </ul>
            </nav>
          <label onClick={() =>{setDisplay(!display)}}>❖ 재고관리</label>
            <nav style={toggleDisplay(display)}>
              <ul>
                <li>원자재현황</li>
                <li>원자재입・출고관리</li>
                <li>완제품재고현황</li>
              </ul>
            </nav>
          <label  onClick={() =>{setDisplay(!display)}}>❖ 출하관리</label>
            <nav style={toggleDisplay(display)}>
              <ul>
                <li>출하대기제품현황</li>
                <li>생산실적조회</li>
                <li>LOT관리</li>
              </ul>
            </nav>
          <label  onClick={() =>{setDisplay(!display)}}>❖ 현황관리</label>
            <nav style={toggleDisplay(display)}>
              <ul>
                <li>재공재고현황</li>
                <li>공정별생산현황</li>
              </ul>
            </nav>
          <label  onClick={() =>{setDisplay(!display)}}>❖ 생산관리</label>
            <nav style={toggleDisplay(display)}>
              <ul>
                <li>생산일정조회</li>
                <li>생산실적관리</li>
                <li>LOT관리</li>
              </ul>
            </nav>
          <label  onClick={() =>{setDisplay(!display)}}>❖ 기준정보관리</label>
        </div>

        <div className="container g-0">
        <div className="headerNav">
          <p>수주관리</p>
        </div>
        <div className="contents">
          {page===1 && <Obtain/>}
          {page===2 && <Obtainview/>}
          {page===3 && <Orderview/>}
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
