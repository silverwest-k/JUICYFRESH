import logo from "../img/logo.png";

function Header() {
    return (
        <div className="headerNav">
            <img src={logo}/>
            <p>수주관리</p>
        </div>
    )
}

export default Header;