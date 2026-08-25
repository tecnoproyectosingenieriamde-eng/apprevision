const CACHE_NAME = 'interventoria-v1.0';
const urlsToCache = [
  './',
  './index.html',
  './app.js',
  '[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Retorna la caché si existe, si no, busca en red
      return response || fetch(event.request);
    })
  );
});