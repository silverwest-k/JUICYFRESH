import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import React, {useState} from "react";
import {downloadExcel} from "../Obtain";

// 기준정보관리
const buttonRepasitory = [
    {
        buttonPk : 1,
        buttonName : "품목현황",
        buttonRoute : "product"
    },
    {
        buttonPk : 2,
        buttonName : "설비현황",
        buttonRoute : "facility"
    },
    {
        buttonPk : 3,
        buttonName : "공정현황",
        buttonRoute : "process"
    },
    {
        buttonPk : 4,
        buttonName : "라우팅현황",
        buttonRoute : "routing"
    },
    {
        buttonPk : 5,
        buttonName : "BOM",
        buttonRoute : "bom"
    },
    {
        buttonPk : 6,
        buttonName : "업체현황",
        buttonRoute : "enterprise"
    },
    {
        buttonPk : 7,
        buttonName : "고객현황",
        buttonRoute : "customer"
    }
]

function DataIndex() {

    const [activeButton, setActiveButton] = useState("");

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    return (
        <>
            <div className="inputArea">
                {buttonRepasitory.map((item) => (
                    <Link to={`/dataindex/${item.buttonRoute}`}>
                        <Button className={activeButton === item.buttonPk ? "clicked" : ""}
                                onClick={()=> handleButtonClick(item.buttonPk) }
                        > {item.buttonName}
                        </Button>
                    </Link>
                ))
                }

                <img className="excel-icon" src={require('../../../img/excel.jpeg')}
                     onClick={()=>{downloadExcel()}}
                />
            </div>

            <div className="outputArea">
                <Outlet/>
            </div>
        </>

    )
}

export default DataIndex;