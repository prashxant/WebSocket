"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let users = [];
wss.on("connection", (socket) => {
    socket.on("message", (data) => {
        const message = JSON.parse(data.toString());
        if (message.type === "join") {
            users.push({ socket, room: message.payload.roomId });
        }
        if (message.type === "message") {
            const roomUsers = users.filter((u) => u.room === message.payload.roomId);
            roomUsers.forEach((u) => {
                u.socket.send(JSON.stringify({
                    type: "message",
                    payload: { text: message.payload.text }
                }));
            });
        }
        socket.on("close", () => {
            users = users.filter((u) => u.socket !== socket);
        });
    });
});
