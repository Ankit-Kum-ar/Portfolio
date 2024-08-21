import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../../../utils/constant'

const ProjectContainer = () => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-14 mt-20'>
        {
            projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))
        }
    </div>
  )
}

export default ProjectContainer
