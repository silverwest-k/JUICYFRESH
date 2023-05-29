import Table from "react-bootstrap/Table";
import {useEffect, useState} from "react";

function Product() {

    const [data, setData] = useState([]);

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


        </>
    )
}

export default Product