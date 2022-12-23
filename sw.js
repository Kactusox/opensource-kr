self.addEventListener("install", e => {
     e.waitUntil(
          caches.open("static").then(cache => {
               return cache.addAll(["./", "./assets/css/templatemo-grad-school.css", "./assets/images/ayaziy-logo.png"])
          })
     );
});

self.addEventListener("fetch", e => {
     e.respondWIth(
          caches.match(e.request).then(response => {
               return response || fetch(e.request);
          })
     );
});