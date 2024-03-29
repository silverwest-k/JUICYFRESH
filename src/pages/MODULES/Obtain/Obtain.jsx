import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {useEffect, useState} from "react";
import { saveAs } from 'file-saver';
import * as XLSX from "xlsx";
import ObtainTbody from "./ObtainTbody";

// 엑셀 다운받기 함수
export const downloadExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.table_to_sheet(document.getElementById("dataTable"));

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const excelBuffer = XLSX.write(wb, {
        bookType: "xlsx",
        type: "array",
    });
    const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(dataBlob, `data_${Date.now()}.xlsx`);
};


// 수주관리
function Obtain() {

    const [data, setData] = useState([]);
    const [itemName, setItemName] = useState();
    const [obtainAmount, setObtainAmount] = useState();
    const [customerRequestDate, setCustomerRequestDate] = useState();
    const [selected, setSelected] = useState();

    // input 값 초기화
    const onResetStatus = ()=>{
        setItemName("default")
        setObtainAmount("")
        setCustomerRequestDate("")
    }

    // 데이터 받아오기
    const fetchData = () => {
        fetch("http://localhost:8282/juicyfresh/obtain/list")
            .then((res) => res.json())
            .then((res) => {setData(res)})
    }

    useEffect(() => {fetchData()}, []);

    // 선택한 행 삭제
    const deleteObtain = ()=>{
        if (selected){
            fetch(`http://localhost:8282/juicyfresh/obtain/delete/${selected}`,{
                method:"delete"}).then((res) => res.json())
                .then((res) => {setData(res)})
        } else {
            alert("행을 선택하세요")
        }

    }

    // 선택한 행 확정
    const confirmObtain = ()=>{
        if (selected){
            fetch(`http://localhost:8282/juicyfresh/obtain/confirm/${selected}`,{
                method:"post"})
                .then(()=> {fetchData()})
        } else {
            alert("행을 선택하세요")
        }
    }

    // 수주입력 데이터 보내기
    const addObtain = () => {
        if (!customerRequestDate) {
            alert("납기일을 선택해주세요.");
            return;
        }
        fetch("http://localhost:8282/juicyfresh/obtain/add", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({itemName: itemName, obtainAmount: obtainAmount, customerRequestDate:customerRequestDate})
        })
            .then(()=> {
                fetchData()
                onResetStatus();
            })
    }

  return(
      <>
      <div className="inputArea">
          <select className="selectButton"
                  value={itemName}
                  onChange={(e) => {setItemName(e.currentTarget.value)}}>
              <option disabled selected value="default"> 제품명 ▼ </option>
              <option value="양배추즙">양배추즙</option>
              <option value="흑마늘즙">흑마늘즙</option>
              <option value="석류 젤리스틱">석류 젤리스틱</option>
              <option value="매실 젤리스틱">매실 젤리스틱</option>
          </select>
          
          수량 <input value={obtainAmount} onChange={(e) => {setObtainAmount(e.currentTarget.value)}} />

          납기일 <input type="date" onChange={(e) => {
          const selectedDate = new Date(e.currentTarget.value);
          selectedDate.setHours(0, 0, 0);
          const formattedDate = selectedDate.toISOString();
          setCustomerRequestDate(formattedDate);
          }} />

          <Button onClick={() => {addObtain()}}>등록</Button>
          <Button onClick={()=>{deleteObtain()}}>삭제</Button>
          <Button onClick={() => {confirmObtain()}}>확정</Button>
          <img className="excel-icon" src={require('../../../img/excel.jpeg')}
               onClick={downloadExcel}
          />
      </div>
          {selected && `선택된 번호 : ${selected}`}
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
               <ObtainTbody item={item} index={index} setSelected={setSelected}/>
           )
       })
       }
       </tbody>
       </Table>
      </div>
      </>
  )
}

export default Obtain ;