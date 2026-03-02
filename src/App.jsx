import { useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { useCanonical } from './hooks/useCanonical'
import './App.css'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPostBluetooth = lazy(() => import('./pages/BlogPostBluetooth'))
const BlogPostComparison = lazy(() => import('./pages/BlogPostComparison'))
const BlogPostNearbyGroups = lazy(() => import('./pages/BlogPostNearbyGroups'))
const BlogPostGettingStarted = lazy(() => import('./pages/BlogPostGettingStarted'))
const BlogPostNearbyHelp = lazy(() => import('./pages/BlogPostNearbyHelp'))
const BlogPostRandomChat = lazy(() => import('./pages/BlogPostRandomChat'))
const BlogPostLocationGroups = lazy(() => import('./pages/BlogPostLocationGroups'))
const Careers = lazy(() => import('./pages/Careers'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const Cookies = lazy(() => import('./pages/Cookies'))
const DownloadPage = lazy(() => import('./pages/DownloadPage'))
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'))
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage'))
const NearbyGroupsPage = lazy(() => import('./pages/NearbyGroupsPage'))
const FAQPage = lazy(() => import('./pages/FAQPage'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const location = useLocation();

  // Dynamically update canonical URL for each route
  useCanonical();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    // Update page title dynamically for better SEO signals
    document.title = 'Radius App - Meet People Nearby | Privacy Social Network';
    
    // Add dynamic structured data for real-time updates
    const updateStructuredData = () => {
      const existingScript = document.querySelector('script[data-dynamic-ld]');
      if (existingScript) existingScript.remove();
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-dynamic-ld', 'true');
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Radius App - Best Privacy Focused Social App",
        "description": "Radius App is the #1 best privacy focused social app and bluetooth proximity social network. Meet people nearby without location tracking. Download Radius social app free iOS Android with nearby connections, nearby groups, and anonymous chat.",
        "url": window.location.href,
        "image": "https://radiusapp.tech/og-image.png",
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Radius App",
          "url": "https://radiusapp.tech"
        },
        "about": {
          "@type": "SoftwareApplication",
          "name": "Radius App",
          "applicationCategory": "SocialNetworkingApplication"
        }
      });
      document.head.appendChild(script);
    };
    
    updateStructuredData();
  }, []);

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  return (
    <div itemScope itemType="https://schema.org/WebPage">
      <Navbar />
      <main role="main" itemProp="mainContentOfPage">
        {isHomePage && <Hero />}
        <Suspense fallback={<div style={{ minHeight: '50vh' }} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/nearby-groups" element={<NearbyGroupsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/getting-started" element={<BlogPostGettingStarted />} />
            <Route path="/blog/bluetooth-privacy" element={<BlogPostBluetooth />} />
            <Route path="/blog/radius-vs-dating-apps" element={<BlogPostComparison />} />
            <Route path="/blog/nearby-groups" element={<BlogPostNearbyGroups />} />
            <Route path="/blog/nearby-help" element={<BlogPostNearbyHelp />} />
            <Route path="/blog/random-chat" element={<BlogPostRandomChat />} />
            <Route path="/blog/location-groups" element={<BlogPostLocationGroups />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
