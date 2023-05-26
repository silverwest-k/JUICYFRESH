import {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";

function Bom() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8282/juicyfresh/bom")
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
                        <th>자재코드</th>
                        <th>자재명</th>
                        <th>원재료1</th>
                        <th>원재료1 함유량</th>
                        <th>원재료2</th>
                        <th>원재료2 함유량</th>
                        <th>원재료3</th>
                        <th>원재료3 함유량</th>
                        <th>원재료4</th>
                        <th>원재료4 함유량</th>
                    </tr>
                    </thead>

                    <tbody>
                    {data?.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.item.itemCode}</td>
                                <td>{item.item.itemName}</td>
                                <td>{item.item1?.itemName || ''}</td>
                                <td>{item.material1Amount || ''}</td>
                                <td>{item.item2?.itemName || ''}</td>
                                <td>{item.material2Amount || ''}</td>
                                <td>{item.item3?.itemName || ''}</td>
                                <td>{item.material3Amount || ''}</td>
                                <td>{item.item4?.itemName || ''}</td>
                                <td>{item.material4Amount || ''}</td>
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

export default Bom