import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, GraduationCap, Home, Coffee, Briefcase, Users, Shield, Check, ArrowLeft, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

const BlogPostLocationGroups = () => {
  useEffect(() => {
    document.title = 'How to Use Radius Location-Based Groups | Radius App Blog';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Master Location-Based Groups on Radius. Learn how to join and create persistent community groups for your campus, building, neighborhood, workplace, and favorite venues.');
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Use Radius Location-Based Groups",
      "description": "Complete guide to joining and creating location-specific community groups on Radius",
      "image": "https://radiusapp.tech/blog-location-groups-cover.png",
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
          "name": "Discover Local Groups",
          "text": "Browse location-based groups in your area"
        },
        {
          "@type": "HowToStep",
          "name": "Join Communities",
          "text": "Join groups for your building, campus, or neighborhood"
        },
        {
          "@type": "HowToStep",
          "name": "Participate Actively",
          "text": "Engage with community members and organize meetups"
        },
        {
          "@type": "HowToStep",
          "name": "Create Your Own Group",
          "text": "Start a new location-based community for your venue"
        }
      ],
      "keywords": "location groups, community building, campus groups, neighborhood app, building community, local connections, Radius groups",
      "articleSection": "Community",
      "wordCount": 2800
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
            <span className="blog-category">Community</span>
            <span className="meta-dot">•</span>
            <span>February 11, 2026</span>
            <span className="meta-dot">•</span>
            <span>9 min read</span>
          </div>
          <h1 className="blog-post-title">How to Use Radius Location-Based Groups</h1>
          <p className="blog-post-subtitle">
            Build and join persistent communities in your building, campus, neighborhood, and favorite places
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
              You walk past the same people in your apartment building every day. You see familiar faces at your favorite coffee shop. You recognize students in your dorm, but you've never had a reason to start a conversation. <strong>Location-Based Groups transform these shared spaces into living communities.</strong>
            </p>
            <p>
              Unlike temporary event groups or random chats, Location-Based Groups are persistent communities tied to physical places—your campus, building, workplace, gym, or favorite hangout spot. They're digital hubs where neighbors, colleagues, and regulars connect, coordinate, and build lasting relationships.
            </p>
          </section>

          <section className="article-section">
            <h2>
              <MapPin className="section-icon" />
              What Are Location-Based Groups?
            </h2>
            <p>
              Location-Based Groups are permanent or long-term chat communities anchored to specific physical locations. They persist as long as people remain active in them, creating an ongoing space for:
            </p>
            <ul className="check-list">
              <li><Check className="check-icon" /> <strong>Organizing meetups and events</strong> in your shared space</li>
              <li><Check className="check-icon" /> <strong>Sharing local information</strong> and recommendations</li>
              <li><Check className="check-icon" /> <strong>Coordinating resources</strong> (rides, furniture, tools, etc.)</li>
              <li><Check className="check-icon" /> <strong>Building community bonds</strong> with people who occupy the same spaces</li>
              <li><Check className="check-icon" /> <strong>Getting help from neighbors</strong> when you need it</li>
            </ul>

            <div className="highlight-box">
              <h3><Sparkles size={24} /> The Power of Place-Based Community</h3>
              <p>
                Research shows that people with strong local connections are happier, healthier, and more resilient. Location-Based Groups bring back the "neighborhood" feeling that modern life has eroded.
              </p>
              <p>
                Instead of scrolling through social media to see what friends across the country are doing, you're connecting with people you can actually meet for coffee in five minutes.
              </p>
            </div>
          </section>

          <section className="article-section">
            <h2>
              <Building2 className="section-icon" />
              Types of Location-Based Groups
            </h2>

            <h3>1. Residential Communities</h3>
            
            <div className="info-card">
              <h4><Building2 size={20} /> Apartment & Condo Buildings</h4>
              <p>
                Groups for residents of specific buildings or complexes:
              </p>
              <ul>
                <li><strong>Use cases:</strong> Package notifications, maintenance updates, organizing social events, borrowing items, carpooling</li>
                <li><strong>Example:</strong> "Sunset Towers Residents" with 150 members sharing building news and coordinating movie nights</li>
              </ul>
            </div>

            <div className="info-card">
              <h4><Home size={20} /> Neighborhood Groups</h4>
              <p>
                Communities for specific neighborhoods or subdivisions:
              </p>
              <ul>
                <li><strong>Use cases:</strong> Safety alerts, garage sales, local recommendations, lost pets, community events</li>
                <li><strong>Example:</strong> "Downtown Historic District" connecting 500 neighbors for block parties and neighborhood watch</li>
              </ul>
            </div>

            <div className="info-card">
              <h4><Users size={20} /> Dorm & Student Housing</h4>
              <p>
                Groups for specific residence halls or student apartments:
              </p>
              <ul>
                <li><strong>Use cases:</strong> Study groups, parties, meal coordination, sports events, ride sharing</li>
                <li><strong>Example:</strong> "Wilson Hall Floor 3" with 40 students organizing late-night study sessions</li>
              </ul>
            </div>

            <h3>2. Academic Communities</h3>

            <div className="info-card">
              <h4><GraduationCap size={20} /> Campus-Wide Groups</h4>
              <p>
                University or college-wide communities:
              </p>
              <ul>
                <li><strong>Use cases:</strong> Campus events, club recruitment, academic help, social coordination</li>
                <li><strong>Example:</strong> "Berkeley Campus" with 5,000+ students arranging pickup sports and study meetups</li>
              </ul>
            </div>

            <div className="info-card">
              <h4><GraduationCap size={20} /> Department & Major Groups</h4>
              <p>
                Groups for specific academic departments or majors:
              </p>
              <ul>
                <li><strong>Use cases:</strong> Study help, career advice, research collaboration, networking</li>
                <li><strong>Example:</strong> "Computer Science Majors - MIT" for project collaboration and internship tips</li>
              </ul>
            </div>

            <h3>3. Workplace Communities</h3>

            <div className="info-card">
              <h4><Briefcase size={20} /> Office Buildings</h4>
              <p>
                Groups for people working in the same building (multi-company):
              </p>
              <ul>
                <li><strong>Use cases:</strong> Lunch coordination, after-work drinks, networking, fitness classes</li>
                <li><strong>Example:</strong> "First National Tower" connecting employees from 20+ companies</li>
              </ul>
            </div>

            <div className="info-card">
              <h4><Briefcase size={20} /> Coworking Spaces</h4>
              <p>
                Communities for shared workspace members:
              </p>
              <ul>
                <li><strong>Use cases:</strong> Collaboration opportunities, skill sharing, social events, coffee runs</li>
                <li><strong>Example:</strong> "WeWork Downtown" for freelancers and remote workers to connect</li>
              </ul>
            </div>

            <h3>4. Venue-Based Communities</h3>

            <div className="info-card">
              <h4><Coffee size={20} /> Cafés & Coffee Shops</h4>
              <p>
                Groups for regulars at specific venues:
              </p>
              <ul>
                <li><strong>Use cases:</strong> Meeting other regulars, organizing group work sessions, special events</li>
                <li><strong>Example:</strong> "Blue Bottle on 5th" for remote workers who frequent the café</li>
              </ul>
            </div>

            <div className="info-card">
              <h4>🏋️ Gyms & Fitness Centers</h4>
              <p>
                Communities for gym members:
              </p>
              <ul>
                <li><strong>Use cases:</strong> Finding workout partners, forming running groups, fitness challenges</li>
                <li><strong>Example:</strong> "24 Hour Fitness Downtown" coordinating morning spin classes</li>
              </ul>
            </div>
          </section>

          <section className="article-section">
            <h2>
              <Users className="section-icon" />
              Finding and Joining Location-Based Groups
            </h2>

            <h3>Step 1: Browse Local Groups</h3>
            <ol className="numbered-list">
              <li>Open Radius and go to the <strong>Groups</strong> tab</li>
              <li>Tap <strong>Location Groups</strong> at the top</li>
              <li>Groups are sorted by proximity—closest ones appear first</li>
              <li>You'll see:
                <ul>
                  <li>Group name and type</li>
                  <li>Member count</li>
                  <li>Distance from your current location</li>
                  <li>Activity level (how many messages per day)</li>
                </ul>
              </li>
            </ol>

            <h3>Step 2: Verify Your Connection to the Location</h3>
            <p>
              To maintain quality, most location groups require verification:
            </p>
            <ul>
              <li><strong>Proximity verification:</strong> You must physically visit the location (Bluetooth detection)</li>
              <li><strong>Address verification:</strong> For residential groups, verify your address (optional, privacy-protected)</li>
              <li><strong>Email verification:</strong> Some groups (like campus or workplace) require an @edu or company email</li>
            </ul>

            <h3>Step 3: Request to Join</h3>
            <ol className="numbered-list">
              <li>Tap on the group you want to join</li>
              <li>Read the group description and rules</li>
              <li>Tap <strong>Request to Join</strong></li>
              <li>Complete any verification steps</li>
              <li>Add a brief intro message (e.g., "Hi! I live in 4B and just moved in")</li>
              <li>Wait for approval (most groups auto-approve after verification)</li>
            </ol>

            <p className="tip-box">
              <strong>💡 Pro Tip:</strong> Join your location group even if it seems quiet. Many dormant groups come alive when new members start participating!
            </p>

            <h3>Step 4: Introduce Yourself</h3>
            <p>
              Once you're in, make a great first impression:
            </p>
            <ul>
              <li>"Hey everyone! Just joined. I'm [name] in apartment [number]. Looking forward to meeting you all!"</li>
              <li>"Hi! New grad student in the CS department. Anyone want to grab coffee this week?"</li>
              <li>"Hello neighbors! I'm in unit 312. Happy to be part of the community!"</li>
            </ul>
          </section>

          <section className="article-section">
            <h2>
              <Sparkles className="section-icon" />
              Creating Your Own Location-Based Group
            </h2>

            <p>
              Don't see a group for your location? Create one! Here's how to build a thriving community:
            </p>

            <h3>Step 1: Plan Your Group</h3>
            <p>
              Before creating, consider:
            </p>
            <ul>
              <li><strong>Scope:</strong> How broad or narrow? (Single building vs. entire neighborhood)</li>
              <li><strong>Purpose:</strong> Social, practical, or both?</li>
              <li><strong>Rules:</strong> What behavior is expected?</li>
              <li><strong>Moderation:</strong> Who will help manage?</li>
            </ul>

            <h3>Step 2: Create the Group</h3>
            <ol className="numbered-list">
              <li>Go to <strong>Groups {'>'} Location Groups</strong></li>
              <li>Tap <strong>Create Location Group</strong></li>
              <li>Fill in details:
                <ul>
                  <li><strong>Name:</strong> Clear and specific ("Oakwood Apartments" not "My Building")</li>
                  <li><strong>Type:</strong> Residential, Campus, Workplace, Venue</li>
                  <li><strong>Location:</strong> Set the physical area (building address, campus boundary, etc.)</li>
                  <li><strong>Description:</strong> What's the group for? Who should join?</li>
                  <li><strong>Verification method:</strong> Proximity, email, or both</li>
                  <li><strong>Privacy:</strong> Open (discoverable) or Private (invite-only)</li>
                </ul>
              </li>
              <li>Set group rules and guidelines</li>
              <li>Tap <strong>Create Group</strong></li>
            </ol>

            <h3>Step 3: Seed the Community</h3>
            <p>
              The first 10-20 members are crucial:
            </p>
            <ul className="check-list">
              <li><Check className="check-icon" /> <strong>Invite people you know:</strong> Friends, neighbors, colleagues</li>
              <li><Check className="check-icon" /> <strong>Post flyers:</strong> Physical notices in mailrooms, bulletin boards, elevators</li>
              <li><Check className="check-icon" /> <strong>Share the group code:</strong> Post on existing community channels (Facebook groups, Slack, etc.)</li>
              <li><Check className="check-icon" /> <strong>Talk to people in person:</strong> Mention it to people you encounter at the location</li>
              <li><Check className="check-icon" /> <strong>Be the first to post:</strong> Share useful content to set the tone</li>
            </ul>

            <h3>Step 4: Foster Engagement</h3>
            <p>
              Keep your community active:
            </p>
            <ul>
              <li><strong>Welcome new members:</strong> Greet each person who joins</li>
              <li><strong>Post regularly:</strong> Share interesting info, ask questions, organize events</li>
              <li><strong>Respond quickly:</strong> Be active in discussions to encourage participation</li>
              <li><strong>Organize meetups:</strong> Nothing builds community like face-to-face interactions</li>
              <li><strong>Celebrate milestones:</strong> Acknowledge when you hit 50, 100, 200 members</li>
            </ul>
          </section>

          <section className="article-section">
            <h2>
              <TrendingUp className="section-icon" />
              Building a Thriving Location Community
            </h2>

            <h3>Content That Works</h3>
            <p>
              Great location groups share:
            </p>

            <div className="tip-card">
              <h3>Practical Information</h3>
              <ul>
                <li>"Heads up: elevator maintenance tomorrow 9-12"</li>
                <li>"Best lunch spots within walking distance?"</li>
                <li>"Anyone know a good plumber? Leak in my apartment"</li>
                <li>"Package room is full—please grab your deliveries!"</li>
              </ul>
            </div>

            <div className="tip-card">
              <h3>Social Coordination</h3>
              <ul>
                <li>"Rooftop BBQ this Saturday at 6 PM—BYOB!"</li>
                <li>"Study group forming for Calc 101—meet at library Tuesday"</li>
                <li>"Running a coffee run to Starbucks, anyone want anything?"</li>
                <li>"Game night at my place Friday. Who's in?"</li>
              </ul>
            </div>

            <div className="tip-card">
              <h3>Community Support</h3>
              <ul>
                <li>"Anyone have jumper cables? Car won't start"</li>
                <li>"Lost cat—gray tabby, answers to Whiskers"</li>
                <li>"Giving away furniture before I move—first come first served"</li>
                <li>"Looking for a running partner for morning jogs"</li>
              </ul>
            </div>

            <div className="tip-card">
              <h3>Local Recommendations</h3>
              <ul>
                <li>"New thai place opened on Main St—highly recommend!"</li>
                <li>"FYI: Construction starting next week, expect noise"</li>
                <li>"Best time to hit the gym when it's not crowded?"</li>
                <li>"Favorite study spots on campus?"</li>
              </ul>
            </div>

            <h3>Events That Bring People Together</h3>
            <p>
              Use your location group to organize:
            </p>
            <ul>
              <li><strong>Regular meetups:</strong> Weekly coffee mornings, happy hours</li>
              <li><strong>Seasonal events:</strong> Holiday parties, summer BBQs</li>
              <li><strong>Activity groups:</strong> Running clubs, book clubs, game nights</li>
              <li><strong>Skill shares:</strong> Cooking classes, language exchanges, fitness sessions</li>
              <li><strong>Service projects:</strong> Community cleanups, charity drives</li>
            </ul>
          </section>

          <section className="article-section">
            <h2>
              <Heart className="section-icon" />
              Real Location Group Success Stories
            </h2>

            <div className="story-card">
              <h3>From Neighbors to Friends</h3>
              <p>
                <em>"I'd lived in my apartment building for 2 years and knew maybe 3 people. Someone created a Radius location group and within a month, we had 80 of the 120 units joined. We started weekly trivia nights, organized a holiday party, and now I have actual friends in my building. It's transformed where I live from just a place to sleep into a real community."</em>
              </p>
              <p className="story-attribution">— Rachel, Apartment Resident</p>
            </div>

            <div className="story-card">
              <h3>Campus Made Smaller</h3>
              <p>
                <em>"Our university has 40,000 students. It's impossible to meet people. I joined the location group for my dorm and suddenly campus felt manageable. Through that group, I found my study group, my best friends, and even my roommate for next year. It took a huge, intimidating school and made it feel like a tight-knit community."</em>
              </p>
              <p className="story-attribution">— Michael, College Freshman</p>
            </div>

            <div className="story-card">
              <h3>Coworking Community</h3>
              <p>
                <em>"As a freelancer in a coworking space, I felt isolated even though I was surrounded by people. The coworking location group changed that. We organized lunch groups, skill-sharing sessions, and Friday happy hours. I've found collaborators, hired designers and developers, and made genuine friends. It turned a shared office into a real professional network."</em>
              </p>
              <p className="story-attribution">— David, Freelance Consultant</p>
            </div>

            <div className="story-card">
              <h3>Neighborhood Safety Network</h3>
              <p>
                <em>"Our neighborhood group started as a way to organize block parties. But when we had a series of break-ins, it became our safety network. We coordinated neighborhood watch, shared security camera footage, and looked out for each other. Crime dropped significantly. Now we're the safest neighborhood in the area, all because we're connected and communicating."</em>
              </p>
              <p className="story-attribution">— Jennifer, Neighborhood Organizer</p>
            </div>
          </section>

          <section className="article-section">
            <h2>
              <Shield className="section-icon" />
              Moderation and Safety
            </h2>

            <h3>Keeping Your Community Healthy</h3>
            <p>
              As a group admin or active member:
            </p>
            <ul className="check-list">
              <li><Check className="check-icon" /> <strong>Enforce rules consistently:</strong> Address violations quickly and fairly</li>
              <li><Check className="check-icon" /> <strong>Welcome newcomers:</strong> Make people feel included from day one</li>
              <li><Check className="check-icon" /> <strong>Encourage positivity:</strong> Set a friendly, helpful tone</li>
              <li><Check className="check-icon" /> <strong>Prevent spam:</strong> No advertising or self-promotion</li>
              <li><Check className="check-icon" /> <strong>Respect privacy:</strong> Don't share personal info without consent</li>
              <li><Check className="check-icon" /> <strong>Stay on topic:</strong> Keep discussions relevant to the location</li>
            </ul>

            <h3>Dealing with Problems</h3>
            <ul>
              <li><strong>Drama or conflicts:</strong> Address privately when possible, remind people of rules publicly</li>
              <li><strong>Spam or scams:</strong> Remove immediately and ban user</li>
              <li><strong>Harassment:</strong> Zero tolerance—ban and report to Radius</li>
              <li><strong>Inactive groups:</strong> Try to revive with an event or pass admin to someone more active</li>
            </ul>
          </section>

          <section className="article-section">
            <h2>Advanced Tips for Location Groups</h2>

            <h3>1. Use Subgroups for Large Communities</h3>
            <p>
              If your location group grows beyond 200-300 people, create subgroups:
            </p>
            <ul>
              <li>By floor or wing (buildings)</li>
              <li>By interest (sports, gaming, food)</li>
              <li>By activity type (social vs. practical)</li>
            </ul>

            <h3>2. Integrate with Other Platforms (Carefully)</h3>
            <p>
              Some communities bridge Radius with:
            </p>
            <ul>
              <li>Shared Google calendars for events</li>
              <li>Discord servers for deeper organization</li>
              <li>Email lists for important announcements</li>
            </ul>
            <p>But keep core communication on Radius to maintain proximity verification.</p>

            <h3>3. Seasonal Reboots</h3>
            <p>
              For campus or seasonal locations, do a "reboot" each semester:
            </p>
            <ul>
              <li>Welcome message for new members</li>
              <li>Kickoff event</li>
              <li>Reminder of group purpose and rules</li>
            </ul>

            <h3>4. Leverage Radius Features</h3>
            <ul>
              <li>Use polls to decide event details</li>
              <li>Pin important messages (maintenance notices, upcoming events)</li>
              <li>Create announcement-only channels for time-sensitive info</li>
              <li>Use group voice/video calls for virtual meetups</li>
            </ul>
          </section>

          <section className="article-section cta-section">
            <h2>Build Your Local Community Today</h2>
            <p className="cta-text">
              Ready to transform your apartment building, campus, workplace, or neighborhood into a connected community? Download Radius and start or join a Location-Based Group.
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
              <p><strong>Tags:</strong> Location Groups, Community Building, Neighborhood App, Campus Life, Local Connections, Guide</p>
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

export default BlogPostLocationGroups;
