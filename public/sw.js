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

/**
 * get app root path
 */
const appRootPath = new URL(location).searchParams.get("appRootPath");

registerWasmHTTPListener(`${appRootPath ? appRootPath : ""}/api.wasm`, {
  base: "api",
});
