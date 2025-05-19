import React from 'react';
import { SiRefinedgithub } from 'react-icons/si';
import { DiCodeigniter } from 'react-icons/di';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';
import { VscDebugStart } from "react-icons/vsc";
const Home = () => {
  
  const navigate = useNavigate();
  const handelClick = () => {
    navigate('/projects');
  };

  const myGithub = () => {
    navigate('/');
  };

  return (
    <div
      className="text-white font-light px-4 md:px-6 py-10 relative "
      style={{ fontFamily: 'Fira Code, monospace' }}
    >
      {/* Floating Home Box on top of code */}
      <div className=" absolute inset-0 z-10 mt-1 md:left-6 left-2 w-full h-full lg:h-[95%] text-white px-4 md:px-6 py-8 rounded-lg backdrop-blur-[2px] flex flex-col justify-center max-w-full ">
        {/* Name */}
        <div className="font-bold text-4xl sm:text-6xl md:text-[75px] leading-tight">
          <span className='font-mono'>SAURAV DUTTA</span>
        </div>

        {/* Typewriter */}
        <div className="font-medium  text-xl sm:text-3xl md:text-[45px] text-gray-400 mt-3 min-h-[70px]">
          <Typewriter
            options={{
              strings: [
                'I am a Web Developer.',
                'I am a MERN Stack Developer.',
                'I am an FPV Drone Pilot.',
                'I build high-performance custom drones.',
                'I create fast, modern web apps.',
                'I am passionate about blending technology with creativity.',
                'I turn ideas into code and code into experience.',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex  space-x-4 mt-6">
          <button
            onClick={myGithub}
            className="md:px-6 py-2 px-3 border border-[#ffffff32] rounded-2xl text-white hover:border-white transition flex items-center justify-center gap-2 backdrop-blur-[99px] "
            aria-label="Go to Github"
          >
            <SiRefinedgithub size={20} />
            GitHub
          </button>
          <button
            onClick={handelClick}
            className="md:px-6 py-2 px-3 flex items-center gap-2 border border-[#ffffff32] rounded-2xl text-white hover:border-white transition"
          >
            <DiCodeigniter size={20} />
            <span>Explore</span>
          </button>

        </div>
        
      </div>

      {/* Code Block Background */}
      
       <div className="text-[12px] md:text-[14px] leading-6 md:leading-7 p-2 md:p-4 opacity-[0.4] overflow-x-auto font-mono max-h-[70vh] overflow-y-auto  ">
  <div><span className="text-gray-500">1&nbsp;&nbsp;</span><span className="text-[#ec6e40]">import</span> <span className="text-white">React</span> <span className="text-[#ec6e40]">from</span> <span className="text-[#5482de]">'react'</span></div>
  <div><span className="text-gray-500">2&nbsp;&nbsp;</span><span className="text-[#ec6e40]">import</span> <span className="text-white">useState</span> <span className="text-[#ec6e40]">from</span> <span className="text-[#5482de]">'react'</span></div>

 <div className="flex items-center space-x-1 whitespace-nowrap overflow-hidden">
      <span className="text-gray-500">3&nbsp;&nbsp;</span>
      <Typewriter
        options={{
          autoStart: true,
          loop: false,
          delay: 300,
          html: true,
          cursor: '|',
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              `<span class="text-[#ec6e40]">const</span>&nbsp;<span class="text-[#9cdcfe]">Introduction</span>&nbsp;<span>=</span>&nbsp;<span>()</span><span>=</span>><span>{</span>`
            )
            .start();
        }}
      />
      
    </div>

  <div><span className="text-gray-500">4&nbsp;&nbsp;</span>&nbsp;&nbsp;<span className="text-[#c586c0]">const</span> <span className="text-[#9cdcfe]">[</span><span className="text-[#9cdcfe]">introMessage</span>, <span className="text-[#9cdcfe]">setIntroMessage</span>] <span className="text-[#ec6e40]">=</span> <span className="text-[#c586c0]">useState</span><span className="text-[#5482de]">(</span><span className="text-[#9cdcfe]">"Hi, I'm Saurav, a web developer and FPV drone enthusiast."</span><span className="text-[#5482de]">)</span></div>
  <div><span className="text-gray-500">5&nbsp;&nbsp;</span>&nbsp;&nbsp;<span className="text-[#c586c0]">const</span> <span className="text-[#9cdcfe]">handleIntroClick</span> <span>=</span> <span>()</span> <span>=&gt;</span> <span>{'{'}</span></div>
  <div><span className="text-gray-500">6&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c586c0]">setIntroMessage</span><span className="text-[#5482de]">(</span><span className="text-[#9cdcfe]">"Thanks for checking out my intro!"</span><span className="text-[#5482de]">)</span></div>
  <div><span className="text-gray-500">7&nbsp;&nbsp;</span>&nbsp;&nbsp;<span>{'}'}</span></div>
  <div><span className="text-gray-500">8&nbsp;&nbsp;</span>&nbsp;&nbsp;<span className="text-[#c586c0]">return</span> <span>{'('}</span></div>
  <div><span className="text-gray-500">9&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{'<div className="intro-container">'}</span></div>
  <div><span className="text-gray-500">10&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{'<h1>{introMessage}</h1>'}</span></div>
  <div><span className="text-gray-500">11&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{'<p>This is my brief introduction with a styled button.</p>'}</span></div>
  <div><span className="text-gray-500">12&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{'<button onClick={handleIntroClick} className="bg-[#ec6e40] px-4 py-2 rounded text-white hover:bg-[#d65a2a] transition">Click Me</button>'}</span></div>
  <div><span className="text-gray-500">13&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{'</div>'}</span></div>
  <div><span className="text-gray-500">14&nbsp;&nbsp;</span>&nbsp;&nbsp;<span>{')'}</span></div>
  <div><span className="text-gray-500">15&nbsp;&nbsp;</span><span>{'}'}</span></div>
  <div className="flex items-center">
     <span className="text-gray-500">16&nbsp;&nbsp;</span>
  <span className="text-[#ec6e40]">export</span>&nbsp;
  <span className="text-white">default</span>&nbsp;
  <span className="text-[#9cdcfe]">Introduction</span>
   
  </div>
</div>


    </div>
  );
};

export default Home;


