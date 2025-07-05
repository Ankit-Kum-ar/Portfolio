import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import KnowMe from './components/KnowMe'
import HomeContact from './components/HomeContact'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className='relative overflow-hidden'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={sectionVariants}>
        <Hero/>
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <KnowMe/>
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <HomeContact />
      </motion.div>
    </motion.div>
  )
}

export default Home
