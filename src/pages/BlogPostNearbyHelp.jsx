import { motion } from 'framer-motion';
import { AlertCircle, Heart, Shield, Zap, MapPin, Users, Bell, Check, ArrowLeft, Radio, Camera, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCanonical, usePageMeta } from '../hooks/useCanonical';
import './PageStyles.css';

const BlogPostNearbyHelp = () => {
  useCanonical('/blog/nearby-help');
  usePageMeta({
    title: 'How to Use Radius Nearby Help (SOS) Feature | Radius App Blog',
    description: 'Learn how to use Radius Nearby Help feature to request and provide assistance in emergencies. Complete guide to SOS alerts, safety features, and community-driven help.',
    keywords: 'radius help, radius sos, emergency help, nearby help, community assistance'
  });

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Use Radius Nearby Help (SOS) Feature",
      "description": "Complete guide to requesting and providing help through Radius's proximity-based emergency assistance feature",
      "image": "https://radiusapp.tech/blog-nearby-help-cover.png",
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
      "step": [
        {
          "@type": "HowToStep",
          "name": "Access Nearby Help",
          "text": "Open Radius and navigate to the Nearby Help section"
        },
        {
          "@type": "HowToStep",
          "name": "Choose Help Type",
          "text": "Select the type of assistance you need"
        },
        {
          "@type": "HowToStep",
          "name": "Send Alert",
          "text": "Broadcast your help request to nearby users"
        },
        {
          "@type": "HowToStep",
          "name": "Connect with Helpers",
          "text": "Communicate with people who respond to your request"
        }
      ],
      "keywords": "Radius SOS, nearby help, emergency assistance, community help, safety feature, proximity alert, emergency broadcast",
      "articleSection": "Safety",
      "wordCount": 2900
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
            <span className="blog-category">Safety</span>
            <span className="meta-dot">•</span>
            <span>February 11, 2026</span>
            <span className="meta-dot">•</span>
            <span>9 min read</span>
          </div>
          <h1 className="blog-post-title">How to Use Radius Nearby Help (SOS) Feature</h1>
          <p className="blog-post-subtitle">
            Your guide to requesting and providing emergency assistance through community-powered proximity alerts
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
              Imagine you have a flat tire on a dark road. Your phone battery is dying. Or you're locked out of your car in an unfamiliar neighborhood. Or you witness someone in distress and want to help but need backup. <strong>These are moments when having nearby people who can assist makes all the difference.</strong>
            </p>
            <p>
              Radius Nearby Help (SOS) transforms your phone into a community-powered safety net. Using Bluetooth and local connectivity, you can instantly broadcast a help request to people in your immediate vicinity—no cell service required. Here's everything you need to know.
            </p>
          </section>

          <section className="article-section">
            <h2>
              <AlertCircle className="section-icon" />
              What is Nearby Help?
            </h2>
            <p>
              Nearby Help is Radius's proximity-based emergency assistance feature. It allows you to:
            </p>
            <ul className="check-list">
              <li><Check className="check-icon" /> <strong>Request help</strong> from people physically nearby</li>
              <li><Check className="check-icon" /> <strong>Respond to help requests</strong> from others in your area</li>
              <li><Check className="check-icon" /> <strong>Specify the type of assistance</strong> needed (medical, mechanical, safety, etc.)</li>
              <li><Check className="check-icon" /> <strong>Share your approximate location</strong> without revealing exact coordinates</li>
              <li><Check className="check-icon" /> <strong>Coordinate responses</strong> through encrypted messaging</li>
              <li><Check className="check-icon" /> <strong>Work offline</strong> using Bluetooth mesh networking</li>
            </ul>

            <div className="highlight-box">
              <h3><Shield size={24} /> Built for Real Emergencies</h3>
              <p>
                Unlike 911 or emergency services (which you should still call for life-threatening situations), Nearby Help is designed for:
              </p>
              <ul>
                <li>Non-life-threatening but urgent situations</li>
                <li>Moments when professional help is too far or too slow</li>
                <li>Areas with limited cell service</li>
                <li>Situations where community assistance is most appropriate</li>
              </ul>
              <p className="tip-box">
                <strong>⚠️ Important:</strong> For life-threatening emergencies, always call 911 or your local emergency services first. Nearby Help is a supplement, not a replacement, for professional emergency response.
              </p>
            </div>
          </section>

          <section className="article-section">
            <h2>
              <Radio className="section-icon" />
              How Nearby Help Works
            </h2>

            <h3>The Technology Behind It</h3>
            <p>
              Nearby Help uses a combination of technologies to ensure help requests reach people quickly:
            </p>

            <div className="info-card">
              <h4>Bluetooth Broadcasting</h4>
              <p>
                Your help request is broadcast via Bluetooth Low Energy to all Radius users within range (approximately 100 meters or ~300 feet). This works without internet connectivity.
              </p>
            </div>

            <div className="info-card">
              <h4>Mesh Networking</h4>
              <p>
                If enabled, your request can be relayed through other Radius users, extending your reach beyond immediate Bluetooth range. Think of it as a digital chain of people passing your message.
              </p>
            </div>

            <div className="info-card">
              <h4>Server Notification</h4>
              <p>
                When you have internet connectivity, your request is also sent to Radius servers, which notify nearby users via push notifications—ensuring maximum visibility.
              </p>
            </div>

            <h3>Privacy and Safety</h3>
            <p>
              Your safety is paramount. Here's how Nearby Help protects you:
            </p>
            <ul>
              <li><strong>No exact location shared:</strong> Helpers see your general proximity, not your GPS coordinates</li>
              <li><strong>Identity control:</strong> Choose whether to reveal your profile or remain anonymous</li>
              <li><strong>Encrypted communication:</strong> All messages are end-to-end encrypted</li>
              <li><strong>Block and report:</strong> Instantly block malicious users</li>
              <li><strong>Emergency contacts notified:</strong> Optionally notify your emergency contacts when you send a help request</li>
            </ul>
          </section>

          <section className="article-section">
            <h2>
              <Zap className="section-icon" />
              Requesting Help: Step-by-Step Guide
            </h2>

            <h3>Step 1: Access Nearby Help</h3>
            <ol className="numbered-list">
              <li>Open the Radius app</li>
              <li>Tap the <strong>Nearby Help</strong> icon (lifebuoy symbol) on the home screen</li>
              <li>Alternatively, use the <strong>SOS Quick Action</strong>:
                <ul>
                  <li><strong>iOS:</strong> Triple-press the side button</li>
                  <li><strong>Android:</strong> Double-press the power button</li>
                  <li>This launches Nearby Help directly, even from a locked screen</li>
                </ul>
              </li>
            </ol>

            <h3>Step 2: Choose Your Help Category</h3>
            <p>
              Select the type of assistance you need. This helps nearby users understand how they can help:
            </p>

            <div className="help-category-grid">
              <div className="info-card">
                <h4>🚨 Emergency</h4>
                <p>Immediate danger, medical emergency, assault, or life-threatening situation. This triggers the highest priority alert.</p>
              </div>

              <div className="info-card">
                <h4>🚗 Vehicle Trouble</h4>
                <p>Flat tire, dead battery, locked out, or other car-related issues.</p>
              </div>

              <div className="info-card">
                <h4>🏥 Medical Assistance</h4>
                <p>Non-life-threatening medical needs, medication, or first aid.</p>
              </div>

              <div className="info-card">
                <h4>🔒 Safety Concern</h4>
                <p>Feeling unsafe, being followed, or need someone to walk with you.</p>
              </div>

              <div className="info-card">
                <h4>🔧 General Help</h4>
                <p>Locked out, need directions, lost item, or other assistance.</p>
              </div>

              <div className="info-card">
                <h4>📱 Tech Help</h4>
                <p>Phone issues, need to make a call, or technical problems.</p>
              </div>
            </div>

            <h3>Step 3: Add Details (Optional but Recommended)</h3>
            <ol className="numbered-list">
              <li><strong>Description:</strong> Briefly explain what you need (e.g., "Flat tire, need jack and help changing")</li>
              <li><strong>Location details:</strong> Add landmarks or specific location info ("Near the Shell station on Main Street")</li>
              <li><strong>Photo/Video:</strong> Attach a photo to help responders understand the situation</li>
              <li><strong>Voice message:</strong> Record a quick message if typing is difficult</li>
            </ol>

            <h3>Step 4: Set Privacy Preferences</h3>
            <ul>
              <li><strong>Show my profile:</strong> Reveal your name and photo (recommended for trust)</li>
              <li><strong>Anonymous:</strong> Keep your identity private until someone responds</li>
              <li><strong>Notify emergency contacts:</strong> Toggle on to auto-notify your designated emergency contacts</li>
            </ul>

            <h3>Step 5: Broadcast Your Request</h3>
            <ol className="numbered-list">
              <li>Review your help request</li>
              <li>Tap <strong>Send Help Request</strong></li>
              <li>Your request is immediately broadcast to:
                <ul>
                  <li>All Radius users within Bluetooth range</li>
                  <li>Nearby users who have push notifications enabled</li>
                  <li>Your emergency contacts (if enabled)</li>
                </ul>
              </li>
              <li>You'll see a confirmation: "Help request sent to [X] nearby users"</li>
            </ol>

            <h3>Step 6: Manage Responses</h3>
            <p>
              As people respond to your request:
            </p>
            <ul>
              <li><strong>View responders:</strong> See profiles of people who've offered to help</li>
              <li><strong>Chat with helpers:</strong> Message them to coordinate assistance</li>
              <li><strong>Share additional info:</strong> Send photos, voice messages, or more details</li>
              <li><strong>Accept help:</strong> Let responders know you're connecting with someone</li>
              <li><strong>Mark as resolved:</strong> When help arrives or the situation is handled, close the request</li>
            </ul>

            <p className="tip-box">
              <strong>💡 Pro Tip:</strong> If you don't get responses immediately, your request remains active and continues broadcasting. People entering the area will see your request.
            </p>
          </section>

          <section className="article-section">
            <h2>
              <Heart className="section-icon" />
              Responding to Help Requests
            </h2>

            <p>
              Being a helper is just as important as requesting help. Here's how to respond when someone nearby needs assistance:
            </p>

            <h3>Receiving Help Alerts</h3>
            <ol className="numbered-list">
              <li>You'll receive a push notification: "Someone nearby needs help"</li>
              <li>The priority level is indicated:
                <ul>
                  <li><strong>🚨 Critical:</strong> Emergency situations (red banner)</li>
                  <li><strong>⚠️ Urgent:</strong> Safety or medical (orange banner)</li>
                  <li><strong>ℹ️ Standard:</strong> General assistance (blue banner)</li>
                </ul>
              </li>
              <li>Open Radius to view the request details</li>
            </ol>

            <h3>Evaluating Help Requests</h3>
            <p>
              Before responding, consider:
            </p>
            <ul className="check-list">
              <li><Check className="check-icon" /> <strong>Can I actually help?</strong> Do I have the skills, resources, or time?</li>
              <li><Check className="check-icon" /> <strong>Is it safe?</strong> Trust your instincts—don't put yourself in danger</li>
              <li><Check className="check-icon" /> <strong>How close am I?</strong> Are you the best person to respond?</li>
              <li><Check className="check-icon" /> <strong>Are others already responding?</strong> Check if enough helpers have offered</li>
            </ul>

            <h3>Offering Assistance</h3>
            <ol className="numbered-list">
              <li>Tap <strong>Offer Help</strong> on the request</li>
              <li>Send a message: "I'm nearby and can help. I have [relevant resources]"</li>
              <li>Coordinate details through chat</li>
              <li>Provide your ETA: "I'm about 5 minutes away"</li>
              <li>Keep the person updated as you approach</li>
            </ol>

            <h3>Best Practices for Helpers</h3>
            <ul className="check-list">
              <li><Check className="check-icon" /> <strong>Bring a friend:</strong> For safety, especially for emergency or safety-related requests</li>
              <li><Check className="check-icon" /> <strong>Meet in public:</strong> If possible, suggest a well-lit, populated meeting spot</li>
              <li><Check className="check-icon" /> <strong>Call 911 if needed:</strong> If you arrive and it's more serious than described, get professional help</li>
              <li><Check className="check-icon" /> <strong>Be respectful:</strong> People in need may be stressed or embarrassed</li>
              <li><Check className="check-icon" /> <strong>Follow through:</strong> If you commit to helping, follow through or let them know if you can't</li>
              <li><Check className="check-icon" /> <strong>Report abuse:</strong> If a request appears fake or malicious, report it</li>
            </ul>
          </section>

          <section className="article-section">
            <h2>
              <Users className="section-icon" />
              Real-World Help Stories
            </h2>

            <div className="story-card">
              <h3>Medical Emergency at a Concert</h3>
              <p>
                <em>"At a crowded music festival, my friend started having an allergic reaction. Cell service was completely overwhelmed—I couldn't call 911. I sent a Radius SOS for medical help. Within 2 minutes, an EMT who was off-duty and at the festival reached us. She had an EpiPen and administered it while we worked to get through to emergency services. Radius literally saved my friend's life that day."</em>
              </p>
              <p className="story-attribution">— Tyler, Festival Attendee</p>
            </div>

            <div className="story-card">
              <h3>Flat Tire on a Rural Road</h3>
              <p>
                <em>"I was driving through rural Montana when I got a flat tire. No cell service, middle of nowhere. I used Radius Nearby Help to broadcast a request. About 10 minutes later, a local rancher pulled over. He had seen my request in town (it had been relayed through the mesh network) and drove out to help. He had tools and helped me change the tire. Turns out he was 10 miles away when he got the alert!"</em>
              </p>
              <p className="story-attribution">— Sarah, Road Tripper</p>
            </div>

            <div className="story-card">
              <h3>Safety Walk Home</h3>
              <p>
                <em>"I was working late at the library and had to walk home alone at night through an area that made me uncomfortable. I sent a 'Safety Concern' request on Radius. A woman who lived in my building saw the request and offered to walk with me. We walked together and I felt so much safer. Now we're actually friends!"</em>
              </p>
              <p className="story-attribution">— Priya, College Student</p>
            </div>

            <div className="story-card">
              <h3>Lost Child Found</h3>
              <p>
                <em>"At a busy beach, a mother sent a Nearby Help request saying her 6-year-old had wandered off. About 30 people in the area got the alert with a description. Within 5 minutes, someone spotted the child playing near the water and brought him back. The mom was in tears. It showed how powerful community response can be."</em>
              </p>
              <p className="story-attribution">— Mike, Beach-Goer</p>
            </div>
          </section>

          <section className="article-section">
            <h2>
              <Bell className="section-icon" />
              Advanced Features
            </h2>

            <h3>Emergency Contacts Setup</h3>
            <p>
              Configure emergency contacts who will be automatically notified when you send a help request:
            </p>
            <ol className="numbered-list">
              <li>Go to <strong>Settings {'>'} Safety {'>'} Emergency Contacts</strong></li>
              <li>Add up to 5 emergency contacts</li>
              <li>They'll receive an SMS and app notification with:
                <ul>
                  <li>Your help request details</li>
                  <li>Your approximate location</li>
                  <li>A link to track your situation</li>
                </ul>
              </li>
            </ol>

            <h3>Help History and Tracking</h3>
            <p>
              View your help request history:
            </p>
            <ul>
              <li>See past requests you've made</li>
              <li>Review situations you've helped with</li>
              <li>Track your "Helper Score" (community recognition)</li>
              <li>Export history for records or insurance purposes</li>
            </ul>

            <h3>Offline Mode</h3>
            <p>
              Nearby Help works even without internet:
            </p>
            <ul>
              <li>Bluetooth broadcasting continues offline</li>
              <li>Mesh networking relays your request through other users</li>
              <li>Messages sync when you regain connectivity</li>
              <li>Perfect for remote areas, natural disasters, or network outages</li>
            </ul>

            <h3>Customizable Alert Settings</h3>
            <p>
              Control which help requests you want to be notified about:
            </p>
            <ul>
              <li><strong>Categories:</strong> Choose which types you can help with</li>
              <li><strong>Distance:</strong> Set how far you're willing to travel</li>
              <li><strong>Quiet hours:</strong> Pause notifications during sleep</li>
              <li><strong>Priority only:</strong> Only receive emergency/critical alerts</li>
            </ul>
          </section>

          <section className="article-section">
            <h2>
              <Shield className="section-icon" />
              Safety Guidelines
            </h2>

            <h3>For People Requesting Help</h3>
            <ul className="check-list">
              <li><Check className="check-icon" /> <strong>Be specific:</strong> Clear descriptions get better responses</li>
              <li><Check className="check-icon" /> <strong>Stay visible:</strong> In public places when possible</li>
              <li><Check className="check-icon" /> <strong>Vet helpers:</strong> Check profiles before accepting help</li>
              <li><Check className="check-icon" /> <strong>Trust your gut:</strong> If something feels off, decline help</li>
              <li><Check className="check-icon" /> <strong>Call 911 for emergencies:</strong> Don't rely solely on Radius for life-threatening situations</li>
            </ul>

            <h3>For People Offering Help</h3>
            <ul className="check-list">
              <li><Check className="check-icon" /> <strong>Don't put yourself in danger:</strong> Your safety comes first</li>
              <li><Check className="check-icon" /> <strong>Bring someone with you:</strong> Safety in numbers</li>
              <li><Check className="check-icon" /> <strong>Meet in public areas:</strong> Well-lit, populated locations</li>
              <li><Check className="check-icon" /> <strong>Let someone know:</strong> Tell a friend you're going to help</li>
              <li><Check className="check-icon" /> <strong>Call authorities if needed:</strong> Don't hesitate to get professional help</li>
            </ul>

            <div className="alert-box">
              <AlertCircle className="alert-icon" />
              <div>
                <h4>Report Misuse</h4>
                <p>
                  Radius takes help request abuse seriously. Report fake requests, scams, or malicious behavior immediately. Verified abuse results in permanent bans.
                </p>
              </div>
            </div>
          </section>

          <section className="article-section">
            <h2>Community Impact</h2>
            <p>
              Nearby Help creates a culture of mutual aid and community support:
            </p>
            <ul>
              <li><strong>Faster response times:</strong> Community help often arrives before professional services</li>
              <li><strong>Reduced isolation:</strong> People feel safer knowing help is nearby</li>
              <li><strong>Stronger communities:</strong> Helping builds bonds between neighbors</li>
              <li><strong>Emergency resilience:</strong> Communities become more prepared for crises</li>
            </ul>

            <p>
              In 2025, Radius Nearby Help facilitated over 100,000 successful assistance interactions globally, with an average response time of under 4 minutes. The feature has been credited with helping people in situations ranging from minor inconveniences to potentially life-saving interventions.
            </p>
          </section>

          <section className="article-section cta-section">
            <h2>Be Part of the Safety Network</h2>
            <p className="cta-text">
              Download Radius and enable Nearby Help. Whether you're requesting assistance or offering help, you're contributing to a safer, more connected community.
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
              <p><strong>Tags:</strong> Nearby Help, SOS, Emergency Assistance, Safety, Community, Guide</p>
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

export default BlogPostNearbyHelp;
