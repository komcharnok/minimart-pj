import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='w-full fixed top-0 left-0 z-50'>
            <div className='bg-white'>

                <div className="bg-base-100 w-full xl:w-[1362px] mx-auto">
                    <div className="navbar">
                        <div className="navbar-start">
                            <Link to='/'>
                                <a className="btn btn-ghost text-xl">Home</a>
                            </Link>
                        </div>

                        <div className="navbar-center flex gap-2">
                            <input type="text" placeholder="Type here" className="input input-bordered md:w-[600px] sm:w-[120px] rounded-l-3xl " />
                            <button className='btn btn-warning rounded-r-3xl'>ค้นหา</button>
                        </div>

                        <div className="navbar-end">
                            <div className="dropdown dropdown-end xs:hidden sm:block">
                                <Link to='cart'>
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                        <div className="indicator">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            {/* <span className="badge badge-sm indicator-item">8</span> */}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="dropdown dropdown-end xl:hidden">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h7" />
                                    </svg>
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <Link to='login'>
                                        <li><a>เข้าสู่ระบบ</a></li>
                                    </Link>
                                </ul>
                            </div>
                            <Link to='login'>
                                <button className='btn btn-warning rounded-3xl sm:hidden xl:block'>เข้าสู่ระบบ</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
