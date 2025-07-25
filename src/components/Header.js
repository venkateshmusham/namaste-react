import { useState } from "react";
import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";


const Header = () => {
    const [btnName, setBtnName] = useState("Log In");
    return (<div className="header-ctr">
        <div className="logo-ctr">
            <img src={LOGO_URL} alt="logo" />
        </div>
        <div className="nav-item">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About US</Link>
                </li>
                <li>
                    <Link to="/contact">Contact US</Link>
                </li>
                <li>Cart</li>
                <li>
                    <button onClick={() => {
                        setBtnName(btnName === "Log In" ? "Log Out" : "Log In")
                    }}>{btnName}</button>
                </li>
            </ul>
        </div>
    </div>);
}

export default Header;