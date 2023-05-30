import {useEffect, useState} from "react";
import {downloadExcel} from "../Obtain/Obtain";
import Table from "react-bootstrap/Table";

// 원자재 입출고 관리
function RawMaterialsSR() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8282/juicyfresh/material/list")
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
                            <th>원자재재고아이디</th>
                            <th>원자재코드</th>
                            <th>원자재명</th>
                            <th>수량</th>
                            <th>일자</th>
                            <th>구분</th>

                        </tr>
                        </thead>

                        <tbody>
                        {data?.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.materialId}</td>
                                    <td>{item.orderMaterial.item.itemCode}</td>
                                    <td>{item.orderMaterial.item.itemName}</td>
                                    <td>{item.materialStock}</td>
                                    <td>{item.warehouseDate.split("T")[0]}</td>
                                    <td>{item.materialStat === 0 ? "입고" : item.materialStat === 2 ? "출고" : ""}</td>
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

export default RawMaterialsSR