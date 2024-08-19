import React from 'react'
const KnowMeCard = ({heading, desc, img}) => {
  return (
    <div className='bg-[#151515] cursor-pointer flex flex-col justify-center items-center md:w-4/12 w-10/12 pt-9 rounded-3xl'>
        <h1 className='text-white text-2xl font-bold'>{heading}</h1>
        <p className={`text-[#808080] text-md font-medium mt-2 `}>{desc}</p>   
        <img className={` rounded-xl mt-7`} src={img} alt="" />   
    </div>
  )
}

export default KnowMeCard
