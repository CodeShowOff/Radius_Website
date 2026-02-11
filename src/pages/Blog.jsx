import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import './PageStyles.css';

const Blog = () => {
  const featuredPosts = [
    {
      title: "Getting Started with Radius: A Complete Guide",
      excerpt: "Everything you need to know to start making real-world connections with Radius. From setup to your first connection.",
      date: "February 11, 2026",
      readTime: "12 min read",
      category: "Getting Started",
      image: "/app_icon.png",
      link: "/blog/getting-started"
    },
    {
      title: "How to Use Radius Nearby Help (SOS) Feature",
      excerpt: "Your guide to requesting and providing emergency assistance through community-powered proximity alerts.",
      date: "February 11, 2026",
      readTime: "9 min read",
      category: "Safety",
      image: "/app_icon.png",
      link: "/blog/nearby-help"
    },
    {
      title: "How to Use Radius Random Chat Feature",
      excerpt: "Connect with people worldwide through spontaneous group conversations and shared interests.",
      date: "February 11, 2026",
      readTime: "8 min read",
      category: "Features",
      image: "/app_icon.png",
      link: "/blog/random-chat"
    },
    {
      title: "How to Use Radius Location-Based Groups",
      excerpt: "Build and join persistent communities in your building, campus, neighborhood, and favorite places.",
      date: "February 11, 2026",
      readTime: "9 min read",
      category: "Community",
      image: "/app_icon.png",
      link: "/blog/location-groups"
    },
    {
      title: "How Radius Uses Bluetooth for Privacy-First Social Discovery",
      excerpt: "Exploring the technology behind proximity-based connections that don't compromise your privacy.",
      date: "February 11, 2026",
      readTime: "8 min read",
      category: "Technology",
      image: "/app_icon.png",
      link: "/blog/bluetooth-privacy"
    },
    {
      title: "Radius vs. Traditional Dating Apps: Why Proximity Matters",
      excerpt: "How real-world closeness creates more authentic connections than endless swiping.",
      date: "February 11, 2026",
      readTime: "10 min read",
      category: "Relationships",
      image: "/app_icon.png",
      link: "/blog/radius-vs-dating-apps"
    },
    {
      title: "How to Use Radius Nearby Groups for Events",
      excerpt: "Master the art of connecting with people at concerts, conferences, and local gatherings.",
      date: "February 11, 2026",
      readTime: "7 min read",
      category: "Guides",
      image: "/app_icon.png",
      link: "/blog/nearby-groups"
    }
  ];

  return (
    <div className="page-container">
      <motion.div 
        className="page-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="hero-icon">
            <BookOpen size={48} />
          </div>
          <h1 className="page-title">Radius Blog</h1>
          <p className="page-subtitle">
            Stories, insights, and updates from the Radius team
          </p>
        </div>
      </motion.div>

      <div className="container page-content">
        <motion.section 
          className="blog-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {featuredPosts.map((post, index) => (
            <motion.article 
              key={post.title}
              className="blog-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link to={post.link} className="blog-card-link">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>{post.date}</span>
                    <span className="meta-dot">•</span>
                    <span className="read-time">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <button className="read-more">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.section>

        <motion.section
          className="newsletter-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2>Stay Updated</h2>
          <p>
            Want to be notified when we publish new posts? Follow us on our social channels.
          </p>
          <div className="social-links-inline">
            <a href="https://x.com/CodeShowOff" target="_blank" rel="noopener noreferrer" className="social-link-btn">
              Twitter
            </a>
            <a href="https://www.instagram.com/codeshowoff/" target="_blank" rel="noopener noreferrer" className="social-link-btn">
              Instagram
            </a>
            <a href="https://github.com/CodeShowOff" target="_blank" rel="noopener noreferrer" className="social-link-btn">
              GitHub
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Blog;
