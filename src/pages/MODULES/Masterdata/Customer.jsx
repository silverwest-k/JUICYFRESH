import {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";


function Customer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8282/juicyfresh/customer")
            .then((res) => res.json())
            .then((res) => {setData(res)})
    }, []);

    return(
        <>

            <div className="tableArea">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>고객사명</th>
                        <th>주소</th>
                        <th>담당자</th>
                        <th>연락처</th>
                        <th>제품명1</th>
                        <th>제품명2</th>
                    </tr>
                    </thead>

                    <tbody>
                    {data?.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.customerName}</td>
                                <td>{item.customerAddress}</td>
                                <td>{item.customerPersonName}</td>
                                <td>{item.customerTel}</td>
                                <td>{item.item1?.itemName || ''}</td>
                                <td>{item.item2?.itemName || ''}</td>
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

export default Customer