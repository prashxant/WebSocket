import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room: string;
}

let users: User[] = [];

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
