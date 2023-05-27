import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {useEffect, useState} from "react";
import axios from "axios";

// 수주현황
function ObtainView() {

  const [selectCategory, setSelectCategory] = useState(null);
  const [selectValue, setSelectValue] = useState(null);
  const [afterDate, setAfterDate] = useState(null);
  const [beforeDate, setBeforeDate] = useState(null);
  const [data, setData] = useState([]);

  // 데이터 받아서 테이블생성
  useEffect(() => {
    fetch("http://localhost:8282/juicyfresh/obtain/list")
        .then((res) => res.json())
        .then((res) => {setData(res)})
  }, []);

 // 조건부 검색
  const filterData = async () => {
    const searchDTO = {
      searchBy: selectCategory,
      searchQuery : selectValue,
      searchAfterDateType : afterDate,
      searchBeforeDateType : beforeDate
    };
    try {
      const response = await axios.post('http://localhost:8282/juicyfresh/obtain/search/list', searchDTO, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const obtainList = response.data;
      setData(obtainList);
      console.log(searchDTO);
    } catch (error) {
      console.log(error);
    }
  }

  return(
      <>
        <div className="inputArea">
          <select className="selectButton" onChange={(e) => {setSelectCategory(e.target.value)}}>
            <option disabled selected value="default"> 제품명 ▼ </option>
            <option value="양배추즙">양배추즙</option>
            <option value="흑마늘즙">흑마늘즙</option>
            <option value="석류 젤리스틱">석류 젤리스틱</option>
            <option value="매실 젤리스틱">매실 젤리스틱</option>
            <option value="전체">전체</option>
          </select>

          <select className="selectButton" onChange={(e) => {setSelectValue(e.target.value)}}>
            <option disabled selected value="default"> 업체명 ▼ </option>
            <option value="11번가">11번가</option>
            <option value="쿠팡">쿠팡</option>
            <option value="전체">전체</option>
          </select>
          
          <input type="date" onChange={(e) => {setAfterDate(e.target.value)}}/>
          ~ <input type="date" onChange={(e) => {setBeforeDate(e.target.value)}}/>
          
          <Button onClick={filterData}>조회</Button>

          <img className="excel-icon" src={require('../../img/excel.jpeg')} />
        </div>

        <div className="outputArea">
          <Table striped bordered hover id="dataTable">
            <thead>
            <tr>
              <th>No.</th>
              <th>수주번호</th>
              <th>수주일</th>
              <th>품목코드</th>
              <th>제품명</th>
              <th>업체명</th>
              <th>수량</th>
              <th>납기일</th>
              <th>예상납기일</th>
            </tr>
            </thead>

            <tbody>
            {data?.map((item, index) => {
              return(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.obtainId}</td>
                    <td>{item.obtainDate.split("T")[0]}</td>
                    <td>{item.item.itemCode}</td>
                    <td>{item.item.itemName}</td>
                    <td>{item.customer.customerName}</td>
                    <td>{item.obtainAmount}</td>
                    <td>{item.customerRequestDate.split("T")[0]}</td>
                    <td>{item.expectDate.split("T")[0]}</td>
                  </tr>
              )
            })
            }
            </tbody>
          </Table>
        </div>
      </>
  )
}

export default ObtainView;