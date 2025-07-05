import React from 'react'
import { motion } from 'framer-motion'
import ContactButton from '../../../components/ContactButton'
import LazySection from '../../../components/LazyLoad/LazySection'

const HomeContact = () => {
  return (
    <LazySection className='flex flex-wrap md:mt-36 mt-28' direction="up" delay={0.2}>
        <motion.div 
          className='flex flex-col md:w-5/12 w-10/12 mx-auto left-0'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
            <motion.h1 
              className='text-white md:text-4xl text-3xl font-semibold mb-3'
              whileHover={{ 
                scale: 1.02,
                textShadow: "0px 0px 8px rgba(255,255,255,0.8)"
              }}
              transition={{ duration: 0.2 }}
            >
              Let's work together
            </motion.h1>
            
            <motion.p 
              className='text-[#808080] font-medium'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Want to discuss an opportunity to create something great? I'm ready when you are.
            </motion.p>
        </motion.div>
        
        <motion.div 
          className='flex mr-auto justify-center items-center'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
            <ContactButton/>
        </motion.div>
    </LazySection>
  )
}

export default HomeContact
