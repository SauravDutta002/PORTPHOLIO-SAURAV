import React, { useState } from "react";
import { VscVscode, VscLayoutSidebarLeft, VscLayoutSidebarRightOff } from "react-icons/vsc";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import { VscChromeMinimize } from "react-icons/vsc";
import { VscChromeMaximize } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";

import { RxHamburgerMenu } from "react-icons/rx";
import { VscArrowLeft } from "react-icons/vsc";

import { VscArrowRight } from "react-icons/vsc";

import { VscLayoutPanel } from "react-icons/vsc";
import { VscSymbolStructure } from "react-icons/vsc";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#0B0E14] text-gray-300 h-10 flex items-center px-4 justify-between font-sans border-b border-[#ffffff32]">
      
      {/* Left Section */}
      <div className="flex items-center md:space-x-0 space-x-4 ">
        <div className="text-blue-500 text-xl font-bold"><VscVscode /></div>

        {/* Hamburger button (visible on small screens) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-lg">
            <RxHamburgerMenu />
          </button>
        </div>

        {/* Menu items (hide on small screens, show with toggle) */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute top-10 left-4 p-2 flex-col space-y-1 z-10 text-sm md:flex md:static md:flex-row md:space-x-0.5 md:space-y-0`}
        >
          {["File", "Edit", "Selection", "View", "Go", "Run"].map((item) => (
            <span
              key={item}
              className="cursor-pointer px-2 py-1 rounded-md hover:bg-[#ffffff12] transition duration-200"
            >
              {item}
            </span>
          ))}
          <span className="cursor-pointer px-2 py-1 rounded-md hover:bg-[#ffffff12] transition duration-200 flex justify-center items-center">
            <IoIosMore />
          </span>
        </nav>
      </div>

      {/* Center Search Bar */}
      <div className="flex-1 px-4 flex space-x-4 items-center">
        <div className="flex space-x-3">
          <span className="font-thin"><VscArrowLeft/></span>
          <span className="font-thin"><VscArrowRight /></span>
        </div>

        <input 
          type="text"
          placeholder="PORTFOLIO-SAURAV"
          className="w-full hidden md:block max-w-sm bg-transparent border border-gray-700 text-sm px-3 py-1 rounded-md placeholder-gray-400 focus:outline-none text-center"
        />
      </div>

      {/* Right Section */}
      <div className="flex space-x-3">
        <div className="flex items-center space-x-2 text-gray-400 text-sm">
          <span className="cursor-pointer text-[16px]"><VscSymbolStructure className="-rotate-90" /></span>
          <span className="cursor-pointer text-[16px]"><VscLayoutSidebarLeft /></span>
          <span className="cursor-pointer text-[16px]"><VscLayoutPanel /></span>
          <span className="cursor-pointer text-[16px]"><VscLayoutSidebarRightOff /></span>
        </div>

        <div className="flex text-gray-400 text-sm">
          <span className="cursor-pointer text-[16px] px-4 py-2.5 hover:bg-[#ffffff18] transition duration-200">
            <VscChromeMinimize />
          </span>
          <span className="cursor-pointer text-[16px] px-4 py-2.5 hover:bg-[#ffffff18] transition duration-200">
            <VscChromeMaximize />
          </span>
          <span className="cursor-pointer text-[18px] px-4 py-2.5 hover:bg-[#ff0000ce] transition duration-200 hover:text-white">
            <VscChromeClose />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
