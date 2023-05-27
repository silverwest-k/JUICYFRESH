import {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
// import { saveAs } from 'file-saver';
// import XLSX from 'xlsx';

function Process() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8282/juicyfresh/process")
            .then((res) => res.json())
            .then((res) => {setData(res)})
    }, []);

    // const downloadExcel = () => {
    //     const workbook = XLSX.utils.book_new();
    //     const worksheet = XLSX.utils.json_to_sheet(data);
    //
    //     XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //     const excelBuffer = XLSX.write(workbook, {
    //         bookType: "xlsx",
    //         type: "array",
    //     });
    //
    //     const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });
    //     saveAs(dataBlob, "data.xlsx");
    // };

    return(
        <>

            <div className="tableArea">
                <Table striped bordered hover id="dataTable">
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>공정명</th>
                        <th>공정내용</th>
                        <th>자재명1</th>
                        <th>자재명2</th>
                        <th>자재명3</th>
                        <th>자재명4</th>
                        <th>설비명1</th>
                        <th>설비명2</th>
                        <th>설비명3</th>
                        <th>설비명4</th>
                    </tr>
                    </thead>

                    <tbody>
                    {data?.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.processName}</td>
                                <td>{item.processContent}</td>

                                <td>{item.item1?.itemName || ''}</td>
                                <td>{item.item2?.itemName || ''}</td>
                                <td>{item.item3?.itemName || ''}</td>
                                <td>{item.item4?.itemName || ''}</td>

                                <td>{item.facility1?.facilityName || ''}</td>
                                <td>{item.facility2?.facilityName || ''}</td>
                                <td>{item.facility3?.facilityName || ''}</td>
                                <td>{item.facility4?.facilityName || ''}</td>
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

export default Process