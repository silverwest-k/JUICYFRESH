import {Route, Routes} from "react-router-dom";
import Obtain from "../MODULES/Obtain";
import Obtainview from "../MODULES/Obtainview";
import Orderview from "../MODULES/Orderview";
import Masterdata from "../MODULES/Masterdata";

function Contents() {

    return (
        <div className="contents">
            <Routes>
                <Route path="/obtain" Component={Obtain}></Route>
                <Route path="/obtainview" Component={Obtainview}></Route>
                <Route path="/orderview" Component={Orderview}></Route>
                <Route path="/masterdata" Component={Masterdata}></Route>
            </Routes>
        </div>
    )
}

export default Contents;