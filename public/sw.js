// Service Worker for caching images
const CACHE_NAME = 'portfolio-images-v1'
const IMAGE_CACHE_NAME = 'portfolio-images-cache-v1'

// Images to cache
const IMAGES_TO_CACHE = [
  '/images/photo1.png',
  '/images/photo2.jpeg',
  '/images/photo3.JPG',
  '/images/photo4.jpeg',
  '/images/photo5.jpeg'
]

// Install event - cache images
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(IMAGE_CACHE_NAME).then((cache) => {
      return cache.addAll(IMAGES_TO_CACHE.map(img => new Request(img, { cache: 'reload' })))
        .catch((err) => {
          console.log('Some images failed to cache:', err)
        })
    })
  )
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== IMAGE_CACHE_NAME && cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  return self.clients.claim()
})

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Only handle image requests
  if (event.request.destination === 'image' || 
      event.request.url.includes('/images/')) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request).then((fetchResponse) => {
          // Cache the fetched image
          if (fetchResponse.ok) {
            const responseToCache = fetchResponse.clone()
            caches.open(IMAGE_CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache)
            })
          }
          return fetchResponse
        })
      })
    )
  }
})

