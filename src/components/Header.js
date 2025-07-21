import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [btnName, setBtnName] = useState("Log In");
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