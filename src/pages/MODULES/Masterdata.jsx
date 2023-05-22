import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {useEffect, useState} from "react";

// 기준정보관리
function Masterdata() {

    const [data, setData] = useState([]);
    const [selectValue, setSelectValue] = useState();
    const [inputValue, setInputValue] = useState();
    const [state, setState] = useState();

    useEffect(() => {
        fetch("http://localhost:8282/juicyfreash/test")
            .then((res) => res.json())
            .then((res) => {setData(res)})
    }, []);

    // 조건별 검색
    // const filterData = () =>{
    //     console.log("드롭다운값 : " + selectValue + " 인풋값 : " + inputValue);
    //     fetch("?" + selectValue + "=" + inputValue)
    //         .then((res) => res.json())
    //         .then((res) => {setData(res)})
    // }

    // 상태변경
    const changeState = () => {
        state === 0 && setState("원제품")
        state === 1 && setState("반제품")
        state === 2 && setState("완제품")
    }

    return (
        <>
            <div className="inputArea">
                <select className="select" onChange={(e) => {setSelectValue(e.target.value)}}>
                    <option disabled selected value="default"> 구분 ▼ </option>
                    <option value="itemCode">자재코드</option>
                    <option value="itemName">자재명</option>
                    <option value="itemStat">상 태</option>
                </select>

                <input onChange={(e) => {setInputValue(e.target.value)}}/>

                <Button variant="primary">조회</Button>
                <img className="excel-icon" src={require('../../img/excel.jpeg')}/>
            </div>

            <div className="outputArea">
                <div className="tableArea">
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
                        {data?.map((item, index) => {
                            return(
                                <tr key={index}>
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
            </div>
        </>

    )
}

export default Masterdata;