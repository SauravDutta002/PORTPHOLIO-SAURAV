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
import AstraImg from "../assets/PROJECTSHOW/Astra.jpg"; // ← replace with your image

const ShowProject = () => {
  return (
    <div className="bg-[#0d1117] text-white font-mono md:px-4 md:py-6 max-w-screen px-8 overflow-x-hidden max-h-[84vh] overflow-y-scroll">
      <div className="max-w-full mx-auto space-y-8">

        {/* 🚀 Introduction */}
        <section className="bg-[#161b22] border border-[#30363d] rounded-md p-5 max-w-full mx-auto">
          <h2 className="flex flex-wrap items-center text-lg sm:text-xl font-bold mb-3">
            <VscRocket className="mr-2 text-blue-400 flex-shrink-0" size={24} />
            <span>
              Introducing <span className="text-blue-400">Astra</span> — Autonomous High-Speed Impact Test Platform
            </span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3">
            <strong>Astra</strong> is an autonomous, research-oriented high-speed vehicle developed to support controlled impact testing, avionics validation, and high-velocity sensor benchmarking. Designed for experimental and laboratory use, Astra operates at test speeds in excess of 300 km/h under tightly controlled conditions to collect high-fidelity telemetry, sensor data, and video for engineering analysis.
          </p>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3">
            The platform integrates on-board computation for real-time navigation and mission logging, and uses AI-based guidance algorithms for precision trajectory following in strictly supervised test scenarios. Every component of Astra is built with safety-first principles: geofencing, remote termination/recovery procedures, redundant telemetry, and comprehensive pre-flight validation.
          </p>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Astra is intended solely for non-offensive research: materials impact studies, structural resilience testing, sensor/vision system evaluation, aerodynamic research, and safe disposal/decommissioning protocols. All testing follows applicable laws, range safety rules, and institutional ethics and oversight.
          </p>
        </section>

        {/* 📡 Live Testing / Implementation */}
        <section className="flex flex-col md:flex-row items-center bg-[#161b22] border border-[#30363d] rounded-md p-4 space-y-4 md:space-y-0 md:space-x-6">
          <img
            src={AstraImg}
            alt="Astra test platform"
            className="w-full md:w-1/2 rounded-md border border-[#30363d] object-contain max-h-[40vh]"
            loading="lazy"
          />
          <div className="w-full md:w-1/2">
            <h2 className="flex items-center text-lg font-bold mb-2">
              <VscPulse className="mr-2" size={20} /> Test Campaigns & Performance
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Astra underwent staged test campaigns in controlled ranges to validate high-speed telemetry fidelity, onboard analytics throughput, and mission termination/recovery sequences. Test runs measured aerodynamic stability, GNSS performance under dynamic conditions, and synchronized multi-sensor capture including high-rate video and inertial data.
            </p>
          </div>
        </section>

        {/* 📘 Documentation Section */}
        <section className="bg-[#0d1117] text-gray-100 font-mono text-sm leading-relaxed p-5 rounded-md border border-[#30363d]">
          <h2 className="flex items-center text-lg font-bold mb-4 border-b border-[#21262d] pb-2">
            <VscBook className="mr-2" size={20} /> Documentation
          </h2>

          <h3 className="flex items-center text-base font-bold mb-2">
            <VscSymbolMethod className="mr-2" size={18} /> Project Overview
          </h3>
          <p className="mb-4">
            Astra is a research platform for high-velocity experimental testing. It pairs ruggedized hardware with on-board compute for synchronized data capture and autonomous trajectory execution under a strict safety envelope.
          </p>

          <h3 className="flex items-center text-base font-bold mb-2">
            <VscTools className="mr-2" size={18} /> Key Capabilities & Features
          </h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>High-speed test profile capability (design target: 300+ km/h) for controlled research sorties</li>
            <li>Onboard computation for real-time telemetry, mission logging, and local analytics</li>
            <li>AI-assisted navigation for precision trajectory following in supervised tests</li>
            <li>High-frame-rate video capture synchronized with inertial and GNSS telemetry</li>
            <li>Range safety features: geofencing, redundant telemetry links, and remote mission termination/recovery</li>
            <li>Comprehensive data logging for post-test analysis and reproducible experiments</li>
          </ul>

          <h3 className="flex items-center text-base font-bold mb-2">
            <VscPackage className="mr-2" size={18} /> Intended Applications (Research & Testing)
          </h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Materials and structural impact testing in certified ranges</li>
            <li>Aerodynamic and stability research at high Reynolds numbers</li>
            <li>Validation of high-speed sensor suites and vision algorithms</li>
            <li>Testing of autonomous termination and safe decommissioning procedures</li>
            <li>Controlled experiments for emergency response simulation and resilience studies</li>
          </ul>

          <h3 className="flex items-center text-base font-bold mb-2">
            <VscMail className="mr-2" size={18} /> Ethics, Safety & Compliance
          </h3>
          <p className="mb-4">
            All Astra activities are framed by strict safety protocols, legal compliance, and institutional review. Testing is performed only in certified ranges with trained personnel, range safety officers, and applicable permits. The project avoids any offensive use and focuses on scientific outcomes, safety research, and engineering validation.
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

export default ShowProject;
