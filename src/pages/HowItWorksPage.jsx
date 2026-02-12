import HowItWorks from '../components/HowItWorks'
import { useCanonical, usePageMeta } from '../hooks/useCanonical'
import '../components/HowItWorks.css'
import './PageStyles.css'

function HowItWorksPage() {
  useCanonical('/how-it-works')
  usePageMeta({
    title: 'How to Meet People Nearby Without Location Tracking | Radius App',
    description: 'Learn how to meet people nearby without location tracking using Radius App. Our bluetooth proximity social network lets you connect anonymously. Step-by-step guide to the best privacy focused social app.',
    keywords: 'how radius works, meet people nearby, bluetooth social network, location privacy, proximity chat'
  })

  return (
    <div className="page-container" itemScope itemType="https://schema.org/HowTo">
      <div className="page-header">
        <h1 itemProp="name">How to Meet People Nearby Without Location Tracking</h1>
        <p className="page-subtitle" itemProp="description">
          Discover how Radius App's bluetooth social network helps you connect with nearby people while protecting your privacy.
        </p>
      </div>

      <main itemProp="mainContentOfPage">
        <HowItWorks />

        <section className="page-section">
          <h2>How Radius App Works - Step by Step</h2>
          
          <div className="how-it-works-steps">
            <div className="step-card" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
              <div className="step-number">1</div>
              <h3 itemProp="name">Download Radius App Free</h3>
              <p itemProp="text">
                Download <strong>Radius App</strong> free on iOS or Android. Install the best privacy focused social app 
                that never tracks your GPS location. Available on App Store and Google Play.
              </p>
            </div>

            <div className="step-card" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
              <div className="step-number">2</div>
              <h3 itemProp="name">Enable Bluetooth</h3>
              <p itemProp="text">
                Turn on Bluetooth to use our bluetooth proximity social network. Radius uses Bluetooth Low Energy (BLE) 
                to detect other users nearby - no GPS required for this privacy social app.
              </p>
            </div>

            <div className="step-card" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
              <div className="step-number">3</div>
              <h3 itemProp="name">Discover People Nearby</h3>
              <p itemProp="text">
                Start discovering people nearby without location tracking. Our bluetooth social network shows you users 
                within 10 meters. See how close they are: Very Close, Nearby, or Far.
              </p>
            </div>

            <div className="step-card" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
              <div className="step-number">4</div>
              <h3 itemProp="name">Connect & Chat</h3>
              <p itemProp="text">
                Send connection requests and start <strong>anonymous chat with nearby strangers</strong>. Use our 
                nearby connections app features to build your local network privately.
              </p>
            </div>

            <div className="step-card" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
              <div className="step-number">5</div>
              <h3 itemProp="name">Create Nearby Groups</h3>
              <p itemProp="text">
                Create <strong>nearby groups</strong> for events or spontaneous meetups. Our social discovery app 
                automatically adds detected users to your group chat.
              </p>
            </div>

            <div className="step-card" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
              <div className="step-number">6</div>
              <h3 itemProp="name">Join Location Groups</h3>
              <p itemProp="text">
                Join global location-based groups for your city or interests. Meet people nearby and stay connected 
                with your local community through <strong>Radius social media</strong>.
              </p>
            </div>
          </div>
        </section>

        <section className="page-section">
          <h2>Why Choose Radius as Your Privacy Social App?</h2>
          <div className="feature-list">
            <div className="feature-item">
              <strong>✓ No GPS Tracking</strong> - Meet people nearby without sharing your location
            </div>
            <div className="feature-item">
              <strong>✓ Bluetooth Technology</strong> - Secure bluetooth proximity social network
            </div>
            <div className="feature-item">
              <strong>✓ Anonymous Connections</strong> - Chat with nearby strangers anonymously
            </div>
            <div className="feature-item">
              <strong>✓ 100% Free</strong> - Download Radius App free with all features
            </div>
            <div className="feature-item">
              <strong>✓ Nearby Groups</strong> - Create and join nearby connections instantly
            </div>
            <div className="feature-item">
              <strong>✓ Community Help</strong> - Use our nearby help app when you need assistance
            </div>
          </div>
        </section>

        <section className="page-section cta-section">
          <h2>Ready to Meet People Nearby?</h2>
          <p>
            Start using the best privacy focused social app today. Download <strong>Radius</strong> free 
            and experience how to meet people nearby without location tracking!
          </p>
          <div className="cta-buttons">
            <a href="/download" className="cta-button primary">
              Download Radius App Now
            </a>
            <a href="/features" className="cta-button secondary">
              Explore Features
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HowItWorksPage
