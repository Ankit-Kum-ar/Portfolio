import React from 'react'
import { motion } from 'framer-motion'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import LazySection from '../LazyLoad/LazySection'

const Footer = () => {
  const socialLinks = [
    { href: "https://www.linkedin.com/in/ankit-kumar-41a243240/", icon: GrLinkedin, color: "#0077B5" },
    { href: "https://github.com/Ankit-Kum-ar", icon: BsGithub, color: "#333" },
    { href: "https://x.com/AnkitKu4855404", icon: BsTwitterX, color: "#1DA1F2" },
    { href: "mailto: ankitcode2511@gmail.com", icon: IoMdMail, color: "#EA4335" }
  ];

  return (
    <LazySection>
      <motion.footer 
        className="rounded-lg shadow m-4 md:mt-28 mt-14"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <motion.div 
                className="sm:flex sm:items-center sm:justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link to="/" className="md:flex hidden items-center space-x-3 rtl:space-x-reverse">
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
                  
                  <motion.ul 
                    className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                      {socialLinks.map((social, index) => (
                        <motion.li
                          key={social.href}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        >
                            <motion.a 
                              href={social.href}
                              whileHover={{ 
                                scale: 1.2, 
                                color: social.color,
                                filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))"
                              }}
                              whileTap={{ scale: 0.9 }}
                              transition={{ duration: 0.2 }}
                            >
                                <social.icon className='text-[#C5C5C5] hover:text-white cursor-pointer text-2xl mr-7 rounded-sm' />
                            </motion.a>
                        </motion.li>
                      ))}
                  </motion.ul>
              </motion.div>
              
              <motion.hr 
                className="my-6 sm:mx-auto border-gray-700 lg:my-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{ originX: 0.5 }}
              />
              
              <motion.span 
                className="block text-sm text-gray-200 sm:text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                  © 2023 by{" "}
                  <motion.span
                    whileHover={{ color: "#ffffff" }}
                  >
                    <Link to="/" className="font-bold hover:underline">ΛПKIƬ</Link>
                  </motion.span>
                  . All Rights Reserved.
              </motion.span>
          </div>
      </motion.footer>
    </LazySection>
  )
}

export default Footer
