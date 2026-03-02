// // // import React, { useState, useEffect, useRef } from "react";
// // // import Loader from "../components/AURA_Loader";
// // // import IDCARD from "../components/IDCARD";      // MAIN CARD
// // // import { FaTrophy } from "react-icons/fa";
// // // import { GiDiamondTrophy } from "react-icons/gi";

// // // // IMPORT OTHER ID CARDS
// // // import SIH_IDCARD from "../assets/ID_CARDS/SIH"
// // // import Tekathon_IDCARD from "../assets/ID_CARDS/Tekathon"
// // // import Byteverse_IDCARD from "../assets/ID_CARDS/Byteverse"
// // // import HackThevault_IDCARD from "../assets/ID_CARDS/HackTheVault"
// // // import KrafThink2025 from "../assets/ID_CARDS/KrafThink2025"

// // // const TeamAura = () => {
// // //   const [loading, setLoading] = useState(true);
// // //   const audioRef = useRef(null);

// // //   const legacyCards = [SIH_IDCARD ,Tekathon_IDCARD, Byteverse_IDCARD, HackThevault_IDCARD, KrafThink2025 ];

// // //   useEffect(() => {
// // //     if (audioRef.current) {
// // //       const audio = audioRef.current;
// // //       audio.currentTime = 1.5;
// // //       audio.volume = 0;
// // //       audio.play().catch(() => {});
// // //       let v = 0;
// // //       const fade = setInterval(() => {
// // //         v += 0.033;
// // //         audio.volume = Math.min(v, 1);
// // //         if (v >= 1) clearInterval(fade);
// // //       }, 60);
// // //     }
// // //     const timer = setTimeout(() => setLoading(false), 5100);
// // //     return () => clearTimeout(timer);
// // //   }, []);

// // //   return (
// // //     <div className="relative w-full flex bg-black/40 flex-col md:flex-row gap-6 text-white py-10 px-4 sm:px-6 max-h-[85vh] overflow-y-scroll font-mono">

// // //       <audio ref={audioRef} src="/Audio/AURA_audio.mp4" />

// // //       {loading ? (
// // //         <Loader />
// // //       ) : (
// // //         <div className="relative z-20 w-full min-h-screen px-6 md:px-20 animate-fadeIn">

// // //           {/* ---------------- TOP SECTION ---------------- */}
// // //           <div className="w-full flex flex-col md:flex-row items-start justify-between gap-14 ">

// // //             {/* MAIN ID CARD */}
// // //             <div className="w-full md:w-1/2 flex justify-center md:justify-start">
// // //               <div className="relative w-full max-w-[500px] h-auto">
// // //                 <IDCARD />
// // //               </div>
// // //             </div>

// // //             {/* STORY TEXT */}
// // //             <div className="w-full md:w-1/2 space-y-8 md:pt-8">
// // //               <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide">
// // //                 <span className="text-red-400 font-semibold">Team AURA</span> was built on precision, creativity and ambition.
// // //               </p>
// // //               <p className="text-lg md:text-xl text-gray-300">
// // //                 A spark of curiosity evolved into a powerful identity.
// // //               </p>
// // //               <p className="text-lg md:text-xl text-gray-400">
// // //                 Challenges shaped AURA into a symbol of discipline and innovation.
// // //               </p>
// // //               <p className="text-lg md:text-xl text-gray-500">
// // //                 Led by <span className="font-medium text-red-300">Saurav Dutta</span>, AURA stands stronger than ever.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           {/* ---------------- OUR LEGACY ---------------- */}
// // //           <div className="w-full mt-20">
// // //             <div className="flex items-center gap-3 mb-6">
// // //               <GiDiamondTrophy className="text-yellow-400 text-3xl" />
// // //               <h2 className="text-3xl font-bold tracking-wide text-yellow-300">OUR LEGACY</h2>
// // //             </div>

// // //             {/* DYNAMIC GRID OF LEGACY CARDS */}
// // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
// // //               {legacyCards.map((CardComponent, i) => (
// // //                 <div
// // //                   key={i}
// // //                   className="flex justify-center transform hover:scale-[1.05] transition-all duration-300"
// // //                 >
// // //                   <div className="w-full max-w-[320px]">
// // //                     <CardComponent />
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //         </div>
// // //       )}

