// Logger utility that only logs in development mode
// In production, all logs are silently ignored to avoid exposing internal details

const isDevelopment = import.meta.env.DEV;

export const logger = {
  log: (...args) => {
    if (isDevelopment) {
      console.log(...args);
    }
  },
  
  warn: (...args) => {
    if (isDevelopment) {
      console.warn(...args);
    }
    // In production, silently handle warnings
  },
  
  error: (...args) => {
    if (isDevelopment) {
      console.error(...args);
    }
    // In production, silently handle errors
  }
};

