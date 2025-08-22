import React from "react";
import {
  VscRocket,
  VscBook,
  VscPackage,
  VscTools,
  VscFolder,
  VscMail,
  VscPulse,
  VscDebug,
  VscDeviceMobile,
  VscSymbolMethod,
} from "react-icons/vsc";


import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import Aura from "../assets/Images/projects/Aura.jpeg";
import Aura2 from "../assets/PROJECTSHOW/Aura2.png";

const ShowProject = () => {
  return (
    <div className="bg-[#0d1117] text-white font-mono md:px-4 md:py-6 max-w-screen px-8 overflow-x-hidden max-h-[84vh] overflow-y-scroll">
      
      {/* Container max width for better reading on larger screens */}
      <div className="max-w-full mx-auto space-y-8">

        {/* 🚀 Introduction */}
        <section className="bg-[#161b22] border border-[#30363d] rounded-md p-5 max-w-full mx-auto">
          <h2 className="flex flex-wrap items-center text-lg sm:text-xl font-bold mb-3">
            <VscRocket className="mr-2 text-blue-400 flex-shrink-0" size={24} />
            <span>
              Introducing <span className="text-blue-400">AURA</span> – The Future of Autonomous Drone Delivery
            </span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3">
            <strong>AURA</strong> (Autonomous UAV for Rapid Assistance) is a campus-wide drone delivery system designed for fast, safe, and efficient medical supplies delivery via a custom-built web platform connected to an autonomous drone.
          </p>
          <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-2">
            <li className="flex items-start">
              <VscPulse className="mr-2 mt-1 flex-shrink-0" size={18} />
              Fully autonomous mission execution & error handling
            </li>
            <li className="flex items-start">
              <VscSymbolMethod className="mr-2 mt-1 flex-shrink-0" size={18} />
              API communication between drone & web platform
            </li>
            <li className="flex items-start">
              <VscPackage className="mr-2 mt-1 flex-shrink-0" size={18} />
              Smart payload delivery & automatic return-to-launch
            </li>
            <li className="flex items-start">
              <VscDebug className="mr-2 mt-1 flex-shrink-0" size={18} />
              Upcoming ML-based obstacle avoidance & real-time GPS tracking
            </li>
          </ul>
        </section>

        {/* Live Testing Section */}
        <section className="flex flex-col md:flex-row items-center bg-[#161b22] border border-[#30363d] rounded-md p-4 space-y-4 md:space-y-0 md:space-x-6">
          <img
            src={Aura2}
            alt="Live Testing"
            className="w-full md:w-1/2 rounded-md border border-[#30363d] object-contain max-h-[40vh]"
            loading="lazy"
          />
          <div className="w-full md:w-1/2">
            <h2 className="flex items-center text-lg font-bold mb-2">
              <VscRocket className="mr-2" size={20} /> Live Testing
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              The system is live-tested under real-world conditions. The drone autonomously manages mission planning, delivery, and return with failsafes to ensure reliability and safety.
            </p>
          </div>
        </section>

        {/* Documentation Section */}
        <section className="bg-[#0d1117] text-gray-100 font-mono text-sm leading-relaxed p-5 rounded-md border border-[#30363d]">
          <h2 className="flex items-center text-lg font-bold mb-4 border-b border-[#21262d] pb-2">
            <VscBook className="mr-2" size={20} /> Documentation
          </h2>

          <h3 className="flex items-center text-base font-bold mb-2">
            <VscPulse className="mr-2" size={18} /> What is Aura?
          </h3>
          <p className="mb-4">
            Aura is a fully responsive project layout optimized for clean presentation. Built with React and TailwindCSS, it aims to provide a seamless user experience and clear information architecture.
          </p>

          <h3 className="flex items-center text-base font-bold mb-2">
            <VscTools className="mr-2" size={18} /> Problem Statement
          </h3>
          <p className="mb-4">
            Current drone delivery systems are mostly closed-source, limiting access for research and education. Aura opens this up by providing a fully open-source drone delivery platform.
          </p>

          <h3 className="flex items-center text-base font-bold mb-2">
            <VscPackage className="mr-2" size={18} /> Features
          </h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Fully responsive design for all devices</li>
            <li>Modern styling with TailwindCSS</li>
            <li>Dynamic content blocks</li>
            <li>API-controlled autonomous drone flights</li>
          </ul>

          <h3 className="flex items-center text-base font-bold mb-2">
            <VscTools className="mr-2" size={18} /> Tech Stack
          </h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>React.js</li>
            <li>TailwindCSS</li>
            <li>Node.js + Express (API Backend)</li>
            <li>Mission Planner / MAVLink Protocol</li>
          </ul>

          <h3 className="flex items-center text-base font-bold mb-2">
            <VscDeviceMobile className="mr-2" size={18} /> Upcoming Features
          </h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Live GPS tracking of delivery missions</li>
            <li>Real-time user location fetching</li>
            <li>ML-based obstacle avoidance</li>
            <li>Multi-package payload drops</li>
          </ul>

          
          <h3 className="flex items-center text-base font-bold mb-2">
            <VscMail className="mr-2" size={18} /> Contact
          </h3>
         
          <p>
            For collaboration, feedback, or demos, reach out via GitHub or LinkedIn.
               <div className="flex justify-center items-center gap-8 text-3xl mt-4">
                        <a href="https://github.com/SauravDutta002" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/saurav-dutta-450355315/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                      </div>
          </p>
        </section>
      </div>
    </div>
  );
};

export default ShowProject;
