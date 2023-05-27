import {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";

function Routing() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8282/juicyfresh/routing")
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
                        <th>제품명</th>
                        <th>프로세스1</th>
                        <th>프로세스2</th>
                        <th>프로세스3</th>
                        <th>프로세스4</th>
                        <th>프로세스5</th>
                        <th>프로세스6</th>
                        <th>프로세스7</th>
                    </tr>
                    </thead>

                    <tbody>
                    {data?.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.item.itemName}</td>
                                <td>{item.process1?.processName || ''}</td>
                                <td>{item.process2?.processName || ''}</td>
                                <td>{item.process3?.processName || ''}</td>
                                <td>{item.process4?.processName || ''}</td>
                                <td>{item.process5?.processName || ''}</td>
                                <td>{item.process6?.processName || ''}</td>
                                <td>{item.process7?.processName || ''}</td>
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

export default Routing