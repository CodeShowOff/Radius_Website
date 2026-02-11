import { useEffect } from 'react'
import './PageStyles.css'

function NearbyGroupsPage() {
  useEffect(() => {
    document.title = 'Nearby Groups - Create Local Group Chats | Radius App'
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Create nearby groups with Radius App - the bluetooth social network for instant local group chats. Meet people nearby without location tracking. Best nearby connections app for events and communities.'
    )
  }, [])

  return (
    <div className="page-container" itemScope itemType="https://schema.org/WebPage">
      <div className="page-header">
        <h1 itemProp="headline">Nearby Groups - Instant Local Group Chats</h1>
        <p className="page-subtitle" itemProp="description">
          Create nearby groups with people around you using Radius App's bluetooth proximity social network.
        </p>
      </div>

      <main itemProp="mainContentOfPage">
        <section className="page-section">
          <h2>What are Nearby Groups?</h2>
          <p className="lead-text">
            <strong>Nearby Groups</strong> is a revolutionary feature of <strong>Radius App</strong> that uses 
            bluetooth technology to create instant group chats with people physically near you. It's the perfect 
            way to meet people nearby without location tracking while coordinating events, meetups, or spontaneous gatherings.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>📡 Bluetooth Proximity Detection</h3>
              <p>
                Our <strong>bluetooth social network</strong> automatically detects Radius users within range (up to 10 meters) 
                and adds them to your nearby group. No manual adding required!
              </p>
            </div>
            <div className="feature-card">
              <h3>🔒 Privacy First</h3>
              <p>
                As the best privacy focused social app, Radius never uses GPS. Nearby groups work through bluetooth proximity, 
                keeping your exact location private while enabling nearby connections.
              </p>
            </div>
            <div className="feature-card">
              <h3>⚡ Instant Setup</h3>
              <p>
                Create a nearby group in seconds. Give it a name, and our nearby connections app automatically 
                populates it with detected users. Perfect for events, parties, or casual meetups.
              </p>
            </div>
            <div className="feature-card">
              <h3>💬 Rich Communication</h3>
              <p>
                Chat with your nearby group using text, photos, voice messages, and stickers. Full-featured messaging 
                in our privacy social app makes coordination easy and fun.
              </p>
            </div>
          </div>
        </section>

        <section className="page-section">
          <h2>How to Create Nearby Groups</h2>
          <div className="how-it-works-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Open Radius App</h3>
              <p>Make sure Bluetooth is enabled on your device. Radius will start detecting nearby users automatically.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Tap "Create Nearby Group"</h3>
              <p>Navigate to the Groups tab and select "Create Nearby Group". Choose a name for your group.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Auto-Add Nearby Users</h3>
              <p>Radius automatically adds detected users within bluetooth range to your group. Watch it fill up!</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Start Chatting</h3>
              <p>Begin coordinating your event or just chatting with people nearby. It's that simple!</p>
            </div>
          </div>
        </section>

        <section className="page-section">
          <h2>Perfect Use Cases for Nearby Groups</h2>
          <div className="use-cases">
            <div className="use-case-card">
              <h3>🎉 Events & Parties</h3>
              <p>
                Host a party? Create a nearby group for all attendees. Coordinate activities, share photos, 
                and keep everyone connected through our <strong>social discovery app</strong>.
              </p>
            </div>
            <div className="use-case-card">
              <h3>📚 Study Groups</h3>
              <p>
                In the library or cafe? Create a nearby group to find study partners. Meet people nearby who 
                are working on similar subjects using our nearby connections app.
              </p>
            </div>
            <div className="use-case-card">
              <h3>🏃 Fitness & Sports</h3>
              <p>
                At the gym or park? Create nearby groups for workout buddies or pickup games. Our bluetooth social network 
                makes finding active partners easy.
              </p>
            </div>
            <div className="use-case-card">
              <h3>🍴 Dining & Social</h3>
              <p>
                At a restaurant or bar? Use nearby groups to connect with other diners or organize group tables. 
                Perfect for social discovery and making new friends.
              </p>
            </div>
            <div className="use-case-card">
              <h3>🎭 Concerts & Festivals</h3>
              <p>
                At a concert? Create nearby groups to find your friends in the crowd or meet other fans. Stay connected 
                without cell service using bluetooth.
              </p>
            </div>
            <div className="use-case-card">
              <h3>🏢 Conferences & Networking</h3>
              <p>
                Attending a conference? Use <strong>Radius App</strong> to create nearby groups for networking sessions, 
                workshops, or after-parties.
              </p>
            </div>
          </div>
        </section>

        <section className="page-section">
          <h2>Nearby Groups vs Location Groups</h2>
          <div className="comparison-table">
            <div className="comparison-row">
              <div className="comparison-feature">
                <strong>Nearby Groups</strong>
                <p>Bluetooth-based, automatic membership for users within 10 meters. Temporary, perfect for events.</p>
              </div>
              <div className="comparison-feature">
                <strong>Location Groups</strong>
                <p>GPS-based, manual join for specific places (cities, neighborhoods). Permanent global communities.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <h2>Why Nearby Groups Make Radius the Best Privacy Social App</h2>
          <div className="feature-list">
            <div className="feature-item">
              <strong>✓ No Location Tracking</strong> - Meet people nearby using bluetooth, not GPS
            </div>
            <div className="feature-item">
              <strong>✓ Automatic Discovery</strong> - Users are added automatically as they enter range
            </div>
            <div className="feature-item">
              <strong>✓ Anonymous Participation</strong> - Join nearby groups without sharing personal info
            </div>
            <div className="feature-item">
              <strong>✓ Works Offline</strong> - Bluetooth works without internet connectivity
            </div>
            <div className="feature-item">
              <strong>✓ Event-Perfect</strong> - Ideal for coordinating gatherings and meetups
            </div>
            <div className="feature-item">
              <strong>✓ 100% Free</strong> - All nearby group features are completely free
            </div>
          </div>
        </section>

        <section className="page-section cta-section">
          <h2>Start Creating Nearby Groups Today!</h2>
          <p>
            Download <strong>Radius App</strong> free and experience the easiest way to create local group chats. 
            Perfect for events, meetups, and spontaneous gatherings. The best <strong>nearby connections app</strong> 
            that respects your privacy!
          </p>
          <div className="cta-buttons">
            <a href="/download" className="cta-button primary">
              Download Radius App Free
            </a>
            <a href="/blog/nearby-groups" className="cta-button secondary">
              Read Nearby Groups Guide
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default NearbyGroupsPage
