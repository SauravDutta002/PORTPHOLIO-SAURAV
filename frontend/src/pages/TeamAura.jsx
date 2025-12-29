import React, { useState, useEffect, useRef } from "react";
import Loader from "../components/AURA_Loader";
import IDcard from "../components/IDCARD";

const TeamAura = () => {
  const [loading, setLoading] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.currentTime = 1.5;
      audio.volume = 0;
      audio.play().catch(() => {});
      let v = 0;
      const fade = setInterval(() => {
        v += 0.033;
        audio.volume = Math.min(v, 1);
        if (v >= 1) clearInterval(fade);
      }, 60);
    }
    const timer = setTimeout(() => setLoading(false), 5200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full flex bg-black flex-col md:flex-row gap-6 text-white py-10 px-4 sm:px-6 max-h-[84vh] overflow-y-scroll">

      {/* AUDIO */}
      <audio ref={audioRef} src="/Audio/AURA_audio.mp4" />

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
        style={{
          backgroundImage: "url('/Images/clouds_bg.jpg')",
        }}
      ></div>
      
      {loading ? (
        <Loader />
      ) : (
        <div className="relative z-20 w-full min-h-screen px-6 md:px-20 py-10 animate-fadeIn">

          {/* ============= TOP SECTION ============= */}
          <div className="w-full flex flex-col md:flex-row items-start justify-between gap-14 mt-4">

            {/* -------- LEFT : FULL WIDTH ID CARD -------- */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <div className="relative w-full max-w-[500px] h-auto">
                <IDcard />
              </div>
            </div>

            {/* -------- RIGHT : STORY TEXT -------- */}
            <div className="w-full md:w-1/2 space-y-8 md:pt-8">

              <p className="text-xl md:text-2xl leading-relaxed text-gray-200 font-light tracking-wide">
                <span className="font-semibold text-red-400">Team AURA</span> was built on a foundation of precision, creativity, and unbreakable ambition.
              </p>

              <p className="text-lg md:text-[1.25rem] leading-relaxed text-gray-300">
                What began as a spark of curiosity evolved into a powerful identity —
                a team known for crafting futuristic tech and conquering multiple hackathons.
              </p>

              <p className="text-lg md:text-[1.25rem] leading-relaxed text-gray-400">
                The journey wasn’t easy, but each challenge shaped AURA into a symbol of 
                discipline, innovation, and technical mastery.
              </p>

              <p className="text-lg md:text-[1.25rem] leading-relaxed text-gray-500">
                Today, AURA stands stronger than ever — a vision carried with heart, built by skill, 
                and led by <span className="text-red-300 font-medium">Saurav Dutta</span>.
              </p>

            </div>
          </div>

        </div>
      )}

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0px); }
          }

          .animate-fadeIn {
            animation: fadeIn 1.3s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default TeamAura;
