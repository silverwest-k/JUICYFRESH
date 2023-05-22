import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {useState} from "react";

// 수주현황
function Obtainview() {

  const [selectValue, setSelectValue] = useState();
  const [inputValue, setInputValue] = useState();

  // 조건별 검색
  // const filterData = () =>{
  //     console.log("드롭다운값 : " + selectValue + " 인풋값 : " + inputValue);
  //     fetch("?" + selectValue + "=" + inputValue)
  //         .then((res) => res.json())
  //         .then((res) => {setData(res)})
  // }

  return(
      <>
        <div className="inputArea">
          <select className="selectButton" onChange={(e) => {setSelectValue(e.target.value)}}>
            <option disabled selected value="default"> 구분 ▼ </option>
            <option value="">선택1</option>
            <option value="">선택2</option>
            <option value="">선택2</option>
          </select>

          <input onChange={(e) => {setInputValue(e.target.value)}}/>

          납기일 <input type="date"/>
              ~ <input type="date"/>

            <Button>조회</Button>
            <img className="excel-icon" src={require('../../img/excel.jpeg')} />
        </div>

        <div className="outputArea">
          <Table striped bordered hover>
            <thead>
            <tr>
              <th>No.</th>
              <th>수주번호</th>
              <th>수주날짜</th>
              <th>수주확정일</th>
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
              <td>2023-05-24</td>
              <td>YB-001</td>
              <td>양배추즙</td>
              <td>11번가</td>
              <td>560</td>
              <td>2023-05-25</td>
              <td>2023-05-24</td>
            </tr>
            </tbody>
          </Table>
        </div>
      </>
  )
}

export default Obtainview;