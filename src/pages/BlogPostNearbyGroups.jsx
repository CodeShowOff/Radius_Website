import { motion } from 'framer-motion';
import { MapPin, Users, Calendar, MessageCircle, Bell, Star, Check, ArrowLeft, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCanonical, usePageMeta, useStructuredData } from '../hooks/useCanonical';
import './PageStyles.css';

const BlogPostNearbyGroups = () => {
  useCanonical('/blog/nearby-groups');
  usePageMeta({
    title: 'How to Use Radius Nearby Groups for Events | Radius App Blog',
    description: 'Master Radius Nearby Groups to connect with people at events, festivals, conferences, and local gatherings. Learn how to create, join, and manage location-based groups for authentic connections.',
    keywords: 'radius nearby groups, event groups, local groups, proximity groups, create radius groups'
  });
  
  useStructuredData({
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use Radius Nearby Groups for Events",
    "description": "Step-by-step guide to using Radius Nearby Groups feature for events, meetups, and local gatherings",
    "image": "https://radiusapp.tech/blog-nearby-groups-cover.png",
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
        "name": "Enable Discovery Mode",
        "text": "Open Radius and enable discovery mode to start detecting nearby users"
      },
      {
        "@type": "HowToStep",
        "name": "Browse Nearby Groups",
        "text": "Navigate to the Groups tab to see location-based groups in your vicinity"
      },
      {
        "@type": "HowToStep",
        "name": "Join or Create a Group",
        "text": "Join existing groups or create your own event-specific group"
      },
      {
        "@type": "HowToStep",
        "name": "Connect with Members",
        "text": "Chat with group members and coordinate meetups"
      }
    ],
    "keywords": "Radius groups, nearby groups, event networking, location-based groups, meetup app, social events",
    "articleSection": "Guides",
    "wordCount": 2600
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
            <span className="blog-category">Guides</span>
            <span className="meta-dot">•</span>
            <span>February 11, 2026</span>
            <span className="meta-dot">•</span>
            <span>7 min read</span>
          </div>
          <h1 className="blog-post-title">How to Use Radius Nearby Groups for Events</h1>
          <p className="blog-post-subtitle">
            Master the art of connecting with people at concerts, conferences, and local gatherings
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
              You've arrived at a bustling music festival with thousands of people, a professional conference in an unfamiliar city, or a community meetup where you don't know anyone. <strong>How do you turn a sea of strangers into potential friends and connections?</strong>
            </p>
            <p>
              Radius Nearby Groups is designed specifically for this scenario. This powerful feature transforms any event or location into a social hub where you can discover, connect, and coordinate with people who are physically present. Here's everything you need to know.
            </p>
          </section>

          <section className="article-section">
            <h2>
              <MapPin className="section-icon" />
              What Are Nearby Groups?
            </h2>
            <p>
              Nearby Groups are location-based chat rooms that appear when multiple Radius users are in proximity to each other. Think of them as digital campfires where people gather, chat, and coordinate meetups.
            </p>

            <h3>Types of Nearby Groups</h3>
            <div className="info-card">
              <h4><Calendar className="section-icon" /> Event Groups</h4>
              <p>
                Temporary groups tied to specific events like concerts, festivals, conferences, or sports games. These groups are active during the event and for a short period afterward, allowing attendees to connect and share experiences.
              </p>
            </div>

            <div className="info-card">
              <h4><MapPin className="section-icon" /> Venue Groups</h4>
              <p>
                Persistent groups for specific locations like universities, coworking spaces, apartment complexes, or neighborhoods. These groups remain active as long as people are present.
              </p>
            </div>

            <div className="info-card">
              <h4><Users className="section-icon" /> Interest Groups</h4>
              <p>
                Groups organized around specific activities or interests happening at a location—like a hiking group meeting at a trailhead, a study group at a library, or a networking group at a café.
              </p>
            </div>
          </section>

          <section className="article-section">
            <h2>
              <Lightbulb className="section-icon" />
              Getting Started: Your First Nearby Group
            </h2>
            <p>
              Let's walk through using Nearby Groups for a practical scenario: attending a music festival.
            </p>

            <h3>Step 1: Enable Discovery Mode</h3>
            <ol className="numbered-list">
              <li>Open the Radius app on your phone</li>
              <li>Tap the <strong>Discovery</strong> toggle at the top of the screen</li>
              <li>Ensure Bluetooth is enabled (you'll be prompted if it's not)</li>
              <li>Your device will begin broadcasting and scanning for nearby Radius users</li>
            </ol>
            <p className="tip-box">
              <strong>💡 Pro Tip:</strong> Enable discovery mode before arriving at the event to start seeing groups as soon as you're in range.
            </p>

            <h3>Step 2: Browse Nearby Groups</h3>
            <ol className="numbered-list">
              <li>Tap the <strong>Groups</strong> tab at the bottom navigation</li>
              <li>You'll see a list of nearby groups, sorted by proximity and member count</li>
              <li>Each group displays:
                <ul>
                  <li><strong>Group name</strong> (e.g., "Summer Music Fest 2026")</li>
                  <li><strong>Member count</strong> (how many people are currently in the group)</li>
                  <li><strong>Distance indicator</strong> (Immediate, Near, or Moderate)</li>
                  <li><strong>Group description</strong> and tags</li>
                </ul>
              </li>
            </ol>

            <h3>Step 3: Join a Group</h3>
            <ol className="numbered-list">
              <li>Tap on a group that interests you</li>
              <li>Read the group description and rules (set by the group creator)</li>
              <li>Tap <strong>Join Group</strong></li>
              <li>You're instantly added to the group chat</li>
            </ol>
            <p>
              No approval needed—if you're physically nearby and the group is open, you're in!
            </p>

            <h3>Step 4: Participate in the Group</h3>
            <p>
              Once you've joined, you can:
            </p>
            <ul className="check-list">
              <li><Check className="check-icon" /> Send messages to all group members</li>
              <li><Check className="check-icon" /> Share photos, videos, and voice messages</li>
              <li><Check className="check-icon" /> Coordinate meetup locations within the venue</li>
              <li><Check className="check-icon" /> React to messages with emojis</li>
              <li><Check className="check-icon" /> View member profiles (with their permission)</li>
              <li><Check className="check-icon" /> Send direct connection requests to individual members</li>
            </ul>
          </section>

          <section className="article-section">
            <h2>
              <Star className="section-icon" />
              Creating Your Own Nearby Group
            </h2>
            <p>
              Don't see a group that fits your needs? Create one! Here's how:
            </p>

            <h3>When to Create a Group</h3>
            <ul>
              <li>You're organizing a meetup at a specific location</li>
              <li>You want to connect with fellow attendees at an event</li>
              <li>You're at a venue regularly and want to build a community</li>
              <li>You have a specific interest or activity in mind</li>
            </ul>

            <h3>Creating a Group (Step-by-Step)</h3>
            <ol className="numbered-list">
              <li>Go to the <strong>Groups</strong> tab</li>
              <li>Tap the <strong>+ Create Group</strong> button</li>
              <li>Fill in the group details:
                <ul>
                  <li><strong>Group Name:</strong> Clear and descriptive (e.g., "TechConf 2026 Attendees")</li>
                  <li><strong>Description:</strong> What the group is about and who should join</li>
                  <li><strong>Category:</strong> Event, Venue, Interest, or Social</li>
                  <li><strong>Tags:</strong> Add relevant keywords for discoverability</li>
                  <li><strong>Group Type:</strong> Open (anyone nearby can join) or Request-to-Join</li>
                  <li><strong>Duration:</strong> Temporary (event-specific) or Ongoing</li>
                </ul>
              </li>
              <li>Set group rules (optional but recommended):
                <ul>
                  <li>Be respectful and inclusive</li>
                  <li>Stay on topic</li>
                  <li>No spam or self-promotion</li>
                </ul>
              </li>
              <li>Tap <strong>Create Group</strong></li>
            </ol>

            <p className="tip-box">
              <strong>💡 Pro Tip:</strong> Create your group 30-60 minutes before an event starts. Early arrivals will find it and help build momentum.
            </p>

            <h3>Managing Your Group</h3>
            <p>
              As the group creator, you have additional controls:
            </p>
            <ul>
              <li><strong>Moderate messages:</strong> Delete inappropriate content</li>
              <li><strong>Remove members:</strong> Kick users who violate rules</li>
              <li><strong>Pin important messages:</strong> Highlight meetup locations or announcements</li>
              <li><strong>Transfer ownership:</strong> Hand off group management to someone else</li>
              <li><strong>Close the group:</strong> End the group when the event is over</li>
            </ul>
          </section>

          <section className="article-section">
            <h2>
              <Users className="section-icon" />
              Best Practices for Event Groups
            </h2>

            <h3>Before the Event</h3>
            <ul className="check-list">
              <li><Check className="check-icon" /> <strong>Create the group early:</strong> Give people time to discover and join</li>
              <li><Check className="check-icon" /> <strong>Share the group name:</strong> Post it on social media or event pages</li>
              <li><Check className="check-icon" /> <strong>Set clear expectations:</strong> Describe what the group is for</li>
              <li><Check className="check-icon" /> <strong>Establish meeting points:</strong> Suggest where group members might gather</li>
            </ul>

            <h3>During the Event</h3>
            <ul className="check-list">
              <li><Check className="check-icon" /> <strong>Introduce yourself:</strong> Share a bit about why you're there</li>
              <li><Check className="check-icon" /> <strong>Be active:</strong> Respond to messages and keep conversations flowing</li>
              <li><Check className="check-icon" /> <strong>Coordinate in real-time:</strong> "I'm at the food trucks," "Meeting at the main stage in 10"</li>
              <li><Check className="check-icon" /> <strong>Share experiences:</strong> Post photos, videos, or quick thoughts</li>
              <li><Check className="check-icon" /> <strong>Extend invitations:</strong> "Anyone want to grab coffee after this?"</li>
            </ul>

            <h3>After the Event</h3>
            <ul className="check-list">
              <li><Check className="check-icon" /> <strong>Keep the conversation going:</strong> Share final thoughts and highlights</li>
              <li><Check className="check-icon" /> <strong>Exchange personal contacts:</strong> Connect with people you vibed with</li>
              <li><Check className="check-icon" /> <strong>Plan future meetups:</strong> "Same time next year?"</li>
              <li><Check className="check-icon" /> <strong>Leave the group:</strong> If it was a one-time event, gracefully exit</li>
            </ul>
          </section>

          <section className="article-section">
            <h2>
              <Bell className="section-icon" />
              Real-World Success Stories
            </h2>

            <div className="story-card">
              <h3>Conference Networking Made Easy</h3>
              <p>
                <em>"I attended a 3-day tech conference where I didn't know anyone. On day one, I joined the 'First-Time Attendees' Radius group. There were about 30 of us. We coordinated coffee meetups, shared which talks we were attending, and even organized a group dinner. By day three, I had made genuine connections with people I still talk to months later. No awkward 'networking,' just natural conversations with people who were literally right there with me."</em>
              </p>
              <p className="story-attribution">— Alex, Software Engineer</p>
            </div>

            <div className="story-card">
              <h3>Festival Squad Goals</h3>
              <p>
                <em>"My friends and I always get separated at festivals. This year, we created a private Radius group just for our squad. We could coordinate which stage to meet at without draining our phone batteries with constant texting. We also joined the main festival group and met some cool people who became part of our crew for the weekend."</em>
              </p>
              <p className="story-attribution">— Jamie, Festival Regular</p>
            </div>

            <div className="story-card">
              <h3>Campus Community Building</h3>
              <p>
                <em>"As a grad student, I created a Radius group for my department. Within a week, we had 50 members. People use it to coordinate study sessions at the library, find lunch buddies at the cafeteria, and organize social events. It's transformed our department from a collection of individuals into an actual community."</em>
              </p>
              <p className="story-attribution">— Priya, Graduate Student</p>
            </div>
          </section>

          <section className="article-section">
            <h2>
              <MessageCircle className="section-icon" />
              Advanced Tips and Tricks
            </h2>

            <h3>Use Multiple Groups Strategically</h3>
            <p>
              At large events, join both broad and specific groups:
            </p>
            <ul>
              <li><strong>Broad:</strong> "Music Fest 2026" (main event group)</li>
              <li><strong>Specific:</strong> "Electronic Stage Crew" (your particular interest)</li>
              <li><strong>Private:</strong> Your personal friend group</li>
            </ul>

            <h3>Leverage Group Discovery</h3>
            <p>
              The Groups tab shows you not just active groups, but their member counts. A group with 100+ members is likely the "main" group for an event. Smaller groups (5-20 people) are often more intimate and easier to engage with.
            </p>

            <h3>Set Up Notifications Wisely</h3>
            <p>
              Large groups can get noisy. Manage your sanity:
            </p>
            <ul>
              <li>Mute large groups except for mentions</li>
              <li>Turn on vibration alerts for your personal squad group</li>
              <li>Use "priority" settings for groups where you're organizing meetups</li>
            </ul>

            <h3>Transition from Group to Direct</h3>
            <p>
              Found someone interesting in a group? Don't just keep all interactions in the group chat:
            </p>
            <ol className="numbered-list">
              <li>Tap their name in the group</li>
              <li>View their profile</li>
              <li>Send a direct connection request</li>
              <li>Start a one-on-one conversation</li>
            </ol>

            <h3>Group Etiquette</h3>
            <ul>
              <li>Don't spam—keep messages relevant to the group's purpose</li>
              <li>Use reply threads for side conversations</li>
              <li>If planning a meetup, be specific about time and location</li>
              <li>Thank the group creator and active members</li>
              <li>Leave groups gracefully when you're no longer nearby or interested</li>
            </ul>
          </section>

          <section className="article-section">
            <h2>Privacy and Safety in Groups</h2>
            <p>
              Nearby Groups are designed with safety in mind:
            </p>

            <h3>What's Visible in Groups</h3>
            <ul>
              <li><strong>Visible:</strong> Your username, profile photo (if set), and general proximity</li>
              <li><strong>Not visible:</strong> Your exact location, GPS coordinates, or location history</li>
            </ul>

            <h3>Safety Features</h3>
            <ul className="check-list">
              <li><Check className="check-icon" /> Report and block users directly from group chats</li>
              <li><Check className="check-icon" /> Leave any group instantly without explanation</li>
              <li><Check className="check-icon" /> Group creators can remove disruptive members</li>
              <li><Check className="check-icon" /> All group messages are end-to-end encrypted</li>
              <li><Check className="check-icon" /> No message history is stored after you leave a group</li>
            </ul>

            <p className="tip-box">
              <strong>🔒 Safety Tip:</strong> Always meet in public, populated areas. While Nearby Groups are great for coordination, use common sense when meeting people in person.
            </p>
          </section>

          <section className="article-section cta-section">
            <h2>Start Connecting at Your Next Event</h2>
            <p className="cta-text">
              Whether you're attending a concert, conference, or community gathering, Radius Nearby Groups helps you turn strangers into friends. Download the app and discover the power of proximity-based community building.
            </p>
            <div className="cta-buttons">
              <a href="/download" className="btn-primary">
                Download Radius
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.codeshowoff.radius" className="btn-secondary" target="_blank" rel="noopener noreferrer">
                Download for Android
              </a>
            </div>
          </section>

          <section className="article-section">
            <div className="article-footer">
              <p><strong>Tags:</strong> Nearby Groups, Events, Social Networking, Community Building, Guide, How-To</p>
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

export default BlogPostNearbyGroups;
