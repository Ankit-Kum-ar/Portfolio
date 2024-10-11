import { useState } from "react";
import { Link } from "react-router-dom"

const MoblieNavbar = () => {
    const [active, setActive] = useState('home');
    const handleClick = (icon) => {
        setActive(icon); // Set the clicked icon as active
    };
    return (
        <div className="flex justify-between gap-1 border-t fixed w-11/12 right-0 mx-auto left-0 bottom-0 bg-[#02020299] border-[#27262C61] rounded-xl border-[1px] p-4 sm:hidden">
            <Link to={"/"} onClick={() => handleClick('home')}>
                <img
                    src={active === 'home' ? '/assets/MobileNavbar/Home-Open.png' : '/assets/MobileNavbar/Home-Close.png'}
                    alt="Home"
                    className={`transition-opacity duration-300 ease-in-out ${active === 'home' ? 'opacity-100' : 'opacity-50'}`} // Smooth transition with opacity
                />
            </Link>
            <Link to={"/about"} onClick={() => handleClick('about')}>
                <img
                    src={active === 'about' ? '/assets/MobileNavbar/User-Open.png' : '/assets/MobileNavbar/User-Close.png'}
                    alt="User"
                    className={`transition-opacity duration-300 ease-in-out ${active === 'about' ? 'opacity-100' : 'opacity-50'}`} // Smooth transition with opacity
                />
            </Link>
            <Link to={"/projects"} onClick={() => handleClick('projects')}>
                <img
                    src={active === 'projects' ? '/assets/MobileNavbar/Projects-Open.png' : '/assets/MobileNavbar/Projects-Close.png'}
                    alt="Projects"
                    className={`transition-opacity duration-300 ease-in-out ${active === 'projects' ? 'opacity-100' : 'opacity-50'}`} // Smooth transition with opacity
                />
            </Link>
            <Link to={"/techstack"} onClick={() => handleClick('techstack')}>
                <img
                    src={active === 'techstack' ? '/assets/MobileNavbar/Tech-Open.png' : '/assets/MobileNavbar/Tech-Close.png'}
                    alt="techstack"
                    className={`transition-opacity duration-300 ease-in-out ${active === 'techstack' ? 'opacity-100' : 'opacity-50'}`} // Smooth transition with opacity
                />
            </Link>
            <Link to={"/contact"} onClick={() => handleClick('contact')}>
                <img
                    src={active === 'contact' ? '/assets/MobileNavbar/Contact-Open.png' : '/assets/MobileNavbar/Contact-Close.png'}
                    alt="contact"
                    className={`transition-opacity duration-300 ease-in-out ${active === 'contact' ? 'opacity-100' : 'opacity-50'}`} // Smooth transition with opacity
                />
            </Link>
            {/* <Link to={"/favorites"} className="hover:bg-[#FFFFFF1A]">
                <img src="/User.png" alt="" />
            </Link>
            <Link to={"/favorites"} className="">
                <img src="/Home.png" alt="" />
            </Link>
            <Link to={"/favorites"} className="">
                <img src="/Home.png" alt="" />
            </Link>
            <Link to={"/favorites"} className="">
                <img src="/Home.png" alt="" />
            </Link> */}
        </div>
    )
}

export default MoblieNavbar
