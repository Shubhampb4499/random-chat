type MessageBubbleProps = {
  text: string;
  isOwn: boolean;
};

export default function MessageBubble({
  text,
  isOwn,
}: MessageBubbleProps) {
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={`w-full flex mb-3 ${
        isOwn ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[82%]
          md:max-w-[60%]
          px-4
          py-3
          rounded-2xl
          shadow
          break-words
          ${
            isOwn
              ? "bg-blue-600 text-white rounded-br-md"
              : "bg-gray-700 text-white rounded-bl-md"
          }
        `}
      >
        <p className="text-sm md:text-base leading-relaxed">
          {text}
        </p>

        <div
          className={`
            text-[10px]
            mt-2
            ${
              isOwn
                ? "text-blue-100 text-right"
                : "text-gray-300"
            }
          `}
        >
          {time}
        </div>
      </div>
    </div>
  );
}