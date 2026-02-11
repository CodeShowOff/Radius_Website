import { useEffect } from 'react'
import Download from '../components/Download'
import '../components/Download.css'
import './PageStyles.css'

function DownloadPage() {
  useEffect(() => {
    document.title = 'Download Radius App Free - iOS & Android | Best Privacy Social App'
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Download Radius App free on iOS and Android. The best privacy focused social app to meet people nearby without location tracking. Get Radius social app now - bluetooth proximity social network with nearby groups and anonymous chat.'
    )
  }, [])

  return (
    <div className="page-container" itemScope itemType="https://schema.org/WebPage">
      <div className="page-header">
        <h1 itemProp="headline">Download Radius App</h1>
        <p className="page-subtitle" itemProp="description">
          Get Radius App free on iOS & Android. The #1 privacy social app to meet people nearby without location tracking.
        </p>
      </div>

      <main itemProp="mainContentOfPage">
        <Download />

        <section className="page-section">
          <h2>Why Download Radius App?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>🔒 Best Privacy Focused Social App</h3>
              <p>
                Radius App is the best privacy focused social app that never tracks your GPS location. 
                Our bluetooth social network lets you meet people nearby without compromising your privacy.
              </p>
            </div>
            <div className="feature-card">
              <h3>📱 Free Download - iOS & Android</h3>
              <p>
                Download Radius social app free on both iOS and Android. No subscriptions, no hidden fees. 
                All features including nearby groups and nearby connections are completely free.
              </p>
            </div>
            <div className="feature-card">
              <h3>📡 Bluetooth Proximity Social Network</h3>
              <p>
                Meet people nearby using our innovative bluetooth social network. No GPS tracking - 
                just bluetooth proximity to connect with nearby strangers anonymously.
              </p>
            </div>
            <div className="feature-card">
              <h3>👥 Nearby Groups & Connections</h3>
              <p>
                Create nearby groups for events, join location-based communities, and make nearby connections. 
                Perfect social discovery app for meeting people around you.
              </p>
            </div>
          </div>
        </section>

        <section className="page-section cta-section">
          <h2>Ready to Meet People Nearby?</h2>
          <p>
            Download Radius App now and start connecting with people around you through the most secure 
            privacy social app available. Join thousands of users who trust Radius for nearby connections 
            without location tracking.
          </p>
          <div className="cta-buttons">
            <a 
              href="https://apps.apple.com/app/radius/id123456789" 
              className="cta-button primary"
              rel="noopener noreferrer"
              target="_blank"
            >
              Download on App Store
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.radius.app" 
              className="cta-button secondary"
              rel="noopener noreferrer"
              target="_blank"
            >
              Get it on Google Play
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default DownloadPage
