const staticEcuriesF1 = "dev-ecuries-f1-site-v1"
console.log('here')
const assets = [
  "/",
  "/index.html",
  "/assets/css/style.css",
  "/assets/js/app.js",
  "/assets/img/red-bull.jpg",
  "/assets/img/ferrari.jpg",
  "/assets/img/mclaren.jpg",
  "/assets/img/alpine.jpg",
  "/assets/img/alpha-tauri.jpg",
  "/assets/img/alpha-romeo.jfif",
  "/assets/img/aston-martin.png",
  "/assets/img/haas.jpg",
  "/assets/img/williams.jpg",
]

self.addEventListener("install", installEvent => {
    console.log(installEvent)
  installEvent.waitUntil(
    caches.open(staticEcuriesF1).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    console.log(fetchEvent)
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        console.log(res)
        return res || fetch(fetchEvent.request)
      })
    )
  })