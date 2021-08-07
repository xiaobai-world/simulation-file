importScripts(
  "https://cdn.jsdelivr.net/gh/nlepage/go-wasm-http-server@v1.0.0/sw.js"
);

addEventListener("install", (event) => {
  event.waitUntil(skipWaiting());
});

addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

addEventListener("error", (event) => {
  console.log("load module error", event);
});

registerWasmHTTPListener(
  "/store/app/user/60c6c538d75ba74017d5940a/f342d9dbdec5eda31d0fcdb5430fe7eee2d523fc309969b157f47d4166150bf2/api.wasm",
  {
    base: "api",
  }
);
