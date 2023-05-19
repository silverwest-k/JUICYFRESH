import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Dropdown from 'react-bootstrap/Dropdown';
import {useEffect, useState} from "react";

// 기준정보관리
function Masterdata() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8282/juicyfreash/test')
            .then((response) => response.json())
            .then((myJson) => setData(myJson.responseResult));
    }, []);

    return (
        <>
            <div className="inputArea">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        구분
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>자재명</Dropdown.Item>
                        <Dropdown.Item>업체명</Dropdown.Item>
                        <Dropdown.Item>전 체</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <input/>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        날짜
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>발주일</Dropdown.Item>
                        <Dropdown.Item>입고예정일</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <input type="date"/>
                ~ <input type="date"/>

                <Button variant="primary">조회</Button>
                <img className="excel-icon" src={require('../img/excel.jpeg')}/>
            </div>

            <div className="outputArea">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>자재코드</th>
                            <th>자재명</th>
                            <th>상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return(
                                <tr key={item.itemId}>
                                    <td>{index+1}</td>
                                    <td>{item.itemCode}</td>
                                    <td>{item.itemName}</td>
                                    <td>{item.itemStat}</td>
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

export default Masterdata;