export const pageview = (url) => {
    if (window.gtag) {
      window.gtag('config', 'G-EXK45QBBT7', {
        page_path: url,
      });
    }
  };