import React from 'react'
import avatar from "../../../assets/new-profile.png"

const Hero = () => {
  return (
    <div className='flex flex-wrap justify-between items-center '>

        <div className='flex flex-col w-5/12 mx-auto justify-center'>
          <h1 className='text-[#C5C5C5] text-5xl font-bold mb-4'>
            I'm <span className='text-white'>Ankit Kumar</span>
          </h1>
          <p className='text-white'>
            A passionate Frontend Developer with a knack for solving complex problems. 
            Currently pursuing a BTech in Computer Science, I actively contribute to various 
            projects, turning ideas into seamless digital experiences.
          </p>

          <div className='flex mt-8'>
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

        <div className='flex mr-auto'>
          <img src={avatar} alt='profile' className='rounded-full w-64 h-64' />
        </div>

      </div>

  )
}

export default Hero
