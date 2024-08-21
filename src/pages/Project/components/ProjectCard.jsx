import React from 'react'
const ProjectCard = ({project}) => {
    const {name, description, type, duration, site, source, logo, img} = project
    console.log(img);
    
    return (
        <div className='md:w-9/12 w-11/12 md:pt-9 md:pl-9 p-5 rounded-2xl bg-[#181818]'>
            <div className='flex flex-wrap gap-36'>
                <div className='flex flex-col md:w-5/12'>

                    {/* Logo and Title */}
                    <img src={logo} alt="" className='md:w-10 md:h-10 w-8 h-8 rounded-lg shadow' />
                    <h1 className='text-white text-2xl font-bold mt-4'>{name}</h1>
                    <p className='text-[#808080] font-medium mt-3'>{description}</p>

                    {/* Type and Duration */}
                    <div className='flex md:flex-row flex-col md:gap-0 gap-3 mt-[15%]'>
                        <div className='flex flex-col w-1/2'>
                            <h1 className='text-white text-lg font-bold'>Type</h1>
                            <p className='text-[#808080] font-medium'>{type}</p>
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <h1 className='text-white text-lg font-bold'>Duration</h1>
                            <p className='text-[#808080] font-medium'>{duration}</p>
                        </div>
                    </div>

                    {/* Buttons for visit site and source code */}
                    <div className='flex gap-4 mt-[20%]'>
                        <a href={site}>
                            <button className='bg-[#181818] shadow-sm shadow-[#808080] text-[#9b9b9b] hover:text-white md:px-6 px-3 md:text-base text-sm py-2 rounded-lg'>Visit Site</button>
                        </a>
                        <a href={source}>
                            <button className='bg-[#181818] shadow-sm shadow-[#808080] text-[#9b9b9b] hover:text-white md:px-6 px-3 md:text-base text-sm py-2 rounded-lg'>Source Code</button>
                        </a>
                    </div>
                    
                </div>
                <div className='md:flex w-5/12 justify-end hidden'>
                    <img src={img} alt="" className='rounded shadow' />
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
