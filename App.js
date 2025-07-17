import React from "react";
import ReactDOM from "react-dom/client";

const SubHeading = () => {
    return <h2 className="subheading">This is a subheading</h2>
}

const subHeadingJSExpression = <h3>This is H3 Tag</h3> 

const Heading = () => {
    return (<div id="container">
        <h1 className="heading">This is a heading</h1>
        <SubHeading />
        {subHeadingJSExpression}
        {console.log(100+200)}
        </div>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);