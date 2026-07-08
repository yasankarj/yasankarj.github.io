import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import ConsentBanner from './components/ConsentBanner'
import Home from './pages/Home'
import WorkExperience from './pages/WorkExperience'
import Education from './pages/Education'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import './App.css'
import { useEffect } from "react";
import { pageview } from "./analytics";
import { getConsent } from "./utils/consent";

const PAGE_TITLES = {
  '/': 'Yasanka Jayawardane | Technical Lead & Full Stack Developer',
  '/work-experience': 'Work Experience | Yasanka Jayawardane',
  '/education': 'Education | Yasanka Jayawardane',
  '/courses': 'Courses | Yasanka Jayawardane',
  '/contact': 'Contact | Yasanka Jayawardane',
};

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    document.title = PAGE_TITLES[location.pathname] || PAGE_TITLES['/'];
  }, [location]);

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
          <Route path="/courses" element={<Courses />} />
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

