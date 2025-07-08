"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSocket = [];
wss.on("connection", (socket) => {
    socket.on("message", (message) => {
        // @ts-ignore
        var _a;
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type == "join") {
            allSocket.push({
                socket,
                room: parsedMessage.payload.roomId
            });
        }
        if (parsedMessage.type == "chat") {
            const currentUserRoom = (_a = allSocket.find((x) => x.socket == socket)) === null || _a === void 0 ? void 0 : _a.room;
            allSocket.forEach((user) => {
                if (user.room == currentUserRoom) {
                    user.socket.send(parsedMessage.payload.message);
                }
            });
        }
    });
});
