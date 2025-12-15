import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import ConsentBanner from './components/ConsentBanner'
import Home from './pages/Home'
import WorkExperience from './pages/WorkExperience'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './App.css'
import { useEffect } from "react";
import { pageview } from "./analytics";
import { getConsent } from "./utils/consent";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Only track pageview if user has consented
    if (getConsent()) {
      pageview(location.pathname);
    }
  }, [location]);

  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <ConsentBanner />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App

