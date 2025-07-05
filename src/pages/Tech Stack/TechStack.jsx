import React from 'react'
import { motion } from 'framer-motion'
import TechStackContainer from './components/TechStackContainer'
import Title from '../../components/Title'

const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Title title='Tech Stack' info="The dev tools and apps I've use"/>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <TechStackContainer/>
      </motion.div>
    </motion.div>
  )
}

export default TechStack
