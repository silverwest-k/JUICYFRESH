import logo from "../../img/logo.png";
import useStore from "../../store/headerStore";

function Header() {

    const {headerTitle} =  useStore(state => state)

    return (
        <div className="headerNav">
            <img src={logo}/>
            <p>{headerTitle}</p>
        </div>
    )
}

export default Header;