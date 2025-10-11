import React from "react";
import {
  VscRocket,
  VscBook,
  VscPackage,
  VscTools,
  VscMail,
  VscPulse,
  VscSymbolMethod,
} from "react-icons/vsc";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CommandPiImg from "../assets/PROJECTSHOW/CommandPi.png"; // 🔧 Replace with your actual image path

const CommandPi = () => {
  return (
    <div className="bg-[#0d1117] text-white font-mono md:px-4 md:py-6 max-w-screen px-8 overflow-x-hidden max-h-[84vh] overflow-y-scroll">
      <div className="max-w-full mx-auto space-y-8">

        {/* 🚀 Introduction */}
        <section className="bg-[#161b22] border border-[#30363d] rounded-md p-5 max-w-full mx-auto">
          <h2 className="flex flex-wrap items-center text-lg sm:text-xl font-bold mb-3">
            <VscRocket className="mr-2 text-blue-400 flex-shrink-0" size={24} />
            <span>
              Introducing <span className="text-blue-400">CommandPi</span> – Autonomous Ground Control System for High-Speed UAVs
            </span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3">
            <strong>CommandPi</strong> is a next-generation, autonomous Ground Control System (GCS) built to empower high-speed UAV operations through <strong>real-time mission planning, telemetry visualization, HD video streaming</strong>, and <strong>precision control</strong>. Designed for both manual and autonomous modes, it provides a centralized interface that bridges operators with drone fleets seamlessly and intelligently.
          </p>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3">
            The system integrates advanced <strong>communication protocols</strong> for stable and long-range connectivity, ensuring uninterrupted command and data exchange even in challenging terrains. It employs <strong>AI-driven flight optimization</strong> for smart route planning, target tracking, and adaptive decision-making during mission-critical operations.
          </p>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3">
            Built around modular and scalable architecture, CommandPi supports <strong>multi-drone coordination</strong>, live telemetry mapping, and mission replay features. It enables operators to monitor altitude, GPS position, velocity, and battery metrics in real time, supported by an intuitive dashboard and robust backend.
          </p>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            What makes <strong>CommandPi</strong> unique is its fusion of <strong>automation, AI analytics, and safety mechanisms</strong>. From secure telemetry encryption to dynamic fail-safes like auto-return and safe landing, CommandPi is designed for reliability and mission success—turning complex UAV operations into seamless, intelligent experiences.
          </p>
        </section>

        {/* 📡 Live Testing / Implementation */}
        <section className="flex flex-col md:flex-row items-center bg-[#161b22] border border-[#30363d] rounded-md p-4 space-y-4 md:space-y-0 md:space-x-6">
          <img
            src={CommandPiImg}
            alt="CommandPi Interface"
            className="w-full md:w-1/2 rounded-md border border-[#30363d] object-contain max-h-[40vh]"
            loading="lazy"
          />
          <div className="w-full md:w-1/2">
            <h2 className="flex items-center text-lg font-bold mb-2">
              <VscPulse className="mr-2" size={20} /> Live Testing & Performance
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              CommandPi was tested with multiple UAV platforms to validate its telemetry accuracy, latency response, and mission synchronization. The system performed reliably across varied terrains, maintaining stable video streaming, rapid command relay, and precise control—demonstrating readiness for both research and field deployments.
            </p>
          </div>
        </section>

        {/* 📘 Documentation Section */}
        <section className="bg-[#0d1117] text-gray-100 font-mono text-sm leading-relaxed p-5 rounded-md border border-[#30363d]">
          <h2 className="flex items-center text-lg font-bold mb-4 border-b border-[#21262d] pb-2">
            <VscBook className="mr-2" size={20} /> Documentation
          </h2>

          <h3 className="flex items-center text-base font-bold mb-2">
            <VscSymbolMethod className="mr-2" size={18} /> What is CommandPi?
          </h3>
          <p className="mb-4">
            <strong>CommandPi</strong> is an intelligent Ground Control System designed to manage UAV missions autonomously. It enables mission planning, monitoring, and analytics through an AI-integrated dashboard that handles real-time telemetry, video feeds, and control signals for seamless UAV operation.
          </p>

          <h3 className="flex items-center text-base font-bold mb-2">
            <VscTools className="mr-2" size={18} /> Tech Stack & Features
          </h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Real-time mission planning and dynamic waypoint adjustment</li>
            <li>AI-assisted route optimization and anomaly prediction</li>
            <li>Live telemetry visualization with customizable dashboards</li>
            <li>High-definition video streaming and feed recording</li>
            <li>Multi-drone control and autonomous mission coordination</li>
            <li>Secure communication protocol and telemetry encryption</li>
            <li>Failsafe and redundancy systems for mission safety</li>
          </ul>

          <h3 className="flex items-center text-base font-bold mb-2">
            <VscPackage className="mr-2" size={18} /> Applications
          </h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Defense and surveillance operations</li>
            <li>Disaster response and live reconnaissance</li>
            <li>Environmental monitoring and mapping</li>
            <li>Research, industrial inspection, and logistics control</li>
          </ul>

          <h3 className="flex items-center text-base font-bold mb-2">
            <VscMail className="mr-2" size={18} /> Contact
          </h3>
          <p>
            For collaborations, research inquiries, or project demonstrations, connect with us through GitHub or LinkedIn.
          </p>

          <div className="flex justify-center items-center gap-8 text-3xl mt-4">
            <a
              href="https://github.com/SauravDutta002"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/saurav-dutta-450355315/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommandPi;
