

import {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";

// 원자재 재고현황
function RawMaterials() {

    const [data, setData] = useState([]);

    // 원자재 재고 조회
    fetch("http://localhost:8282/juicyfresh/material/stock")
        .then((res) => res.json())
        .then((res) => {setData(res)})

    const getMaterialName = (index) => {
        const materialNames = ["양배추", "흑마늘", "석류 젤리스틱", "매실 젤리스틱", "콜라겐", "파우치", "스틱", "BOX"];
        return materialNames[index];
    };

    return (
        <>
            <Table striped bordered hover id="dataTable">
                <thead>
                <tr>
                    <th>No.</th>
                    <th>원자재명</th>
                    <th>재고수량</th>
                </tr>
                </thead>
                <tbody>
                {data?.map((item, index) => {
                    const materialName = getMaterialName(index);
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{materialName}</td>
                            <td>{item}</td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>

        </>

    )
}

export default RawMaterials