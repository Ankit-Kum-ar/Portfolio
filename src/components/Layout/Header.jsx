import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from "../../assets/logo.png"

const Header = () => {
    const activeClass = "block py-2 px-3 text-white bg-gray-600 rounded-xl md:bg-transparent md:text-gray-600 md:p-0 transition-all duration-300 ";
    const inActivClass = "block py-2 px-3 text-[#C5C5C5] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-600 md:p-0 transition-all duration-300 ";
  
    const [hidden, setHidden] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`bg-black transition-all duration-300 md:px-12 mt-1 border-black rounded-2xl ${
                scrolled ? 'bg-opacity-40 backdrop-blur-lg shadow-lg' : 'bg-opacity-20'
            }`}
        >
            <div className="max-w-screen-xl flex flex-wrap items-center md:justify-between justify-center mx-auto p-2">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <motion.img 
                            src={logo} 
                            className="h-8" 
                            alt="Portfolio Logo"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">ΛПKIƬ</span>
                    </Link>
                </motion.div>

                <motion.div 
                    className="flex md:order-2 max-lg:hidden"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <motion.button 
                        data-collapse-toggle="navbar-search" 
                        onClick={() => setHidden(!hidden)} 
                        type="button" 
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                        aria-controls="navbar-search" 
                        aria-expanded="false"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <span className="sr-only">Open main menu</span>
                        <AnimatePresence mode="wait">
                            {hidden ? 
                            <motion.svg 
                                key="hamburger"
                                className="w-5 h-5" 
                                aria-hidden="true" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
                            </motion.svg> : 
                            <motion.svg 
                                key="close"
                                className="w-5 h-5" 
                                aria-hidden="true" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                            </motion.svg>
                            }
                        </AnimatePresence>
                    </motion.button>
                </motion.div>

                <AnimatePresence>
                    {!hidden && (
                        <motion.div 
                            id='nav-links' 
                            className="items-end justify-end w-full md:flex md:w-auto md:order-2"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                                {[
                                    { to: "/about", text: "About" },
                                    { to: "/projects", text: "Projects" },
                                    { to: "/techstack", text: "Tech Stack" },
                                    { to: "/contact", text: "Contact" }
                                ].map((item, index) => (
                                    <motion.li
                                        key={item.to}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -2 }}
                                    >
                                        <NavLink 
                                            to={item.to} 
                                            className={({isActive}) => isActive ? activeClass : inActivClass}
                                        >
                                            {item.text}
                                        </NavLink>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className={`${hidden ? "hidden" : ""} md:flex items-end justify-end w-full md:w-auto md:order-2`}>
                    <ul className="hidden md:flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        {[
                            { to: "/about", text: "About" },
                            { to: "/projects", text: "Projects" },
                            { to: "/techstack", text: "Tech Stack" },
                            { to: "/contact", text: "Contact" }
                        ].map((item, index) => (
                            <motion.li
                                key={item.to}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                whileHover={{ y: -2 }}
                            >
                                <NavLink 
                                    to={item.to} 
                                    className={({isActive}) => isActive ? activeClass : inActivClass}
                                >
                                    {item.text}
                                </NavLink>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.nav>

    )
}

export default Header
