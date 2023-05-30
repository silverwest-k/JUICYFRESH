import {useEffect, useState} from "react";
import {downloadExcel} from "../Obtain/Obtain";
import Table from "react-bootstrap/Table";
import ModalComponent from "../ModalComponent";

// 원자재 입출고 관리
function FinishedGoodsSR() {
    const [data, setData] = useState([]);
    const [res, setRes] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8282/juicyfresh/product/list")
            .then((res) => res.json())
            .then((res) => {setData(res)})
    }, []);

    // LOT 클릭했을때 LOT ID 값 전달해주기
    const handleLotLogIdClick = (lotLogId) => {
        fetch(`http://localhost:8282/juicyfresh/plot/${lotLogId}`,{
            method:"post"}).then((res) => res.json())
            .then((res) => {setRes(res)})
    };

    // 모달띄우기 state
    const [isModal, setIsModal] = useState(false);
    const openModal = () => setIsModal(true);
    const closeModal = () => setIsModal(false);


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
                                    <td onClick={() => { handleLotLogIdClick(item.lotLogId.lotLogId); openModal(); }}
                                        style={{ cursor: "pointer" }}>
                                        {item.lotLogId.lot}
                                    </td>
                                    <ModalComponent
                                        isOpen={isModal} closeModal={closeModal} res={res}
                                    />
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