// // //       <style>
// // //         {`
// // //           @keyframes fadeIn { 
// // //             from { opacity: 0; transform: translateY(20px); } 
// // //             to { opacity: 1; transform: translateY(0px); }
// // //           }
// // //           .animate-fadeIn {
// // //             animation: fadeIn 1.3s ease-out;
// // //           }
// // //         `}
// // //       </style>
// // //     </div>
// // //   );
// // // };

// // // export default TeamAura;



// // import React, { useState, useEffect, useRef } from "react";
// // import Loader from "../components/AURA_Loader";
// // import IDCARD from "../components/IDCARD"; 
// // import { FaTrophy } from "react-icons/fa";
// // import { GiDiamondTrophy } from "react-icons/gi";

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
// //     <div className="relative w-full flex bg-black/60 flex-col md:flex-row gap-6 text-white py-10 px-4 sm:px-6 max-h-[85vh] overflow-y-scroll font-mono premium-bg">

// //       <audio ref={audioRef} src="/Audio/AURA_audio.mp4" />

// //       {loading ? (
// //         <Loader />
// //       ) : (
// //         <div className="relative z-20 w-full min-h-screen px-6 md:px-20 animate-fadeIn">

// //           {/* ---------------- TOP SECTION ---------------- */}
// //           <div className="w-full flex flex-col md:flex-row items-start justify-between gap-14 ">

// //             {/* MAIN ID CARD */}
// //             <div className="w-full md:w-1/2 flex justify-center md:justify-start ">
// //               <div className="relative w-full max-w-[500px] h-auto neon-wrapper">
                
// //                 {/* RED NEON BEHIND IDCARD */}
// //                 <div className="absolute inset-0 neon-red-bg"></div>

// //                 <IDCARD className="z-999"/>
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

// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
// //               {legacyCards.map((CardComponent, i) => (
// //                 <div
// //                   key={i}
// //                   className="flex justify-center transform hover:scale-[1.05] hover:shadow-neon transition-all duration-300"
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

// //           /* PREMIUM BACKGROUND */
// //           .premium-bg {
// //             background: radial-gradient(circle at top, rgba(255,0,70,0.15), transparent 60%), 
// //                         radial-gradient(circle at bottom, rgba(255,0,0,0.12), transparent 70%), 
// //                         #000000aa;
// //           }

// //           /* RED NEON UNDER MAIN CARD */
// //           .neon-red-bg {
// //             background: radial-gradient(circle, rgba(255,0,60,0.45) 0%, rgba(255,0,0,0.12) 55%, transparent 80%);
// //             filter: blur(40px);
// //             border-radius: 20px;
// //             z-index: 0;
// //           }

// //           .neon-wrapper {
// //             position: relative;
// //             padding: 20px;
// //             border-radius: 18px;
// //             backdrop-filter: blur(8px);
// //           }

// //           .hover-glow:hover {
// //             box-shadow: 0 0 25px rgba(255,0,80,0.6);
// //           }

// //           .hover:shadow-neon:hover {
// //             box-shadow: 0 0 25px rgba(255,0,80,0.4),
// //                         0 0 45px rgba(255,0,80,0.2);
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
// import { GiDiamondTrophy } from "react-icons/gi";

// import SIH_IDCARD from "../assets/ID_CARDS/SIH";
// import Tekathon_IDCARD from "../assets/ID_CARDS/Tekathon";
// import Byteverse_IDCARD from "../assets/ID_CARDS/Byteverse";
// import HackThevault_IDCARD from "../assets/ID_CARDS/HackTheVault";
// import KrafThink2025 from "../assets/ID_CARDS/KrafThink2025";

// const TeamAura = () => {
//   const [loading, setLoading] = useState(true);
//   const audioRef = useRef(null);

//   const legacyCards = [
//     SIH_IDCARD,
//     Tekathon_IDCARD,
//     Byteverse_IDCARD,
//     HackThevault_IDCARD,
//     KrafThink2025,
//   ];

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
//     <div
//       className="
//       relative w-full flex flex-col md:flex-row gap-6 text-white
//        px-4 sm:px-6 max-h-[85vh] overflow-y-scroll font-mono
      
//       bg-black
//       before:content-[''] before:absolute before:inset-0
//       before:bg-[radial-gradient(circle_at_40%_25%,rgba(255,0,40,0.20),transparent_70%)]
//       before:blur-[130px] before:opacity-70 before:-z-10
//       before:animate-[drift_14s_ease-in-out_infinite]

