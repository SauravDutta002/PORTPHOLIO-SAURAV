import React, { useState, useEffect, useRef } from "react";
import Loader from "../components/AURA_Loader";
import IDCARD from "../components/IDCARD";      // MAIN CARD
import { FaTrophy } from "react-icons/fa";
import { GiDiamondTrophy } from "react-icons/gi";

// IMPORT OTHER ID CARDS
import SIH_IDCARD from "../assets/ID_CARDS/SIH"
import Tekathon_IDCARD from "../assets/ID_CARDS/Tekathon"
import Byteverse_IDCARD from "../assets/ID_CARDS/Byteverse"
import HackThevault_IDCARD from "../assets/ID_CARDS/HackTheVault"
import KrafThink2025 from "../assets/ID_CARDS/KrafThink2025"

const TeamAura = () => {
  const [loading, setLoading] = useState(true);
  const audioRef = useRef(null);

  // 🔥 MAKE THE SYSTEM UPGRADABLE
  // Just add new ID card components here — everything works automatically
  const legacyCards = [SIH_IDCARD ,Tekathon_IDCARD, Byteverse_IDCARD, HackThevault_IDCARD, KrafThink2025 ];

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
    <div className="relative w-full flex bg-black/50 flex-col md:flex-row gap-6 text-white py-10 px-4 sm:px-6 max-h-[84vh] overflow-y-scroll font-mono">

      <audio ref={audioRef} src="/Audio/AURA_audio.mp4" />

      {loading ? (
        <Loader />
      ) : (
        <div className="relative z-20 w-full min-h-screen px-6 md:px-20 animate-fadeIn">

          {/* ---------------- TOP SECTION ---------------- */}
          <div className="w-full flex flex-col md:flex-row items-start justify-between gap-14 ">

            {/* MAIN ID CARD */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <div className="relative w-full max-w-[500px] h-auto">
                <IDCARD />
              </div>
            </div>

            {/* STORY TEXT */}
            <div className="w-full md:w-1/2 space-y-8 md:pt-8">
              <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide">
                <span className="text-red-400 font-semibold">Team AURA</span> was built on precision, creativity and ambition.
              </p>
              <p className="text-lg md:text-xl text-gray-300">
                A spark of curiosity evolved into a powerful identity.
              </p>
              <p className="text-lg md:text-xl text-gray-400">
                Challenges shaped AURA into a symbol of discipline and innovation.
              </p>
              <p className="text-lg md:text-xl text-gray-500">
                Led by <span className="font-medium text-red-300">Saurav Dutta</span>, AURA stands stronger than ever.
              </p>
            </div>
          </div>

          {/* ---------------- OUR LEGACY ---------------- */}
          <div className="w-full mt-20">
            <div className="flex items-center gap-3 mb-6">
              <GiDiamondTrophy className="text-yellow-400 text-3xl" />
              <h2 className="text-3xl font-bold tracking-wide text-yellow-300">OUR LEGACY</h2>
            </div>

            {/* DYNAMIC GRID OF LEGACY CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {legacyCards.map((CardComponent, i) => (
                <div
                  key={i}
                  className="flex justify-center transform hover:scale-[1.05] transition-all duration-300"
                >
                  <div className="w-full max-w-[320px]">
                    <CardComponent />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      <style>
        {`
          @keyframes fadeIn { 
            from { opacity: 0; transform: translateY(20px); } 
            to { opacity: 1; transform: translateY(0px); }
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


