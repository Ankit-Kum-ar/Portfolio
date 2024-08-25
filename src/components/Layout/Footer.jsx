import React from 'react'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="rounded-lg shadow m-4 md:mt-28 mt-14">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex  sm:items-center sm:justify-between">
                <Link to="/" className="md:flex hidden items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Portfolio Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">ΛПKIƬ</span>
                </Link>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
                    <li>
                        <a href="https://www.linkedin.com/in/ankit-kumar-41a243240/">
                            <GrLinkedin className='text-[#C5C5C5] hover:text-white cursor-pointer text-2xl mr-7 rounded-sm' />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Ankit-Kum-ar">
                            <BsGithub className='text-[#C5C5C5] hover:text-white cursor-pointer text-2xl mr-7 rounded-sm' />
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/AnkitKu4855404">
                            <BsTwitterX className='text-[#C5C5C5] hover:text-white cursor-pointer text-2xl mr-7 rounded-sm' />
                        </a>
                    </li>
                    <li>
                        <a href="mailto: ankitcode2511@gmail.com">
                            <IoMdMail className='text-[#C5C5C5] hover:text-white cursor-pointer text-3xl mr-7 rounded-sm' />
                        </a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-200 sm:text-center">
                © 2023 by{" "}
                <Link to="/" className="font-bold hover:underline">ΛПKIƬ</Link>
                . All Rights Reserved.
            </span>
        </div>
    </footer>
  )
}

export default Footer
