import React, { useEffect, useState } from 'react'
import { VscRemote } from "react-icons/vsc";
import { VscSync } from "react-icons/vsc";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Notification from './Notification';

//x
import { VscError } from "react-icons/vsc";

//ok
import { VscThumbsupFilled } from "react-icons/vsc";


//bell
import { VscBell } from "react-icons/vsc";
import { VscBellDot } from "react-icons/vsc"

;
const Footer = ({ notification }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (notification !== null) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  

  return (
  <div className='text-[#ffffff68] w-full border-t border-[#ffffff32] h-[10vh] flex justify-between items-center px-0 text-2xl sm:text-base'>
  <div className='flex gap-2 items-center'>
    <div className='bg-[#ffffff1f] text-white md:px-2 md:py-[2px] px-2 py-2 '><VscRemote/></div>
    <div><VscSync/></div>
  </div>


   

      <div className='flex gap-3 justify-center items-center'>
        <div><VscGithub/></div>
        <div><FaLinkedin/></div>
        <div><FiInstagram/></div>
      </div>



      <div className="relative inline-block">
  {/* Bell icon */}
  <div><VscBell className="text-2xl sm:text-base mr-1" /></div>
    
  {show && <Notification success={notification} />}
</div>


    </div>
  )
}

export default Footer


