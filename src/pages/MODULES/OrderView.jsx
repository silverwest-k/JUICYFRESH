import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {useEffect, useState} from "react";
import {downloadExcel} from "./Obtain/Obtain";

// 발주현황
function OrderView() {
    const [selectCategory, setSelectCategory] = useState(null);
    const [selectValue, setSelectValue] = useState(null);
    const [selectDate, setSelectDate] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8282/juicyfresh/orderMaterial/list")
            .then((res) => res.json())
            .then((res) => {setData(res)})
    }, []);

    return (
        <>
            <div className="inputArea">
                <select className="selectButton" onChange={(e) => {setSelectCategory(e.target.value)}}>
                    <option disabled selected value="default"> 제품명 ▼ </option>
                    <option value="양배추즙">양배추즙</option>
                    <option value="흑마늘즙">흑마늘즙</option>
                    <option value="석류 젤리스틱">석류 젤리스틱</option>
                    <option value="매실 젤리스틱">매실 젤리스틱</option>
                    <option value="전체">전체</option>
                </select>

                <select className="selectButton" onChange={(e) => {setSelectValue(e.target.value)}}>
                    <option disabled selected value="default"> 업체명 ▼ </option>
                    <option value="11번가">11번가</option>
                    <option value="쿠팡">쿠팡</option>
                    <option value="전체">전체</option>
                </select>

                <select className="selectButton" onChange={(e) => {setSelectDate(e.target.value)}}>
                    <option disabled selected value="default"> 날짜 ▼ </option>
                    <option value="발주일">발주일</option>
                    <option value="예상입고일">예상입고일</option>
                </select>

                <input type="date"/>
                ~ <input type="date"/>

                <Button>조회</Button>
                <img className="excel-icon" src={require('../../img/excel.jpeg')}
                     onClick={()=>{downloadExcel()}}
                />
            </div>

            <div className="outputArea">
                <Table striped bordered hover id="dataTable">
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>원자재코드</th>
                        <th>원자재명</th>
                        <th>발주량</th>
                        <th>거래처명</th>
                        <th>발주일</th>
                        <th>예상입고일</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.enterprise.item.itemCode}</td>
                                <td>{item.enterprise.item.itemName}</td>
                                <td>{item.orderItemAmount}</td>
                                <td>{item.enterprise.enterpriseName}</td>
                                <td>{item.orderDate.split("T")[0]}</td>
                                <td>{item.importExpectDate.split("T")[0]}</td>
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

export default OrderView;