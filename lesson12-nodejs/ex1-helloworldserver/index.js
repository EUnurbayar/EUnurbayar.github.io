/**
 * index.js
 */
"use strict";

console.log("Hello node.js");

const http = require("http");
http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    const pageContent = `
        <!doctype html>
        <html lang="en">
        <head>
            <title>My first node.js web server page</title>
        </head>
        <body>
            <h1>Hello Node.js from version 18.3.0</h1>
        </body>
        </html>
    `;
    res.end(pageContent);
}).listen(8080);
console.log("Http server started... Listening on port 8080");
