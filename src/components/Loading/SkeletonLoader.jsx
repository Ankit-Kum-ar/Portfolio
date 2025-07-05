import React from 'react';
import { motion } from 'framer-motion';

const SkeletonLoader = ({ variant = 'card', className = '' }) => {
  const baseClass = "animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] rounded-lg";
  
  const variants = {
    card: "w-full h-64 mb-4",
    text: "w-3/4 h-4 mb-2",
    title: "w-1/2 h-6 mb-4",
    avatar: "w-16 h-16 rounded-full",
    button: "w-32 h-10 rounded-lg",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${baseClass} ${variants[variant]} ${className}`}
      style={{
        backgroundImage: 'linear-gradient(90deg, #1f2937 25%, #374151 50%, #1f2937 75%)',
        animation: 'shimmer 2s infinite',
      }}
    >
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default SkeletonLoader;
