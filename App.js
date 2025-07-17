import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
    return (<div className="header-ctr">
        <div className="logo-ctr">
            <img sre="" alt="logo" />
        </div>
        <div class="nav-item">
            <ul>
                <li>Home</li>
                <li>About US</li>
                <li>Contact US</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>);
}

const BodyComponent = () => {
    return (
        <div></div>
    );
}

const FooterComponent = () => {
    return (
        <div>
            <ul>
                <li>Copyrights to Musham</li>
            </ul>
        </div>
    )
}

const App = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);