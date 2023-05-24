import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import Table from "react-bootstrap/Table";
// import { saveAs } from 'file-saver';
// import XLSX from 'xlsx';

// 수주관리
function Obtain() {

  // // 엑셀 다운받기 함수
  //   const downloadExcel = () => {
  //       const wb = XLSX.utils.book_new();
  //       const ws = XLSX.utils.json_to_sheet(data);
  //
  //       XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  //       const excelBuffer = XLSX.write(wb, {
  //           bookType: "xlsx",
  //           type: "array",
  //       });
  //
  //       const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });
  //       saveAs(dataBlob, `data_${Date.now()}.xlsx`);
  //   };

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

          />
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
        </tbody>
       </Table>
      </div>
      </>
  )
}

export default Obtain ;