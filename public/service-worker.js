"use strict";var precacheConfig=[["assets/data/2018-09-09.json","8042b0261f18ab9983d3afd23fbdfa07"],["assets/data/2018-09-16.json","95742398c1b2ba9eb98fb84924f5c7c4"],["assets/data/2018-09-23.json","c184a4a96dd1f69504f3214009391d47"],["assets/data/2018-09-30.json","8319af9645a034f952c0a834e14eaa7f"],["assets/data/2018-10-07.json","d496dd599b1fe73e811ea7804d8116f9"],["assets/data/2018-10-14.json","ef7bbc9182490bf069aecd9a134e1448"],["assets/data/2018-10-21.json","ad60b949b0935cd7a0f9f6e89fe56069"],["assets/data/clan.json","b42e26227891c1484420205d96f3eb8c"],["assets/images/hero.jpg","6bef60bb34bdedf85c5897c5a26698ed"],["favicon.png","41f7bddb032885e6467d4290b95ad169"],["icon_128x128.png","5fdc295359b80e3c7a581fbc12089e2c"],["icon_192x192.png","c88297c56d0d274112fb52e150c1daf3"],["icon_256x256.png","ac6a781479749c05d24623b1eaf54d2b"],["icon_384x384.png","81c2a22a47d766700b7176109b80074b"],["icon_512x512.png","87dc203ff9a94cd8d469a2d2fcbbf644"],["icon_96x96.png","53559c418457c20635593e1448de8830"],["index.html","1d7100ab076525ce34b133f040473e86"],["manifest.json","8bce665a9b6f9b0b1ed8afefa6b4bf7e"],["scripts/index.js","1b774024641476e9fedaa1eb2f0c7d5a"],["scripts/vendors~index.js","2a7c8927abb8abd18c48d077254af1f6"],["styles/6c4d8a8687180d6eccce.css","ef840980e52096be99db937235986628"]],cacheName="sw-precache-v3-sample-cache-id-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),r=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var a=new Request(t,{credentials:"same-origin"});return fetch(a).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));!n&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(t=new URL("D:Githubclash-royalepublicindex.html",self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});