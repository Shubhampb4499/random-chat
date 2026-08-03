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
    <div className="w-full flex items-center justify-between bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 mb-4">

      {/* Left Side */}
      <div>
        {connected ? (
          <div className="text-green-400 font-semibold flex items-center gap-2">
            🟢 Stranger Connected
          </div>
        ) : searching ? (
          <div className="text-yellow-400 font-semibold flex items-center gap-2">
            🔍 Searching for Stranger...
          </div>
        ) : (
          <div className="text-gray-400 font-semibold flex items-center gap-2">
            ⚪ Ready to Chat
          </div>
        )}
      </div>

      {/* Right Side */}
      <div className="text-blue-400 font-semibold whitespace-nowrap">
        👥 {onlineUsers} Online
      </div>

    </div>
  );
}