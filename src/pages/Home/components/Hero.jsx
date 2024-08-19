import React from 'react'
import avatar from "../../../assets/new-profile.png"
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
const Hero = () => {
  return (
    <div className='flex flex-wrap justify-between items-center md:mt-40 mt-24'>

        <div className='flex mx-auto md:hidden mb-10'>
         <img
            src={avatar}
            alt='profile'
            className='rounded-full w-64 h-64 filter grayscale-0 hover:grayscale transition duration-300 ease-in-out'
          />
        </div>

        <div className='flex flex-col md:w-5/12 w-11/12 mx-auto justify-center'>
          <h1 className='text-[#C5C5C5] text-5xl font-bold mb-4'>
            I'm <span className='text-white'>Ankit Kumar</span>
          </h1>
          <p className='text-white'>
            A passionate Frontend Developer with a knack for solving complex problems. 
            Currently pursuing a BTech in Computer Science, I actively contribute to various 
            projects, turning ideas into seamless digital experiences.
          </p>
          <div className='flex items-center mt-6 ml-1 gap-6'>
            <a href="https://www.linkedin.com/in/ankit-kumar-41a243240/">
              <GrLinkedin className='text-[#C5C5C5] hover:text-white cursor-pointer text-2xl mr-2 rounded-sm' />
            </a>
            <a href="https://github.com/Ankit-Kum-ar">
              <BsGithub className='text-[#C5C5C5] hover:text-white cursor-pointer text-2xl mr-2 rounded-sm' />
            </a>
            <a href="https://x.com/AnkitKu4855404">
              <BsTwitterX className='text-[#C5C5C5] hover:text-white cursor-pointer text-2xl mr-2 rounded-sm' />
            </a>
          </div>
          <div className='flex mt-7'>
            {/* Buttons for resume and contact */}
            <a
                href='https://drive.google.com/file/d/1vlzwbMNaT5Cq1LDdnTSX6Rt8gpEfMx-R/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-[#181818] shadow-sm shadow-[#808080] text-[#808080] hover:text-white px-6 py-2 rounded-lg mr-4'
                >
                See my resume
            </a>
            <button className='bg-[#181818] shadow-sm shadow-[#808080] text-[#808080] hover:text-white px-6 py-2 rounded-lg'>
              Get in touch
            </button>
          </div>
        </div>

        <div className='md:flex mr-auto hidden'>
          <img
            src={avatar}
            alt='profile'
            className='rounded-full w-64 h-64 filter grayscale-0 hover:grayscale transition duration-300 ease-in-out'
          />
        </div>


      </div>

  )
}

export default Hero
