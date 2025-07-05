import React from 'react'
import { motion } from 'framer-motion'
import LazyImage from '../../../components/LazyLoad/LazyImage'

const ProjectCard = ({project, index}) => {
    const {name, description, type, duration, site, source, logo, img} = project
    
    return (
        <motion.div 
            className='md:w-9/12 w-11/12 md:pt-9 md:pl-9 md:pb-0 md:pr-0 p-5 rounded-2xl bg-[#181818] overflow-hidden group'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
            }}
            whileHover={{ 
                scale: 1.02,
                backgroundColor: "#1f1f1f",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
        >
            <div className='flex flex-wrap gap-36'>
                <motion.div 
                    className='flex flex-col md:w-5/12'
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                >
                    {/* Logo and Title */}
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                    >
                        <LazyImage 
                            src={logo} 
                            alt={`${name} logo`} 
                            className='md:w-10 md:h-10 w-8 h-8 rounded-lg shadow'
                            skeletonVariant="avatar"
                        />
                    </motion.div>
                    
                    <motion.h1 
                        className='text-white text-2xl font-bold mt-4 group-hover:text-gray-100'
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                    >
                        {name}
                    </motion.h1>
                    
                    <motion.p 
                        className='text-[#808080] font-medium mt-3 group-hover:text-[#a0a0a0]'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    >
                        {description}
                    </motion.p>

                    {/* Type and Duration */}
                    <motion.div 
                        className='flex md:flex-row flex-col md:gap-0 gap-3 mt-[15%]'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                    >
                        <div className='flex flex-col w-1/2'>
                            <h1 className='text-white text-lg font-bold'>Type</h1>
                            <p className='text-[#808080] font-medium group-hover:text-[#a0a0a0]'>{type}</p>
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <h1 className='text-white text-lg font-bold'>Duration</h1>
                            <p className='text-[#808080] font-medium group-hover:text-[#a0a0a0]'>{duration}</p>
                        </div>
                    </motion.div>

                    {/* Buttons for visit site and source code */}
                    <motion.div 
                        className='flex gap-4 mt-[20%]'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                    >
                        <motion.a 
                            href={site}
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 5px 15px rgba(128,128,128,0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button className='bg-[#181818] shadow-sm shadow-[#808080] text-[#9b9b9b] hover:text-white md:px-6 px-3 md:text-base text-sm py-2 rounded-lg transition-all duration-300'>
                                Visit Site
                            </button>
                        </motion.a>
                        
                        <motion.a 
                            href={source}
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 5px 15px rgba(128,128,128,0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button className='bg-[#181818] shadow-sm shadow-[#808080] text-[#9b9b9b] hover:text-white md:px-6 px-3 md:text-base text-sm py-2 rounded-lg transition-all duration-300'>
                                Source Code
                            </button>
                        </motion.a>
                    </motion.div>
                </motion.div>
                
                <motion.div 
                    className='md:flex w-5/12 justify-end hidden'
                    initial={{ opacity: 0, x: 30, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <LazyImage 
                        src={img} 
                        alt={`${name} preview`} 
                        className='rounded shadow'
                        skeletonVariant="card"
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ProjectCard
