import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to dynamically update the canonical URL based on the current route
 * This fixes the "Alternate page with proper canonical tag" issue in Google Search Console
 */
export const useCanonical = (customPath = null) => {
  const location = useLocation();
  const baseUrl = 'https://radiusapp.tech';

  useEffect(() => {
    // Use custom path if provided, otherwise use current location
    const path = customPath || location.pathname;
    const canonicalUrl = `${baseUrl}${path}`;

    // Find or create canonical link element
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }

    // Update canonical URL
    canonicalLink.setAttribute('href', canonicalUrl);

    // Also update og:url for social sharing
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl);
    }

    // Update twitter:url
    let twitterUrl = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute('content', canonicalUrl);
    }

    // Update alternate hreflang tags
    let alternateEn = document.querySelector('link[rel="alternate"][hreflang="en"]');
    if (alternateEn) {
      alternateEn.setAttribute('href', canonicalUrl);
    }

    let alternateDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
    if (alternateDefault) {
      alternateDefault.setAttribute('href', canonicalUrl);
    }

  }, [location.pathname, customPath, baseUrl]);
};

/**
 * Custom hook to update page metadata (title, description, etc.)
 */
export const usePageMeta = ({ title, description, keywords, image }) => {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
      
      // Update og:title
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', title);
      
      // Update twitter:title
      let twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute('content', title);
    }

    // Update description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', description);
      
      // Update og:description
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', description);
      
      // Update twitter:description
      let twitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (twitterDesc) twitterDesc.setAttribute('content', description);
    }

    // Update keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) metaKeywords.setAttribute('content', keywords);
    }

    // Update image
    if (image) {
      let ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) ogImage.setAttribute('content', image);
      
      let twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (twitterImage) twitterImage.setAttribute('content', image);
    }
  }, [title, description, keywords, image]);
};

/**
 * Custom hook to add structured data (JSON-LD) for SEO
 */
export const useStructuredData = (structuredData) => {
  useEffect(() => {
    if (!structuredData) return;

    // Create script element for structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-structured-data', 'true');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const existingScripts = document.querySelectorAll('script[data-structured-data="true"]');
      existingScripts.forEach(s => s.remove());
    };
  }, [structuredData]);
};

export default useCanonical;
