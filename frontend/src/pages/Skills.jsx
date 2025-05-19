import React from 'react'
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
import { VscSplitHorizontal } from "react-icons/vsc";
import { SiExpress } from "react-icons/si";




// Terminal

import { VscTerminalPowershell } from "react-icons/vsc";
import { VscAdd } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";
import { IoIosMore } from "react-icons/io";
import { VscChevronUp } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";


const Skills = () => {
  const skillIcons = {
    React: <FaReact className="text-[#3577e7] inline ml-2" />,
    MongoDB: <SiMongodb className="text-[#13d113] inline ml-2" />,
    "Node.js": <IoLogoNodejs className="text-[#13d113] inline ml-2" />,
    JavaScript: <FaSquareJs className="text-[#ece22d] inline ml-2" />,
    Python: <FaPython className="text-[#e9f024] inline ml-2" />,
    Git: <FaGitAlt className="text-[#f05724] inline ml-2" />,
    Framer: <SiFramer className="text-[#8d8d8d] inline ml-2" />,
    "C++": <SiCplusplus className="text-[#298aeb] inline ml-2" />,
    Java: <FaJava className="text-[#ebae29] inline ml-2" />,
    "Three.js": <TbBrandThreejs className="text-white inline ml-2" />,
    ExpressJs: <SiExpress className="text-white inline ml-2"/>
  };

const icons = [
  { icon: <SiMongodb className="text-[#13d113]" />, name: 'MongoDB' },
  { icon: <IoLogoNodejs className="text-[#13d113]" />, name: 'Node.js' },
  { icon: <FaSquareJs className="text-[#ece22d]" />, name: 'JavaScript' },
  { icon: <FaReact className="text-[#3577e7]" />, name: 'React' },
  { icon: <FaPython className="text-[#e9f024]" />, name: 'Python' },
  { icon: <FaGitAlt className="text-[#f05724]" />, name: 'Git' },
  { icon: <SiFramer className="text-[#8d8d8d]" />, name: 'Framer' },
  { icon: <SiCplusplus className="text-[#298aeb]" />, name: 'C++' },
  { icon: <FaJava className="text-[#ebae29]" />, name: 'Java' },
  { icon: <TbBrandThreejs className="text-white" />, name: 'Three.js' },
  { icon: <SiExpress className="text-white" />, name: 'ExpressJs' },
];

  return (
    <div className="w-full  h-[86vh] flex flex-col  text-white">
      {/* Code Block Section */}

      
      <div className="text-[12px] md:text-[14px] leading-6 md:leading-7 p-4 overflow-x-auto  font-mono">
        <div>
          <span className="text-gray-500">1&nbsp;&nbsp;</span>
          <span className="text-[#ec6e40]">const</span>{" "}
          <span className="text-white">user</span> ={" "}
          <span className="text-[#5482de]">
            &#123; name:{" "}
          </span>
          <span className="text-[#9cdcfe]">'Saurav'</span>
          <span className="text-[#5482de]">, age: </span>
          <span className="text-[#9cdcfe]">19</span>
          <span className="text-[#5482de]"> &#125;</span>
        </div>

        {/* Skill Lines with Icons */}
        {Object.keys(skillIcons).map((skill, index) => (
          <div key={index}>
            <span className="text-gray-500">{index + 2}&nbsp;&nbsp;</span>
            <span className="text-[#ec6e40]">console.log</span>
            <span className="text-white">
              ("
              <span className="text-[#9cdcfe]">
                {skill}
                {skillIcons[skill]}
              </span>
              ")
            </span>
          </div>
        ))}

        {/* Additional Code Lines */}
        <div>
          <span className="text-gray-500">12&nbsp;&nbsp;</span>
          <span className="text-[#ec6e40]">#include</span>{" "}
          <span className="text-[#5482de]">&lt;iostream&gt;</span>
        </div>
        <div>
          <span className="text-gray-500">13&nbsp;&nbsp;</span>
          <span className="text-[#c586c0]">using namespace</span> std;
        </div>
        <div>
          <span className="text-gray-500">14&nbsp;&nbsp;</span>
          <span className="text-[#c586c0]">int</span> main() &#123;
        </div>
        <div>
          <span className="text-gray-500">15&nbsp;&nbsp;</span>
          &nbsp;&nbsp;cout &lt;&lt;{" "}
          <span className="text-[#9cdcfe]">"Learning C++ &lt;3"</span>;
        </div>
        <div>
          <span className="text-gray-500">16&nbsp;&nbsp;</span>
          &nbsp;&nbsp;return 0;
        </div>
        <div>
          <span className="text-gray-500">17&nbsp;&nbsp;</span>&#125;
        </div>

        <div className="flex items-center">
          <span className="text-gray-500">18&nbsp;&nbsp;</span>
          <Typewriter
            options={{
              strings: [
                '<span class="text-[#ec6e40]">export</span> <span class="text-white">default</span> <span class="text-[#9cdcfe]">SauravSkills</span>',
              ],
              autoStart: true,
              loop: false,
            }}
          />
        </div>
      </div>



<div className="border-t border-[#ffffff32] bg-black h-[70vh] w-full z-50 px-4 sm:px-6">

  {/* Top Controls */}
  <div className="flex flex-wrap mt-2 h-5 justify-between items-center cursor-pointer">

    {/* Tab Labels */}
    <div className="flex flex-wrap gap-4 text-[clamp(10px,2vw,12px)] text-[#ffffff7b]">
      <span>PROBLEMS</span>
      <span>OUTPUT</span>
      <span>DEBUGCONSOLE</span>
      <span className="border-b border-[#ff7b00] text-white">
        <span>TERMINAL</span>
      </span>
      <span>PORTS</span>
      <span className='hidden sm:flex'>COMMENTS</span>
    </div>

    {/* Action Icons */}
    {/* <div className="flex flex-wrap gap-3 mt-2 sm:mt-0 text-[clamp(14px,3vw,18px)] text-white"> */}
      <div className="hidden sm:flex flex-wrap gap-3 mt-2 sm:mt-0 text-[clamp(14px,3vw,18px)] text-white">

      <span><VscTerminalPowershell /></span>
      <span className="flex gap-1"><VscAdd /><VscChevronDown /></span>
      <span><VscSplitHorizontal /></span>
      <span><VscTrash /></span>
      <span><IoIosMore /></span>
      <span><VscChevronUp /></span>
      <span><VscChromeClose /></span>
    </div>
  </div>

  {/* Terminal Log */}
  <div className="text-[clamp(10px,1.5vw,14px)] font-mono bg-black text-white p-2 mt-3 overflow-x-auto">
    <span className="text-gray-500">4:28:25 am </span>
    <span className="text-blue-400">[vite]</span>
    <span className="text-cyan-400"> (client) </span>
    <span className="text-yellow-400">hmr update </span>
    <span className="text-white">/src/pages/Skills.jsx, /src/index.css</span>
  </div>

  {/* Icons Grid */}
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-5 place-items-center max-w-6xl w-full mt-4 md:mb-2">
    {icons.map((item, index) => (
      <div
        key={index}
        className="flex flex-col items-center bg-gradient-to-br from-[#111111] to-[#222222] border border-[#444] rounded-lg p-3 shadow-md w-full max-w-[90px]"
      >
        <div className="text-[clamp(24px,5vw,36px)] mb-1.5 text-cyan-400 drop-shadow-[0_1px_6px_rgba(6,182,212,0.8)]">
          {item.icon}
        </div>
        <p className="text-[clamp(9px,1.5vw,10px)] text-gray-300 font-semibold tracking-wide text-center">
          {item.name}
        </p>
      </div>
    ))}
  </div>

</div>





    </div>
  );
};

export default Skills;

