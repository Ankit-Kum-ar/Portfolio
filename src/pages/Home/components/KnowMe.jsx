import React from 'react'
import { motion } from 'framer-motion'
import KnowMeCard from './KnowMeCard'
import avatar from "../../../assets/avatar.png"
import project from "../../../assets/Project-logo.png"
import tech from "../../../assets/Tech Stack.png"
import book from "../../../assets/Bookshelf.png"
import LazySection from '../../../components/LazyLoad/LazySection'

const KnowMe = () => {
  const cardsData = [
    {
      heading: "About me",
      desc: "Who I am and what I do",
      img: avatar,
      path: "/about"
    },
    {
      heading: "Projects",
      desc: "Projects and learnings",
      img: project,
      path: "/projects"
    },
    {
      heading: "Tech Stack",
      desc: "The dev tools, apps, devices that I use.",
      img: tech,
      path: "/techstack"
    },
    {
      heading: "Bookshelf",
      desc: "Piece of wisdom and fiction I've enjoyed reading",
      img: book,
      path: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <LazySection 
      className='md:mt-40 mt-24 flex flex-col'
      threshold={0.1}
    >
      <motion.div 
        className='flex justify-center'
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h1 
          className='text-white text-4xl font-bold mb-10'
          whileHover={{ 
            scale: 1.05,
            textShadow: "0px 0px 8px rgba(255,255,255,0.8)"
          }}
        >
          Get to know me
        </motion.h1>
      </motion.div>
      
      <motion.div 
        className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-4'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {cardsData.map((card, index) => (
          <motion.div
            key={card.heading}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <KnowMeCard {...card} />
          </motion.div>
        ))}
      </motion.div>
    </LazySection>
  )
}

export default KnowMe
