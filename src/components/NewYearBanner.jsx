import { useState } from 'react'
import './NewYearBanner.css'

function NewYearBanner() {
  const storageKey = 'newYearBannerDismissed_v2026'
  const [visible, setVisible] = useState(() => {
    try {
      return !localStorage.getItem(storageKey)
    } catch (e) {
      return true
    }
  })

  if (!visible) return null

  const dismiss = () => {
    try {
      localStorage.setItem(storageKey, '1')
    } catch (e) {
      // ignore
    }
    setVisible(false)
  }

  return (
    <div className="newyear-banner" role="region" aria-label="Happy New Year banner">
      <div className="newyear-container">
        <div className="newyear-message">🎉 Happy New Year 2026! Wishing you a fantastic year ahead. 🎊</div>
        <button className="newyear-dismiss" onClick={dismiss} aria-label="Dismiss banner">×</button>
      </div>
    </div>
  )
}

export default NewYearBanner
