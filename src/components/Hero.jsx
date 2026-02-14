import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Bluetooth, Users, Sparkles, ArrowRight, Download } from 'lucide-react';
import Lottie from 'lottie-react';
import './Hero.css';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );
  useEffect(() => {
    let rafId;
    const check = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setIsMobile(window.innerWidth <= 768));
    };
    window.addEventListener('resize', check, { passive: true });
    return () => {
      window.removeEventListener('resize', check);
      cancelAnimationFrame(rafId);
    };
  }, []);
  return isMobile;
};

const Hero = () => {
  const isMobile = useIsMobile();
  const prefersReduced = useReducedMotion();
  const reduceAnimations = isMobile || prefersReduced;
  
  // State for Lottie animation
  const [animationData, setAnimationData] = useState(null);
  
  // Load Lottie animation dynamically
  useEffect(() => {
    fetch('/animations/hero-animation.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(err => console.warn('Lottie animation not found:', err));
  }, []);
  const handleDownload = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    
    if (isAndroid) {
      // Direct APK download for Android users
      window.location.href = '/Radius.apk';
    } else if (isIOS) {
      window.location.href = 'https://apps.apple.com/app/radius/id123456789';
    } else {
      document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { Icon: Bluetooth, delay: 0, x: -120, y: -80 },
    { Icon: Users, delay: 0.2, x: 120, y: -60 },
    { Icon: Sparkles, delay: 0.4, x: -100, y: 80 },
  ];


  return (
    <section className="hero" itemScope itemType="https://schema.org/SoftwareApplication" aria-labelledby="hero-title">
      {/* Background Elements */}
      <div className="hero-bg" aria-hidden="true">
        {!reduceAnimations ? (
          <>
            <motion.div 
              className="gradient-orb orb-1"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div 
              className="gradient-orb orb-2"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div 
              className="gradient-orb orb-3"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
          </>
        ) : (
          <>
            <div className="gradient-orb orb-1" />
            <div className="gradient-orb orb-2" />
          </>
        )}
        <div className="grid-overlay" />
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-grid">
            <article className="hero-text">
              <meta itemProp="name" content="Radius" />
              <meta itemProp="applicationCategory" content="SocialNetworkingApplication" />
              <meta itemProp="operatingSystem" content="iOS, Android" />
              <link itemProp="downloadUrl" href="https://apps.apple.com/app/radius/id123456789" />
              <link itemProp="downloadUrl" href="https://play.google.com/store/apps/details?id=com.radius.app" />
              
              <motion.div
                className="hero-badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Users size={14} aria-hidden="true" />
                <span>Connect, Chat & Build Community</span>
              </motion.div>

              <motion.h1
                id="hero-title"
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                itemProp="headline"
              >
                <span itemProp="name">Radius</span> - Your Social Hub
                <br />
                <span className="gradient-text">For Real Connections</span>
              </motion.h1>

              <motion.p
                className="hero-description mobile-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Discover people nearby using Bluetooth, join communities worldwide,
                and get emergency help when needed. Chat with rich media — all with privacy-first design.
              </motion.p>
              
              {/* Hidden SEO text for search engines */}
              <p
                className="visually-hidden"
                itemProp="description"
                aria-hidden="true"
              >
                Radius is the leading social discovery app using Bluetooth technology. 
                Connect with people nearby without GPS tracking, join group discussions worldwide, get emergency help with SOS Nearby Help, and chat with rich media. 
                Radius social network offers privacy-first social networking with Bluetooth discovery. Download Radius free on iOS and Android.
              </p>

              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.button
                  className="btn-primary"
                  onClick={handleDownload}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(139, 92, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Download Radius App for free on iOS and Android"
                >
                  <Download size={20} aria-hidden="true" />
                  Download Radius
                </motion.button>
                <motion.a
                  href="#how-it-works"
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Learn how Radius social discovery app works"
                >
                  See How Radius Works
                  <ArrowRight size={18} aria-hidden="true" />
                </motion.a>
              </motion.div>

              <motion.div
                className="hero-stats"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                itemScope itemType="https://schema.org/AggregateRating"
                itemProp="aggregateRating"
              >
                <meta itemProp="ratingValue" content="4.8" />
                <meta itemProp="ratingCount" content="15000" />
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Privacy Focused</span>
                </div>
                <div className="stat-divider" aria-hidden="true" />
                <div className="stat">
                  <span className="stat-number">Rich</span>
                  <span className="stat-label">Media Messaging</span>
                </div>
                <div className="stat-divider" aria-hidden="true" />
                <div className="stat">
                  <span className="stat-number">Groups</span>
                  <span className="stat-label">Nearby & Global</span>
                </div>
              </motion.div>
            </article>

            {/* Desktop Visual - Phone Mockup */}
            <div className="hero-visual desktop-visual">
              <motion.div
                className="phone-mockup"
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              >
                <div className="phone-frame">
                  <div className="phone-notch" />
                  <div className="phone-screen">
                    <div className="app-header">
                      <span className="app-title">Nearby</span>
                      <div className="app-icons">
                        <div className="scan-indicator">
                          <div className="scan-pulse" />
                        </div>
                      </div>
                    </div>
                    <div className="user-list">
                      {['Sarah M.', 'Alex K.', 'Jordan T.', 'Riley P.'].map((name, i) => (
                        <motion.div
                          key={name}
                          className="user-card"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + i * 0.15 }}
                        >
                          <div className="user-avatar" style={{ background: ['#8B5CF6', '#06B6D4', '#F472B6', '#10B981'][i] }}>
                            {name[0]}
                          </div>
                          <div className="user-info">
                            <span className="user-name">{name}</span>
                            <span className="user-distance">{['Very close', 'Nearby', 'Nearby', 'Far'][i]}</span>
                          </div>
                          <div className={`proximity-indicator ${['very-close', 'nearby', 'nearby', 'far'][i]}`}>
                            <div className="dot" />
                            <div className="dot" />
                            <div className="dot" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements — desktop only, skip animation overhead on mobile */}
                {!reduceAnimations && floatingIcons.map(({ Icon: IconComponent, delay, x, y }, index) => (
                  <motion.div
                    key={index}
                    className="floating-icon"
                    style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      opacity: { delay: delay + 0.5, duration: 0.4 },
                      scale: { delay: delay + 0.5, duration: 0.4 },
                      y: { delay: delay + 0.9, duration: 3, repeat: Infinity, ease: 'easeInOut' },
                    }}
                  >
                    <IconComponent size={20} />
                  </motion.div>
                ))}

                {/* Radar rings — desktop only */}
                {!reduceAnimations && (
                  <div className="radar-rings">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="radar-ring"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: [0.5, 1.5], opacity: [0.5, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.8,
                          ease: 'easeOut',
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </div>

            {/* Mobile Visual - Lottie Animation */}
            <div className="hero-visual mobile-visual">
              {/* Neon background text */}
              <div className="neon-background-text" aria-hidden="true">RADIUS</div>
              
              {animationData && (
                <motion.div 
                  className="lottie-container"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Lottie 
                    animationData={animationData}
                    loop={true}
                    style={{ width: '100%', height: '100%', maxWidth: '400px' }}
                  />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      {!reduceAnimations && (
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="scroll-dot"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
