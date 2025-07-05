import React from 'react'
import { motion } from 'framer-motion'
import AboutDescription from './components/AboutDescription'
import Title from '../../components/Title'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Title title='A little bit about me' info='Who am I and what I do'/>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <AboutDescription/>
      </motion.div>
    </motion.div>
  )
}

export default About
