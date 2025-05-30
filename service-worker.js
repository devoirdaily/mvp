const CACHE_NAME = 'devoir-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/about.html',
  '/order.html',
  '/Favicon/favicon-16x16.png',
  '/Favicon/favicon-32x32.png',
  '/Favicon/android-chrome-192x192.png',
  '/Favicon/android-chrome-512x512.png',
  '/Favicon/apple-touch-icon.png',
  // add any other static assets as needed
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
