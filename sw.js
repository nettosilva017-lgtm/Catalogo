// Service Worker mínimo do OUXE Distribuidor
// Necessário para o navegador considerar o app "instalável" (PWA)
const CACHE_NAME = 'ouxe-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Estratégia simples: tenta a rede, cai para cache se offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
