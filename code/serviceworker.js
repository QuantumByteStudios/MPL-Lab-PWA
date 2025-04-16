var staticCacheName = "phone-validator-pwa-v1";

self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            return cache.addAll([
                "/",
                "/index.html",
                "/manifest.json",
                "/serviceworker.js",
                "/images/phone-icon-192.png",
                "/images/phone-icon-512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});
