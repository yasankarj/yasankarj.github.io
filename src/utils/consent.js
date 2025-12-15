const CONSENT_KEY = 'analytics_consent';

export const getConsent = () => {
  if (typeof window === 'undefined') return null;
  const consent = localStorage.getItem(CONSENT_KEY);
  return consent === 'true';
};

export const setConsent = (consented) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CONSENT_KEY, consented.toString());
  
  // If consent is given, load Google Analytics
  if (consented) {
    loadGoogleAnalytics();
  }
};

export const hasConsentDecision = () => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(CONSENT_KEY) !== null;
};

export const loadGoogleAnalytics = () => {
  // Don't load if already loaded
  if (window.gtag) return;
  
  // Load gtag.js script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-EXK45QBBT7';
  document.head.appendChild(script1);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-EXK45QBBT7');
};

