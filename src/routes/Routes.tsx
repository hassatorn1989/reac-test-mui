import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";
import Layout from '../layouts/Layout';
let routes = createRoutesFromElements(
    <>
        <Route path="/" index lazy={() => import("./../pages/Signin")} />
        <Route path="/" element={<Layout />}>
            <Route path='home'  lazy={() => import("./../pages/Home")} />
            <Route path="about" lazy={() => import("./../pages/About")} />
            <Route path="contact" lazy={() => import("./../pages/Contact")} />
            <Route path="user" lazy={() => import("./../pages/User")} />
        </Route>
        <Route path="*" element={<NoMatch />} />
    </>
);

const router = createBrowserRouter(routes);

function Routes() {
    return (
        <>
            < RouterProvider router={router} />
        </>
    )
}


function NoMatch() {
    return (
        <div>
            <h1>404</h1>
            <p>Sorry, the page you were looking for was not found.</p>
        </div>
    );
}

export default Routes