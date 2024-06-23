'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "35df91fae6351cb6c2fb58a3880c54b9",
"assets/AssetManifest.bin.json": "1330a98d152a533136c3b7e8bdeb4351",
"assets/AssetManifest.json": "fa6f6aa6be33441e78187371fa122adf",
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
"assets/assets/new_file.riv": "84fcd322282c19bb4e40f32c2ac56e9d",
"assets/FontManifest.json": "ff69f73c1c5ed9ddadeb3d2aeea1aeb6",
"assets/fonts/MaterialIcons-Regular.otf": "92687a9b782591e22b42d87eb7498fd4",
"assets/images/about.png": "5176e877ec09dc28edc2069d091ac330",
"assets/images/aboutus_bannar.png": "27e4766baba854e46b49bd5ed64a3fc0",
"assets/images/b2elogo.png": "5ad515c6f1a397bef9ee2563c12e23a9",
"assets/images/bannarss.jpg": "7c93816aea444bffa3d42406d933fc48",
"assets/images/banner.jpg": "e7e7a3f6afe161e0e2f331161c8916ac",
"assets/images/books.jpg": "36decc6864915ec8043c24080708de65",
"assets/images/certificate_img.png": "36593abe6dba420dc4ad3ce57f99d881",
"assets/images/computer.png": "762d5f0b2af65fd2c92d6608d870de47",
"assets/images/contact_banner.png": "bab516b76783cc404391fcb45ac58bff",
"assets/images/Ellipse70.png": "4ccc85aadbb0b4ec60661edae2804f7f",
"assets/images/Ellipse71.png": "6003c3101be76abfff407c9b827c3d91",
"assets/images/Ellipse72.png": "6e71072b88d6fa7312add95e7aac6333",
"assets/images/email.png": "9db00447f4425871a164e33195e116d1",
"assets/images/Freetextbook.png": "f6aec22dd17570ca5b27b25edfc59f85",
"assets/images/freetextbookexpand%2520img.png": "050dda9d054067a56c0af240baae2508",
"assets/images/h.png": "e5f58b4ee32a5707c383aca56c4a62d9",
"assets/images/hero%2520banner%2520video%2520icon.png": "9c528a1baa57436b65a4504859ec80b2",
"assets/images/Herobanner1.jpg": "1fff51a1d08292b0c799264ebd5e735a",
"assets/images/hero_banner11.jpg": "0d9c2364a958b7abecac390b0816b6be",
"assets/images/hero_image11.jpg": "f4a28202edc1e774dfff04f41bd45fde",
"assets/images/img.png": "1652aecfe6a4126f82612b425ce63a31",
"assets/images/integrio_about_us_layers_2_2.jpg": "2c58b2a8afbcf431a34d1ac460ae85ac",
"assets/images/Logo_WEB_JPG.jpg": "1c382e5b5ea8ffd1bc146d232dcb4c0b",
"assets/images/mens.jpg": "a204c8db63766e86033496d4b337266a",
"assets/images/mission%2520arrow.png": "8282783d5039d545bd5048749f6b53ac",
"assets/images/officee.png": "fd212723ad2b5d2fd5ab81eebe0be1b5",
"assets/images/officeimgexpand.png": "0d3cf2d64d154b84424814be9d65e496",
"assets/images/online.png": "423d69c1607a6779e175142fcbb3cd8e",
"assets/images/our%2520goal.png": "6d6b2f8744a8f78b0482e9844b6e96c8",
"assets/images/partners.png": "1ae69890c62c644071207f1d191e4391",
"assets/images/portraitstaff%25203.jpg": "0f031bb441b0d21c9a76a692e9dcafad",
"assets/images/profesenol.png": "736b4631cccda2afb63b98d651fd89e3",
"assets/images/programs.png": "3edf75825029b252afcd643038dae693",
"assets/images/readinesscertification.png": "62d9c1a55d14f1318444f126f5fc287e",
"assets/images/readings.png": "4d5dd06ab8f1d4e90ce6d7c6b65cad86",
"assets/images/Settings.png": "d8adc9b7ffc53f825c5954acb6d38720",
"assets/images/size.png": "18eab8c1bfdf834ba1d02d076aa49c2a",
"assets/images/skillsimgexpand.png": "863d0987804cafb4f73166bf5442377a",
"assets/images/staff%25204.jpg": "a5a281f5c667ff1dae099b11d7f56854",
"assets/images/Untitled-1v.png": "0346cc15f56c13599dedc5344962d489",
"assets/images/Untitled-1vn.png": "bac3e14adf33290384d1609c2951e6b2",
"assets/images/Untitled-1x.png": "d73765f501d344d0d72c2a02d0f18b92",
"assets/images/Untitled-b.png": "18aeaeddfe0f35002e7923d2e90a6abf",
"assets/images/YOLO.png": "96a9aaf50b389176f833d274922ea4c2",
"assets/images/yolocurve.png": "193c3c95977267dcb1dd7815c23580e9",
"assets/images/yolooffice.png": "5d5311998ee010bbd7e1e4f3be5b232f",
"assets/images/Yoloskills.png": "4ea860584c42134deb73fc9b615463c7",
"assets/images/yolo_png.png": "32414b02c741662f204fa2b71544af18",
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
"index.html": "6eadb49bc5a88e188a52c6e682327221",
"/": "6eadb49bc5a88e188a52c6e682327221",
"main.dart.js": "effdbc4c4ea1a363d355a17cae4bce79",
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
