import React from 'react'
import { motion } from 'framer-motion'
import LazyImage from '../../../components/LazyLoad/LazyImage'

const TechStackCard = ({tech, index}) => {
    const {name, img, type} = tech
    
    return (
        <motion.div 
            className='bg-[#181818] md:w-3/12 w-11/12 rounded-xl flex md:flex-col flex-row md:gap-10 border-2 border-[#383737] overflow-hidden group cursor-pointer'
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
            }}
            whileHover={{ 
                scale: 1.05,
                backgroundColor: "#1f1f1f",
                borderColor: "#505050",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.98 }}
        >
            <motion.div 
                className='flex justify-center items-center md:mt-14 md:p-0 p-2'
                whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                }}
                transition={{ duration: 0.3 }}
            >
                <LazyImage 
                    src={img} 
                    className='md:w-20 md:h-20 lg:w-22 lg-22 w-8 h-8 transition-all duration-300' 
                    alt={`${name} logo`}
                    skeletonVariant="avatar"
                />
            </motion.div>
            
            <motion.div 
                className='flex flex-row justify-between mb-4 md:mt-3 mt-4 w-full px-3'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
                <motion.h1 
                    className='text-white md:text-base text-sm font-medium group-hover:text-gray-100'
                    whileHover={{ x: 2 }}
                >
                    {name}
                </motion.h1>
                
                <motion.p 
                    className='text-[#808080] md:text-base text-xs text-end group-hover:text-[#a0a0a0]'
                    whileHover={{ x: -2 }}
                >
                    {type}
                </motion.p>
            </motion.div>
        </motion.div>       
    )
}

export default TechStackCard
