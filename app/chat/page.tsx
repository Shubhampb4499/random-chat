"use client";

import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import StatusBar from "../../components/StatusBar";
import MessageBubble from "../../components/MessageBubble";
import ReportPopup from "../../components/ReportPopup";
import dynamic from "next/dynamic";

let socket: Socket;
const EmojiPicker = dynamic(
  () => import("emoji-picker-react"),
  {
    ssr: false,
  }
);

export default function ChatPage() {
  const [connected, setConnected] = useState(false);
  const [searching, setSearching] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState(0);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

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
    socket = io("https://random-chat-x93x.onrender.com");

    socket.on("connect", () => {
      console.log("✅ Connected:", socket.id);
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

    socket.on("receive-message", (msg: string) => {
      setStrangerTyping(false);

      setMessages((prev) => [
        ...prev,
        "Stranger: " + msg,
      ]);
    });

    socket.on("typing", () => {
      setStrangerTyping(true);
    });

    socket.on("stop-typing", () => {
      setStrangerTyping(false);
    });

    socket.on("partner-left", () => {
      setConnected(false);
      setSearching(false);
      setStrangerTyping(false);

      setMessages((prev) => [
        ...prev,
        "Stranger left the chat.",
      ]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);
    function startChat() {
    setSearching(true);
    socket.emit("find-stranger");
  }

  function sendMessage() {
    if (!message.trim()) return;

    socket.emit("send-message", message);

    setMessages((prev) => [
      ...prev,
      "You: " + message,
    ]);

    setMessage("");

    socket.emit("stop-typing");
  }

  function nextStranger() {
    setMessages([]);
    setConnected(false);
    setSearching(true);

    socket.emit("next-stranger");
  }
    return (
  <main className="h-[calc(100vh-80px)] bg-gray-950 text-white">

    <div className="h-full max-w-5xl mx-auto flex flex-col px-3 py-3">

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
          bg-gray-900
          rounded-2xl
          border
          border-gray-800
          overflow-y-auto
          p-4
          mt-2
        "
      >

        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            text={msg.replace(/^You:\s|^Stranger:\s/, "")}
            isOwn={msg.startsWith("You:")}
          />
        ))}

        {strangerTyping && (
          <div className="text-gray-400 italic text-sm mb-2">
            ✍️ Stranger is typing...
          </div>
        )}

        <div ref={messagesEndRef} />

      </div>

      <div className="mt-3">

  <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-3 py-2 shadow-lg">

    {/* Emoji */}
    <div className="relative">

      <button
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        className="text-2xl hover:scale-110 transition"
      >
        😊
      </button>

      {showEmojiPicker && (
        <div className="absolute bottom-14 left-0 z-50">
          <EmojiPicker
            onEmojiClick={onEmojiClick}
            width={320}
            height={400}
          />
        </div>
      )}

    </div>

    {/* Input */}

    <input
      type="text"
      value={message}
      onChange={(e) => {
        setMessage(e.target.value);

        socket.emit("typing");

        clearTimeout((window as any).typingTimeout);

        (window as any).typingTimeout = setTimeout(() => {
          socket.emit("stop-typing");
        }, 700);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          sendMessage();
        }
      }}
      placeholder="Type a message..."
      className="flex-1 bg-transparent outline-none text-white placeholder-gray-500 px-2"
    />

    {/* Send */}

    <button
      onClick={sendMessage}
      disabled={!connected}
      className="
        w-11
        h-11
        rounded-full
        bg-blue-600
        hover:bg-blue-700
        disabled:bg-gray-700
        flex
        items-center
        justify-center
        transition
      "
    >
      ➤
    </button>

  </div>

</div>

      {showReport && (
        <ReportPopup
          onClose={() => setShowReport(false)}
          onSubmit={(reason) => {
            alert("Report Submitted: " + reason);

            setShowReport(false);

            socket.emit("next-stranger");
          }}
        />
      )}

    </div>

  </main>
);
}