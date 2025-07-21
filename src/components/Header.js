import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (<div className="header-ctr">
        <div className="logo-ctr">
            <img src={LOGO_URL} alt="logo" />
        </div>
        <div className="nav-item">
            <ul>
                <li>Home</li>
                <li>About US</li>
                <li>Contact US</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>);
}

export default Header;