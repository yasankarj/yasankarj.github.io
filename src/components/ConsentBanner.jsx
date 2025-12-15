import { useState, useEffect } from 'react';
import { getConsent, setConsent, hasConsentDecision } from '../utils/consent';
import './ConsentBanner.css';

function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Only show banner if user hasn't made a decision yet
    if (!hasConsentDecision()) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setConsent(true);
    setShowBanner(false);
  };

  const handleDecline = () => {
    setConsent(false);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="consent-banner">
      <div className="consent-banner-content">
        <p>
          We use analytics to improve your experience. Do you consent to analytics tracking?
        </p>
        <div className="consent-banner-buttons">
          <button onClick={handleAccept} className="consent-button accept">
            Accept
          </button>
          <button onClick={handleDecline} className="consent-button decline">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConsentBanner;

