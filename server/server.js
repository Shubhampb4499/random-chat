const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });

  res.end("Anonymous Chat Socket Server is Running 🚀");
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

let waitingUser = null;

function disconnectPartner(socket) {
  if (!socket.partner) return;

  const partner = socket.partner;

  partner.partner = null;
  socket.partner = null;

  partner.emit("partner-left");
}

io.on("connection", (socket) => {
  console.log("✅ User Connected:", socket.id);

  socket.on("find-stranger", () => {
    if (socket.partner) return;

    if (waitingUser && waitingUser !== socket) {
      const partner = waitingUser;

      waitingUser = null;

      socket.partner = partner;
      partner.partner = socket;

      socket.emit("stranger-found");
      partner.emit("stranger-found");

      console.log("🟢 Two Users Connected");
    } else {
      waitingUser = socket;

      socket.emit("searching");

      console.log("🔍 Waiting for stranger...");
    }
  });

  socket.on("send-message", (message) => {
    if (socket.partner) {
      socket.partner.emit("receive-message", message);
    }
  });

  socket.on("next-stranger", () => {
    console.log("⏭ Next Stranger:", socket.id);

    disconnectPartner(socket);

    if (waitingUser === socket) {
      waitingUser = null;
    }

    if (waitingUser) {
      const partner = waitingUser;

      waitingUser = null;

      socket.partner = partner;
      partner.partner = socket;

      socket.emit("stranger-found");
      partner.emit("stranger-found");

      console.log("🟢 New Stranger Connected");
    } else {
      waitingUser = socket;

      socket.emit("searching");

      console.log("🔍 Waiting for new stranger...");
    }
  });

  socket.on("disconnect", () => {
    if (waitingUser === socket) {
      waitingUser = null;
    }

    disconnectPartner(socket);

    console.log("❌ User Disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Socket Server Running on port ${PORT}`);
});
