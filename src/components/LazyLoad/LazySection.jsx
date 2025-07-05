import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LazySection = ({ 
  children, 
  threshold = 0.1, 
  delay = 0,
  direction = 'up',
  className = '',
  duration = 0.6
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
    scale: { y: 0, x: 0, scale: 0.8 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directions[direction],
        scale: direction === 'scale' ? 0.8 : 1
      }}
      animate={inView ? { 
        opacity: 1, 
        y: 0, 
        x: 0,
        scale: 1
      } : {}}
      transition={{ 
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default LazySection;
