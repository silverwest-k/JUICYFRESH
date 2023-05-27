import logo from "../../img/logo.png";
import useStore from "../../store/headerStore";
import {Link} from "react-router-dom";

function Header() {

    const {headerTitle} =  useStore(state => state)
    const {changeTitle} = useStore(state => state)

    return (
        <div className="headerNav">
            <Link to="/" onClick={() => changeTitle("Main")}><img src={logo}/></Link>
            <p>{headerTitle}</p>
        </div>
    )
}

export default Header