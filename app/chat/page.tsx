"use client";

import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import EmojiPicker from "emoji-picker-react";
import StatusBar from "../../components/StatusBar";
import MessageBubble from "../../components/MessageBubble";

let socket: Socket;

export default function ChatPage() {
  const [connected, setConnected] = useState(false);
  const [searching, setSearching] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState(0);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const [strangerTyping, setStrangerTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  function onEmojiClick(emojiData: { emoji: string }) {
    setMessage((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false);
  }

  useEffect(() => {
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
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center p-6">

      <StatusBar
        connected={connected}
        searching={searching}
        onlineUsers={onlineUsers}
      />

      {!connected && !searching && (
        <button
          onClick={startChat}
          className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-xl font-bold mb-6"
        >
          🚀 Start Chat
        </button>
      )}

      {connected && (
        <button
          onClick={nextStranger}
          className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl mb-4"
        >
          ⏭ Next Stranger
        </button>
      )}

      <div className="w-full max-w-3xl flex-1 bg-gray-900 rounded-2xl p-4 overflow-y-auto mb-4">

        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            text={msg.replace(/^You:\s|^Stranger:\s/, "")}
            isOwn={msg.startsWith("You:")}
          />
        ))}

        {strangerTyping && (
          <div className="text-gray-400 italic mb-2">
            ✍️ Stranger is typing...
          </div>
        )}

        <div ref={messagesEndRef} />

      </div>

      <div className="w-full max-w-3xl flex gap-3">

        <div className="relative">
          <button
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="bg-yellow-500 hover:bg-yellow-600 text-2xl px-4 py-3 rounded-xl"
          >
            😊
          </button>

          {showEmojiPicker && (
            <div className="absolute bottom-16 left-0 z-50">
              <EmojiPicker
                onEmojiClick={onEmojiClick}
                width={320}
                height={400}
              />
            </div>
          )}
        </div>

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
          placeholder="Type your message..."
          className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-xl outline-none"
        />

        <button
          onClick={sendMessage}
          disabled={!connected}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-6 py-3 rounded-xl"
        >
          Send
        </button>

      </div>

    </main>
  );
}