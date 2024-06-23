'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "99b88bff9ed0892c27bfa1a8ffe7f4ad",
"assets/AssetManifest.bin.json": "2aad3e7d88ed533b8d04df95b264aad3",
"assets/AssetManifest.json": "85c12798a68eca61ae93043b2eb0c293",
"assets/assets/fonts/open-sans/OpenSans-Bold.ttf": "50145685042b4df07a1fd19957275b81",
"assets/assets/fonts/open-sans/OpenSans-Italic.ttf": "c7dcce084c445260a266f92db56f5517",
"assets/assets/fonts/open-sans/OpenSans-Light.ttf": "1bf71be111189e76987a4bb9b3115cb7",
"assets/assets/fonts/open-sans/OpenSans-LightItalic.ttf": "6943fb6fd4200f3d073469325c6acdc9",
"assets/assets/fonts/open-sans/OpenSans-Regular.ttf": "629a55a7e793da068dc580d184cc0e31",
"assets/assets/fonts/open-sans/OpenSans-Semibold.ttf": "33f225b8f5f7d6b34a0926f58f96c1e9",
"assets/assets/fonts/open-sans/OpenSans-SemiboldItalic.ttf": "73f7301a9cd7a086295401eefe0c998f",
"assets/assets/fonts/poppins/FontsFree-Net-Poppins-ExtraBold.ttf": "6b78c7ec468eb0e13c6c5c4c39203986",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "12413cac332af030dc15202842de8afb",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "32b18121a85a090c974baa27eaa801fb",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "c7b158e33a04cfacdc79a1dd1a48dbdd",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "d709511cfc58f9d8f59353de4be8bb17",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4ca619e8c7c56746c94ef50a95f8d598",
"assets/assets/images/about.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/about_me.png": "e47133b34336a0ed7e3251293010ac24",
"assets/assets/images/akas.jpg": "bebb73c572aa6eee888e1d3861fbd7e3",
"assets/assets/images/akash.JPG": "08f0d518c9035bada4cde7701696f618",
"assets/assets/images/contact.png": "4077868d934648cc3f7df35456822962",
"assets/assets/images/contact1.png": "4077868d934648cc3f7df35456822962",
"assets/assets/images/contact_banner.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/img.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/mens.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/Myphot.jpg": "c60727c0c1c48ec16c57511b470dbd73",
"assets/assets/images/n%2520m.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/partners.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/PHOTO.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/products.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/programs.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/readinesscertification.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/rg.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/Settings.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/skills.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/staff%25204.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/u.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/Untitled-1%2520(5)%2520(1).png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/Untitled-1v.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/Untitled-1x.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/Untitled-b.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/vb.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/vv.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/w.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/world.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/yolocurve.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/FontManifest.json": "ff69f73c1c5ed9ddadeb3d2aeea1aeb6",
"assets/fonts/MaterialIcons-Regular.otf": "92687a9b782591e22b42d87eb7498fd4",
"assets/NOTICES": "98ea63f418aecc4613206993544eb2b8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bbc3a2d2265f7ff6bef4ba339a0ba4c9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "dbf0a93d2b23d99b7af4b1a6ab94e122",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4bc7849a5c7774cfa18e4bc2ef82404a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/YOLO.png": "eccfdd54a294822a2283e0f8e16279a6",
"index.html": "420abf4bc232da7a61432a89031508df",
"/": "420abf4bc232da7a61432a89031508df",
"main.dart.js": "ab8379e8d770e821cb94e7d159e3191e",
"manifest.json": "70851e376754e7ad720c4dc20b390bc8",
"version.json": "b5ba0ca4045a95c7d988c24c3fa2a901",
"YOLO.png": "32414b02c741662f204fa2b71544af18"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
