// Royal Sweeps Casino Service Worker
const CACHE_NAME = 'royal-sweeps-v1';

// Only cache essential files that we know exist
const urlsToCache = [
  '/',
  '/manifest.json'
];

// Install event
self.addEventListener('install', event => {
  // Skip waiting to activate the new service worker immediately
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Cache files individually and handle errors gracefully
        return Promise.allSettled(
          urlsToCache.map(url => 
            cache.add(url).catch(err => {
              console.log(`Failed to cache ${url}:`, err);
              return null;
            })
          )
        );
      })
      .catch(err => {
        console.log('Service worker installation failed:', err);
      })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version if available
        if (response) {
          return response;
        }
        
        // Otherwise fetch from network with error handling
        return fetch(event.request)
          .catch(err => {
            console.log(`Fetch failed for ${event.request.url}:`, err);
            // Return a basic offline response for navigation requests
            if (event.request.mode === 'navigate') {
              return new Response('Offline', {
                status: 200,
                headers: { 'Content-Type': 'text/html' }
              });
            }
            throw err;
          });
      })
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});