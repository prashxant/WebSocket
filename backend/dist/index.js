"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let userCount = 0;
wss.on("connection", (socket) => {
    userCount = userCount + 1;
    console.log("User connected number #" + userCount);
    socket.on("message", (message) => {
        console.log("message recived " + message.toString());
        setTimeout(() => {
            socket.send(message.toString() + " sent from server");
        }, 2000);
    });
});
