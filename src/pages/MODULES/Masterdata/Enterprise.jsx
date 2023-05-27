import {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";

function Enterprise() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8282/juicyfresh/enterprise")
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
                        <th>자재명</th>
                        <th>구매처명</th>
                        <th>소요기간</th>
                    </tr>
                    </thead>

                    <tbody>
                    {data?.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.item.itemName}</td>
                                <td>{item.enterpriseName}</td>
                                <td>{item.deliveryTime}</td>
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

export default Enterprise