/**
 * Optimized Hero Animation Component
 * Supports Lottie, Video, or fallback to SVG
 * With lazy loading and performance optimization
 */

import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

// Lazy load Lottie to reduce initial bundle size
const Lottie = lazy(() => import('lottie-react'));

const HeroAnimation = ({ type = 'lottie' }) => {
  const [animationData, setAnimationData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  // Load Lottie JSON dynamically
  useEffect(() => {
    if (type === 'lottie') {
      fetch('/animations/hero-animation.json')
        .then(response => response.json())
        .then(data => {
          setAnimationData(data);
          setIsLoaded(true);
        })
        .catch(err => {
          console.warn('Failed to load Lottie animation:', err);
          setIsLoaded(true);
        });
    }
  }, [type]);

  // Ensure video plays on mobile
  useEffect(() => {
    if (type === 'video' && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.warn('Video autoplay prevented:', err);
        });
      }
    }
  }, [type]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, delay: 0.3 }
    }
  };

  // LOTTIE ANIMATION
  if (type === 'lottie') {
    return (
      <motion.div 
        className="lottie-container"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {!isLoaded && (
          <div className="animation-skeleton" aria-label="Loading animation">
            <div className="skeleton-pulse" />
          </div>
        )}
        
        {animationData && (
          <Suspense fallback={<div className="animation-skeleton" />}>
            <Lottie 
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{ 
                width: '100%', 
                height: '100%', 
                maxWidth: '500px', 
                margin: '0 auto' 
              }}
              rendererSettings={{
                preserveAspectRatio: 'xMidYMid slice',
                progressiveLoad: true,
                hideOnTransparent: true
              }}
            />
          </Suspense>
        )}
      </motion.div>
    );
  }

  // VIDEO ANIMATION
  if (type === 'video') {
    return (
      <motion.div 
        className="video-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          preload="metadata"
          className="hero-video"
          poster="/videos/hero-poster.jpg"
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src="/videos/hero-animation.webm" type="video/webm" />
          <source src="/videos/hero-animation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {!isLoaded && (
          <div className="animation-skeleton video-skeleton">
            <div className="skeleton-pulse" />
          </div>
        )}
      </motion.div>
    );
  }

  // ANIMATED WEBP FALLBACK
  if (type === 'webp') {
    return (
      <motion.div 
        className="webp-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <picture>
          <source srcSet="/images/hero-animation.webp" type="image/webp" />
          <img 
            src="/images/hero-animation.gif" 
            alt="Radius app connecting people nearby"
            loading="lazy"
            width="800"
            height="800"
            style={{ width: '100%', height: 'auto', maxWidth: '500px', margin: '0 auto' }}
          />
        </picture>
      </motion.div>
    );
  }

  return null;
};

export default HeroAnimation;

/* Add to Hero.css */
/*
.animation-skeleton {
  width: 100%;
  max-width: 450px;
  aspect-ratio: 1 / 1;
  background: linear-gradient(
    90deg,
    rgba(139, 92, 246, 0.05) 25%,
    rgba(139, 92, 246, 0.1) 50%,
    rgba(139, 92, 246, 0.05) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}

.skeleton-pulse {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle,
    rgba(139, 92, 246, 0.2) 0%,
    transparent 70%
  );
  animation: pulse 2s ease-in-out infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1); }
}

.video-skeleton {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}
*/
