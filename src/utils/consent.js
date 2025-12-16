const CONSENT_KEY = 'analytics_consent';
const GA_SCRIPT_LOADED_KEY = 'ga_script_loaded';

// Get GA tracking ID from environment variable with fallback
const getGATrackingId = () => {
  return import.meta.env.VITE_GA_TRACKING_ID || 'G-EXK45QBBT7';
};

// Validate consent value - only allow boolean or string 'true'/'false'
const validateConsent = (value) => {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    const lower = value.toLowerCase().trim();
    return lower === 'true';
  }
  return false;
};

export const getConsent = () => {
  if (typeof window === 'undefined') return null;
  try {
    const consent = localStorage.getItem(CONSENT_KEY);
    return consent === 'true';
  } catch (error) {
    // Handle localStorage errors (e.g., disabled in private mode)
    console.warn('Failed to read consent from localStorage:', error);
    return null;
  }
};

export const setConsent = (consented) => {
  if (typeof window === 'undefined') return;
  
  // Validate and sanitize input
  const validConsent = validateConsent(consented);
  
  try {
    localStorage.setItem(CONSENT_KEY, validConsent.toString());
    
    // If consent is given, load Google Analytics
    if (validConsent) {
      loadGoogleAnalytics();
    }
  } catch (error) {
    // Handle localStorage errors
    console.warn('Failed to save consent to localStorage:', error);
  }
};

export const hasConsentDecision = () => {
  if (typeof window === 'undefined') return false;
  try {
    return localStorage.getItem(CONSENT_KEY) !== null;
  } catch (error) {
    console.warn('Failed to check consent decision:', error);
    return false;
  }
};

// Check if gtag is legitimately loaded (not spoofed)
const isGtagLegitimatelyLoaded = () => {
  // Check if script tag exists in DOM
  const scripts = document.querySelectorAll('script[src*="googletagmanager.com/gtag"]');
  return scripts.length > 0 && typeof window.gtag === 'function';
};

export const loadGoogleAnalytics = () => {
  // Don't load if already loaded and verified
  if (isGtagLegitimatelyLoaded()) {
    // Check if we've already marked it as loaded
    const alreadyLoaded = sessionStorage.getItem(GA_SCRIPT_LOADED_KEY);
    if (alreadyLoaded === 'true') return;
  }
  
  const trackingId = getGATrackingId();
  
  // Validate tracking ID format (basic check)
  if (!trackingId || !/^G-[A-Z0-9]+$/.test(trackingId)) {
    console.error('Invalid Google Analytics tracking ID format');
    return;
  }
  
  // Load gtag.js script with error handling
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  
  script.onerror = () => {
    console.error('Failed to load Google Analytics script');
  };
  
  script.onload = () => {
    // Mark as loaded in sessionStorage to prevent duplicate loads
    try {
      sessionStorage.setItem(GA_SCRIPT_LOADED_KEY, 'true');
    } catch (error) {
      console.warn('Failed to save GA load status:', error);
    }
  };
  
  document.head.appendChild(script);

  // Initialize gtag with proper function definition
  window.dataLayer = window.dataLayer || [];
  function gtag(...args) {
    // Use rest parameters for better security and modern JavaScript practices
    window.dataLayer.push(args);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', trackingId);
};