//       after:content-[''] after:absolute after:inset-0
//       after:bg-[radial-gradient(circle_at_80%_75%,rgba(255,0,30,0.12),transparent_75%)]
//       after:blur-[160px] after:opacity-60 after:-z-10
//       after:animate-[drift2_18s_ease-in-out_infinite]
//     "
//     >
//       <audio ref={audioRef} src="/Audio/AURA_audio.mp4" />

//       {loading ? (
//         <Loader />
//       ) : (
//         <div className="relative z-20 w-full min-h-screen px-6 md:px-20 animate-fadeIn">

//           {/* ---------------- TOP SECTION ---------------- */}
//           <div className="w-full flex flex-col md:flex-row items-start justify-between gap-14">

//             {/* MAIN ID CARD */}
//             <div className="w-full md:w-1/2 flex justify-center md:justify-start">
//               <div
//                 className="
//                 relative w-full max-w-[500px] px-6 rounded-2xl
                
//                 before:content-[''] before:absolute before:inset-0
//                 before:bg-[radial-gradient(circle,rgba(255,0,50,0.30),transparent_70%)]
//                 before:blur-[110px] before:-z-10
//                 before:animate-[drift_10s_ease-in-out_infinite]
//               "
//               >
//                 <IDCARD />
//               </div>
//             </div>

//             {/* STORY TEXT */}
//             <div className="w-full md:w-1/2 space-y-8 md:pt-8">
//               <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide">
//                 <span className="text-red-400 font-semibold">Team AURA</span>{" "}
//                 was built on precision, creativity and ambition.
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

//           {/* ---------------- OUR LEGACY (PREMIUM EDITION) ---------------- */}
//           <div className="w-full mt-28">

//             {/* Section Header */}
//             <div className="flex flex-col items-start mb-12">
//               <div className="flex items-center gap-4">
//                 <div className="h-[2px] w-14 bg-red-500"></div>
//                 <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-red-400 drop-shadow-[0_0_10px_rgba(255,0,50,0.35)]">
//                   OUR LEGACY
//                 </h2>
//               </div>
//               <p className="text-gray-400 text-lg mt-3 ml-16">
//                 A timeline of excellence, innovation, and victories.
//               </p>
//             </div>

//             {/* PREMIUM CARD GRID */}
//             <div
//               className="
//               grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 
//               gap-14
//             "
//             >
//               {legacyCards.map((CardComponent, i) => (
//                 <div
//                   key={i}
//                   className="
//                   relative flex justify-center
//                   transition-all duration-500 
//                   group
//                 "
//                 >
//                   {/* Background Aura */}
//                   <div
//                     className="
//                     absolute inset-0 rounded-2xl 
//                     opacity-0 group-hover:opacity-30
//                     blur-[70px]
//                     bg-red-600/40
//                     transition-all duration-500
//                     "
//                   ></div>

//                   {/* Actual Card */}
//                   <div
//                     className="
//                     relative z-10 
//                     w-full max-w-[330px]
//                     rounded-xl overflow-hidden

//                     bg-black/40
//                     backdrop-blur-[6px]
//                     border border-white/5

//                     shadow-[0_0_20px_rgba(255,0,40,0.15)]
//                     group-hover:shadow-[0_0_38px_rgba(255,0,45,0.40)]
//                     transform group-hover:scale-[1.06]

//                     transition-all duration-500
//                   "
//                   >
//                     <div className="h-[3px] w-full bg-gradient-to-r from-red-500 to-transparent"></div>

//                     <div className="px-4">
//                       <CardComponent />
//                     </div>

//                     <div className="h-[2px] w-full bg-gradient-to-l from-red-600/80 to-transparent mt-2 mb-2"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       )}

//       <style>
//         {`
//           @keyframes drift {
//             0% { transform: translateX(0px) translateY(0px); }
//             50% { transform: translateX(40px) translateY(-35px); }
//             100% { transform: translateX(0px) translateY(0px); }
//           }

//           @keyframes drift2 {
//             0% { transform: translateX(0px) translateY(0px); }
//             50% { transform: translateX(-35px) translateY(40px); }
//             100% { transform: translateX(0px) translateY(0px); }
//           }

//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(20px); }
//             to { opacity: 1; transform: translateY(0px); }
//           }

//           .animate-fadeIn {
//             animation: fadeIn 1.3s ease-out;
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

