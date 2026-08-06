"use client";

import dynamic from "next/dynamic";

const EmojiPicker = dynamic(
  () => import("emoji-picker-react"),
  { ssr: false }
);

type ChatInputProps = {
  message: string;
  setMessage: (value: string) => void;
  sendMessage: () => void;
  connected: boolean;
  showEmojiPicker: boolean;
  setShowEmojiPicker: (value: boolean) => void;
  onEmojiClick: (emojiData: { emoji: string }) => void;
  socket: any;
};

export default function ChatInput({
  message,
  setMessage,
  sendMessage,
  connected,
  showEmojiPicker,
  setShowEmojiPicker,
  onEmojiClick,
  socket,
}: ChatInputProps) {
  return (
    <div className="sticky bottom-0 mt-3 bg-gray-950 pt-3">
      <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-3 py-2 shadow-xl">

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

        <input
          type="text"
          value={message}
          placeholder="Type a message..."
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-500 px-2"
          onChange={(e) => {
            setMessage(e.target.value);

            if (!socket) return;

            socket.emit("typing");

            clearTimeout((window as any).typingTimeout);

            (window as any).typingTimeout = setTimeout(() => {
              socket.emit("stop-typing");
            }, 700);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();

              sendMessage();

              socket?.emit("stop-typing");
            }
          }}
        />

        <button
          onClick={() => {
            sendMessage();
            socket?.emit("stop-typing");
          }}
          disabled={!connected}
          className="w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 flex items-center justify-center"
        >
          ➤
        </button>

      </div>
    </div>
  );
}