import { useState } from "react";
import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Log In");
    const onlineStatus = useOnlineStatus();
    return (<div className="header-ctr">
        <div className="logo-ctr">
            <img src={LOGO_URL} alt="logo" />
        </div>
        <div className="nav-item">
            <ul>
                <li>
                    <span
                        style={{
                        display: "inline-block",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: onlineStatus ? "green" : "red",
                        marginLeft: "5px"
                        }}
                    ></span>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About US</Link>
                </li>
                <li>
                    <Link to="/contact">Contact US</Link>
                </li>
                <li>
                    <Link to="/grocery">Grocery</Link>
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