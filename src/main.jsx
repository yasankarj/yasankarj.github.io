import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { getConsent, loadGoogleAnalytics } from './utils/consent'
import { logger } from './utils/logger'

// Load Google Analytics if user previously consented
if (getConsent()) {
  loadGoogleAnalytics();
}

// Register service worker for image caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        // Log only in development
        logger.log('Service Worker registered:', registration.scope)
      })
      .catch((error) => {
        // Silently fail in production, log only in development
        logger.log('Service Worker registration failed:', error)
      })
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

