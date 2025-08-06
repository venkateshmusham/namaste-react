import React, { lazy, Suspense, useContext, useEffect, useState  } from "react";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

import Header from "./components/Header";
import Body from "./components/Body";
import { Footer } from "./components/Footer"; // it is mentioned as name export in Footer.js file

import About from "./components/About";
// import Contact from "./components/Contact";
import RouterError from "./components/RouterError";
import RestaurantDetails from "./components/RestaurantDetails";
import userInfoContext from "./utils/userInfoContext";

import Login from "./components/Login";

// import Grocery from "./components/Grocery";
const Grocery = lazy(() => {
    return import ("./components/Grocery");
});

const Contact = lazy(() => {
    return import ("./components/Contact")
})

// routes
const App = () => {
    const [userName, setUserName] = useState("");
    
    // setting the user name in /login page for practice
    // useEffect(() => {
    //     const data = {name: "Venkatesh"};
    //     setUserName(data.name)
    // }, []);

    return (
        <userInfoContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </userInfoContext.Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: (<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>)
            },
            {
                path: "/grocery",
                element: (<Suspense fallback={<div>Loading...</div>}><Grocery /></Suspense>)
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantDetails />
            },
            {
                path: "/login",
                element: <Login />
            }
        ],
        errorElement: <RouterError />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);