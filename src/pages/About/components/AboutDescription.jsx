import React from 'react';
import { motion } from 'framer-motion';
import { user } from '../../../utils/constant';
import profile from '../../../assets/new-profile.jpg';
import Signature from './Signature';
import ContactButton from '../../../components/ContactButton';
import LazyImage from '../../../components/LazyLoad/LazyImage';
import LazySection from '../../../components/LazyLoad/LazySection';

const AboutDescription = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <LazySection className='mt-16'>
      <motion.div 
        className='flex flex-wrap'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Mobile Profile Picture */}
        <motion.div 
          className='flex mx-auto md:hidden mb-16'
          variants={imageVariants}
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              rotate: 2,
              filter: "grayscale(0%)"
            }}
            className="relative"
          >
            <LazyImage
              src={profile}
              alt='profile'
              className='rounded-full w-64 h-64 filter grayscale-0 hover:grayscale transition duration-500 ease-in-out card-premium'
              skeletonVariant="avatar"
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-blue-500/20"
              animate={{
                opacity: [0, 0.3, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Introduction and What I Do */}
        <motion.div 
          className='flex flex-col md:w-6/12 w-11/12 mx-auto left-0 gap-10'
          variants={containerVariants}
        >
          {/* Who am I Section */}
          <motion.div 
            className='flex flex-col card-premium p-6 rounded-2xl hover-glow'
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.h1 
              className='text-xl text-white font-bold mb-2 text-glow'
              whileHover={{ scale: 1.02 }}
            >
              Who am I?
            </motion.h1>
            <motion.p
              className='text-[#a5a5a5] text-lg font-medium mb-2'
              dangerouslySetInnerHTML={{ __html: user.introduction.para1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.p>
          </motion.div>

          {/* What I Do Section */}
          <motion.div 
            className='flex flex-col card-premium p-6 rounded-2xl hover-glow'
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.h1 
              className='text-xl text-white font-bold mb-2 text-glow'
              whileHover={{ scale: 1.02 }}
            >
              What I do?
            </motion.h1>
            <motion.ul 
              className='text-[#a5a5a5] text-lg font-medium mb-2 list-disc ml-5'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {user.whatIDo.points.map((point, index) => (
                <motion.li
                  key={index}
                  dangerouslySetInnerHTML={{ __html: point }}
                  className={index === user.whatIDo.points.length - 1 ? 'list-none' : ''}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ x: 5, color: "#c5c5c5" }}
                ></motion.li>
              ))}
            </motion.ul>
            <Signature />
          </motion.div>
        </motion.div>

        {/* Desktop Profile Picture */}
        <motion.div 
          className='md:flex flex-col gap-9 mr-auto hidden'
          variants={containerVariants}
        >
          <motion.div
            variants={imageVariants}
            whileHover={{ 
              scale: 1.05,
              rotate: 2,
              filter: "grayscale(0%)"
            }}
            className="relative mt-20"
          >
            <LazyImage
              src={profile}
              alt='profile'
              className='rounded-full w-80 h-80 filter grayscale-0 hover:grayscale transition duration-500 ease-in-out'
              skeletonVariant="avatar"
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-blue-500/20"
              animate={{
                opacity: [0, 0.3, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <motion.div 
            className='flex mx-auto justify-center items-center'
            variants={itemVariants}
          >
            <ContactButton />
          </motion.div>
        </motion.div>
      </motion.div>
    </LazySection>
  );
};

export default AboutDescription;
