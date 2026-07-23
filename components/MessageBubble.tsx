type MessageBubbleProps = {
  text: string;
  isOwn: boolean;
};

export default function MessageBubble({
  text,
  isOwn,
}: MessageBubbleProps) {
  return (
    <div
      className={`flex mb-3 ${
        isOwn ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[70%] px-4 py-2 rounded-2xl ${
          isOwn
            ? "bg-blue-600 text-white rounded-br-md"
            : "bg-gray-700 text-white rounded-bl-md"
        }`}
      >
        {text}
      </div>
    </div>
  );
}