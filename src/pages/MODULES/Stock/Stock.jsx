import { useState } from "react";
import { downloadExcel } from "../Obtain/Obtain";
import FinishedGoods from "./FinishedGoods";
import RawMaterials from "./RawMaterials";

// 완제품 재고현황
function Stock() {
    const [selectValue, setSelectValue] = useState(null);

    const renderContent = () => {
        if (selectValue === "완제품") {
            return <FinishedGoods />;
        } else if (selectValue === "원자재") {
            return <RawMaterials />;
        } else {
            return null;
        }
    };

    return (
        <>
            <div className="inputArea">
                <select
                    className="selectButton"
                    onChange={(e) => {
                        setSelectValue(e.target.value);
                    }}
                >
                    <option disabled selected value="default">
                        {" "}
                        구분 ▼{" "}
                    </option>
                    <option value="완제품">완제품</option>
                    <option value="원자재">원자재</option>
                </select>

                <img
                    className="excel-icon"
                    src={require("../../../img/excel.jpeg")}
                    onClick={() => {
                        downloadExcel();
                    }}
                />
            </div>

            <div className="outputArea">{renderContent()}</div>
        </>
    );
}

export default Stock;
