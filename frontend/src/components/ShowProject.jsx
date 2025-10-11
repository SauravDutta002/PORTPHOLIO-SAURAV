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
              Introducing <span className="text-blue-400">AURA</span> – AI + IoT Powered Swarm Drone Rescue
            </span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3">
            In recent disasters like the August 2025 floods across Punjab, Himachal, and Uttarakhand, thousands were stranded without communication. Rescue teams struggled because they didn’t know where survivors were, and even reaching them was dangerous.
          </p>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3">
            That’s where <strong>AURA</strong> comes in. AURA is an AI + IoT powered swarm drone system built to locate survivors, share their live GPS coordinates with rescue teams, and deliver emergency aid when ground help is delayed. Unlike existing single-drone relief operations, AURA uses a swarm approach, meaning multiple drones coordinate together, covering large areas faster and safer.
          </p>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3">
            We’ve integrated onboard computing, custom telemetry, and a ground control system that allows full monitoring and real-time decision-making. AI helps drones detect humans in disaster zones using aerial imagery, while IoT ensures data is instantly relayed to rescue teams for quick action.
          </p>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            What makes <strong>AURA</strong> unique is its autonomous swarm intelligence—not just flying, but thinking as a group, identifying survivors, marking safe zones, and assisting rescue teams even when ground communication is broken. With AURA, we’re not just sending drones—we’re sending an AI-driven rescue network that saves time, resources, and most importantly, lives.
          </p>
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
              The system is tested under disaster-simulated conditions. Swarm drones autonomously coordinate, locate survivors, share live GPS coordinates, and deliver emergency supplies efficiently.
            </p>
          </div>
        </section>

        {/* Documentation Section */}
        <section className="bg-[#0d1117] text-gray-100 font-mono text-sm leading-relaxed p-5 rounded-md border border-[#30363d]">
          <h2 className="flex items-center text-lg font-bold mb-4 border-b border-[#21262d] pb-2">
            <VscBook className="mr-2" size={20} /> Documentation
          </h2>

          <h3 className="flex items-center text-base font-bold mb-2">
            <VscPulse className="mr-2" size={18} /> What is AURA?
          </h3>
          <p className="mb-4">
            AURA is a fully autonomous swarm drone rescue system that integrates AI and IoT to rapidly locate survivors, relay their coordinates, and deliver emergency aid during disasters.
          </p>

          <h3 className="flex items-center text-base font-bold mb-2">
            <VscTools className="mr-2" size={18} /> Tech Stack & Features
          </h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>AI-based human detection using aerial imagery</li>
            <li>IoT-enabled live GPS coordinate sharing</li>
            <li>Autonomous swarm coordination & decision-making</li>
            <li>Ground control system for real-time monitoring</li>
          </ul>

          <h3 className="flex items-center text-base font-bold mb-2">
            <VscMail className="mr-2" size={18} /> Contact
          </h3>
          <p>
            For collaboration, feedback, or demos, reach out via GitHub or LinkedIn.
          </p>
          <div className="flex justify-center items-center gap-8 text-3xl mt-4">
            <a href="https://github.com/SauravDutta002" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/saurav-dutta-450355315/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShowProject;
