import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion";

const MoblieNavbar = () => {
    const [active, setActive] = useState('home');
    const location = useLocation();

    // Update active state based on current location
    useEffect(() => {
        const path = location.pathname;
        if (path === '/') setActive('home');
        else if (path === '/about') setActive('about');
        else if (path === '/projects') setActive('projects');
        else if (path === '/techstack') setActive('techstack');
        else if (path === '/contact') setActive('contact');
    }, [location]);

    const handleClick = (icon) => {
        setActive(icon);
    };

    const navItems = [
        { key: 'home', path: '/', openIcon: '/assets/MobileNavbar/Home-Open.png', closeIcon: '/assets/MobileNavbar/Home-Close.png', alt: 'Home' },
        { key: 'about', path: '/about', openIcon: '/assets/MobileNavbar/User-Open.png', closeIcon: '/assets/MobileNavbar/User-Close.png', alt: 'User' },
        { key: 'projects', path: '/projects', openIcon: '/assets/MobileNavbar/Projects-Open.png', closeIcon: '/assets/MobileNavbar/Projects-Close.png', alt: 'Projects' },
        { key: 'techstack', path: '/techstack', openIcon: '/assets/MobileNavbar/Tech-Open.png', closeIcon: '/assets/MobileNavbar/Tech-Close.png', alt: 'Tech Stack' },
        { key: 'contact', path: '/contact', openIcon: '/assets/MobileNavbar/Contact-Open.png', closeIcon: '/assets/MobileNavbar/Contact-Close.png', alt: 'Contact' }
    ];

    return (
        <motion.div 
            className="flex justify-between gap-1 border-t fixed w-11/12 right-0 mx-auto left-0 bottom-0 bg-[#02020299] backdrop-blur-lg border-[#27262C61] rounded-xl border-[1px] p-4 sm:hidden z-40"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {navItems.map((item, index) => (
                <Link 
                    key={item.key}
                    to={item.path} 
                    onClick={() => handleClick(item.key)}
                >
                    <motion.div
                        className="relative p-2 rounded-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <motion.img
                            src={active === item.key ? item.openIcon : item.closeIcon}
                            alt={item.alt}
                            className="w-8 h-8"
                            animate={{
                                scale: active === item.key ? 1.2 : 1,
                                filter: active === item.key 
                                    ? "drop-shadow(0 0 8px rgba(255,255,255,0.6))"
                                    : "drop-shadow(0 0 0px rgba(255,255,255,0))"
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        
                        {/* Active indicator */}
                        {active === item.key && (
                            <motion.div
                                className="absolute -bottom-1 left-1/2 w-1 h-1 bg-white rounded-full"
                                layoutId="activeIndicator"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{ x: '-50%' }}
                                transition={{ duration: 0.3 }}
                            />
                        )}
                    </motion.div>
                </Link>
            ))}
        </motion.div>
    )
}

export default MoblieNavbar
