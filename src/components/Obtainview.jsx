import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Dropdown from 'react-bootstrap/Dropdown';

function Obtainview() {

  return(
      <>
        <div className="inputArea">
          <div className="info">

            <ul>
              <li>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    구분
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>제품명</Dropdown.Item>
                    <Dropdown.Item>업체명</Dropdown.Item>
                    <Dropdown.Item>전 체</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li><input/></li>
              <li>납기일 <input type="date"/></li>
              <li> ~ <input type="date"/></li>
            </ul>
          </div>

          <div className="buttonArea">
            <Button variant="primary">조회</Button>

          </div>
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
            <tr>
              <td>2</td>
              <td>230511-002</td>
              <td>2023-05-11</td>
              <td>2023-05-26</td>
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
      </>
  )
}

export default Obtainview;