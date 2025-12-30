// // import React, { useState, useEffect, useRef } from "react";
// // import Loader from "../components/AURA_Loader";
// // import IDCARD from "../components/IDCARD";      // MAIN CARD
// // import { FaTrophy } from "react-icons/fa";
// // import { GiDiamondTrophy } from "react-icons/gi";

// // // IMPORT OTHER ID CARDS
// // import SIH_IDCARD from "../assets/ID_CARDS/SIH"
// // import Tekathon_IDCARD from "../assets/ID_CARDS/Tekathon"
// // import Byteverse_IDCARD from "../assets/ID_CARDS/Byteverse"
// // import HackThevault_IDCARD from "../assets/ID_CARDS/HackTheVault"
// // import KrafThink2025 from "../assets/ID_CARDS/KrafThink2025"

// // const TeamAura = () => {
// //   const [loading, setLoading] = useState(true);
// //   const audioRef = useRef(null);

// //   const legacyCards = [SIH_IDCARD ,Tekathon_IDCARD, Byteverse_IDCARD, HackThevault_IDCARD, KrafThink2025 ];

// //   useEffect(() => {
// //     if (audioRef.current) {
// //       const audio = audioRef.current;
// //       audio.currentTime = 1.5;
// //       audio.volume = 0;
// //       audio.play().catch(() => {});
// //       let v = 0;
// //       const fade = setInterval(() => {
// //         v += 0.033;
// //         audio.volume = Math.min(v, 1);
// //         if (v >= 1) clearInterval(fade);
// //       }, 60);
// //     }
// //     const timer = setTimeout(() => setLoading(false), 5100);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   return (
// //     <div className="relative w-full flex bg-black/40 flex-col md:flex-row gap-6 text-white py-10 px-4 sm:px-6 max-h-[85vh] overflow-y-scroll font-mono">

// //       <audio ref={audioRef} src="/Audio/AURA_audio.mp4" />

// //       {loading ? (
// //         <Loader />
// //       ) : (
// //         <div className="relative z-20 w-full min-h-screen px-6 md:px-20 animate-fadeIn">

// //           {/* ---------------- TOP SECTION ---------------- */}
// //           <div className="w-full flex flex-col md:flex-row items-start justify-between gap-14 ">

// //             {/* MAIN ID CARD */}
// //             <div className="w-full md:w-1/2 flex justify-center md:justify-start">
// //               <div className="relative w-full max-w-[500px] h-auto">
// //                 <IDCARD />
// //               </div>
// //             </div>

// //             {/* STORY TEXT */}
// //             <div className="w-full md:w-1/2 space-y-8 md:pt-8">
// //               <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide">
// //                 <span className="text-red-400 font-semibold">Team AURA</span> was built on precision, creativity and ambition.
// //               </p>
// //               <p className="text-lg md:text-xl text-gray-300">
// //                 A spark of curiosity evolved into a powerful identity.
// //               </p>
// //               <p className="text-lg md:text-xl text-gray-400">
// //                 Challenges shaped AURA into a symbol of discipline and innovation.
// //               </p>
// //               <p className="text-lg md:text-xl text-gray-500">
// //                 Led by <span className="font-medium text-red-300">Saurav Dutta</span>, AURA stands stronger than ever.
// //               </p>
// //             </div>
// //           </div>

// //           {/* ---------------- OUR LEGACY ---------------- */}
// //           <div className="w-full mt-20">
// //             <div className="flex items-center gap-3 mb-6">
// //               <GiDiamondTrophy className="text-yellow-400 text-3xl" />
// //               <h2 className="text-3xl font-bold tracking-wide text-yellow-300">OUR LEGACY</h2>
// //             </div>

// //             {/* DYNAMIC GRID OF LEGACY CARDS */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
// //               {legacyCards.map((CardComponent, i) => (
// //                 <div
// //                   key={i}
// //                   className="flex justify-center transform hover:scale-[1.05] transition-all duration-300"
// //                 >
// //                   <div className="w-full max-w-[320px]">
// //                     <CardComponent />
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //         </div>
// //       )}

// //       <style>
// //         {`
// //           @keyframes fadeIn { 
// //             from { opacity: 0; transform: translateY(20px); } 
// //             to { opacity: 1; transform: translateY(0px); }
// //           }
// //           .animate-fadeIn {
// //             animation: fadeIn 1.3s ease-out;
// //           }
// //         `}
// //       </style>
// //     </div>
// //   );
// // };

// // export default TeamAura;



// import React, { useState, useEffect, useRef } from "react";
// import Loader from "../components/AURA_Loader";
// import IDCARD from "../components/IDCARD"; 
// import { FaTrophy } from "react-icons/fa";
// import { GiDiamondTrophy } from "react-icons/gi";

