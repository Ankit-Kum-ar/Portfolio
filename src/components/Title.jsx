import React from 'react'
import { motion } from 'framer-motion'

const Title = ({title, info}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
        <motion.div 
          className='flex flex-col md:mt-32 mt-24 gap-2 md:w-9/12 w-11/12 mx-auto left-0'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
            <motion.h1 
              className='md:text-5xl text-4xl text-white font-bold'
              whileHover={{ 
                scale: 1.02,
                textShadow: "0px 0px 8px rgba(255,255,255,0.8)"
              }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h1>
            
            <motion.p 
              className='text-[#808080] font-medium'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {info}
            </motion.p>
        </motion.div>  
        
        <motion.hr 
          className='mt-16 bg-[#808080]'
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ originX: 0 }}
        />
    </motion.div>
  )
}

export default Title
