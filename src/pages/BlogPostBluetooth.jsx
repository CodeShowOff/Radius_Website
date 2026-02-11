import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bluetooth, Shield, Lock, Radio, Users, Zap, Check, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

const BlogPostBluetooth = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = 'How Radius Uses Bluetooth for Privacy-First Social Discovery | Radius App Blog';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover how Radius App leverages Bluetooth Low Energy (BLE) technology to create a privacy-first social discovery platform. Learn about proximity detection, anonymous broadcasting, and why Bluetooth is the future of social networking.');
    }

    // Add structured data for blog post
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "How Radius Uses Bluetooth for Privacy-First Social Discovery",
      "description": "An in-depth look at how Radius leverages Bluetooth Low Energy technology to create a privacy-focused social discovery platform",
      "image": "https://radiusapp.tech/blog-bluetooth-cover.png",
      "datePublished": "2026-02-11",
      "dateModified": "2026-02-11",
      "author": {
        "@type": "Organization",
        "name": "Radius App"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Radius App",
        "logo": {
          "@type": "ImageObject",
          "url": "https://radiusapp.tech/logo.png"
        }
      },
      "keywords": "Bluetooth Low Energy, BLE, privacy-first social networking, proximity detection, anonymous networking, Radius App, social discovery",
      "articleSection": "Technology",
      "wordCount": 2500
    });
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <div className="page-container">
      <motion.div 
        className="page-hero blog-post-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <Link to="/blog" className="back-link">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
          <div className="blog-post-meta">
            <span className="blog-category">Technology</span>
            <span className="meta-dot">•</span>
            <span>February 11, 2026</span>
            <span className="meta-dot">•</span>
            <span>8 min read</span>
          </div>
          <h1 className="blog-post-title">How Radius Uses Bluetooth for Privacy-First Social Discovery</h1>
          <p className="blog-post-subtitle">
            Exploring the technology behind proximity-based connections that don't compromise your privacy
          </p>
        </div>
      </motion.div>

      <motion.div 
        className="container blog-post-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <article className="blog-article">
          <section className="article-section">
            <p className="lead-paragraph">
              In an age where social media platforms track your every move, store your location history, and sell your data to advertisers, we asked ourselves a simple question: <strong>Can we build a social discovery app that connects people nearby without compromising their privacy?</strong>
            </p>
            <p>
              The answer led us to Bluetooth Low Energy (BLE) technology—a powerful, privacy-respecting alternative to GPS-based location tracking. Here's how Radius leverages Bluetooth to create meaningful connections while keeping your data secure.
            </p>
          </section>

          <section className="article-section">
            <h2>
              <Radio className="section-icon" />
              The Problem with Traditional Location Tracking
            </h2>
            <p>
              Most social and dating apps rely on GPS and cell tower data to determine your location. While this approach is accurate, it comes with significant privacy concerns:
            </p>
            <ul className="feature-list">
              <li><strong>Permanent Location History:</strong> Your movements are logged and stored on remote servers</li>
              <li><strong>Exact Coordinates:</strong> Apps know your precise location down to a few meters</li>
              <li><strong>Background Tracking:</strong> Many apps continue tracking even when you're not using them</li>
              <li><strong>Third-Party Access:</strong> Location data can be shared with advertisers and data brokers</li>
              <li><strong>Security Risks:</strong> Centralized databases of user locations are prime targets for hackers</li>
            </ul>
            <p>
              These practices create a digital trail that follows you everywhere, painting a detailed picture of your daily life, habits, and relationships. We knew there had to be a better way.
            </p>
          </section>

          <section className="article-section">
            <h2>
              <Bluetooth className="section-icon" />
              Why Bluetooth Low Energy?
            </h2>
            <p>
              Bluetooth Low Energy (BLE), introduced in Bluetooth 4.0, was designed for low-power, short-range communication between devices. While it's commonly used for wearables and IoT devices, its characteristics make it perfect for privacy-conscious social networking:
            </p>
            
            <div className="highlight-box">
              <h3><Zap size={24} /> Key BLE Advantages</h3>
              <ul className="check-list">
                <li><Check className="check-icon" /> <strong>Proximity Detection Only:</strong> BLE can detect devices within approximately 10-100 meters, giving you a sense of "nearby" without exact coordinates</li>
                <li><Check className="check-icon" /> <strong>No Server Required:</strong> Devices communicate directly through peer-to-peer discovery</li>
                <li><Check className="check-icon" /> <strong>Anonymous Broadcasting:</strong> You can advertise your presence without revealing your identity</li>
                <li><Check className="check-icon" /> <strong>Low Battery Impact:</strong> BLE uses minimal power, preserving your device's battery life</li>
                <li><Check className="check-icon" /> <strong>No Internet Required:</strong> Works offline, making it ideal for emergencies and areas with poor connectivity</li>
              </ul>
            </div>
          </section>

          <section className="article-section">
            <h2>
              <Shield className="section-icon" />
              How Radius Implements Bluetooth Technology
            </h2>
            <p>
              Radius uses a sophisticated BLE implementation that balances discoverability with privacy. Here's how it works:
            </p>

            <h3>1. Anonymous Broadcasting</h3>
            <p>
              When you open Radius and enable discovery mode, your device begins broadcasting a unique, rotating identifier through BLE. This identifier:
            </p>
            <ul>
              <li>Changes every 15 minutes to prevent tracking</li>
              <li>Contains no personal information</li>
              <li>Cannot be linked back to your device or identity</li>
              <li>Is only meaningful to other Radius users</li>
            </ul>

            <h3>2. Proximity Detection</h3>
            <p>
              Instead of calculating exact distances or coordinates, Radius categorizes proximity into general ranges:
            </p>
            <ul>
              <li><strong>Immediate:</strong> Within a few meters (same room, nearby table)</li>
              <li><strong>Near:</strong> Within 10-20 meters (same building, nearby area)</li>
              <li><strong>Far:</strong> Within detection range but not immediately close</li>
            </ul>
            <p>
              This approach gives users useful context about how close someone is without revealing exact locations. You'll never see a map with pins showing where people are—just a general sense of proximity.
            </p>

            <h3>3. Mutual Consent Connections</h3>
            <p>
              Detecting someone nearby is just the first step. Radius requires mutual interest before any communication can occur:
            </p>
            <ol className="numbered-list">
              <li>You see anonymized profiles of nearby users (username only, no photos unless they choose to share)</li>
              <li>If you're interested in connecting, you send a connection request</li>
              <li>The other person must accept before any personal information is exchanged</li>
              <li>Only after mutual consent are profiles, photos, and messaging unlocked</li>
            </ol>
            <p>
              This consent-based model ensures that no one can see your full profile or contact you without your permission.
            </p>

            <h3>4. Ephemeral Data</h3>
            <p>
              Unlike traditional social apps that store everything forever, Radius treats proximity data as temporary:
            </p>
            <ul>
              <li>Proximity information is never stored on our servers</li>
              <li>Connection history is kept locally on your device</li>
              <li>When you close the app or disable discovery, you disappear immediately</li>
              <li>No permanent record of where you've been or who you've encountered</li>
            </ul>
          </section>

          <section className="article-section">
            <h2>
              <Lock className="section-icon" />
              Privacy Safeguards Built Into the System
            </h2>
            <p>
              Beyond the inherent privacy of Bluetooth, we've implemented additional safeguards:
            </p>

            <div className="info-card">
              <h3>Rotating Identifiers</h3>
              <p>
                Your broadcast identifier changes automatically every 15 minutes. This prevents anyone from tracking your movements over time by correlating Bluetooth signals.
              </p>
            </div>

            <div className="info-card">
              <h3>No Location Storage</h3>
              <p>
                Radius never stores location coordinates, GPS data, or location history. Our servers only know that two users mutually connected—not where or when it happened.
              </p>
            </div>

            <div className="info-card">
              <h3>On-Device Processing</h3>
              <p>
                All proximity detection happens on your device. Your phone scans for nearby Bluetooth signals and matches them against the Radius network locally—no raw Bluetooth data is ever sent to our servers.
              </p>
            </div>

            <div className="info-card">
              <h3>End-to-End Encrypted Messaging</h3>
              <p>
                When you start chatting with connections, all messages are end-to-end encrypted. Not even Radius can read your conversations.
              </p>
            </div>

            <div className="info-card">
              <h3>User Control</h3>
              <p>
                You decide when you're discoverable. Discovery mode can be toggled on/off instantly, giving you complete control over your visibility.
              </p>
            </div>
          </section>

          <section className="article-section">
            <h2>
              <Users className="section-icon" />
              Real-World Applications
            </h2>
            <p>
              Bluetooth-based social discovery opens up unique use cases that GPS-based apps can't match:
            </p>

            <h3>Events and Gatherings</h3>
            <p>
              At concerts, conferences, or festivals, Radius helps you connect with people who are actually there with you—not just people who checked in on GPS or posted about it online.
            </p>

            <h3>Campus and Workplace Networking</h3>
            <p>
              Students and professionals can meet others in their building, cafeteria, or library without broadcasting their exact location to the entire campus.
            </p>

            <h3>Travel and Exploration</h3>
            <p>
              Connect with fellow travelers at airports, hotels, or tourist attractions. Since Bluetooth works offline, you can make connections even in areas with poor network coverage.
            </p>

            <h3>Emergency Scenarios</h3>
            <p>
              In emergencies where cell networks are overloaded or unavailable, Radius's Bluetooth-based infrastructure continues working, allowing users to request help from people immediately nearby.
            </p>
          </section>

          <section className="article-section">
            <h2>Technical Challenges and Solutions</h2>
            <p>
              Building a social app on Bluetooth isn't without challenges. Here's how we addressed some common issues:
            </p>

            <h3>Challenge: Bluetooth Needs to Be Enabled</h3>
            <p>
              <strong>Solution:</strong> We designed an intuitive onboarding flow that explains why Bluetooth is necessary and how it protects privacy. Users who understand the benefits are more willing to enable it.
            </p>

            <h3>Challenge: Battery Consumption</h3>
            <p>
              <strong>Solution:</strong> We use BLE's ultra-low-power advertising mode and implement intelligent scanning intervals. Radius uses less battery than most GPS-based apps.
            </p>

            <h3>Challenge: iOS Background Limitations</h3>
            <p>
              <strong>Solution:</strong> We leverage iOS's background BLE capabilities and encourage users to keep the app in foreground mode during active discovery periods.
            </p>

            <h3>Challenge: Signal Interference</h3>
            <p>
              <strong>Solution:</strong> Our algorithm accounts for signal strength variations and uses multiple BLE advertising channels to ensure consistent detection.
            </p>
          </section>

          <section className="article-section">
            <h2>The Future of Privacy-First Social Technology</h2>
            <p>
              Bluetooth-based social networking represents a fundamental shift in how we think about digital connections. Instead of asking users to surrender their privacy for convenience, we've proven that you can have both.
            </p>
            <p>
              As more people become aware of the privacy implications of location tracking, we believe proximity-based technologies like BLE will become the standard for social discovery apps. Radius is leading this movement by showing that <strong>meaningful connections don't require surveillance</strong>.
            </p>
          </section>

          <section className="article-section cta-section">
            <h2>Experience Privacy-First Social Discovery</h2>
            <p className="cta-text">
              Ready to connect with people nearby without compromising your privacy? Download Radius today and experience the future of social networking.
            </p>
            <div className="cta-buttons">
              <a href="https://apps.apple.com/app/radius" className="btn-primary" target="_blank" rel="noopener noreferrer">
                Download for iOS
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.radius.app" className="btn-secondary" target="_blank" rel="noopener noreferrer">
                Download for Android
              </a>
            </div>
          </section>

          <section className="article-section">
            <div className="article-footer">
              <p><strong>Tags:</strong> Bluetooth, Privacy, Technology, Social Networking, BLE, Security</p>
              <Link to="/blog" className="back-to-blog">
                <ArrowLeft size={18} />
                Back to all posts
              </Link>
            </div>
          </section>
        </article>
      </motion.div>
    </div>
  );
};

export default BlogPostBluetooth;