// import SIH_IDCARD from "../assets/ID_CARDS/SIH"
// import Tekathon_IDCARD from "../assets/ID_CARDS/Tekathon"
// import Byteverse_IDCARD from "../assets/ID_CARDS/Byteverse"
// import HackThevault_IDCARD from "../assets/ID_CARDS/HackTheVault"
// import KrafThink2025 from "../assets/ID_CARDS/KrafThink2025"

// const TeamAura = () => {
//   const [loading, setLoading] = useState(true);
//   const audioRef = useRef(null);

//   const legacyCards = [SIH_IDCARD ,Tekathon_IDCARD, Byteverse_IDCARD, HackThevault_IDCARD, KrafThink2025 ];

//   useEffect(() => {
//     if (audioRef.current) {
//       const audio = audioRef.current;
//       audio.currentTime = 1.5;
//       audio.volume = 0;
//       audio.play().catch(() => {});
//       let v = 0;
//       const fade = setInterval(() => {
//         v += 0.033;
//         audio.volume = Math.min(v, 1);
//         if (v >= 1) clearInterval(fade);
//       }, 60);
//     }
//     const timer = setTimeout(() => setLoading(false), 5100);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="relative w-full flex bg-black/60 flex-col md:flex-row gap-6 text-white py-10 px-4 sm:px-6 max-h-[85vh] overflow-y-scroll font-mono premium-bg">

//       <audio ref={audioRef} src="/Audio/AURA_audio.mp4" />

//       {loading ? (
//         <Loader />
//       ) : (
//         <div className="relative z-20 w-full min-h-screen px-6 md:px-20 animate-fadeIn">

//           {/* ---------------- TOP SECTION ---------------- */}
//           <div className="w-full flex flex-col md:flex-row items-start justify-between gap-14 ">

//             {/* MAIN ID CARD */}
//             <div className="w-full md:w-1/2 flex justify-center md:justify-start ">
//               <div className="relative w-full max-w-[500px] h-auto neon-wrapper">
                
//                 {/* RED NEON BEHIND IDCARD */}
//                 <div className="absolute inset-0 neon-red-bg"></div>

//                 <IDCARD className="z-999"/>
//               </div>
//             </div>

//             {/* STORY TEXT */}
//             <div className="w-full md:w-1/2 space-y-8 md:pt-8">
//               <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide">
//                 <span className="text-red-400 font-semibold">Team AURA</span> was built on precision, creativity and ambition.
//               </p>
//               <p className="text-lg md:text-xl text-gray-300">
//                 A spark of curiosity evolved into a powerful identity.
//               </p>
//               <p className="text-lg md:text-xl text-gray-400">
//                 Challenges shaped AURA into a symbol of discipline and innovation.
//               </p>
//               <p className="text-lg md:text-xl text-gray-500">
//                 Led by <span className="font-medium text-red-300">Saurav Dutta</span>, AURA stands stronger than ever.
//               </p>
//             </div>
//           </div>

//           {/* ---------------- OUR LEGACY ---------------- */}
//           <div className="w-full mt-20">
//             <div className="flex items-center gap-3 mb-6">
//               <GiDiamondTrophy className="text-yellow-400 text-3xl" />
//               <h2 className="text-3xl font-bold tracking-wide text-yellow-300">OUR LEGACY</h2>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//               {legacyCards.map((CardComponent, i) => (
//                 <div
//                   key={i}
//                   className="flex justify-center transform hover:scale-[1.05] hover:shadow-neon transition-all duration-300"
//                 >
//                   <div className="w-full max-w-[320px]">
//                     <CardComponent />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       )}

//       <style>
//         {`
//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(20px); }
//             to { opacity: 1; transform: translateY(0px); }
//           }
//           .animate-fadeIn {
//             animation: fadeIn 1.3s ease-out;
//           }

//           /* PREMIUM BACKGROUND */
//           .premium-bg {
//             background: radial-gradient(circle at top, rgba(255,0,70,0.15), transparent 60%), 
//                         radial-gradient(circle at bottom, rgba(255,0,0,0.12), transparent 70%), 
//                         #000000aa;
//           }

//           /* RED NEON UNDER MAIN CARD */
//           .neon-red-bg {
//             background: radial-gradient(circle, rgba(255,0,60,0.45) 0%, rgba(255,0,0,0.12) 55%, transparent 80%);
//             filter: blur(40px);
//             border-radius: 20px;
//             z-index: 0;
//           }

//           .neon-wrapper {
//             position: relative;
//             padding: 20px;
//             border-radius: 18px;
//             backdrop-filter: blur(8px);
//           }

//           .hover-glow:hover {
//             box-shadow: 0 0 25px rgba(255,0,80,0.6);
//           }

//           .hover:shadow-neon:hover {
//             box-shadow: 0 0 25px rgba(255,0,80,0.4),
//                         0 0 45px rgba(255,0,80,0.2);
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default TeamAura;

import React, { useState, useEffect, useRef } from "react";
import Loader from "../components/AURA_Loader";
import IDCARD from "../components/IDCARD";
import { GiDiamondTrophy } from "react-icons/gi";

