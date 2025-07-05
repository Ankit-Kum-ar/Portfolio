import React from 'react'
import { motion } from 'framer-motion'
import TechStackCard from './TechStackCard'
import { stack } from '../../../utils/constant'
import LazySection from '../../../components/LazyLoad/LazySection'

const TechStackContainer = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    return (
        <LazySection className='mt-16 md:w-9/12 w-12/12 mx-auto'>
            <motion.div 
                className='flex flex-wrap justify-center items-center gap-6'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {stack.map((tech, index) => (
                    <TechStackCard key={index} tech={tech} index={index} />
                ))}
            </motion.div>
        </LazySection>
    )
}

export default TechStackContainer