import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Zap, Eye, Lock, Globe, Heart } from 'lucide-react';
import './WhyRadius.css';

const AnimatedNumber = ({ value, suffix = '', inView }) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime = null;
      const duration = 1500;
      let rafId;
      
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(easeOut * value));
        
        if (progress < 1) {
          rafId = requestAnimationFrame(animate);
        }
      };
      
      rafId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(rafId);
    }
  }, [inView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const WhyRadius = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: 100, suffix: '%', label: 'Privacy Protected' },
    { value: 1, suffix: '', label: 'Feature Uses GPS' },
    { value: 9, suffix: '+', label: 'Core Features' },
    { value: 3, suffix: '', label: 'Group Types' },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Bluetooth discovery — no GPS tracking. Location only for SOS.',

    },
    {
      icon: Globe,
      title: 'Multiple Discovery Modes',
      description: 'Nearby people, global groups, or location-based communities.',

    },
    {
      icon: Lock,
      title: 'Mutual Consent',
      description: 'All connections require acceptance. No spam.',

    },
    {
      icon: Zap,
      title: 'Full-Featured Messaging',
      description: 'Texts, voice, photos, stickers, and documents.',

    },
    {
      icon: Heart,
      title: 'Community Focused',
      description: 'Help nearby users and join group discussions.',

    },
    {
      icon: Eye,
      title: 'Flexible & Fun',
      description: 'Serious groups or casual chats — your choice.',

    },
  ];

  return (
    <section id="why-radius" className="why-radius-section" ref={ref} aria-labelledby="why-radius-title">
      <div className="container">
        {/* Stats Section */}
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          role="list"
          aria-label="Radius app statistics"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              role="listitem"
            >
              <div className="stat-value">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <div className="stat-label-large">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Section */}
        <motion.header
          className="why-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="section-label">Why Choose Radius</span>
          <h2 id="why-radius-title" className="section-title">
            A complete <span className="gradient-text">social experience</span>
          </h2>
        </motion.header>

        <div className="benefits-grid" role="list">
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ 
                y: -5,
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
              }}
              role="listitem"
            >
              <div className="benefit-icon" aria-hidden="true">
                <benefit.icon size={22} />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRadius;
