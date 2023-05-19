import {Route, Routes} from "react-router-dom";
import Obtain from "./Obtain";
import Obtainview from "./Obtainview";
import Orderview from "./Orderview";
import Masterdata from "./Masterdata";

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