import './App.css';
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function App() {

  const [display, setDisplay] = useState("false");
  let today = new Date();
  const toggleDisplay = (display) => {
    return display ? { display: "block" } : { display: "none" };
  };


  return (
    <div className="App">
      <div className="wrapper">
      <div className="navBar">
        <label onClick={() =>{setDisplay(!display)}}>❖ 수주관리</label>
          <nav style={toggleDisplay(display)}>
            <ul>
              <li>수주관리</li>
              <li>수주현황</li>
            </ul>
          </nav>
        <label onClick={() =>{setDisplay(!display)}}>❖ 발주관리</label>
          <nav style={toggleDisplay(display)}>
            <ul>
              <li>원자재발주현황</li>
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

        <div className="inputArea">
          <div className="info">
            <ul>
              <li>품목명<input/></li>
              <li>수량<input/></li>
              <li className="date">납기일<input type="date" /></li>
            </ul>
          </div>

          <div className="buttonArea">
            <Button variant="primary">등록</Button>
            <Button variant="primary">수정</Button>
            <Button variant="primary">삭제</Button>
            <Button variant="primary">확정</Button>
          </div>
        </div>

        <div className="outputArea">
          <Table striped bordered hover>
            <thead>
            <tr>
              <th>No.</th>
              <th>수주번호</th>
              <th>수주날짜</th>
              <th>품목코드</th>
              <th>제품명</th>
              <th>고객사명</th>
              <th>수량</th>
              <th>납기일</th>
              <th>예상납기일</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>230511-001</td>
              <td>2023-05-11</td>
              <td>YB-001</td>
              <td>양배추즙</td>
              <td>11번가</td>
              <td>560</td>
              <td>2023-05-25</td>
              <td>2023-05-24</td>
            </tr>
            <tr>
              <td>2</td>
              <td>230511-002</td>
              <td>2023-05-11</td>
              <td>YB-001</td>
              <td>석류젤리스틱</td>
              <td>쿠팡</td>
              <td>850</td>
              <td>2023-05-29</td>
              <td>2023-05-26</td>
            </tr>
            </tbody>
          </Table>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
