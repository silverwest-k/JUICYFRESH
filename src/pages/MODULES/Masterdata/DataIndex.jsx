import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import {useState} from "react";

// 기준정보관리
function DataIndex() {

    const [activeButton, setActiveButton] = useState("");

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    return (
        <>
            <div className="inputArea">
                <Link to="/dataindex/product">
                    <Button className={activeButton === "product" ? "clicked" : ""}
                            onClick={() => handleButtonClick("product")}
                    >품목현황</Button>
                </Link>
                <Link to="/dataindex/facility">
                    <Button className={activeButton === "facility" ? "clicked" : ""}
                            onClick={() => handleButtonClick("facility")}
                    >설비현황</Button>
                </Link>
                <Link to="/dataindex/process">
                    <Button className={activeButton === "process" ? "clicked" : ""}
                            onClick={() => handleButtonClick("process")}
                    >공정현황</Button>
                </Link>
                <Link to="/dataindex/routing">
                    <Button className={activeButton === "routing" ? "clicked" : ""}
                            onClick={() => handleButtonClick("routing")}
                    >라우팅현황</Button>
                </Link>
                <Link to="/dataindex/bom">
                    <Button className={activeButton === "bom" ? "clicked" : ""}
                             onClick={() => handleButtonClick("bom")}
                    >BOM현황</Button>
                </Link>
                <Link to="/dataindex/enterprise">
                    <Button className={activeButton === "enterprise" ? "clicked" : ""}
                             onClick={() => handleButtonClick("enterprise")}
                    >업체현황</Button>
                </Link>
                <Link to="/dataindex/customer">
                    <Button  className={activeButton === "customer" ? "clicked" : ""}
                             onClick={() => handleButtonClick("customer")}
                    >고객현황</Button>
                </Link>
                <img className="excel-icon" src={require('../../../img/excel.jpeg')}/>
            </div>

            <div className="outputArea">
                <Outlet/>
            </div>
        </>

    )
}

export default DataIndex;