import {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import {downloadExcel} from "../Obtain/Obtain";

// 현황관리 - 공정별 생산 현황 조회
function ShipmentStandby() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8282/juicyfresh/wait")
            .then((res) => res.json())
            .then((res) => {setData(res)})
    }, []);

    return (
        <>
            <div className="inputArea">
                <img className="excel-icon" src={require('../../../img/excel.jpeg')}
                     onClick={() => {downloadExcel()}}
                />
            </div>

            <div className="outputArea">
                <div className="tableArea">
                    <Table striped bordered hover id="dataTable">
                        <thead>
                        <tr>
                            <th>No.</th>
                            <th>출하번호</th>
                            <th>제품코드</th>
                            <th>제품명</th>
                            <th>고객사명</th>
                            <th>출하량</th>
                            <th>출하일</th>
                        </tr>
                        </thead>

                        <tbody>
                        {data?.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.sendId}</td>
                                    <td>{item.item.itemCode}</td>
                                    <td>{item.item.itemName}</td>
                                    <td>{item.obtain.customer.customerName}</td>
                                    <td>{item.sendProductNum}</td>
                                    <td>{item.obtain.expectDate.split("T")[0]}</td>
                                </tr>
                            )
                        })
                        }
                        </tbody>
                    </Table>
                </div>
            </div>
        </>

    )
}

export default ShipmentStandby