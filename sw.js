
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { self.clients.claim(); });
self.addEventListener('fetch', e => {
  // network-first with fallback
  e.respondWith((async () => {
    try { return await fetch(e.request); } catch (err) { return caches.match(e.request) || Response.error(); }
  })());
});
