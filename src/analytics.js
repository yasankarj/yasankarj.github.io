import { getConsent } from './utils/consent';
import { logger } from './utils/logger';

// Get GA tracking ID from environment variable with fallback
const getGATrackingId = () => {
  return import.meta.env.VITE_GA_TRACKING_ID || 'G-EXK45QBBT7';
};

// Sanitize URL to prevent injection attacks
const sanitizeUrl = (url) => {
  if (typeof url !== 'string') return '/';
  // Remove any potentially dangerous characters and limit length
  return url.replace(/[<>"']/g, '').substring(0, 2048) || '/';
};

// Check if gtag is legitimately loaded
const isGtagAvailable = () => {
  if (typeof window === 'undefined') return false;
  const scripts = document.querySelectorAll('script[src*="googletagmanager.com/gtag"]');
  return scripts.length > 0 && typeof window.gtag === 'function';
};

export const pageview = (url) => {
  // Only track if user has consented and gtag is legitimately available
  if (getConsent() && isGtagAvailable()) {
    const sanitizedUrl = sanitizeUrl(url);
    const trackingId = getGATrackingId();
    
    try {
      window.gtag('config', trackingId, {
        page_path: sanitizedUrl,
      });
    } catch (error) {
      // Silently fail in production, log only in development
      logger.warn('Failed to track pageview:', error);
    }
  }
};