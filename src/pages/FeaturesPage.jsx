import { useEffect } from 'react'
import Features from '../components/Features'
import '../components/Features.css'
import './PageStyles.css'

function FeaturesPage() {
  useEffect(() => {
    document.title = 'Radius App Features - Bluetooth Social Network | Privacy Social App'
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Discover Radius App features - meet people nearby without location tracking, nearby groups, bluetooth proximity social network, anonymous chat with nearby strangers, and nearby help app. Best privacy focused social app.'
    )
  }, [])

  return (
    <div className="page-container" itemScope itemType="https://schema.org/WebPage">
      <div className="page-header">
        <h1 itemProp="headline">Radius App Features</h1>
        <p className="page-subtitle" itemProp="description">
          Explore the powerful features of Radius - the best privacy social app and bluetooth proximity social network.
        </p>
      </div>

      <main itemProp="mainContentOfPage">
        <Features />

        <section className="page-section">
          <h2>Why Radius is the Best Privacy Focused Social App</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>📡 Meet People Nearby Without Location Tracking</h3>
              <p>
                <strong>Radius App</strong> uses bluetooth technology to help you meet people nearby without GPS tracking. 
                Our bluetooth proximity social network detects other users within range while keeping your location private.
              </p>
            </div>
            <div className="feature-card">
              <h3>🔐 Best Privacy Focused Social App</h3>
              <p>
                Unlike other social apps, <strong>Radius</strong> never collects your GPS data. We're the best privacy focused 
                social app that prioritizes your security. Anonymous chat with nearby strangers without revealing your identity.
              </p>
            </div>
            <div className="feature-card">
              <h3>👥 Nearby Groups & Communities</h3>
              <p>
                Create <strong>nearby groups</strong> for events, meetups, or spontaneous gatherings. Our nearby connections app 
                automatically detects users around you and adds them to your group chat.
              </p>
            </div>
            <div className="feature-card">
              <h3>🆘 Nearby Help App</h3>
              <p>
                Request help from people nearby when you need assistance. Our <strong>nearby help app</strong> feature 
                broadcasts your request to users in your vicinity for quick community support.
              </p>
            </div>
            <div className="feature-card">
              <h3>💬 Anonymous Chat with Nearby Strangers</h3>
              <p>
                Enjoy <strong>anonymous chat with nearby strangers</strong> through our privacy social app. Connect with 
                people around you without sharing personal information.
              </p>
            </div>
            <div className="feature-card">
              <h3>📍 Location-Based Groups</h3>
              <p>
                Join global location-based groups for your city, neighborhood, or favorite places. Perfect for 
                social discovery and building local communities.
              </p>
            </div>
            <div className="feature-card">
              <h3>🎲 Random Group Chat</h3>
              <p>
                Connect with random people worldwide in group chatrooms. Meet new friends and have interesting 
                conversations in our social discovery app.
              </p>
            </div>
            <div className="feature-card">
              <h3>📸 Rich Media Messaging</h3>
              <p>
                Send photos, voice messages, stickers, and more. Full-featured messaging in our 
                <strong>Radius social app</strong> makes conversations engaging and fun.
              </p>
            </div>
          </div>
        </section>

        <section className="page-section cta-section">
          <h2>Experience the Future of Privacy Social Networking</h2>
          <p>
            Download <strong>Radius App</strong> free on iOS and Android. Join the bluetooth social network that 
            respects your privacy while helping you meet people nearby and build meaningful connections.
          </p>
          <div className="cta-buttons">
            <a href="/download" className="cta-button primary">
              Download Radius App Free
            </a>
            <a href="/how-it-works" className="cta-button secondary">
              Learn How It Works
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default FeaturesPage
