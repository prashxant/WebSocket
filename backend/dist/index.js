"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let userCount = 0;
let allSocket = [];
wss.on("connection", (socket) => {
    allSocket.push(socket);
    userCount = userCount + 1;
    console.log("User connected number #" + userCount);
    socket.on("message", (message) => {
        console.log("message recived " + message.toString());
        for (let i = 0; i < allSocket.length; i++) {
            const s = allSocket[i];
            s.send(message.toString() + "sent form " + userCount);
        }
    });
});