import SIH_IDCARD from "../assets/ID_CARDS/SIH";
import Tekathon_IDCARD from "../assets/ID_CARDS/Tekathon";
import Byteverse_IDCARD from "../assets/ID_CARDS/Byteverse";
import HackThevault_IDCARD from "../assets/ID_CARDS/HackTheVault";
import KrafThink2025 from "../assets/ID_CARDS/KrafThink2025";

const TeamAura = () => {
  const [loading, setLoading] = useState(true);
  const audioRef = useRef(null);

  const legacyCards = [
    SIH_IDCARD,
    Tekathon_IDCARD,
    Byteverse_IDCARD,
    HackThevault_IDCARD,
    KrafThink2025,
  ];

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

    const timer = setTimeout(() => setLoading(false), 5100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="
      relative w-full flex flex-col md:flex-row gap-6 text-white
       px-4 sm:px-6 max-h-[85vh] overflow-y-scroll font-mono
      
      bg-black
      before:content-[''] before:absolute before:inset-0
      before:bg-[radial-gradient(circle_at_40%_25%,rgba(255,0,40,0.20),transparent_70%)]
      before:blur-[130px] before:opacity-70 before:-z-10
      before:animate-[drift_14s_ease-in-out_infinite]

      after:content-[''] after:absolute after:inset-0
      after:bg-[radial-gradient(circle_at_80%_75%,rgba(255,0,30,0.12),transparent_75%)]
      after:blur-[160px] after:opacity-60 after:-z-10
      after:animate-[drift2_18s_ease-in-out_infinite]
    "
    >
      <audio ref={audioRef} src="/Audio/AURA_audio.mp4" />

      {loading ? (
        <Loader />
      ) : (
        <div className="relative z-20 w-full min-h-screen px-6 md:px-20 animate-fadeIn">

          {/* ---------------- TOP SECTION ---------------- */}
          <div className="w-full flex flex-col md:flex-row items-start justify-between gap-14">

            {/* MAIN ID CARD */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <div
                className="
                relative w-full max-w-[500px] px-6 rounded-2xl
                
                before:content-[''] before:absolute before:inset-0
                before:bg-[radial-gradient(circle,rgba(255,0,50,0.30),transparent_70%)]
                before:blur-[110px] before:-z-10
                before:animate-[drift_10s_ease-in-out_infinite]
              "
              >
                <IDCARD />
              </div>
            </div>

            {/* STORY TEXT */}
            <div className="w-full md:w-1/2 space-y-8 md:pt-8">
              <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide">
                <span className="text-red-400 font-semibold">Team AURA</span>{" "}
                was built on precision, creativity and ambition.
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

          {/* ---------------- OUR LEGACY (PREMIUM EDITION) ---------------- */}
          <div className="w-full mt-28">

            {/* Section Header */}
            <div className="flex flex-col items-start mb-12">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-14 bg-red-500"></div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-red-400 drop-shadow-[0_0_10px_rgba(255,0,50,0.35)]">
                  OUR LEGACY
                </h2>
              </div>
              <p className="text-gray-400 text-lg mt-3 ml-16">
                A timeline of excellence, innovation, and victories.
              </p>
            </div>

            {/* PREMIUM CARD GRID */}
            <div
              className="
              grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 
              gap-14
            "
            >
              {legacyCards.map((CardComponent, i) => (
                <div
                  key={i}
                  className="
                  relative flex justify-center
                  transition-all duration-500 
                  group
                "
                >
                  {/* Background Aura */}
                  <div
                    className="
                    absolute inset-0 rounded-2xl 
                    opacity-0 group-hover:opacity-30
                    blur-[70px]
                    bg-red-600/40
                    transition-all duration-500
                    "
                  ></div>

                  {/* Actual Card */}
                  <div
                    className="
                    relative z-10 
                    w-full max-w-[330px]
                    rounded-xl overflow-hidden

                    bg-black/40
                    backdrop-blur-[6px]
                    border border-white/5

                    shadow-[0_0_20px_rgba(255,0,40,0.15)]
                    group-hover:shadow-[0_0_38px_rgba(255,0,45,0.40)]
                    transform group-hover:scale-[1.06]

                    transition-all duration-500
                  "
                  >
                    <div className="h-[3px] w-full bg-gradient-to-r from-red-500 to-transparent"></div>

                    <div className="px-4">
                      <CardComponent />
                    </div>

                    <div className="h-[2px] w-full bg-gradient-to-l from-red-600/80 to-transparent mt-2 mb-2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      <style>
        {`
          @keyframes drift {
            0% { transform: translateX(0px) translateY(0px); }
            50% { transform: translateX(40px) translateY(-35px); }
            100% { transform: translateX(0px) translateY(0px); }
          }

          @keyframes drift2 {
            0% { transform: translateX(0px) translateY(0px); }
            50% { transform: translateX(-35px) translateY(40px); }
            100% { transform: translateX(0px) translateY(0px); }
          }

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
