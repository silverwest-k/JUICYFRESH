import {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";

function Facility() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8282/juicyfresh/facility")
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
                        <th>설비명</th>
                        <th>용량</th>
                        <th>자재명1</th>
                        <th>자재명2</th>
                        <th>자재명3</th>
                        <th>자재명4</th>
                    </tr>
                    </thead>

                    <tbody>
                    {data?.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.facilityName}</td>
                                <td>{item.facilityCapa}</td>

                                <td>{item.item1?.itemName || ''}</td>
                                <td>{item.item2?.itemName || ''}</td>
                                <td>{item.item3?.itemName || ''}</td>
                                <td>{item.item4?.itemName || ''}</td>
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

export default Facility