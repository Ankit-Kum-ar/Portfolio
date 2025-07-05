import React from 'react'
import { motion } from 'framer-motion'
import ProjectContainer from './components/ProjectContainer'
import Title from '../../components/Title'

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Title title='Projects' info='A collection of my work'/>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <ProjectContainer/>
      </motion.div>
    </motion.div>
  )
}

export default Project
