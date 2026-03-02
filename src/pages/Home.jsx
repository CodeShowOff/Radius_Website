import { lazy, Suspense, memo } from 'react'
import { useCanonical, usePageMeta } from '../hooks/useCanonical'

// Lazy load below-the-fold components for faster initial load
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
    title: 'Radius App - Meet People Nearby | Privacy Social Network',
    description: 'Radius App is the #1 privacy-first social app to meet people nearby using Bluetooth. No location tracking. Download free on iOS & Android.',
    keywords: 'Radius App, Radius, Radius Social Media, Radius download, Radius social app, Radius Connect, meet people nearby, social discovery app, bluetooth social app, privacy social app, nearby connections app, nearby groups, nearby help app'
  })

  return (
    <>
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
