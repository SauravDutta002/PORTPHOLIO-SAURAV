
// // import React, { useState, useEffect } from 'react';
// // import Loader from '../components/AURA_Loader'; // <-- import your loader here
// // import IDcard from "../components/IDCARD"
// // const TeamAura = () => {

// //   const [loading, setLoading] = useState(true);

// //   // Simulate loading effect (2 seconds)
// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setLoading(false);
// //     }, 5200);

// //     return () => clearTimeout(timer);
// //   }, []);

// //   return (
// //     <div className="min-h-screen w-full bg-black text-white">
      
// //       {/* Show Loader first */}
// //       {loading ? (
// //         <Loader />  // <-- your Loader component
// //       ) : (
// //         <div className="p-6">
// //           <h1 className="text-3xl font-bold">Team Aura</h1>
// //           <p className="mt-4 text-gray-300">Welcome to the Team Aura page.</p>
// //           <IDcard/>
// //         </div>
// //       )}

// //     </div>
// //   );
// // };

// // export default TeamAura;

// import React, { useState, useEffect, useRef } from 'react';
// import Loader from '../components/AURA_Loader';
// import IDcard from "../components/IDCARD";

// const TeamAura = () => {
//   const [loading, setLoading] = useState(true);
//   const audioRef = useRef(null);

//   useEffect(() => {
//     // Play audio when loader starts
//     if (audioRef.current) {
//       audioRef.current.volume = 1.0;
//       audioRef.current.play().catch(() => {});
//     }

//     // Loading ends but audio continues
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 5200);

//     // Cleanup (runs ONLY when leaving page)
//     return () => {
//       clearTimeout(timer);
//       if (audioRef.current) {
//         audioRef.current.pause();
//         audioRef.current.currentTime = 0;
//       }
//     };
//   }, []);

//   return (
//     <div className="min-h-screen w-full bg-black text-white">

//       {/* Hidden audio element */}
//       <audio ref={audioRef} src="/Audio/AURA_audio.mp4" />

//       {loading ? (
//         <Loader />
//       ) : (
//         <div className="p-6">
//           <h1 className="text-3xl font-bold">Team Aura</h1>
//           <p className="mt-4 text-gray-300">Welcome to the Team Aura page.</p>
//           <IDcard />
//         </div>
//       )}

//     </div>
//   );
// };

// export default TeamAura;



import React, { useState, useEffect, useRef } from 'react';
import Loader from '../components/AURA_Loader';
import IDcard from "../components/IDCARD";

const TeamAura = () => {
  const [loading, setLoading] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;

      // Start audio from 2 seconds
      audio.currentTime = 1.5;

      // Start volume at 0 for fade-in
      audio.volume = 0;

      // Play audio
      audio.play().catch(() => {});

      // Fade-in duration (in ms)
      const fadeDuration = 1800; 
      const fadeSteps = 30;
      const volumeStep = 1 / fadeSteps;
      const intervalTime = fadeDuration / fadeSteps;

      let currentVolume = 0;

      const fadeInInterval = setInterval(() => {
        currentVolume += volumeStep;
        if (audio) audio.volume = Math.min(currentVolume, 1);

        // Stop interval when fade-in completes
        if (currentVolume >= 1) {
          clearInterval(fadeInInterval);
        }
      }, intervalTime);
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5200);

    return () => {
      clearTimeout(timer);

      // Stop audio on page exit
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white">

      {/* Hidden audio element */}
      <audio ref={audioRef} src="/Audio/AURA_audio.mp4" />

      {loading ? (
        <Loader />
      ) : (
        <div className="p-6">
          {/* <h1 className="text-3xl font-bold">Team Aura</h1>
          <p className="mt-4 text-gray-300">Welcome to the Team Aura page.</p> */}
          {/* <IDcard /> */}
        </div>
      )}

    </div>
  );
};

export default TeamAura;
