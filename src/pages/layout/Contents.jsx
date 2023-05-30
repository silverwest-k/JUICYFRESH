import {Route, Routes} from "react-router-dom";
import Obtain from "../MODULES/Obtain/Obtain";
import ObtainView from "../MODULES/Obtain/ObtainView";
import OrderView from "../MODULES/Order/OrderView";
import DataIndex from "../MODULES/Masterdata/DataIndex";
import Product from "../MODULES/Masterdata/Product";
import Facility from "../MODULES/Masterdata/Facility";
import Process from "../MODULES/Masterdata/Process";
import Routing from "../MODULES/Masterdata/Routing";
import Bom from "../MODULES/Masterdata/Bom";
import Enterprise from "../MODULES/Masterdata/Enterprise";
import Customer from "../MODULES/Masterdata/Customer";
import Main from "./Main";
import ProductionPerformance from "../MODULES/Production/ProductionPerformance";
import ProductionSchedule from "../MODULES/Production/ProductionSchedule";
import ProductionSituation from "../MODULES/Production/ProductionSituation";
import Stock from "../MODULES/Stock/Stock";
import RawMaterialsSR from "../MODULES/Stock/RawMaterialsSR";
import ShipmentStandby from "../MODULES/Shipment/ShipmentStandby";
import ShipmentHistory from "../MODULES/Shipment/ShipmentHistory";
import FinishedGoodsSR from "../MODULES/Stock/FinishedGoodsSR";

function Contents() {

    return (
        <div className="contents">
            <Routes>
                <Route path="*" element={<div>없는 페이지 입니다.</div>}/>
                <Route path="/" Component={Main}></Route>

                <Route path="/obtain" Component={Obtain}></Route>
                <Route path="/obtainview" Component={ObtainView}></Route>
                <Route path="/orderview" Component={OrderView}></Route>

                <Route path="/stock" Component={Stock}></Route>
                <Route path="/rawMaterialssr" Component={RawMaterialsSR}></Route>
                <Route path="/finishedgoodssr" Component={FinishedGoodsSR}></Route>

                <Route path="/shipmentstandby" Component={ShipmentStandby}></Route>
                <Route path="/shipmenthistory" Component={ShipmentHistory}></Route>

                <Route path="/productionschedule" Component={ProductionSchedule}></Route>
                <Route path="/productionsituation" Component={ProductionSituation}></Route>
                <Route path="/productionperformance" Component={ProductionPerformance}></Route>

                <Route path="/dataindex" Component={DataIndex}>
                    <Route path="product" Component={Product}></Route>
                    <Route path="facility" Component={Facility}></Route>
                    <Route path="process" Component={Process}></Route>
                    <Route path="routing" Component={Routing}></Route>
                    <Route path="bom" Component={Bom}></Route>
                    <Route path="enterprise" Component={Enterprise}></Route>
                    <Route path="customer" Component={Customer}></Route>
                </Route>
            </Routes>
        </div>
    )
}

export default Contents;