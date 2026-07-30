type StatusBarProps = {
  connected: boolean;
  searching: boolean;
  onlineUsers: number;
};

export default function StatusBar({
  connected,
  searching,
  onlineUsers,
}: StatusBarProps) {
  return (
    <div className="w-full max-w-3xl mb-6">
      <h1 className="text-4xl font-bold text-center mb-2">
        💬 ChatNova
      </h1>

      <p className="text-center text-gray-300 mb-4">
        Meet random strangers instantly
      </p>

      <div className="flex flex-col items-center gap-3">
        {connected ? (
          <div className="bg-green-600 px-4 py-2 rounded-full">
            🟢 Stranger Connected
          </div>
        ) : searching ? (
          <div className="bg-yellow-600 px-4 py-2 rounded-full">
            🔍 Searching for Stranger...
          </div>
        ) : (
          <div className="bg-gray-700 px-4 py-2 rounded-full">
            ⚪ Click Start Chat
          </div>
        )}

        <div className="bg-blue-600 px-4 py-2 rounded-full font-semibold">
          👥 Online Users: {onlineUsers}
        </div>
      </div>
    </div>
  );
}