import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {useEffect, useState} from "react";
import { saveAs } from 'file-saver';
import * as XLSX from "xlsx";

// 수주관리
function Obtain() {

    const [data, setData] = useState([]);
    const [itemName, setItemName] = useState();
    const [obtainAmount, setObtainAmount] = useState();
    const [customerRequestDate, setCustomerRequestDate] = useState();

    // 데이터 받아서 테이블생성
    useEffect(() => {
        fetch("http://localhost:8282/juicyfresh/obtain/list")
            .then((res) => res.json())
            .then((res) => {setData(res)})
    }, []);

    // 수주입력 데이터 보내기
    const addObtain = () => {
        fetch("http://localhost:8282/juicyfresh/obtain/add", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({itemName: itemName, obtainAmount: obtainAmount, customerRequestDate:customerRequestDate})
        })
    }

    // 엑셀 다운받기 함수
    const downloadExcel = () => {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.table_to_sheet(document.getElementById("dataTable"));

        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        const excelBuffer = XLSX.write(wb, {
            bookType: "xlsx",
            type: "array",
        });

        const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });
        saveAs(dataBlob, `수주관리_${Date.now()}.xlsx`);
    };

  return(
      <>
      <div className="inputArea">

          <select className="selectButton" onChange={(e) => {setItemName(e.currentTarget.value)}}>
              <option disabled selected value="default"> 제품명 ▼ </option>
              <option value="양배추즙">양배추즙</option>
              <option value="흑마늘즙">흑마늘즙</option>
              <option value="석류젤리스틱">석류 젤리스틱</option>
              <option value="매실젤리스틱">매실 젤리스틱</option>
          </select>
          
          수량 <input onChange={(e) => {setObtainAmount(e.currentTarget.value)}} />


          {/*납기일 <input type="date"  onChange={(e) => {setObtainDate(e.currentTarget.value)}} />*/}
          납기일 <input type="date" onChange={(e) => {
          const selectedDate = new Date(e.currentTarget.value);
          selectedDate.setHours(0, 0, 0);
          const formattedDate = selectedDate.toISOString();
          setCustomerRequestDate(formattedDate);
          }} />



          <Button onClick={() => {addObtain()}}>등록</Button>
          <Button>수정</Button>
          <Button>삭제</Button>
          <Button>확정</Button>
          <img className="excel-icon" src={require('../../img/excel.jpeg')}
               onClick={downloadExcel}
          />
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
            <th>고객사명</th>
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

export default Obtain ;