

   

import React from 'react';
import Typewriter from 'typewriter-effect';

const About = () => {
  return (
    <div
      className="text-white font-light px-4 md:px-6 py-10 relative"
      style={{ fontFamily: 'Fira Code, monospace' }}
    >
      {/* 🔲 Floating About Me Box on top of code */}
      <div className="absolute h-[80vh] left-4 md:left-9 z-10 text-white px-2 md:px-3 rounded-lg backdrop-blur-[2px] max-w-[90%] md:max-w-[70%] pointer-events-none">
        <h2 className="text-[26px] md:text-[35px] font-bold text-[#ec6e40] mb-1">About Me</h2>
        <p className="text-sm md:text-base text-gray-300">
          I'm Saurav Dutta — a dedicated full-stack developer specializing in the MERN stack, with a strong passion for solving real-world problems through clean, efficient code. Beyond the screen, I'm an avid FPV drone builder, constantly exploring the intersection of hardware and software innovation. I thrive on challenges, whether it's debugging complex systems or pushing the limits of aerial tech, and I'm always eager to learn, build, and elevate every project I take on.
        </p>
      </div>

      {/* 💻 Code Block */}
      <div className="text-[12px] md:text-[14px] leading-6 md:leading-7 p-2 md:p-4 opacity-[0.3] overflow-x-auto">
        <div><span className="text-gray-500">1&nbsp;&nbsp;</span><span className="text-[#ec6e40]">import</span> <span className="text-white">React</span> <span className="text-[#ec6e40]">from</span> <span className="text-[#5482de]">'react'</span></div>
        <div><span className="text-gray-500">2&nbsp;&nbsp;</span><span className="text-[#ec6e40]">import</span> <span className="text-white">useState</span> <span className="text-[#ec6e40]">from</span> <span className="text-[#5482de]">'react'</span></div>
        <div><span className="text-gray-500">3&nbsp;&nbsp;</span><span className="text-[#ec6e40]">const</span> <span className="text-[#9cdcfe]">About</span> <span>=</span> <span>()</span> <span>=&gt;</span> <span>{'{'}</span></div>
        <div><span className="text-gray-500">4&nbsp;&nbsp;</span>&nbsp;&nbsp;<span className="text-[#c586c0]">const</span> <span className="text-[#9cdcfe]">[</span><span className="text-[#9cdcfe]">message</span>, <span className="text-[#9cdcfe]">setMessage</span>] <span className="text-[#ec6e40]">=</span> <span className="text-[#c586c0]">useState</span><span className="text-[#5482de]">(</span><span className="text-[#9cdcfe]">"Hello, I'm Saurav!"</span><span className="text-[#5482de]">)</span></div>
        <div><span className="text-gray-500">5&nbsp;&nbsp;</span>&nbsp;&nbsp;<span className="text-[#c586c0]">const</span> <span className="text-[#9cdcfe]">handleClick</span> <span>=</span> <span>()</span> <span>&#8594;</span> <span>{'{'}</span></div>
        <div><span className="text-gray-500">6&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c586c0]">setMessage</span><span className="text-[#5482de]">(</span><span className="text-[#9cdcfe]">"You've clicked the button!"</span><span className="text-[#5482de]">)</span></div>
        <div><span className="text-gray-500">7&nbsp;&nbsp;</span>&nbsp;&nbsp;<span>{'}'}</span></div>
        <div><span className="text-gray-500">8&nbsp;&nbsp;</span>&nbsp;&nbsp;<span className="text-[#c586c0]">return</span> <span>{'('}</span></div>
        <div><span className="text-gray-500">9&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{'<div className="about-container">'}</span></div>
        <div><span className="text-gray-500">10&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{'<h1>{message}</h1>'}</span></div>
        <div><span className="text-gray-500">11&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{'<p>This is a styled code block with a button!</p>'}</span></div>
        <div><span className="text-gray-500">12&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{'<button onClick={handleClick}  bg-[#ec6e40] px-4 py-2">Click Me</button>'}</span></div>
        <div><span className="text-gray-500">13&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{'</div>'}</span></div>
        <div><span className="text-gray-500">14&nbsp;&nbsp;</span>&nbsp;&nbsp;<span>{')'}</span></div>
        <div><span className="text-gray-500">15&nbsp;&nbsp;</span><span>{'}'}</span></div>
        <div className="flex items-center">
          <span className="text-gray-500">16&nbsp;&nbsp;</span>
          <Typewriter 
            options={{
              strings: [
                '<span class="text-[#ec6e40]">export</span> <span class="text-white">default</span> <span class="text-[#9cdcfe]">About</span>',
              ],
              autoStart: true,
              loop: false,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
