import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0d1117] text-white font-mono px-4">
      {/* Radar Circle */}
      <div className="relative w-64 h-64 rounded-full border-4 border-green-400 flex items-center justify-center overflow-hidden animate-spin-slow">
        <div className="absolute w-full h-full rounded-full border-2 border-green-500 opacity-50"></div>
        <div className="absolute w-full h-full rounded-full border-2 border-green-500 opacity-25"></div>
        <div className="absolute w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
      </div>

      {/* Text */}
      <h1 className="text-2xl sm:text-4xl font-bold mt-8 mb-2">Radar Online...</h1>
      <p className="text-gray-400 text-center sm:text-lg max-w-sm">
        AURA's rescue interface is coming soon. Stay tuned while the swarm gets ready!
      </p>
    </div>
  );
};

export default ComingSoon;
