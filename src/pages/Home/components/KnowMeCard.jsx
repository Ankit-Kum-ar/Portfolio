import React from 'react'
import { useNavigate } from 'react-router-dom'
const KnowMeCard = ({heading, desc, img, path}) => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate(path);
  }
  return (
    <div className='bg-[#151515] cursor-pointer flex flex-col justify-center items-center md:w-4/12 w-10/12 pt-9 rounded-3xl' onClick={navigateTo}>
        <h1 className='text-white text-2xl font-bold'>{heading}</h1>
        <p className={`text-[#808080] text-md font-medium mt-2 text-center`}>{desc}</p>   
        <img className={` rounded-xl mt-7`} src={img} alt="" />   
    </div>
  )
}

export default KnowMeCard
