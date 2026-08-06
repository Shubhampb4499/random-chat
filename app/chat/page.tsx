"use client";

import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import StatusBar from "../../components/StatusBar";
import MessageBubble from "../../components/MessageBubble";
import ReportPopup from "../../components/ReportPopup";
import ChatInput from "../../components/ChatInput";
import SearchingAnimation from "../../components/SearchingAnimation";
import TypingIndicator from "../../components/TypingIndicator";

let socket: Socket;

export default function ChatPage() {
  const [connected, setConnected] = useState(false);
  const [searching, setSearching] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState(0);

  const [message, setMessage] = useState("");
  type ChatMessage = {
  id: string;
  text: string;
  sender: "You" | "Stranger";
  delivered: boolean;
};
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const [strangerTyping, setStrangerTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  function onEmojiClick(emojiData: { emoji: string }) {
    setMessage((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false);
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    socket = io("https://random-chat-x93x.onrender.com", {
      transports: ["websocket"],
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
    });

    socket.on("connect", () => {
      console.log("✅ Connected:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("❌ Disconnected");

      setConnected(false);
      setSearching(false);
      setStrangerTyping(false);

      setMessages((prev) => [
  ...prev,
  {
    id: Date.now().toString(),
    text: "Connection lost. Reconnecting...",
    sender: "Stranger",
    delivered: true,
  },
]);
});

    socket.io.on("reconnect", () => {
      console.log("✅ Reconnected");

      setMessages([]);
      setSearching(true);

      socket.emit("find-stranger");
    });

    socket.on("online-users", (count: number) => {
      setOnlineUsers(count);
    });

    socket.on("searching", () => {
      setSearching(true);
      setConnected(false);
    });

    socket.on("stranger-found", () => {
      setMessages([]);
      setSearching(false);
      setConnected(true);
      setStrangerTyping(false);
    });

    socket.on("typing", () => {
      setStrangerTyping(true);
    });

    socket.on("stop-typing", () => {
      setStrangerTyping(false);
    });

  socket.on("receive-message", (data) => {
  setStrangerTyping(false);

  setMessages((prev) => [
    ...prev,
    {
      id: data.id,
      text: data.text,
      sender: "Stranger",
      delivered: true,
    },
  ]);
  socket.emit("message-received-" + data.id);
});
socket.on("message-sent", (id: string) => {
  setMessages((prev) =>
    prev.map((msg) =>
      msg.id === id
        ? {
            ...msg,
            delivered: false,
          }
        : msg
    )
  );
});

socket.on("message-delivered", (id: string) => {
  setMessages((prev) =>
    prev.map((msg) =>
      msg.id === id
        ? {
            ...msg,
            delivered: true,
          }
        : msg
    )
  );
});
    socket.on("partner-left", () => {
      setConnected(false);
      setSearching(false);
      setStrangerTyping(false);

      setMessages((prev) => [
  ...prev,
  {
    id: Date.now().toString(),
    text: "Stranger left the chat.",
    sender: "Stranger",
    delivered: true,
  },
]);

      setTimeout(() => {
        setMessages([]);
        setSearching(true);

        socket.emit("next-stranger");
      }, 3000);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("online-users");
      socket.off("searching");
      socket.off("stranger-found");
      socket.off("receive-message");
      socket.off("typing");
      socket.off("stop-typing");
      socket.off("partner-left");

      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  function startChat() {
    setMessages([]);
    setSearching(true);

    socket.emit("find-stranger");
  }

  function nextStranger() {
    setMessages([]);
    setConnected(false);
    setSearching(true);

    socket.emit("next-stranger");
  }

  function sendMessage() {
    if (!message.trim()) return;
    const messageId = Date.now().toString();
    socket.emit("send-message", {
  id: messageId,
  text: message,
});

    setMessages((prev) => [
  ...prev,
  {
    id: messageId,
    text: message,
    sender: "You",
    delivered: false,
  },
]);
    setMessage("");

    socket.emit("stop-typing");
  }

  return (
    <main className="h-[calc(100dvh-80px)] bg-gray-950 text-white overflow-hidden">
      <div className="h-full max-w-5xl mx-auto flex flex-col px-3 py-3 overflow-hidden">

        <StatusBar
          connected={connected}
          searching={searching}
          onlineUsers={onlineUsers}
        />

        {!connected && !searching && (
          <button
            onClick={startChat}
            className="mt-4 bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-bold w-full"
          >
            🚀 Start Chat
          </button>
        )}

        {connected && (
          <div className="flex flex-wrap gap-3 mt-4 mb-3">

            <button
              onClick={nextStranger}
              className="flex-1 min-w-[160px] bg-red-600 hover:bg-red-700 py-3 rounded-xl"
            >
              ⏭ Next Stranger
            </button>

          <button
              onClick={() => setShowReport(true)}
              className="flex-1 min-w-[160px] bg-orange-600 hover:bg-orange-700 py-3 rounded-xl"
            >
              🚩 Report
            </button>

          </div>
        )}

        <div
          className="
            flex-1
            min-h-0
            bg-gray-900
            rounded-2xl
            border
            border-gray-800
            overflow-y-auto
            p-4
            mt-2
          "
        >
         {searching ? (
            <SearchingAnimation />
          ) : (
            <>
              {messages.map((msg) => (

  <MessageBubble
    key={msg.id}
    text={msg.text}
    isOwn={msg.sender === "You"}
    delivered={msg.delivered}
  />

))}
              {strangerTyping && <TypingIndicator />}

              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {!searching && (
          <ChatInput
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
            connected={connected}
            showEmojiPicker={showEmojiPicker}
            setShowEmojiPicker={setShowEmojiPicker}
            onEmojiClick={onEmojiClick}
            socket={socket}
          />
        )}

        {showReport && (
          <ReportPopup
            onClose={() => setShowReport(false)}
            onSubmit={(reason) => {
              alert("Report Submitted: " + reason);

              setShowReport(false);

              socket.emit("next-stranger");

              setConnected(false);
              setSearching(true);
              setMessages([]);
            }}
          />
        )}

      </div>
    </main>
  );
}