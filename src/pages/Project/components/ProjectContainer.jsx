import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '../../../utils/constant'
import LazySection from '../../../components/LazyLoad/LazySection'

const ProjectContainer = () => {
  return (
    <LazySection className='flex flex-wrap justify-center items-center gap-14 mt-20'>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </LazySection>
  )
}

export default ProjectContainer
