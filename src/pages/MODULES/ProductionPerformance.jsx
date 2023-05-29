import {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import {downloadExcel} from "./Obtain";

// 생산 실적 조회
function ProductionPerformance() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8282/juicyfresh/productionperformance/list")
            .then((res) => res.json())
            .then((res) => {setData(res)})
    }, []);

    return (
        <>
            <div className="inputArea">
                <img className="excel-icon" src={require('../../img/excel.jpeg')}
                     onClick={() => {downloadExcel()}}
                />
            </div>

            <div className="outputArea">
                <div className="tableArea">
                    <Table striped bordered hover id="dataTable">
                        <thead>
                        <tr>
                            <th>No.</th>
                            <th>수주번호</th>
                            <th>제품명</th>
                            <th>수주량</th>
                            <th>생산번호</th>
                            <th>공정명</th>
                            <th>생산량</th>
                            <th>공정시작</th>
                            <th>공정종료</th>
                        </tr>
                        </thead>

                        <tbody>
                        {data?.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.obtain.obtainId}</td>
                                    <td>{item.obtain.item.itemName}</td>
                                    <td>{item.obtain.obtainAmount}</td>
                                    <td>{item.productionManagementId}</td>
                                    <td>{item.process}</td>
                                    <td>{item.processAmount}</td>
                                    <td>{item.processStartTime}</td>
                                    <td>{item.processFinishTime}</td>
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

export default ProductionPerformance