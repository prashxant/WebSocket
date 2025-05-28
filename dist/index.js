"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
//event handler//
wss.on("connection", function (socket) {
    setInterval(() => {
        socket.send("currnet price of solana is " + Math.random() * 10000);
    }, 500);
});
