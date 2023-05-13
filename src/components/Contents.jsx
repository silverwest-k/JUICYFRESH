import {BrowserRouter, Route, Routes} from "react-router-dom";
import Obtain from "./Obtain";
import Obtainview from "./Obtainview";
import Orderview from "./Orderview";

function Contents() {

    return (
        <div className="contents">
            <Routes>
                <Route path="/obtain" Component={Obtain}></Route>
                <Route path="/obtainview" Component={Obtainview}></Route>
                <Route path="/orderview" Component={Orderview}></Route>
            </Routes>
        </div>
    )
}

export default Contents;