import React, { useEffect, useState, useRef } from 'react';

import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { FaSquareJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiFramer } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";
import Typewriter from "typewriter-effect";
import { SiExpress } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import { VscGithub } from "react-icons/vsc";
import { VscArrowCircleRight } from "react-icons/vsc";
// Projects

import Aura from "../assets/Images/projects/Aura.jpeg"
import test from "../assets/Images/projects/test.jpeg"
import weather from "../assets/Images/projects/weather.jpg"
import Events from "../assets/Images/projects/Events.png"



const projects = [
    {
    title: "AURA",
    description:
      "An open-source autonomous drone system designed for disaster-prone regions that detects stranded individuals, delivers essential supplies, and supports real-time mission planning via a custom web platform and API.",
    image: Aura, // make sure 'Aura' is properly imported at the top
    github: "https://github.com/SauravDutta002",
    demo: "https://sauravauraproj002.netlify.app/",
    techstack: [
      { icon: <SiMongodb className="text-[#13d113]" /> },
      { icon: <IoLogoNodejs className="text-[#13d113]" /> },
      { icon: <FaSquareJs className="text-[#ece22d]" /> },
      { icon: <FaReact className="text-[#3577e7]" /> },
      { icon: <FaPython className="text-[#e9f024]" /> },
      { icon: <SiCplusplus className="text-[#298aeb]" /> },
      { icon: <FaJava className="text-[#ebae29]" /> },
      { icon: <SiExpress className="text-white" /> },
    ],
  },
,
  {
    title: "Weather App",
    description: "Get real-time weather updates with live location support and interactive graphs — all in a responsive interface.",
    image: weather,
    github: "https://github.com/SauravDutta002/REACT-WEATHER-APP",
    demo: "https://sauravduttareactweatherapp.netlify.app/",
     techstack: [
      { icon: <SiMongodb className="text-[#13d113]" /> },
      { icon: <IoLogoNodejs className="text-[#13d113]" /> },
      { icon: <FaReact className="text-[#3577e7]" /> },
      { icon: <SiFramer className="text-[#8d8d8d]" /> },
      { icon: <SiExpress className="text-white" /> },
    ], 
  },

//  {
//   title: "Events",
//   description: "A dynamic and responsive event website built to showcase all ongoing and upcoming university events. Features include event categorization, calendar integration, RSVP functionality, and real-time updates to keep students and faculty informed and engaged.",
//   image: Events,  // replace with your actual imported image variable or path
//   github: "",  // replace with actual repo URL if available
//   demo: "https://eventssauravdutta002.netlify.app/"  // replace with actual demo URL if available
// }

];

// const techIcons = [
//   { icon: <SiMongodb className="text-[#13d113]" /> },
//   { icon: <IoLogoNodejs className="text-[#13d113]" /> },
//   { icon: <FaSquareJs className="text-[#ece22d]" /> },
//   { icon: <FaReact className="text-[#3577e7]" /> },
//   { icon: <FaPython className="text-[#e9f024]" /> },
//   { icon: <FaGitAlt className="text-[#f05724]" /> },
//   { icon: <SiFramer className="text-[#8d8d8d]" /> },
//   { icon: <SiCplusplus className="text-[#298aeb]" /> },
//   { icon: <FaJava className="text-[#ebae29]" /> },
//   { icon: <TbBrandThreejs className="text-white" /> },
//   { icon: <SiExpress className="text-white" /> },
// ];


const Project = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const scrollTop = section.scrollTop;
      const scrollHeight = section.scrollHeight - section.clientHeight;
      const progress = (scrollTop / scrollHeight) * 120;
      setScrollProgress(progress);
    };

    const section = sectionRef.current;
    section.addEventListener('scroll', handleScroll);
    return () => section.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full text-white py-10 px-6 max-h-[84vh] overflow-y-scroll"
    >
      {/* Glowing vertical scroll bar */}
      <div className="absolute top-0 right-2 h-[100vh] w-2 bg-[#1a1a1a] rounded-full overflow-hidden">
        <div
          className="w-full bg-gradient-to-b from-[#00ffae] to-[#00ffd5] rounded-full shadow-[0_0_15px_3px_#00ffd5] transition-all duration-150 ease-in-out"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>

      <div className="flex flex-col gap-10 items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-full max-w-4xl bg-[#1a1a1a] border border-[#2c2c2c] rounded-xl shadow-lg p-6 md:p-8 font-mono transition duration-300 hover:shadow-[0_0_30px_#00ffae40]"
          >
            {/* Terminal style header */}
            <div className="flex gap-2 mb-4">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/2 rounded-md border border-[#333] object-cover"
              />

              <div className="flex-1 flex flex-col justify-between gap-4">
                <div>
                  {/* Typewriter Effect */}
                  <div className="text-sm font-mono text-left min-h-[24px]">
                    <Typewriter
                      options={{
                        autoStart: true,
                        loop: false,
                        delay: 75,
                        html: true,
                        cursor: '|',
                      }}
                      onInit={(typewriter) => {
                        typewriter
                          .typeString(
                            `<span class="text-[#00ffae]">$ npm run showcase  <span onclick= {}>./${project.title.replace(/\s+/g, '')}.js</span></span>`
                          )
                          .pauseFor(1000)
                          .start();
                      }}
                    />
                  </div>

                  {/* Title */}
                  <p className="text-white text-lg font-semibold mt-2">▶ {project.title}</p>

                  {/* Description */}
                  <p className="text-gray-300 mt-2 text-sm">{project.description}</p>
                </div>

                {/* Tech Icons */}
                {/* <div className="flex flex-wrap gap-3 mt-2">
                  {projects.map((tech, idx) => (
                    <div key={idx} className="text-[22px] text-gray-400">
                      {tech.techstack}
                    </div>
                  ))}
                </div> */}

               {project.techstack && (
  <div className="flex flex-wrap gap-3 mt-2 text-[22px] text-gray-400">
    {project.techstack.map((item, itemIdx) => (
      <span key={itemIdx}>{item.icon}</span>
    ))}
  </div>
)}

                {/* Action Buttons */}
                {/* <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0e0e0e] border border-white/20 px-4 py-2 rounded flex items-center gap-2 hover:bg-white hover:text-black transition"
                  >
                   <VscGithub/> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#ec6e40] text-black px-4 py-2 rounded flex items-center gap-2 font-semibold hover:scale-105 transition"
                  >
                    Live Demo<VscArrowCircleRight/>
                  </a>
                </div> */}



                <div className="flex gap-4 mt-4">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#0e0e0e] border border-white/20 px-4 py-2 rounded flex items-center gap-2 hover:bg-white hover:text-black transition font-semibold"
  >
    <VscGithub className="text-lg" />
    GitHub
  </a>
  <a
    href={project.demo}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#ec6e40] text-black px-4 py-2 rounded flex items-center gap-2 font-semibold hover:scale-105 transition"
  >
    Live Demo
    <VscArrowCircleRight className="text-lg" />
  </a>
</div>



              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;