"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8000 });
//event handler
wss.on("connection", function (socket) {
    console.log("user conected");
    socket.on("message", function (e) {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    });
});
