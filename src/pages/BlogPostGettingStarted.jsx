import { motion } from 'framer-motion';
import { Rocket, Download, Settings, Users, MessageCircle, Shield, Check, ArrowLeft, AlertCircle, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCanonical, usePageMeta, useStructuredData } from '../hooks/useCanonical';
import './PageStyles.css';

const BlogPostGettingStarted = () => {
  useCanonical('/blog/getting-started');
  usePageMeta({
    title: 'Getting Started with Radius: A Complete Guide | Radius App Blog',
    description: 'Complete beginner\'s guide to Radius App. Learn how to set up your profile, enable discovery mode, make connections, join groups, and use all features safely and effectively.',
    keywords: 'radius guide, getting started radius, how to use radius, radius tutorial, radius app setup'
  });
  
  useStructuredData({
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Getting Started with Radius: A Complete Guide",
    "description": "Comprehensive beginner's guide to using Radius App for proximity-based social discovery",
    "image": "https://radiusapp.tech/blog-getting-started-cover.png",
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
    "totalTime": "PT10M",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Download and Install",
        "text": "Download Radius from the App Store or Google Play Store"
      },
      {
        "@type": "HowToStep",
        "name": "Create Your Account",
        "text": "Sign up and set up your profile"
      },
      {
        "@type": "HowToStep",
        "name": "Enable Permissions",
        "text": "Grant Bluetooth and notification permissions"
      },
      {
        "@type": "HowToStep",
        "name": "Start Discovering",
        "text": "Enable discovery mode and start finding people nearby"
      }
    ],
    "keywords": "Radius tutorial, Radius guide, getting started, how to use Radius, Radius setup, proximity social app tutorial",
    "articleSection": "Guides",
    "wordCount": 3000
  });

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
            <span className="blog-category">Getting Started</span>
            <span className="meta-dot">•</span>
            <span>February 11, 2026</span>
            <span className="meta-dot">•</span>
            <span>12 min read</span>
          </div>
          <h1 className="blog-post-title">Getting Started with Radius: A Complete Guide</h1>
          <p className="blog-post-subtitle">
            Everything you need to know to start making real-world connections with Radius
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
              Welcome to Radius! Whether you're looking to make new friends, find potential dates, network professionally, or simply connect with people who share your interests, <strong>Radius makes it easy to discover and connect with people who are actually nearby.</strong>
            </p>
            <p>
              This comprehensive guide will walk you through everything from downloading the app to mastering advanced features. Let's dive in!
            </p>
          </section>

          <section className="article-section">
            <h2>
              <Download className="section-icon" />
              Step 1: Download and Install Radius
            </h2>
            
            <h3>System Requirements</h3>
            <ul>
              <li><strong>iOS:</strong> iPhone 6s or newer, iOS 14.0 or later</li>
              <li><strong>Android:</strong> Android 8.0 (Oreo) or higher</li>
              <li><strong>Bluetooth:</strong> Bluetooth 4.0 (BLE) or newer</li>
              <li><strong>Storage:</strong> Approximately 100MB of free space</li>
            </ul>

            <h3>Installation</h3>
            <ol className="numbered-list">
              <li><strong>For iOS users:</strong>
                <ul>
                  <li>Open the App Store on your iPhone</li>
                  <li>Search for "Radius App" or "Radius Connect"</li>
                  <li>Tap <strong>Get</strong> and authenticate with Face ID, Touch ID, or your password</li>
                  <li>Wait for the download to complete</li>
                  <li>Tap <strong>Open</strong> to launch the app</li>
                </ul>
              </li>
              <li><strong>For Android users:</strong>
                <ul>
                  <li>Open the Google Play Store</li>
                  <li>Search for "Radius App" or "Radius Connect"</li>
                  <li>Tap <strong>Install</strong></li>
                  <li>Wait for the installation to complete</li>
                  <li>Tap <strong>Open</strong> to launch the app</li>
                </ul>
              </li>
            </ol>

            <div className="cta-buttons">
              <a href="https://apps.apple.com/app/radius" className="btn-primary" target="_blank" rel="noopener noreferrer">
                <Download size={20} />
                Download for iOS
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.radius.app" className="btn-secondary" target="_blank" rel="noopener noreferrer">
                <Download size={20} />
                Download for Android
              </a>
            </div>
          </section>

          <section className="article-section">
            <h2>
              <Smartphone className="section-icon" />
              Step 2: Create Your Account
            </h2>
            
            <h3>Sign-Up Process</h3>
            <ol className="numbered-list">
              <li><strong>Choose your sign-up method:</strong>
                <ul>
                  <li>Phone number (recommended for best security)</li>
                  <li>Email address</li>
                  <li>Apple Sign-In (iOS only)</li>
                  <li>Google Sign-In</li>
                </ul>
              </li>
              <li><strong>Verify your account:</strong>
                <ul>
                  <li>Enter the verification code sent to your phone/email</li>
                  <li>This ensures account security and prevents spam</li>
                </ul>
              </li>
              <li><strong>Review the Terms of Service and Privacy Policy</strong>
                <ul>
                  <li>Take a moment to understand how Radius protects your privacy</li>
                  <li>Tap <strong>Accept and Continue</strong></li>
                </ul>
              </li>
            </ol>

            <p className="tip-box">
              <strong>💡 Privacy Note:</strong> Radius never sells your data or shares it with third-party advertisers. Your phone number is only used for account verification and recovery.
            </p>
          </section>

          <section className="article-section">
            <h2>
              <Users className="section-icon" />
              Step 3: Set Up Your Profile
            </h2>
            <p>
              Your profile is how other Radius users will see you. Make it authentic!
            </p>

            <h3>Profile Photo</h3>
            <ul className="check-list">
              <li><Check className="check-icon" /> <strong>Choose a clear, recent photo of yourself</strong></li>
              <li><Check className="check-icon" /> <strong>Face should be clearly visible</strong> (helps with real-world recognition)</li>
              <li><Check className="check-icon" /> <strong>Professional or casual</strong>—whatever matches your vibe</li>
              <li><Check className="check-icon" /> <strong>Pro tip:</strong> Smiling photos get 40% more connection requests</li>
            </ul>

            <h3>Username</h3>
            <ul>
              <li>Choose a username that's unique and memorable</li>
              <li>Can be your real name, nickname, or creative handle</li>
              <li>2-20 characters, letters and numbers only</li>
              <li>Can be changed later in settings</li>
            </ul>

            <h3>Bio (Optional but Recommended)</h3>
            <p>
              Your bio helps people understand who you are and what you're interested in:
            </p>
            <ul>
              <li><strong>Keep it concise:</strong> 2-3 sentences is perfect</li>
              <li><strong>Be authentic:</strong> Share genuine interests or what you're looking for</li>
              <li><strong>Examples:</strong>
                <ul>
                  <li>"Coffee enthusiast ☕ Always down to explore new cafés in the city"</li>
                  <li>"Tech professional | Networking at conferences | Dog dad 🐕"</li>
                  <li>"College student looking to make friends and study buddies 📚"</li>
                </ul>
              </li>
            </ul>

            <h3>Interests and Tags</h3>
            <p>
              Select interests to help match with like-minded people:
            </p>
            <ul>
              <li>Choose 3-10 interests from categories like music, sports, food, tech, art, etc.</li>
              <li>These appear on your profile and help in search/filtering</li>
              <li>You can update these anytime</li>
            </ul>

            <h3>What You're Looking For</h3>
            <p>
              Set your intent to manage expectations:
            </p>
            <ul>
              <li><strong>Making Friends:</strong> Platonic connections only</li>
              <li><strong>Dating:</strong> Romantic connections</li>
              <li><strong>Networking:</strong> Professional connections</li>
              <li><strong>Hanging Out:</strong> Casual social interactions</li>
              <li><strong>All of the Above:</strong> Open to various types of connections</li>
            </ul>

            <p className="tip-box">
              <strong>💡 Pro Tip:</strong> Being specific about what you're looking for leads to better, more meaningful connections.
            </p>
          </section>

          <section className="article-section">
            <h2>
              <Settings className="section-icon" />
              Step 4: Grant Necessary Permissions
            </h2>
            <p>
              Radius needs a few permissions to function properly. Here's what each one does and why it's important:
            </p>

            <div className="info-card">
              <h3>Bluetooth Permission (Required)</h3>
              <p>
                <strong>Why it's needed:</strong> This is how Radius detects nearby users. Unlike GPS, Bluetooth provides proximity detection without tracking your exact location.
              </p>
              <ul>
                <li><strong>iOS:</strong> Tap "Allow" when prompted</li>
                <li><strong>Android:</strong> Tap "Allow" for Bluetooth and "Allow nearby devices"</li>
              </ul>
              <p><em>Without Bluetooth, you won't be able to discover people nearby.</em></p>
            </div>

            <div className="info-card">
              <h3>Notifications Permission (Recommended)</h3>
              <p>
                <strong>Why it's needed:</strong> Get notified when someone connects with you, sends a message, or when you're near active groups.
              </p>
              <ul>
                <li>Tap "Allow" when prompted</li>
                <li>You can customize notification types in Settings later</li>
              </ul>
              <p><em>You can use Radius without notifications, but you'll miss real-time alerts.</em></p>
            </div>

            <div className="info-card">
              <h3>Background App Refresh (Optional)</h3>
              <p>
                <strong>Why it's useful:</strong> Allows Radius to detect nearby users even when the app isn't actively open.
              </p>
              <ul>
                <li>Go to your phone's Settings {'>'}  Radius {'>'} Background App Refresh</li>
                <li>Enable for best experience</li>
              </ul>
            </div>

            <div className="alert-box">
              <AlertCircle className="alert-icon" />
              <div>
                <h4>What Radius DOESN'T Need</h4>
                <ul>
                  <li><strong>Location Services:</strong> We use Bluetooth, not GPS</li>
                  <li><strong>Contacts Access:</strong> We don't scan your contacts</li>
                  <li><strong>Photo Library Access:</strong> Only needed when you choose to upload a photo</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="article-section">
            <h2>
              <Rocket className="section-icon" />
              Step 5: Start Discovering People Nearby
            </h2>

            <h3>Enable Discovery Mode</h3>
            <ol className="numbered-list">
              <li>On the home screen, tap the <strong>Discovery toggle</strong> at the top</li>
              <li>The toggle will turn purple, indicating you're now discoverable</li>
              <li>Your device starts broadcasting and scanning for nearby Radius users</li>
              <li>You'll see a "Discovering..." indicator with a subtle animation</li>
            </ol>

            <h3>Understanding the Home Screen</h3>
            <p>
              Once discovery is enabled, the home screen shows:
            </p>
            <ul>
              <li><strong>Nearby Users:</strong> People currently in proximity
                <ul>
                  <li>Shown as cards with profile photo, username, and distance indicator</li>
                  <li>Tap a card to view their full profile</li>
                </ul>
              </li>
              <li><strong>Distance Indicators:</strong>
                <ul>
                  <li><strong>🟢 Immediate:</strong> Very close (same room/area)</li>
                  <li><strong>🟡 Near:</strong> Close proximity (same building)</li>
                  <li><strong>🔴 Moderate:</strong> Within detection range but not immediately close</li>
                </ul>
              </li>
              <li><strong>Active Groups:</strong> Location-based groups you can join</li>
              <li><strong>Connection Requests:</strong> People who want to connect with you</li>
            </ul>

            <h3>Making Your First Connection</h3>
            <ol className="numbered-list">
              <li>Browse nearby users on the Discover tab</li>
              <li>Tap on someone's profile that interests you</li>
              <li>Read their bio and check shared interests</li>
              <li>Tap <strong>Connect</strong> to send a connection request</li>
              <li>Optionally add a brief message: "Hey! I saw you're into [interest]. Want to grab coffee?"</li>
              <li>Wait for them to accept</li>
              <li>Once accepted, you can start chatting!</li>
            </ol>

            <p className="tip-box">
              <strong>💡 Pro Tip:</strong> Connection requests with personalized messages get accepted 3x more often than blank requests.
            </p>
          </section>

          <section className="article-section">
            <h2>
              <MessageCircle className="section-icon" />
              Step 6: Start Conversations
            </h2>
            
            <h3>Messaging Basics</h3>
            <p>
              Once you've connected with someone, messaging is simple:
            </p>
            <ul className="check-list">
              <li><Check className="check-icon" /> <strong>Text messages:</strong> Standard chat functionality</li>
              <li><Check className="check-icon" /> <strong>Voice messages:</strong> Hold the microphone button to record</li>
              <li><Check className="check-icon" /> <strong>Photos and videos:</strong> Share media from your gallery or camera</li>
              <li><Check className="check-icon" /> <strong>Stickers and GIFs:</strong> Express yourself with fun reactions</li>
              <li><Check className="check-icon" /> <strong>Location sharing:</strong> Share a meetup spot (optional, temporary)</li>
            </ul>

            <h3>Conversation Starters</h3>
            <p>
              Not sure what to say? Try these openers:
            </p>
            <ul>
              <li>"Hey! What brings you to [location] today?"</li>
              <li>"I noticed we're both into [shared interest]. Have you tried [related activity]?"</li>
              <li>"Are you here for [event]? How are you liking it so far?"</li>
              <li>"Cool to find someone else using Radius! First time here?"</li>
            </ul>

            <h3>Moving from Chat to In-Person</h3>
            <p>
              The beauty of Radius is immediate meetups:
            </p>
            <ul>
              <li>"Want to grab a coffee? I'm at [specific location]"</li>
              <li>"I'm checking out [nearby attraction] in a bit, want to join?"</li>
              <li>"Meeting some friends at [place] later. You're welcome to come!"</li>
            </ul>
          </section>

          <section className="article-section">
            <h2>
              <Users className="section-icon" />
              Step 7: Join and Create Groups
            </h2>
            
            <h3>Finding Groups</h3>
            <ol className="numbered-list">
              <li>Tap the <strong>Groups</strong> tab at the bottom navigation</li>
              <li>Browse nearby groups sorted by proximity and activity</li>
              <li>Filter by category: Events, Venues, Interests, Social</li>
              <li>Tap a group to see details and member count</li>
              <li>Tap <strong>Join Group</strong> to instantly become a member</li>
            </ol>

            <h3>Participating in Groups</h3>
            <ul>
              <li>Introduce yourself when you join</li>
              <li>Participate in discussions</li>
              <li>Coordinate meetups with other members</li>
              <li>Send connection requests to individuals you click with</li>
            </ul>

            <p>
              <em>(For a deep dive into groups, check out our guide: <Link to="/blog/nearby-groups">How to Use Radius Nearby Groups for Events</Link>)</em>
            </p>
          </section>

          <section className="article-section">
            <h2>
              <Shield className="section-icon" />
              Step 8: Privacy and Safety Settings
            </h2>
            
            <h3>Control Your Visibility</h3>
            <p>
              Navigate to <strong>Settings {'>'} Privacy</strong> to customize:
            </p>
            <ul>
              <li><strong>Discovery Mode:</strong> Toggle on/off anytime to control when you're discoverable</li>
              <li><strong>Profile Visibility:</strong> Choose who can see your full profile (Everyone, Connections Only, or Private)</li>
              <li><strong>Distance Sharing:</strong> Show exact distance indicators or just "Nearby"</li>
              <li><strong>Interest Visibility:</strong> Show or hide your interests from other users</li>
            </ul>

            <h3>Blocking and Reporting</h3>
            <p>
              If someone makes you uncomfortable:
            </p>
            <ul>
              <li>Tap their profile {'>'} <strong>Block User</strong> (they won't be able to see or contact you)</li>
              <li>Tap <strong>Report User</strong> if they've violated community guidelines</li>
              <li>Our team reviews reports within 24 hours</li>
            </ul>

            <h3>Safety Best Practices</h3>
            <ul className="check-list">
              <li><Check className="check-icon" /> <strong>Meet in public places</strong> for first meetings</li>
              <li><Check className="check-icon" /> <strong>Tell a friend</strong> where you're going and who you're meeting</li>
              <li><Check className="check-icon" /> <strong>Trust your instincts</strong>—if something feels off, it probably is</li>
              <li><Check className="check-icon" /> <strong>Don't share personal information</strong> too quickly (full name, address, workplace)</li>
              <li><Check className="check-icon" /> <strong>Video call first</strong> if you're unsure about meeting in person</li>
            </ul>
          </section>

          <section className="article-section">
            <h2>Understanding Battery and Data Usage</h2>
            
            <h3>Battery Optimization</h3>
            <p>
              Radius uses Bluetooth Low Energy (BLE), which is designed for minimal battery impact:
            </p>
            <ul>
              <li><strong>Average usage:</strong> 3-5% battery per hour of active discovery</li>
              <li><strong>Background mode:</strong> Less than 1% per hour</li>
              <li><strong>Optimization tips:</strong>
                <ul>
                  <li>Toggle discovery off when you're not actively looking to connect</li>
                  <li>Close the app completely when not in use</li>
                  <li>Enable Battery Saver mode in Settings for lighter usage</li>
                </ul>
              </li>
            </ul>

            <h3>Data Usage</h3>
            <p>
              Radius is extremely data-efficient:
            </p>
            <ul>
              <li><strong>Typical usage:</strong> 10-30 MB per hour (mostly for images and media)</li>
              <li><strong>Offline capability:</strong> Bluetooth detection works without internet; messaging requires internet</li>
              <li><strong>Save data:</strong> Disable auto-download of media in Settings {'>'} Data & Storage</li>
            </ul>
          </section>

          <section className="article-section">
            <h2>Pro Tips for New Users</h2>

            <div className="tip-card">
              <h3>1. Use Radius at the Right Times and Places</h3>
              <p>
                Radius works best in social environments where people are open to connections:
              </p>
              <ul>
                <li>Coffee shops, cafés, and coworking spaces</li>
                <li>Events, concerts, and festivals</li>
                <li>University campuses and libraries</li>
                <li>Gyms and fitness classes</li>
                <li>Airports and travel hubs</li>
                <li>Conferences and professional events</li>
              </ul>
            </div>

            <div className="tip-card">
              <h3>2. Complete Your Profile</h3>
              <p>
                Users with complete profiles get 5x more connection requests. Add:
              </p>
              <ul>
                <li>A clear profile photo</li>
                <li>An authentic bio</li>
                <li>At least 5 interests</li>
                <li>What you're looking for</li>
              </ul>
            </div>

            <div className="tip-card">
              <h3>3. Be Proactive</h3>
              <p>
                Don't wait for others to reach out—send the first connection request! Most people are happy to connect if you show genuine interest.
              </p>
            </div>

            <div className="tip-card">
              <h3>4. Engage in Groups</h3>
              <p>
                Groups are the fastest way to integrate into a community. Join 2-3 relevant groups and participate actively.
              </p>
            </div>

            <div className="tip-card">
              <h3>5. Respect Others' Privacy and Boundaries</h3>
              <p>
                If someone doesn't respond or declines a connection, respect their choice and move on. Radius is built on mutual consent and respect.
              </p>
            </div>
          </section>

          <section className="article-section">
            <h2>Troubleshooting Common Issues</h2>

            <h3>Not Seeing Anyone Nearby?</h3>
            <ul>
              <li>Make sure Bluetooth is enabled on your device</li>
              <li>Check that Discovery Mode is toggled on</li>
              <li>Try moving to a more populated area</li>
              <li>Ensure you have the latest app version</li>
            </ul>

            <h3>App Not Detecting Bluetooth?</h3>
            <ul>
              <li><strong>iOS:</strong> Go to Settings {'>'} Radius {'>'} ensure Bluetooth permission is granted</li>
              <li><strong>Android:</strong> Go to Settings {'>'} Apps {'>'} Radius {'>'} Permissions {'>'} enable Bluetooth and Nearby Devices</li>
              <li>Restart your phone and try again</li>
            </ul>

            <h3>Messages Not Sending?</h3>
            <ul>
              <li>Check your internet connection (Wi-Fi or mobile data)</li>
              <li>Make sure you're still connected with that user</li>
              <li>Try force-closing and reopening the app</li>
            </ul>

            <h3>High Battery Drain?</h3>
            <ul>
              <li>Toggle Discovery Mode off when not actively using the app</li>
              <li>Enable Battery Saver mode in Settings</li>
              <li>Close background apps that might interfere with Bluetooth</li>
            </ul>

            <p>
              <strong>Still having issues?</strong> Contact our support team at <a href="mailto:support@radiusapp.tech">support@radiusapp.tech</a>
            </p>
          </section>

          <section className="article-section cta-section">
            <h2>You're Ready to Connect!</h2>
            <p className="cta-text">
              You now have everything you need to start making meaningful connections with Radius. Download the app, set up your profile, and discover people nearby who share your interests.
            </p>
            <div className="cta-buttons">
              <a href="https://apps.apple.com/app/radius" className="btn-primary" target="_blank" rel="noopener noreferrer">
                Download for iOS
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.radius.app" className="btn-secondary" target="_blank" rel="noopener noreferrer">
                Download for Android
              </a>
            </div>
            <p className="cta-subtext">
              Have questions? Join our <a href="/contact">community support</a> or check out more guides on our <Link to="/blog">blog</Link>.
            </p>
          </section>

          <section className="article-section">
            <div className="article-footer">
              <p><strong>Tags:</strong> Getting Started, Tutorial, Guide, How-To, Beginner, Setup</p>
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

export default BlogPostGettingStarted;
