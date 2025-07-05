import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkeletonLoader from '../Loading/SkeletonLoader';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  skeletonVariant = 'card',
  threshold = 0.1,
  ...props 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {!imageLoaded && !imageError && (
        <SkeletonLoader variant={skeletonVariant} className="absolute inset-0" />
      )}
      
      {inView && (
        <motion.img
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          onError={handleImageError}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: imageLoaded ? 1 : 0,
            scale: imageLoaded ? 1 : 1.1 
          }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
          className={`${className} ${imageError ? 'hidden' : ''}`}
          {...props}
        />
      )}
      
      {imageError && (
        <div className="flex items-center justify-center bg-gray-800 text-gray-400 text-sm">
          Failed to load image
        </div>
      )}
    </div>
  );
};

export default LazyImage;
