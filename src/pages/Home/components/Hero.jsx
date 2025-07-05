import React from 'react'
import { motion } from 'framer-motion'
import avatar from "../../../assets/new-profile.jpg"
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import LazyImage from '../../../components/LazyLoad/LazyImage';

const Hero = () => {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate('/contact');
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className='flex flex-wrap justify-between items-center md:mt-40 mt-20'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
        {/* Mobile Profile Picture */}
        <motion.div 
          className='flex mx-auto md:hidden mb-16'
          variants={itemVariants}
        >
          <LazyImage
            src={avatar}
            alt='profile'
            className='rounded-full w-64 h-64 filter grayscale-0 hover:grayscale transition duration-300 ease-in-out'
            skeletonVariant="avatar"
          />
        </motion.div>

        <motion.div 
          className='flex flex-col md:w-5/12 w-11/12 mx-auto justify-center'
          variants={containerVariants}
        >
          <motion.h1 
            className='text-[#C5C5C5] text-5xl font-bold md:mb-4 mb-6'
            variants={itemVariants}
          >
            I'm <motion.span 
              className='text-white'
              whileHover={{ 
                scale: 1.05,
                textShadow: "0px 0px 8px rgba(255,255,255,0.8)"
              }}
              transition={{ duration: 0.2 }}
            >
              Ankit Kumar
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className='text-white font-medium'
            variants={itemVariants}
          >
            A passionate Full Stack Developer specializing in the MERN stack, with a knack for solving complex problems. 
            Currently pursuing a BTech in Computer Science, I actively contribute to various 
            projects, turning ideas into seamless and scalable digital experiences.
          </motion.p>
          
          <motion.div 
            className='flex items-center md:mt-6 mt-8 ml-1 gap-6'
            variants={itemVariants}
          >
            {[
              { href: "https://www.linkedin.com/in/ankit-kumar-41a243240/", icon: GrLinkedin, color: "#0077B5" },
              { href: "https://github.com/Ankit-Kum-ar", icon: BsGithub, color: "#333" },
              { href: "https://x.com/AnkitKu4855404", icon: BsTwitterX, color: "#1DA1F2" }
            ].map((social, index) => (
              <motion.a
                key={social.href}
                href={social.href}
                variants={socialVariants}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 5,
                  color: social.color,
                  filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <social.icon className='text-[#C5C5C5] hover:text-white cursor-pointer text-2xl mr-2 rounded-sm' />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div 
            className='flex md:mt-7 mt-9'
            variants={itemVariants}
          >
            <motion.a
              href='https://drive.google.com/file/d/1wH7w2rV6s8tldH7kWN4tHHEHpJEiV3I9/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-[#181818] shadow-sm shadow-[#808080] text-[#808080] hover:text-white md:px-6 px-3 md:text-base text-sm py-2 rounded-lg mr-4 transition-all duration-300'
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(128,128,128,0.5)",
                backgroundColor: "#2a2a2a"
              }}
              whileTap={{ scale: 0.95 }}
            >
              See my resume
            </motion.a>
            
            <motion.button 
              onClick={handleContact} 
              className='bg-[#181818] shadow-sm shadow-[#808080] text-[#808080] hover:text-white md:px-6 md:text-base text-sm px-3 py-2 rounded-lg transition-all duration-300'
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(128,128,128,0.5)",
                backgroundColor: "#2a2a2a"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Desktop Profile Picture */}
        <motion.div 
          className='md:flex mr-auto hidden'
          variants={itemVariants}
        >
          <LazyImage
            src={avatar}
            alt='profile'
            className='rounded-full w-64 h-64 filter grayscale-0 hover:grayscale transition duration-300 ease-in-out'
            skeletonVariant="avatar"
          />
        </motion.div>
    </motion.div>

  )
}

export default Hero
