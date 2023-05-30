import Table from "react-bootstrap/Table";
import {useEffect, useState} from "react";
import ModalComponent from "../ModalComponent";

function Product() {

    const [data, setData] = useState([]);

    // 모달띄우기 state
    const [isModal, setIsModal] = useState(false);
    const openModal = () => setIsModal(true);
    const closeModal = () => setIsModal(false);


    useEffect(() => {
        fetch("http://localhost:8282/juicyfresh/test")
            .then((res) => res.json())
            .then((res) => {setData(res)})
    }, []);

    return(
        <>
            <div className="tableArea">
                <Table striped bordered hover id="dataTable">
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>자재코드</th>
                        <th>자재명</th>
                        <th>상태</th>
                        <th>모달테스트</th>
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
                                <td style={{cursor:"pointer"}} onClick={openModal}>모달창 띄울거임</td>
                                <ModalComponent
                                    isOpen={isModal} closeModal={closeModal}
                                />
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

export default Product