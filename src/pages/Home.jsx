import { lazy, Suspense, memo } from 'react'
import { useCanonical, usePageMeta } from '../hooks/useCanonical'

// Lazy load below-the-fold components for faster initial load
const TrustedBy = lazy(() => import('../components/TrustedBy'))
const Features = lazy(() => import('../components/Features'))
const HowItWorks = lazy(() => import('../components/HowItWorks'))
const WhyRadius = lazy(() => import('../components/WhyRadius'))
const DownloadSection = lazy(() => import('../components/Download'))
const FAQ = lazy(() => import('../components/FAQ'))

// Minimal placeholder for lazy components
const SectionPlaceholder = memo(() => (
  <div style={{ minHeight: '400px' }} aria-hidden="true" />
))

const Home = () => {
  useCanonical('/')
  usePageMeta({
    title: 'Radius App - Meet People Nearby | Best Privacy Social App & Bluetooth Social Network',
    description: 'Radius App is the #1 privacy-first social discovery app to meet people nearby without location tracking. Best privacy focused social app using Bluetooth proximity social network. Download Radius free iOS & Android - anonymous chat with nearby strangers, nearby groups, nearby help app, and nearby connections app. Radius social media reimagined.',
    keywords: 'Radius App, Radius, Radius Social Media, Radius download, Radius social app, Radius Connect, meet people nearby, social discovery app, bluetooth social app, privacy social app, nearby connections app, nearby groups, nearby help app'
  })

  return (
    <>
      <Suspense fallback={<SectionPlaceholder />}>
        <TrustedBy />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <Features />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <WhyRadius />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <DownloadSection />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <FAQ />
      </Suspense>
    </>
  );
};

export default Home;
