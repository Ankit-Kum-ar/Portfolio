import React from 'react'

const TechStackCard = ({tech}) => {
    const {name, img, type} = tech
    return (
        <div className='bg-[#181818] w-3/12  rounded-xl md:flex hidden flex-col gap-10 border-2 border-[#383737]'>
            <div className='flex justify-center items-center mt-14'>
                <img src={img} className='md:w-20 md:h-20 lg:w-22 lg-22' alt="logo" />
            </div>
            <div className='flex flex-row justify-between mb-4'>
                <h1 className='text-white font-medium ml-3'>{name}</h1>
                <p className='text-[#808080] mr-3 '>{type}</p>
            </div>
        </div>       
    )
}

export default TechStackCard
