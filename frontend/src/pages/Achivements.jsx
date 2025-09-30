import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiTrophy } from "react-icons/gi";
import { GiWingedArrow } from "react-icons/gi";
import { GiDiamondTrophy } from "react-icons/gi";

//hackathon 
import hack1 from "../assets/Images/kraf/hackwin1.jpeg";
import hack2 from "../assets/Images/kraf/hackwin2.jpeg";
import hack3 from "../assets/Images/kraf/hackwin3.jpeg";

//expo
import expo1 from "../assets/Images/ProjectExpo/expo1.jpeg";
import expo2 from "../assets/Images/ProjectExpo/expo2.jpeg";
import expo3 from "../assets/Images/ProjectExpo/expo3.jpeg";

//worskshop

import WORKSHOP1 from "../assets/Images/Workshop/WORKSHOP1.jpeg";
import WORKSHOP2 from "../assets/Images/Workshop/WORKSHOP2.jpeg";
import WORKSHOP3 from "../assets/Images/Workshop/WORKSHOP3.jpeg";
import WORKSHOP4 from "../assets/Images/Workshop/WORKSHOP4.jpeg"; 
import WORKSHOP5 from "../assets/Images/Workshop/WORKSHOP5.jpeg";
import WORKSHOP6 from "../assets/Images/Workshop/WORKSHOP6.jpeg";
import WORKSHOP7 from "../assets/Images/Workshop/WORKSHOP7.jpeg";

//Algowars

import Algowars1 from "../assets/Images/Algowars/Algowars1.jpg"
import Algowars2 from "../assets/Images/Algowars/Algowars2.jpg"
import Algowars3 from "../assets/Images/Algowars/Algowars3.jpg"

//Takethon4.0

import TakeThon1 from "../assets/Images/TakeaThon4.0/TakeThon1.jpg"
import TakeThon2 from "../assets/Images/TakeaThon4.0/TakeThon2.jpg"
import TakeThon3 from "../assets/Images/TakeaThon4.0/TakeThon3.jpg"

const Achievements = () => {
    
  const achievements = [

    {
      images: [TakeThon1 , TakeThon2 , TakeThon3],
      name: "Takeathon 4.0 (SIH internal Hackathon)",
      title: "Winner – Tekathon 4.0 | Robotics & Drones Theme",
      description: "Team AURA emerged as the only winner in the Robotics & Drones theme, securing a Top 50 spot out of 800+ teams at Tekathon 4.0.",
      icon: <GiWingedArrow/>,
    },

     {
      images: [WORKSHOP1, WORKSHOP3, WORKSHOP6],
      name: "WORKSHOP",
      title: "Workshop Conductor – Drone Technology & Applications",
      description: "Conducted a comprehensive workshop on drone technology, covering fundamentals, applications, and hands-on experience. Empowered participants with knowledge and skills to explore the exciting world of drones.",
      icon: <GiWingedArrow/>,
    },
    {
      images: [Algowars1 , Algowars2 , Algowars3],
      name: "Algowars",
      title: "Winner - AlgoWars 2025",
      description: "Team AURA won 1st place at ALGOWAR 2025, exemplifying exceptional innovation, dedication, and collaborative excellence.",
      icon: <GiWingedArrow/>,
    },
    
    {
      images: [hack1, hack2, hack3],
      name: "HACKATHON",
      title: "Winner – KRAF THINK 2025 Hackathon",
      description: "My team, Team AURA, won the hackathon among 140+ teams and 580+ participants. Through creativity, collaboration, and determination, we built an impactful and innovative solution that stood out to the judges." , 
      icon: <GiTrophy/>,
    },
    {
      images: [expo1, expo2, expo3],
      name: "CU PROJECT EXPO",
      title: "Winner – CU Projects Expo 2025",
      description: "Awarded 1st place for my project, “Vision Fly: FPV Drone (AURA),” at the CU Projects Expo 2025. Recognized for innovation, technical excellence, and practical application in the field of drone technology.",
      icon: <GiTrophy/>,

    },
  ];

  const [currentIndexes, setCurrentIndexes] = useState(
    achievements.map(() => 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes((prevIndexes) =>
        prevIndexes.map((index) => (index + 1) % 3)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  

  return (
   
   <div className='relative w-full flex flex-col md:flex-row gap-6 text-white py-10 px-4 sm:px-6 max-h-[84vh] overflow-y-scroll'>

  <div className='flex-1'>
    <div className="w-full flex flex-col items-center justify-center">
      {achievements.map((achievement, idx) => (
        <div
          key={idx}
          className="relative w-full max-w-4xl bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 mb-8"
          style={{ fontFamily: 'Fira Code, monospace' }}
        >
          {/* Title Box */}
          <div className="absolute -top-5 left-5 bg-[#0f0f0f] text-[#ec6e40] px-3 sm:px-4 py-1 flex justify-center items-center gap-2 rounded-md text-xs sm:text-sm font-semibold shadow-md border border-[#ec6e40]">
            <span className='text-[gold] text-xl sm:text-2xl'> {achievement.icon}</span>  
            <span>{achievement.name}</span>
          </div>

          <div className='flex flex-col md:flex-row gap-6 items-center justify-center'>
            <div className="w-full md:w-1/2 h-[250px] sm:h-[350px] relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={achievement.images[currentIndexes[idx]]}
                  src={achievement.images[currentIndexes[idx]]}
                  alt="Achievement"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className='w-full h-full rounded-md border border-[#333] object-cover absolute top-0 left-0'
                />
              </AnimatePresence>
            </div>
            <div className='h-full w-full md:w-1/2 flex flex-col gap-10'>

              <p className="text-white text-lg font-semibold mt-2 flex items-center gap-1 md:gap-2 text-center md:text-left">
                <span className='md:text-3xl text-5xl text-[gold] '><GiDiamondTrophy/></span> 
                <span>{achievement.title}</span> 
              </p>
              <p className="text-gray-300 text-sm md:text-base text-center md:text-left">
                {achievement.description} 
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Achievements;
