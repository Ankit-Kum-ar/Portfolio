import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"

const Header = () => {
    const activeClass = "block py-2 px-3 text-white bg-gray-600 rounded-xl md:bg-transparent md:text-gray-600 md:p-0 ";
    const inActivClass = "block py-2 px-3 text-[#C5C5C5] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-600 md:p-0 ";
  
    const [hidden, setHidden] = useState(true);
    
    return (
        <nav className="bg-black bg-opacity-20 md:px-12 mt-1 border-black rounded-2xl">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Portfolio Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">ΛПKIƬ</span>
                </Link>

                <div id='mobile-nav' className="flex md:order-2">
                    <button data-collapse-toggle="navbar-search" onClick={() => setHidden(!hidden)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        {
                            hidden ? 
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
                            </svg> : 
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        }
                        
                    </button>
                </div>

                <div id='nav-links' className={` ${hidden ? "hidden" : ""} items-end justify-end w-full md:flex md:w-auto md:order-2`}>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                        <li>
                            <NavLink to="/about" className={({isActive}) => isActive ? activeClass : inActivClass}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/movies/top" className={({isActive}) => isActive ? activeClass : inActivClass}>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/movies/upcoming" className={({isActive}) => isActive ? activeClass : inActivClass}>Tech Stack</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shows" className={({isActive}) => isActive ? activeClass : inActivClass}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>

    )
}

export default Header