/* ─── Data ─────────────────────────────────────────────────────── */
const LEGACY = [
  { Card: SIH_IDCARD,          label: "Smart India Hackathon", year: "2025", rank: "Finalists",  color: "#4ec9b0" },
  { Card: Tekathon_IDCARD,     label: "Tekathon",              year: "2025", rank: "Winners",    color: "#dcdcaa" },
  { Card: Byteverse_IDCARD,    label: "Byteverse",             year: "2025", rank: "Top 3",      color: "#9cdcfe" },
  { Card: HackThevault_IDCARD, label: "Hack The Vault",        year: "2025", rank: "Winners",    color: "#dcdcaa" },
  { Card: KrafThink2025,       label: "KrafThink",             year: "2025", rank: "Winners",  color: "#c586c0" },
];

const STATS = [
  { value: "15+", label: "hackathons",    token: "const" },
  { value: "5",  label: "championships", token: "let"   },
  { value: "2+", label: "years_active",  token: "var"   },
  { value: "∞",  label: "ambition",      token: "fn"    },
];

const CODE_LINES = [
  { code: `import React, { useState, useEffect } from 'react';`, color: "#569cd6"  },
  { code: `import { TeamAura } from './components/AURA';`,        color: "#9cdcfe"  },
  { code: ``,                                                      color: ""         },
  { code: `const team = {`,                                        color: "#d4d4d4"  },
  { code: `  name: "AURA",`,                                       color: "#ce9178"  },
  { code: `  lead: "Saurav Dutta",`,                               color: "#ce9178"  },
  { code: `  founded: 2022,`,                                      color: "#b5cea8"  },
  { code: `  wins: Infinity,`,                                     color: "#b5cea8"  },
  { code: `};`,                                                    color: "#d4d4d4"  },
  { code: ``,                                                      color: ""         },
  { code: `function buildLegacy(challenges) {`,                    color: "#dcdcaa"  },
  { code: `  return challenges.map(c => c.overcome());`,           color: "#d4d4d4"  },
  { code: `}`,                                                     color: "#d4d4d4"  },
  { code: ``,                                                      color: ""         },
  { code: `// precision · creativity · ambition`,                  color: "#6a9955"  },
];

/* ─── Animated counter ─────────────────────────────────────────── */
const Counter = ({ target }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const isNum = !isNaN(parseInt(target));
    if (!isNum) { setVal(target); return; }
    const end = parseInt(target);
    let n = 0;
    const step = Math.ceil(end / 40);
    const t = setInterval(() => {
      n += step;
      if (n >= end) { setVal(end); clearInterval(t); }
      else setVal(n);
    }, 40);
    return () => clearInterval(t);
  }, [target]);
  return <>{isNaN(parseInt(target)) ? target : val}</>;
};

