import React from 'react'

const TechStackCard = ({tech}) => {
    const {name, img, type} = tech
    return (
        <div className='bg-[#181818] md:w-3/12 w-11/12 rounded-xl flex md:flex-col flex-row md:gap-10 border-2 border-[#383737]'>
            <div className='flex justify-center items-center md:mt-14 md:p-0 p-2'>
                <img src={img} className='md:w-20 md:h-20 lg:w-22 lg-22 w-8 h-8' alt="logo" />
            </div>
            <div className='flex flex-row justify-between mb-4 md:mt-3 mt-4 w-full'>
                <h1 className='text-white md:text-base text-sm font-medium ml-3'>{name}</h1>
                <p className='text-[#808080] md:text-base text-xs mr-3 text-end'>{type}</p>
            </div>
        </div>       
    )
}

export default TechStackCard
