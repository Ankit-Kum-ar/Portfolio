import React from 'react'
import bt from "../../../assets/Button-icons/B-1.png"
const HomeContact = () => {
  return (
    <div className='flex flex-wrap md:mt-36 mt-28'>
        <div className='flex flex-col md:w-5/12 w-10/12 mx-auto left-0'>
            <h1 className='text-white md:text-4xl text-3xl font-semibold mb-3'>Let's work together</h1>
            <p className='text-[#808080] font-medium'>Want to discuss an opportunity to create something great? I’m ready when you are.</p>
        </div>
        <div className='flex mr-auto justify-center items-center'>
            <button className='bg-[#151515] hover:text-[#808080] text-white md:text-base text-sm font-semibold md:px-6 py-3 px-20 rounded-xl mt-6 md:ml-4 ml-6'>
                <img src={bt} alt='' className='w-5 h-5 inline-block mr-2 mb-1'/>
                Get in touch
            </button>
        </div>
    </div>
  )
}

export default HomeContact
