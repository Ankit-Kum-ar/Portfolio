import React from 'react'
import { motion } from 'framer-motion'
import sign from "../../../assets/sign.png"
import LazyImage from '../../../components/LazyLoad/LazyImage'

const Signature = () => {
  return (
    <motion.div 
      className='md:hidden block'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
        <motion.p 
          className='text-[#a5a5a5] text-lg font-medium mt-16'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
            Feel free to reach out via &nbsp;
            <motion.a 
              href="mailto: ankitcode2511@gmail.com"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
                <span className='text-white underline hover:text-gray-300 transition-colors duration-300'>e-mail</span>
            </motion.a>
            &nbsp; or follow me on &nbsp;
            <motion.a 
              href="https://x.com/AnkitKu4855404"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
                <span className='text-white underline hover:text-gray-300 transition-colors duration-300'>Twitter.</span>
            </motion.a>
            &nbsp;Want to see where I've worked? Check out my &nbsp;
            <motion.a  
              href='https://drive.google.com/file/d/1vlzwbMNaT5Cq1LDdnTSX6Rt8gpEfMx-R/view?usp=sharing' 
              target='_blank'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
                <span className='text-white underline hover:text-gray-300 transition-colors duration-300'>Resume,</span>
            </motion.a>
            &nbsp; or connect with me on &nbsp;
            <motion.a 
              href="https://www.linkedin.com/in/ankit-kumar-41a243240/"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
                <span className='text-white underline hover:text-gray-300 transition-colors duration-300'>LinkedIn.</span>
            </motion.a>
        </motion.p>
        
        <motion.p 
          className='text-[#a5a5a5] text-lg font-medium mt-16'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Let's build something great,
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <LazyImage 
            src={sign} 
            alt="Signature"
            className="mt-2"
            skeletonVariant="text"
          />
        </motion.div>
    </motion.div>
  )
}

export default Signature
