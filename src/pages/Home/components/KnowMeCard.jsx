import React from 'react'
const KnowMeCard = ({heading, desc, img, width}) => {
  return (
    <div className='bg-[#151515] cursor-pointer flex flex-col justify-center items-center w-4/12 pt-9 rounded-3xl'>
        <h1 className='text-white text-2xl font-bold'>{heading}</h1>
        <p className={`text-[#808080] text-md font-medium mt-2 `}>{desc}</p>   
        <img className={` rounded-xl mt-8 w-${width}`} src={img} alt="" />   
    </div>
  )
}

export default KnowMeCard
