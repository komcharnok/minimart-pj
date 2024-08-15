import Layout from '../layouts/Layout';
import CartPage from '../pages/Cart-Page/CartPage';
import ConfirmorderPage from '../pages/ConfirmOrder-Page/ConfirmorderPage';
import HomePage from '../pages/Home-Page/HomePage';
import LoginPage from '../pages/Login-Page/LoginPage';
import ProfilePage from '../pages/Profile-Page/ProfilePage';
import React from 'react';
// import { Navigate } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const guestRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Layout />
            </>
        ),
        children: [
            { index: true, element: <HomePage /> },
            //   { path: "home", element: <HomePage /> },
            { path: "login", element: <LoginPage /> },
            { path: "profile", element: <ProfilePage /> },
            { path: "cart/confirmorder", element: <ConfirmorderPage /> },
            { path: "cart", element: <CartPage /> },
            {
                path: "*", element:
                    <div className=' mt-28  xl:w-[1368px] sm:w-[414px] lg:w-[1141px] mx-auto text-center'>
                        <h1 className='text-4xl'>404  Not Found</h1>
                    </div>
            },

        ]
    }
]);

function AppRouter() {
    return (
        <RouterProvider router={guestRouter} />
    );
}

export default AppRouter;