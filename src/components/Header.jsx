import logo from "../img/logo.png";

function Header() {
    return (
        <div className="headerNav">
            <img src={logo}/>
            <p>사이드바 값 가져오기</p>
        </div>
    )
}

export default Header;