import {Route, Routes} from "react-router-dom";
import Obtain from "../MODULES/Obtain";
import Obtainview from "../MODULES/Obtainview";
import Orderview from "../MODULES/Orderview";
import DataIndex from "../MODULES/Masterdata/DataIndex";
import Product from "../MODULES/Masterdata/Product";
import Facility from "../MODULES/Masterdata/Facility";
import Process from "../MODULES/Masterdata/Process";
import Routing from "../MODULES/Masterdata/Routing";
import Bom from "../MODULES/Masterdata/Bom";
import Enterprise from "../MODULES/Masterdata/Enterprise";
import Customer from "../MODULES/Masterdata/Customer";
import Main from "./Main";

function Contents() {

    return (
        <div className="contents">
            <Routes>
                <Route path="/" Component={Main}></Route>
                <Route path="/obtain" Component={Obtain}></Route>
                <Route path="/obtainview" Component={Obtainview}></Route>
                <Route path="/orderview" Component={Orderview}></Route>

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