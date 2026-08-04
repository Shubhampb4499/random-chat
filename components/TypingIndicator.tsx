export default function TypingIndicator() {
  return (
    <div className="flex justify-start mb-3">

      <div className="bg-gray-700 rounded-2xl rounded-bl-md px-4 py-3">

        <div className="flex items-center gap-1">

          <span className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"></span>

          <span
            className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"
            style={{ animationDelay: "0.15s" }}
          ></span>

          <span
            className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></span>

        </div>

      </div>

    </div>
  );
}