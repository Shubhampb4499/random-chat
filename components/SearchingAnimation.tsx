export default function SearchingAnimation() {
  return (
    <div className="flex flex-col items-center justify-center py-12">

      <div className="relative flex items-center justify-center">

        <span className="absolute w-20 h-20 rounded-full border-4 border-blue-500 animate-ping opacity-40"></span>

        <span className="absolute w-16 h-16 rounded-full border-4 border-blue-400 animate-pulse"></span>

        <span className="w-10 h-10 rounded-full bg-blue-500"></span>

      </div>

      <h2 className="mt-8 text-xl font-semibold text-white">
        Looking for a Stranger...
      </h2>

      <p className="text-gray-400 mt-2 text-center">
        Connecting you with someone new
      </p>

    </div>
  );
}