const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const PORT = 8000 || process.env.PORT;
const HOST = "127.0.0.1";

const mimeTypes = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".wav": "audio/wav",
  ".mp4": "video/mp4",
  ".woff": "application/font-woff",
  ".ttf": "application/font-ttf",
  ".eot": "application/vnd.ms-fontobject",
  ".otf": "application/font-otf",
  ".wasm": "application/wasm",
};
const router = { file: getFile() };
function getFile() {
  return "returning file";
}

// const contentType = mimeTypes[extname] || "application/octet-stream";

const server = http.createServer((req, res) => {
  // const url = new URL(req.url);
  if (!req.method === "GET") {
    res.end(http.STATUS_CODES[405]);
  } else {
    if (res.url === "/users") {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end({ users: "one" });
    }
  }
  console.log(req);
  const extensionName = "";

  res.write(JSON.stringify({ url: url }));
  res.end();
});

server.listen(PORT, HOST, () => {
  console.log(`server listening on port ${PORT}`);
});
