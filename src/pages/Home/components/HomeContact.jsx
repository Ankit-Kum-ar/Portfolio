import React from 'react'
import ContactButton from '../../../components/ContactButton'
const HomeContact = () => {
  return (
    <div className='flex flex-wrap md:mt-36 mt-28'>
        <div className='flex flex-col md:w-5/12 w-10/12 mx-auto left-0'>
            <h1 className='text-white md:text-4xl text-3xl font-semibold mb-3'>Let's work together</h1>
            <p className='text-[#808080] font-medium'>Want to discuss an opportunity to create something great? I’m ready when you are.</p>
        </div>
        <div className='flex mr-auto justify-center items-center'>
            <ContactButton/>
        </div>
    </div>
  )
}

export default HomeContact
