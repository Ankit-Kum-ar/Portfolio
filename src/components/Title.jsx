import React from 'react'

const Title = ({title, info}) => {
  return (
    <div>
        <div className='flex flex-col md:mt-32 mt-24 gap-2 md:w-9/12 w-11/12 mx-auto left-0'>
            <h1 className='md:text-5xl text-4xl text-white font-bold'>{title}</h1>
            <p className='text-[#808080] font-medium'>{info}</p>
        </div>  
        <hr className='mt-16 bg-[#808080]'/>
    </div>
  )
}

export default Title
