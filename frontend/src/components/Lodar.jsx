import React from 'react'
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { VscTerminalPowershell } from "react-icons/vsc";
import { VscAdd } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";
import { IoIosMore } from "react-icons/io";
import { VscChevronUp } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import { VscSplitHorizontal } from "react-icons/vsc";
import Typewriter from "typewriter-effect";


const Lodar = () => {



    return (
    <div className='h-screen w-screen'>
      <Navbar/>
      <div className='flex'>

      <Sidebar/>



      <div className="border-t border-[#ffffff32] h-screen bg-black  w-full z-50 px-4 sm:px-6">
      
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
          <span className="text-white">\PORTFOLIO-SAURAV</span>
          <span className="text-white"><Typewriter
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
                            `<span><span class="text-yellow-400">npm <span/> <span class="text-[white]"> run dev <span/></span>`
                          )
                          .pauseFor(1000)
                          .start();
                      }}
                    /></span>
        </div>
      
        {/* Icons Grid */}
       
      
      </div>
      

      </div>
      
      
      
    </div>
  )
}

export default Lodar
