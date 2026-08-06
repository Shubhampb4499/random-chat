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
  origin: "*",
  methods: ["GET", "POST"],
},
});

let waitingUser = null;
let onlineUsers = 0;
const skippedPairs = new Map();

function updateOnlineUsers() {
  io.emit("online-users", onlineUsers);
}

function disconnectPartner(socket) {
  if (!socket.partner) return;

  const partner = socket.partner;

  const pairKey1 = socket.id + "-" + partner.id;
const pairKey2 = partner.id + "-" + socket.id;

skippedPairs.set(pairKey1, Date.now());
skippedPairs.set(pairKey2, Date.now());

  partner.partner = null;
  socket.partner = null;

  partner.emit("partner-left");
}

io.on("connection", (socket) => {

  onlineUsers++;
updateOnlineUsers();

  console.log("✅ User Connected:", socket.id);
  console.log("👥 Online Users:", onlineUsers);

  socket.on("find-stranger", () => {
    if (socket.partner) return;
    if (waitingUser === socket) return;

    if (waitingUser && waitingUser !== socket) {
      const partner = waitingUser;
      const pairKey = socket.id + "-" + partner.id;

if (skippedPairs.has(pairKey)) {
  const skippedAt = skippedPairs.get(pairKey);

  if (Date.now() - skippedAt < 5 * 60 * 1000) {
    socket.emit("searching");
    return;
  } else {
    skippedPairs.delete(pairKey);
    skippedPairs.delete(partner.id + "-" + socket.id);
  }
}

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

  socket.on("send-message", (data) => {
  if (!data) return;
  if (!data.text) return;
  if (!data.text.trim()) return;
  if (data.text.length > 500) return;

  if (socket.partner) {
    // Stranger ला message पाठव
    socket.partner.emit("receive-message", data);

    // Sender ला ✓ Sent
    socket.emit("message-sent", data.id);

    // Stranger ने message receive केल्यावर ✓✓ Delivered
    socket.partner.once("message-received-" + data.id, () => {
      socket.emit("message-delivered", data.id);
    });
  }
});
socket.on("typing", () => {
  if (!socket.partner) return;
  socket.partner.emit("typing");
});

socket.on("stop-typing", () => {
  if (!socket.partner) return;
  socket.partner.emit("stop-typing");
});
  socket.on("next-stranger", () => {
    if (waitingUser === socket) {
    waitingUser = null;
}
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

    if (onlineUsers > 0) {
  onlineUsers--;
}
updateOnlineUsers();

    if (waitingUser === socket) {
      waitingUser = null;
    }

    disconnectPartner(socket);

    console.log("👥 Online Users:", onlineUsers);
    console.log("❌ User Disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Socket Server Running on port ${PORT}`);
});