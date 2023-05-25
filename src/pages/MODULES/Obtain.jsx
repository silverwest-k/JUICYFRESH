import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {useEffect, useState} from "react";
import { saveAs } from 'file-saver';
import * as XLSX from "xlsx";

// 수주관리
function Obtain() {

    const [data, setData] = useState([]);

    // 데이터 받아오기
    useEffect(() => {
        fetch("http://localhost:8282/juicyfresh/obtain/list")
            .then((res) => res.json())
            .then((res) => {setData(res)})
    }, []);

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

          품목명 <input/>
          수량 <input/>
          납기일 <input type="date"/>

          <Button>등록</Button>
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