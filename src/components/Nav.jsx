import React from 'react';
import { Link, NavLink } from 'react-router';

const Nav = () => {
    const links = <>
        <li><NavLink to='/' className={({isActive})=> isActive ? "border-b-2 border-violet-600" : ""}>Home</NavLink></li>
        <li><NavLink to='/listed-books' className={({isActive})=> isActive ? "border-b-2 border-violet-600" : ""}>Listed Books</NavLink></li>
        <li><NavLink to='/pages-to-read' className={({isActive})=> isActive ? "border-b-2 border-violet-600" : ""}>Pages to Read</NavLink></li>
    </>
    return (
        <div className='max-w-7xl mx-auto bg-base-100 shadow-sm'>
            <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                    </ul>
                </div>
                <a className="text-3xl font-bold text-violet-600">Readify</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn border-2 border-violet-400 bg-violet-200 text-violet-600 mr-4">Sign In</Link>
                <Link className="btn bg-violet-600 text-white">Sign Up</Link>
            </div>
            </div>
        </div>
    );
};

export default Nav;