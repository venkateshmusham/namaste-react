import { useState } from "react";
import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Log In");
    const onlineStatus = useOnlineStatus();
    return (<div className="flex items-center justify-between">
        <div className="w-10">
            <img src={LOGO_URL} alt="logo" />
        </div>
        <ul className="flex gap-4 items-center">
            <li>
                <span className={`w-4 h-4 inline-block rounded-full ${onlineStatus ? 'bg-green-500' : 'bg-red-500'}`}></span>
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
                <button className="" onClick={() => {
                    setBtnName(btnName === "Log In" ? "Log Out" : "Log In")
                }}>{btnName}</button>
            </li>
        </ul>
        
    </div>);
}

export default Header;