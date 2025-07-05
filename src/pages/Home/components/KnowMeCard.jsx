import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import LazyImage from '../../../components/LazyLoad/LazyImage'

const KnowMeCard = ({heading, desc, img, path}) => {
  const navigate = useNavigate();
  
  const navigateTo = () => {
    if (path) {
      navigate(path);
    }
  }

  return (
    <motion.div 
      className='bg-[#151515] cursor-pointer flex flex-col justify-between items-center w-full h-full min-h-[320px] pt-8 pb-6 px-6 rounded-3xl overflow-hidden group'
      onClick={navigateTo}
      whileHover={{ 
        scale: 1.02,
        backgroundColor: "#1a1a1a",
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
        <motion.h1 
          className='text-white text-2xl font-bold text-center'
          whileHover={{ color: "#e5e5e5" }}
        >
          {heading}
        </motion.h1>
        
        <motion.p 
          className={`text-[#808080] text-md font-medium mt-3 text-center group-hover:text-[#a0a0a0] transition-colors duration-300 flex-grow`}
        >
          {desc}
        </motion.p>   
        
        <motion.div
          className="mt-6 overflow-hidden rounded-xl flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <LazyImage 
            className="rounded-xl w-full h-auto max-w-[200px] mx-auto" 
            src={img} 
            alt={heading}
            skeletonVariant="card"
          />
        </motion.div>
    </motion.div>
  )
}

export default KnowMeCard
