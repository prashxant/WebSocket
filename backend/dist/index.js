"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let c = 0;
wss.on("connection", (socket) => {
    c = c + 1;
    console.log("user connected #" + c);
});
