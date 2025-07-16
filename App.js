import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div", 
    {id:"parent"}, 
    [
        React.createElement(
            "div", 
            {id:"child", key:"child", className: "child-class"}, 
            [
                React.createElement("h1", {id:"heading", key:"heading"}, "this is child"), 
                React.createElement("h2", {id:"sub-heading", key:"sub-heading"}, "this is sub child")
            ]
        ),
        React.createElement(
            "div", 
            {id:"child2", key:"child2"}, 
            [
                React.createElement("h1", {id:"heading", key:"heading"}, "this is child"), 
                React.createElement("h2", {id:"sub-heading", key:"sub-heading"}, "this is sub child")
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);