self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        return response;
      })
      .catch(() => {
        return new Response('<h1>Offline</h1>', {
          headers: { 'Content-Type': 'text/html' }
        });
      })
  );
});
