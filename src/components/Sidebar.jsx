import {Link} from "react-router-dom";

function Sidebar({toggleDisplay, display, setDisplay}) {

    return(
        <>
            <div className="sideBar">
                <label onClick={() =>{setDisplay(!display)}}>❖ 수주관리</label>
                <nav style={toggleDisplay(display)}>
                    <ul>
                        <Link to="/obtain"><li>수주관리</li></Link>
                        <Link to="/obtainview"><li>수주현황</li></Link>
                    </ul>
                </nav>
                <label onClick={() =>{setDisplay(!display)}}>❖ 발주관리</label>
                <nav style={toggleDisplay(display)}>
                    <ul>
                        <Link to="/orderview"><li>원자재발주현황</li></Link>
                    </ul>
                </nav>
                <label onClick={() =>{setDisplay(!display)}}>❖ 재고관리</label>
                <nav style={toggleDisplay(display)}>
                    <ul>
                        <li>원자재현황</li>
                        <li>원자재입・출고관리</li>
                        <li>완제품재고현황</li>
                    </ul>
                </nav>
                <label  onClick={() =>{setDisplay(!display)}}>❖ 출하관리</label>
                <nav style={toggleDisplay(display)}>
                    <ul>
                        <li>출하대기제품현황</li>
                        <li>생산실적조회</li>
                        <li>LOT관리</li>
                    </ul>
                </nav>
                <label  onClick={() =>{setDisplay(!display)}}>❖ 현황관리</label>
                <nav style={toggleDisplay(display)}>
                    <ul>
                        <li>재공재고현황</li>
                        <li>공정별생산현황</li>
                    </ul>
                </nav>
                <label  onClick={() =>{setDisplay(!display)}}>❖ 생산관리</label>
                <nav style={toggleDisplay(display)}>
                    <ul>
                        <li>생산일정조회</li>
                        <li>생산실적관리</li>
                        <li>LOT관리</li>
                    </ul>
                </nav>
                <label  onClick={() =>{setDisplay(!display)}}>❖ 기준정보관리</label>
            </div>
        </>
    )
}

export default Sidebar;