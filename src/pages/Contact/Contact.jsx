import React from 'react'
import { motion } from 'framer-motion'
import Title from '../../components/Title'
import ContactContainer from './components/ContactContainer'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Title title='Get in touch' info="Let's build something awesome."/>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <ContactContainer/>
      </motion.div>
    </motion.div>
  )
}

export default Contact
