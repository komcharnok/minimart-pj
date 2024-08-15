import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
            <div className="dropdown dropdown-top fixed bottom-10 right-40">
                <div tabIndex={0} role="button" className="btn mt-2">ติดต่อเรา</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Layout;
