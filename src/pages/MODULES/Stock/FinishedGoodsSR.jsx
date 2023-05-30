import {useEffect, useState} from "react";
import {downloadExcel} from "../Obtain/Obtain";
import Table from "react-bootstrap/Table";

// 원자재 입출고 관리
function FinishedGoodsSR() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8282/juicyfresh/product/list")
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
                            <th>완제품재고아이디</th>
                            <th>완제품코드</th>
                            <th>원자재명</th>
                            <th>수량</th>
                            <th>생산일</th>
                            <th>LOT</th>

                        </tr>
                        </thead>

                        <tbody>
                        {data?.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.productId}</td>
                                    <td>{item.item.itemCode}</td>
                                    <td>{item.item.itemName}</td>
                                    <td>{item.productStock}</td>
                                    <td>{item.makeDate.split("T")[0]}</td>
                                    <td>{item.lotLogId.lot}</td>
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

export default FinishedGoodsSR