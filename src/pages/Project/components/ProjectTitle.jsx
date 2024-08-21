import React from 'react'

const ProjectTitle = () => {
  return (
    <div>
        <div className='flex flex-col md:mt-32 mt-24 gap-3 md:w-9/12 w-11/12 mx-auto left-0'>
            <h1 className='md:text-5xl text-4xl text-white font-bold'>Projects</h1>
            <p className='text-[#808080] font-medium'>Projects and learnings I've worked on</p>
        </div>  
        <hr className='mt-16 bg-[#383838]'/>
    </div>
  )
}

export default ProjectTitle
