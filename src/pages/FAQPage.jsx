import FAQ from '../components/FAQ'
import { useCanonical, usePageMeta } from '../hooks/useCanonical'
import '../components/FAQ.css'
import './PageStyles.css'

function FAQPage() {
  useCanonical('/faq')
  usePageMeta({
    title: 'FAQ - Frequently Asked Questions | Radius App',
    description: 'Frequently asked questions about Radius App - the best privacy focused social app. Learn how to meet people nearby without location tracking, bluetooth social network features, nearby groups, and more.',
    keywords: 'radius faq, radius questions, how does radius work, radius app help, social app questions'
  })

  return (
    <div className="page-container" itemScope itemType="https://schema.org/FAQPage">
      <div className="page-header">
        <h1 itemProp="headline">Frequently Asked Questions</h1>
        <p className="page-subtitle">
          Everything you need to know about Radius App - the best privacy social app and bluetooth proximity social network.
        </p>
      </div>

      <main itemProp="mainContentOfPage">
        <FAQ />

        <section className="page-section">
          <h2>More Questions About Radius App</h2>
          
          <div className="faq-grid">
            <div className="faq-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Is Radius App really free?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">
                  Yes! <strong>Radius App</strong> is 100% free to download and use. All core features including 
                  discovering people nearby, nearby groups, nearby help app, anonymous chat, and location groups 
                  are completely free with no subscriptions required. Download Radius free on iOS and Android.
                </p>
              </div>
            </div>

            <div className="faq-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">What makes Radius the best privacy focused social app?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">
                  <strong>Radius</strong> is the best privacy focused social app because we never track your GPS location. 
                  Unlike other social apps, our bluetooth proximity social network only uses Bluetooth to detect nearby users. 
                  Your location data is never stored, shared, or tracked - making it the ultimate privacy social app.
                </p>
              </div>
            </div>

            <div className="faq-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">How do I download Radius App?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">
                  You can download <strong>Radius App</strong> free from the App Store (iOS) or Google Play Store (Android). 
                  Search for "Radius App" or "Radius social app" in your app store, or visit our download page for direct links. 
                  Radius download is quick, easy, and completely free.
                </p>
              </div>
            </div>

            <div className="faq-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Can I chat anonymously with nearby strangers?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">
                  Yes! <strong>Radius App</strong> supports anonymous chat with nearby strangers. You can meet people nearby 
                  without revealing your identity. Our privacy social app lets you control what information you share, 
                  making it safe for anonymous connections and nearby social discovery.
                </p>
              </div>
            </div>

            <div className="faq-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">What are nearby groups in Radius?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">
                  <strong>Nearby groups</strong> are bluetooth-based group chats that automatically include users within 
                  10 meters of you. Perfect for events, parties, or spontaneous meetups. Our nearby connections app 
                  feature makes it easy to coordinate with people around you without sharing location data.
                </p>
              </div>
            </div>

            <div className="faq-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">How does the bluetooth social network work?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">
                  Our <strong>bluetooth proximity social network</strong> uses Bluetooth Low Energy (BLE) to detect other 
                  Radius users nearby. When Bluetooth is enabled, Radius broadcasts a secure signal that other devices can 
                  detect. This bluetooth social network technology allows you to meet people nearby without GPS tracking.
                </p>
              </div>
            </div>

            <div className="faq-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">What is the nearby help app feature?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">
                  The <strong>nearby help app</strong> feature lets you broadcast help requests to Radius users in your 
                  vicinity. Whether you need directions, recommendations, or emergency assistance, our social discovery app 
                  connects you with nearby people who can help - all while maintaining your privacy.
                </p>
              </div>
            </div>

            <div className="faq-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Does Radius work without internet?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">
                  <strong>Radius App's</strong> bluetooth discovery features work without internet through our bluetooth social 
                  network. You can detect nearby users and create nearby groups using just Bluetooth. However, messaging features 
                  require an internet connection to send and receive messages.
                </p>
              </div>
            </div>

            <div className="faq-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">How is Radius different from other social apps?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">
                  <strong>Radius App</strong> is unique as a privacy social app that never tracks GPS location. While other 
                  social discovery apps collect extensive location data, Radius uses bluetooth proximity to help you meet 
                  people nearby. We're also the only nearby connections app with automatic nearby groups and mutual consent connections.
                </p>
              </div>
            </div>

            <div className="faq-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Is Radius social media or a dating app?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">
                  <strong>Radius social media</strong> is a social discovery platform, not a dating app. While you can meet 
                  people nearby and form romantic connections, Radius is designed for all types of social interactions - 
                  making friends, networking, finding event buddies, or getting community help through our nearby help app.
                </p>
              </div>
            </div>

            <div className="faq-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">How close do I need to be to detect someone?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">
                  Our <strong>bluetooth proximity social network</strong> detects users within approximately 10 meters (30 feet). 
                  Radius categorizes proximity as "Very Close" (0-1m), "Nearby" (1-3m), and "Far" (3-10m) based on Bluetooth 
                  signal strength, so you know exactly how close people are.
                </p>
              </div>
            </div>

            <div className="faq-card" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Can I use Radius on both iOS and Android?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">
                  Yes! <strong>Radius download</strong> is available for both iOS and Android. Our bluetooth social network 
                  is fully compatible across platforms, so iOS and Android users can discover and connect with each other. 
                  Download Radius social app free from the App Store or Google Play Store.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section cta-section">
          <h2>Still Have Questions?</h2>
          <p>
            Can't find what you're looking for? Contact our support team or download <strong>Radius App</strong> 
            to explore the best privacy focused social app yourself!
          </p>
          <div className="cta-buttons">
            <a href="/download" className="cta-button primary">
              Download Radius App Free
            </a>
            <a href="/contact" className="cta-button secondary">
              Contact Support
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default FAQPage