/* ─── Main ─────────────────────────────────────────────────────── */
const TeamAura = () => {
  const [loading, setLoading]           = useState(true);
  const [visible, setVisible]           = useState(false);
  const [hovered, setHovered]           = useState(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const audioRef = useRef(null);
  const statsRef = useRef(null);

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
    const t1 = setTimeout(() => setLoading(false), 5100);
    const t2 = setTimeout(() => setVisible(true), 5300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    if (!statsRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVisible(true); },
      { threshold: 0.2 }
    );
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, [loading]);

  return (
    <div className="vsc-root">
      <audio ref={audioRef} src="/Audio/AURA_audio.mp4" />

      {loading ? <Loader /> : (
        <>
          {/* ── Tab Bar ── */}
         

          {/* ── Editor ── */}
          <div className={`vsc-editor ${visible ? "is-visible" : ""}`}>

            {/* Gutter */}
            <div className="vsc-gutter" aria-hidden="true">
              {Array.from({ length: 52 }, (_, i) => (
                <div key={i} className="gutter-ln">{i + 1}</div>
              ))}
            </div>

            {/* Faint code background */}
            <div className="vsc-code-bg" aria-hidden="true">
              {CODE_LINES.map(({ code, color }, i) => (
                <div key={i} className="bg-code-line" style={{ color: color || "transparent" }}>
                  {code || "\u00a0"}
                </div>
              ))}
            </div>

            {/* ── Actual content ── */}
            <div className="vsc-content">

              {/* ══ HERO ══ */}
              <section className="hero-section">
                <div className="hero-left">

                  {/* breadcrumb */}
                  <div className="vsc-breadcrumb">
                    <span className="bc-dim">src</span>
                    <span className="bc-sep"> › </span>
                    <span className="bc-dim">pages</span>
                    <span className="bc-sep"> › </span>
                    <span className="bc-active">TeamAura.jsx</span>
                  </div>

                  {/* JSDoc comment */}
                  <pre className="jsdoc">
{`/**
 * @team     AURA
 * @location Chandigarh, India
 * @since    2024
 */`}
                  </pre>

                  {/* Big title */}
                  <div className="hero-decl">
                    <span className="kw-blue">const </span>
                    <span className="kw-yellow">TeamAura </span>
                    <span className="kw-white">= </span>
                    <span className="kw-blue">() =&gt; </span>
                    <span className="kw-white">{"{"}</span>
                  </div>

                  <h1 className="hero-name">
                    TEAM<br />
                    <span className="hero-aura">AURA<span className="vsc-cursor">|</span></span>
                  </h1>

                  {/* object props */}
                  <div className="prop-lines">
                    <div className="prop-row" style={{ "--d": "0.1s" }}>
                      <span className="prop-key">lead</span>
                      <span className="kw-white">: </span>
                      <span className="prop-str">"Saurav Dutta"</span>
                      <span className="prop-punc">,</span>
                    </div>
                    <div className="prop-row" style={{ "--d": "0.2s" }}>
                      <span className="prop-key">mission</span>
                      <span className="kw-white">: </span>
                      <span className="prop-str">"precision &amp; innovation"</span>
                      <span className="prop-punc">,</span>
                    </div>
                    <div className="prop-row" style={{ "--d": "0.3s" }}>
                      <span className="prop-key">active</span>
                      <span className="kw-white">: </span>
                      <span className="prop-bool">true</span>
                      <span className="prop-punc">,</span>
                    </div>
                    <div className="prop-row" style={{ "--d": "0.4s" }}>
                      <span className="prop-key">wins</span>
                      <span className="kw-white">: </span>
                      <span className="prop-num">Infinity</span>
                    </div>
                  </div>

                  <div className="hero-close">
                    <span className="kw-white">{"}"}</span>
                  </div>
                </div>

                {/* ID card panel */}
                <div className="hero-right">
                  <div className="panel-titlebar">
                    <div className="panel-dots">
                      <span className="pdot" style={{ background: "#f14c4c" }} />
                      <span className="pdot" style={{ background: "#e5c07b" }} />
                      <span className="pdot" style={{ background: "#98c379" }} />
                    </div>
                    <span className="panel-name">AURA_ID.card</span>
                  </div>
                  <div className="idcard-wrap">
                    <IDCARD />
                  </div>
                </div>
              </section>

              {/* ══ STATS ══ */}
              <div className="stats-section" ref={statsRef}>
                <div className="stats-label">
                  <span className="comment-green">// — team.stats() ——————————————</span>
                </div>
                <div className="stats-grid">
                  {STATS.map(({ value, label, token }, i) => (
                    <div key={i} className="stat-block" style={{ "--i": i }}>
                      <div className="stat-decl">
                        <span className="kw-blue">{token} </span>
                        <span className="kw-yellow">{label} </span>
                        <span className="kw-white">= </span>
                      </div>
                      <div className="stat-value">
                        {statsVisible ? <Counter target={value} /> : "0"}
                        {value.includes("+") ? "+" : ""}
                      </div>
                      <span className="prop-punc">;</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ══ LEGACY ══ */}
              <section className="legacy-section">
                <pre className="jsdoc" style={{ marginBottom: "1rem" }}>
{`/**
 * @section OurLegacy
 * @desc    A timeline of victories
 */`}
                </pre>

                <div className="legacy-heading-row">
                  <GiDiamondTrophy className="trophy-icon" />
                  <h2 className="legacy-heading">
                    <span className="kw-blue">export </span>
                    <span className="kw-yellow">OurLegacy</span>
                  </h2>
                </div>

                <div className="legacy-grid">
                  {LEGACY.map(({ Card, label, year, rank, color }, i) => (
                    <article
                      key={i}
                      className={`legacy-card ${hovered === i ? "is-hovered" : ""}`}
                      style={{ "--i": i, "--accent": color }}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {/* titlebar */}
                      <div className="card-titlebar">
                        <div className="card-dots">
                          <span className="cdot" style={{ background: "#f14c4c" }} />
                          <span className="cdot" style={{ background: "#e5c07b" }} />
                          <span className="cdot" style={{ background: "#98c379" }} />
                        </div>
                        <span className="card-fname">{label.replace(/\s/g, "_")}.jsx</span>
                      </div>

                      {/* mini code */}
                      <div className="card-code">
                        <span className="kw-blue">const </span>
                        <span style={{ color }}>{label.replace(/\s/g, "")} </span>
                        <span className="kw-white">{"= {"}</span>
                        <div className="card-cprops">
                          <span className="prop-key">year</span>
                          <span className="kw-white">: </span>
                          <span className="prop-num">{year}</span>
                          <span className="prop-punc">, </span>
                          <span className="prop-key">rank</span>
                          <span className="kw-white">: </span>
                          <span className="prop-str">"{rank}"</span>
                        </div>
                        <span className="kw-white">{"}"}</span>
                      </div>

                      {/* image */}
                      <div className="card-img">
                        <Card />
                      </div>

                      {/* footer */}
                      <div className="card-footer">
                        <span className="card-badge" style={{ color, borderColor: color + "55", background: color + "11" }}>
                          {rank}
                        </span>
                        <span className="card-yr">{year}</span>
                      </div>

                      {/* hover glow */}
                      <div
                        className="card-glow"
                        style={{ background: `radial-gradient(circle at 50% 80%, ${color}18, transparent 65%)` }}
                      />
                    </article>
                  ))}
                </div>
              </section>

              {/* spacing for statusbar */}
              <div style={{ height: "2rem" }} />
            </div>
          </div>

          {/* ── Status Bar ── */}
          
        </>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Inter:wght@400;700;900&display=swap');

        /* ── Tokens ── */
        :root {
       
       
          --border:  #3c3c3c;
          --border2: #454545;
          --fg:      #d4d4d4;
          --fg-dim:  #858585;
          --blue:    #569cd6;
          --blue2:   #9cdcfe;
          --yellow:  #dcdcaa;
          --green:   #6a9955;
          --orange:  #ce9178;
          --num:     #b5cea8;
          --purple:  #c586c0;
          --status:  #007acc;
        }

        /* ── Root ── */
        .vsc-root {
          position: relative;
          width: 100%;
          max-height: 85vh;
          overflow-y: scroll;
          overflow-x: hidden;
          background: var(--bg);
          color: var(--fg);
          font-family: 'JetBrains Mono', 'Consolas', monospace;
          scrollbar-width: thin;
          scrollbar-color: var(--border2) var(--bg2);
        }
        .vsc-root::-webkit-scrollbar       { width: 10px; }
        .vsc-root::-webkit-scrollbar-track { background: var(--bg2); }
        .vsc-root::-webkit-scrollbar-thumb { background: var(--border2); }

        /* ── Tab bar ── */
        .vsc-tabbar {
          position: sticky; top: 0; z-index: 100;
          display: flex;
          background: var(--bg2);
          border-bottom: 1px solid var(--border);
          overflow-x: auto;
          scrollbar-width: none;
        }
        .vsc-tab {
          display: flex; align-items: center; gap: .45rem;
          padding: .48rem 1.1rem;
          font-size: .77rem;
          color: var(--fg-dim);
          background: var(--bg3);
          border-right: 1px solid var(--border);
          cursor: pointer;
          white-space: nowrap;
          transition: background .15s;
          user-select: none;
        }
        .vsc-tab.active {
          background: var(--bg);
          color: var(--fg);
          border-top: 1px solid var(--status);
          margin-top: 0;
        }
        .tab-icon  { color: #61dafb; font-size: .68rem; }
        .tab-dim   { color: var(--fg-dim); }
        .tab-dot   { width:6px;height:6px;border-radius:50%;background:var(--fg-dim); }

        /* ── Editor shell ── */
        .vsc-editor {
          display: flex;
          min-height: calc(85vh - 22px - 35px);
          opacity: 0; transform: translateY(14px);
          transition: opacity .85s ease, transform .85s ease;
        }
        .vsc-editor.is-visible { opacity:1; transform:none; }

        /* ── Gutter ── */
        .vsc-gutter {
          flex-shrink: 0;
          width: 50px;
          padding: 2rem 1rem 0 0;
          text-align: right;
          background: var(--bg);
          border-right: 1px solid rgba(255,255,255,.03);
          user-select: none;
          position: sticky; left: 0; z-index: 1;
        }
        .gutter-ln {
          font-size: .7rem;
          line-height: 1.95;
          color: var(--fg-dim);
        }

        /* ── Faint code BG ── */
        .vsc-code-bg {
          position: absolute;
          top: 2rem; left: 50px;
          pointer-events: none;
          z-index: 0;
          opacity: .055;
          padding-left: 1.5rem;
        }
        .bg-code-line {
          font-size: .75rem;
          line-height: 1.95;
          white-space: pre;
          letter-spacing: 0;
        }

        /* ── Main content ── */
        .vsc-content {
          flex: 1;
          position: relative; z-index: 2;
          padding: 2rem clamp(1rem, 4vw, 3.5rem) 1rem 1.5rem;
          max-width: 1100px;
        }

        /* ══ HERO ══ */
        .hero-section {
          display: flex; flex-direction: column; gap: 2.5rem;
          margin-bottom: 4rem;
        }
        @media(min-width:900px) {
          .hero-section { flex-direction: row; align-items: flex-start; gap: 4rem; }
        }
        .hero-left { flex: 1; }

        .vsc-breadcrumb {
          display: flex; align-items: center;
          font-size: .7rem; color: var(--fg-dim);
          margin-bottom: 1.6rem;
        }
        .bc-sep    { color: var(--border2); margin: 0 .2rem; }
        .bc-active { color: var(--fg); }

        .jsdoc {
          font-family: 'JetBrains Mono', monospace;
          font-size: .75rem;
          line-height: 1.75;
          color: var(--green);
          margin: 0 0 1.2rem;
          white-space: pre;
        }

        .hero-decl  { font-size: .8rem; margin-bottom: .5rem; letter-spacing: .01em; }
        .hero-close { font-size: .8rem; margin-top: .5rem; }

        .hero-name {
          font-family: 'Inter', sans-serif;
          font-size: clamp(4.5rem, 13vw, 9rem);
          font-weight: 900;
          line-height: .9;
          color: var(--fg);
          letter-spacing: -.03em;
          margin: .3rem 0 1rem;
        }
        .hero-aura {
          color: transparent;
          -webkit-text-stroke: 1.8px var(--blue);
          position: relative;
        }
        .vsc-cursor {
          display: inline-block;
          font-family: 'Inter', sans-serif;
          font-weight: 100;
          -webkit-text-stroke: 0;
          color: var(--fg-dim);
          animation: blink 1.1s step-end infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        .prop-lines {
          display: flex; flex-direction: column; gap: .55rem;
          padding-left: 1.4rem;
          border-left: 2px solid rgba(86,156,214,.15);
          font-size: .8rem;
          margin-bottom: .6rem;
        }
        .prop-row {
          display: flex; align-items: center; gap: .3rem; flex-wrap: wrap;
          opacity: 0; transform: translateX(-6px);
          animation: fadeSlide .45s ease forwards;
          animation-delay: var(--d, 0s);
        }
        @keyframes fadeSlide { to { opacity:1; transform:none; } }

        .kw-blue   { color: var(--blue); }
        .kw-yellow { color: var(--yellow); }
        .kw-white  { color: var(--fg); }
        .prop-key  { color: var(--blue2); }
        .prop-str  { color: var(--orange); }
        .prop-bool { color: var(--blue); }
        .prop-num  { color: var(--num); }
        .prop-punc { color: var(--fg-dim); }
        .comment-green { color: var(--green); }

        /* hero right */
        .hero-right {
          flex: 0 0 auto;
          display: flex; flex-direction: column; align-items: center;
        }
        .panel-titlebar {
          display: flex; align-items: center; gap: .5rem;
          width: 100%; max-width: clamp(230px, 34vw, 390px);
          background: var(--bg3);
          border: 1px solid var(--border);
          border-bottom: none;
          border-radius: 7px 7px 0 0;
          padding: .45rem .8rem;
        }
        .panel-dots { display:flex;gap:.3rem; }
        .pdot { width:10px;height:10px;border-radius:50%;flex-shrink:0; }
        .panel-name { font-size: .7rem; color: var(--fg-dim); margin-left:.3rem; }

        .idcard-wrap {
          width: clamp(230px, 34vw, 390px);
          background: var(--bg3);
          border: 1px solid var(--border);
          border-radius: 0 0 9px 9px;
          padding: 1.1rem;
          box-shadow: 0 18px 60px rgba(0,0,0,.55);
          transition: box-shadow .3s, transform .3s;
        }
        .idcard-wrap:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 80px rgba(0,0,0,.7), 0 0 28px rgba(86,156,214,.12);
        }

        /* ══ STATS ══ */
        .stats-section { margin-bottom: 4rem; }
        .stats-label   { font-size: .75rem; margin-bottom: .8rem; }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: .85rem;
        }
        @media(min-width:640px) { .stats-grid { grid-template-columns: repeat(4,1fr); } }

        .stat-block {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 5px;
          padding: 1rem .9rem;
          font-size: .77rem;
          opacity: 0; transform: translateY(12px);
          animation: fadeSlide .55s ease forwards;
          animation-delay: calc(var(--i) * 0.07s + .1s);
          transition: border-color .2s, background .2s;
        }
        .stat-block:hover {
          border-color: rgba(86,156,214,.4);
          background: rgba(86,156,214,.04);
        }
        .stat-decl { margin-bottom: .25rem; }
        .stat-value {
          font-family: 'Inter', sans-serif;
          font-size: 2.4rem;
          font-weight: 900;
          color: var(--num);
          line-height: 1;
          display: block;
        }

        /* ══ LEGACY ══ */
        .legacy-section  { margin-bottom: 3rem; }
        .legacy-heading-row {
          display: flex; align-items: center; gap: 1rem;
          margin-bottom: 2rem;
        }
        .trophy-icon {
          font-size: 2rem;
          color: var(--yellow);
          filter: drop-shadow(0 0 10px rgba(220,220,170,.3));
        }
        .legacy-heading {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1.7rem, 5vw, 3rem);
          font-weight: 900;
          margin: 0; line-height: 1;
        }

        .legacy-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media(min-width:580px)  { .legacy-grid { grid-template-columns: repeat(2,1fr); } }
        @media(min-width:1050px) { .legacy-grid { grid-template-columns: repeat(3,1fr); } }

        .legacy-card {
          position: relative;
          display: flex; flex-direction: column;
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 7px;
          overflow: hidden;
          cursor: pointer;
          opacity: 0; transform: translateY(20px);
          animation: fadeSlide .65s ease forwards;
          animation-delay: calc(var(--i) * 0.06s + .1s);
          transition: border-color .3s, box-shadow .3s, transform .3s;
        }
        .legacy-card:hover, .legacy-card.is-hovered {
          border-color: var(--accent, var(--blue));
          box-shadow: 0 12px 40px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.04);
          transform: translateY(-5px);
        }

        .card-titlebar {
          display: flex; align-items: center; gap: .5rem;
          padding: .48rem .8rem;
          background: var(--bg3);
          border-bottom: 1px solid var(--border);
        }
        .card-dots { display:flex; gap:.3rem; }
        .cdot { width:9px;height:9px;border-radius:50%;flex-shrink:0; }
        .card-fname { font-size: .67rem; color: var(--fg-dim); }

        .card-code {
          padding: .65rem .85rem .35rem;
          font-size: .7rem; line-height: 1.65;
        }
        .card-cprops { padding-left: 1.1rem; }

        .card-img {
          flex: 1;
          padding: .4rem .85rem;
          overflow: hidden;
        }

        .card-footer {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem .85rem;
          border-top: 1px solid var(--border);
          font-size: .68rem;
        }
        .card-badge {
          padding: .15rem .6rem;
          border: 1px solid;
          border-radius: 3px;
          font-size: .62rem;
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        .card-yr { color: var(--fg-dim); }

        .card-glow {
          position: absolute; inset: 0;
          pointer-events: none;
          opacity: 0;
          transition: opacity .35s;
        }
        .legacy-card:hover .card-glow { opacity: 1; }

        /* ── Status bar ── */
        .vsc-statusbar {
          position: sticky; bottom: 0;
          display: flex; align-items: center;
          background: var(--status);
          height: 22px;
          font-size: .68rem;
          color: rgba(255,255,255,.95);
          z-index: 200;
          overflow: hidden;
        }
        .sb-item {
          display: flex; align-items: center; gap: .3rem;
          padding: 0 .8rem;
          height: 100%;
          border-right: 1px solid rgba(255,255,255,.12);
          white-space: nowrap;
          cursor: pointer;
          transition: background .15s;
        }
        .sb-item:hover { background: rgba(255,255,255,.12); }
        .sb-spacer {
          flex: 1;
          text-align: center;
          font-size: .6rem;
          letter-spacing: .14em;
          opacity: .65;
          padding: 0 1rem;
        }
      `}</style>
    </div>
  );
};

export default TeamAura;