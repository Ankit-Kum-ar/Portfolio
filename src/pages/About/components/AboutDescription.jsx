import React from 'react'
import { user } from '../../../utils/constant'
import profile from '../../../assets/new-profile.png'
import bt from '../../../assets/Button-icons/B-1.png'
import Signature from './Signature'
const AboutDescription = () => {
  return (
    <div className='mt-16'>
      <div className='flex flex-wrap'>
        <div className='flex mx-auto md:hidden mb-16 '>
         <img
            src={profile}
            alt='profile'
            className='rounded-full w-64 h-64 filter grayscale-0 hover:grayscale transition duration-300 ease-in-out'
          />
        </div>

        <div className='flex flex-col md:w-6/12 w-11/12 mx-auto left-0 gap-10'>
            <div className='flex flex-col'>
                <h1 className='text-xl text-white font-bold mb-2'>Who am I?</h1>
                <p className='text-[#a5a5a5] text-lg font-medium mb-2'>{user.introduction.para1}</p>
            </div>

            <div className='flex flex-col'>
                <h1 className='text-xl text-white font-bold mb-2'>What I do?</h1>
                <p className='text-[#a5a5a5] text-lg font-medium mb-2'>{user.whatIDo.para1}</p>
                <Signature/>
            </div>

        </div>

        {/* for profile picture */}

        <div className='md:flex flex-col gap-9 mr-auto hidden'>
          <img
            src={profile}
            alt='profile'
            className='rounded-full mt-20 w-80 h-80 filter grayscale-0 hover:grayscale transition duration-300 ease-in-out'
          />
            <div className='flex mx-auto justify-center items-center'>
              <button className='bg-[#151515] border border-black hover:text-[#808080] text-white md:text-base text-sm font-semibold md:px-6 py-3 px-20 rounded-xl mt-6 md:ml-4 ml-6'>
                  <img src={bt} alt='' className='w-6 h-6 inline-block mr-2 mb-1'/>
                  Get in touch
              </button>
            </div>
        </div>

        
      </div>
    </div>
  )
}

export default AboutDescription
