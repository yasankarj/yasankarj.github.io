import { getConsent } from './utils/consent';

export const pageview = (url) => {
    // Only track if user has consented and gtag is available
    if (getConsent() && window.gtag) {
      window.gtag('config', 'G-EXK45QBBT7', {
        page_path: url,
      });
    }
  };