import React from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

import Header from "./components/Header";
import Body from "./components/Body";
import { Footer } from "./components/Footer"; // it is mentioned as name export in Footer.js file

import About from "./components/About";
import Contact from "./components/Contact";
import RouterError from "./components/RouterError";
import RestaurantDetails from "./components/RestaurantDetails";

// import Grocery from "./components/Grocery";
const Grocery = lazy(() => {
    return import ("./components/Grocery");
});
// routes
const App = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
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
                element: <Contact />
            },
            {
                path: "/grocery",
                element: (<Suspense fallback={<div>Loading...</div>}><Grocery /></Suspense>)
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantDetails />
            }
        ],
        errorElement: <RouterError />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);