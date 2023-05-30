import {Link} from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import useStore from "../../store/headerStore";

function Sidebar() {

    /* 사이드바 클릭값 헤더 넘겨주기 */
    const {changeTitle} = useStore(state => state)
    const menuName = (e) => {
        const selectMenu = e.target.textContent;
        changeTitle(selectMenu);
    }

    return (
        <div className="sideBar">
            <div className="menu">
                {/*<Accordion defaultActiveKey="0" className="accordion accordion-flush">*/}
            <Accordion className="accordion accordion-flush">
                <Accordion.Item eventKey="0">
                    <Accordion.Header> - 수주관리</Accordion.Header>
                    <Link to="/obtain"><Accordion.Body onClick={menuName}>수주관리</Accordion.Body></Link>
                    <Link to="/obtainview"><Accordion.Body onClick={menuName}>수주현황</Accordion.Body></Link>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="accordion accordion-flush">
                    <Accordion.Header> - 발주관리</Accordion.Header>
                    <Link to="/orderview"><Accordion.Body  onClick={menuName}>원자재발주현황</Accordion.Body></Link>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="accordion accordion-flush">
                    <Accordion.Header> - 재고관리</Accordion.Header>
                    <Link to=""><Accordion.Body onClick={menuName}>완제품 · 원자재 재고현황</Accordion.Body></Link>
                    <Link to=""><Accordion.Body onClick={menuName}>원자재 입・출고관리</Accordion.Body></Link>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className="accordion accordion-flush">
                    <Accordion.Header> - 출하관리</Accordion.Header>
                    <Link to=""><Accordion.Body onClick={menuName}>출하대기제품현황</Accordion.Body></Link>
                    <Link to=""><Accordion.Body onClick={menuName}>출하이력</Accordion.Body></Link>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className="accordion accordion-flush">
                    <Accordion.Header> - 현황관리</Accordion.Header>
                    <Link to=""><Accordion.Body onClick={menuName}>공정별생산현황</Accordion.Body></Link>
                </Accordion.Item>

                <Accordion.Item eventKey="5" className="accordion accordion-flush">
                    <Accordion.Header> - 생산관리</Accordion.Header>
                    <Link to="/productionschedule"><Accordion.Body onClick={menuName}>생산일정조회</Accordion.Body></Link>
                    <Link to="/productionperformance"><Accordion.Body onClick={menuName}>생산실적조회</Accordion.Body></Link>
                </Accordion.Item>

                <Accordion.Item eventKey="6" className="accordion accordion-flush">
                    <Accordion.Header> - 기준정보관리</Accordion.Header>
                    <Link to="/dataindex"><Accordion.Body onClick={menuName}>기준정보현황</Accordion.Body></Link>
                </Accordion.Item>
            </Accordion>
            </div>
        </div>
    )
}

export default Sidebar