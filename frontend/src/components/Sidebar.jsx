import React , {useState} from 'react'
import { VscSearch, VscGithub, VscAccount, VscSettingsGear } from "react-icons/vsc";
import { GiDiamondTrophy } from "react-icons/gi";
import { IoIosMore } from "react-icons/io";
import { VscChevronDown } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaJs } from "react-icons/fa";
import { SiZcool } from "react-icons/si";
import { VscExtensions } from "react-icons/vsc";
import { VscFiles } from "react-icons/vsc";

//contact 
import { VscFeedback } from "react-icons/vsc";


// pages icon

import { AiFillFolderOpen } from "react-icons/ai";

const SidebarWithBox = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const [openMain, setOpenMain] = useState(true);
  const [openPages, setOpenPages] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);

  const files = [
    { name: "Home.jsx", icon: <FaReact className=" text-[#3577e7] font-bold" />, path: "/" },
    { name: "About.jsx", icon: <FaReact className="text-[#3577e7]" />, path: "/about" },
    { name: "Skills.jsx", icon: <FaReact className="text-[#3577e7]" />, path: "/skills" },
    { name: "Project.jsx", icon: <FaReact className="text-[#3577e7]" />, path: "/projects" },
    { name: "Achievement.jsx", icon: <FaReact className="text-[#3577e7]" />, path: "/achievements" },
    { name: "Contact.jsx", icon: <FaReact className="text-[#3577e7]" />, path: "/contact" },
  ];

  const projects = [
    { name: "Aura.js", icon: <FaReact className="text-[#3577e7]" />, path: "/AURA" },
    // { name: "WeatherApp.js", icon: <FaJs className="text-[#d7cb28]" />, path: "/WaetherApp" },
  ];

  return (
    <div className="flex">
      <Sidebar toggleSidebar={toggleSidebar} />

      {isOpen && (
        <div className="bg-black h-[92vh] md:w-[16vw] text-white border-r border-[#ffffff32] overflow-y-auto w-[55vw]  ">
          <div className="flex items-center px-4 justify-between py-3">
            <span className="text-[12px]">EXPLORER</span>
            <IoIosMore />
          </div>

          {/* File explorer sections */}
          <ul className="text-center flex-col cursor-pointer">
            {/* Main Folder Toggle */}
            <div
              onClick={() => setOpenMain(!openMain)}
              className="hover:bg-[#0d1117dc] font-bold flex items-center gap-1 text-[11px]  px-1 py-1"
            >
              {openMain ? <VscChevronDown className='text-[16px]' /> : <VscChevronRight className='text-[16px]' />}
              <span>PORTFOLIO-SAURAV</span>
            </div>

            {openMain && (
              <>
                {/* Pages Folder */}
                <div className="pages">
                  <div
                    onClick={() => setOpenPages(!openPages)}
                    className="hover:bg-[#0d1117dc] flex gap-1 px-4 py-1 text-[11px] items-center"
                  >
                    {openPages ? <VscChevronDown className='text-[16px]' /> : <VscChevronRight className='text-[16px]' />}
                    <AiFillFolderOpen className="text-[#fb7313fe] text-[17px]" />
                    <span className="text-[12px]">pages</span>
                  </div>

                  {openPages &&
                    files.map((file, idx) => (
                      <li
                        key={idx}
                        onClick={() => navigate(file.path)}
                        className="hover:bg-[#0d1117dc] py-1 flex items-center px-12 gap-2 text-[12px]"
                      >
                        {file.icon}
                        {file.name}
                      </li>
                    ))}
                </div>

                {/* Projects Folder */}
                <div className="pages">
                  <div
                    onClick={() => setOpenProjects(!openProjects)}
                    className="hover:bg-[#0d1117dc] flex gap-1 px-4 py-1 text-[11px] items-center"
                  >
                    {openProjects ? <VscChevronDown className='text-[16px]' /> : <VscChevronRight className='text-[16px]' />}
                    <SiZcool className="text-[#fbe813fe] text-[17px]" />
                    <span className="text-[12px]">Projects</span>
                  </div>

                  {openProjects &&
                    projects.map((project, idx) => (
                      <li
                        key={idx}
                        onClick={() => navigate(project.path)}
                        className="hover:bg-[#0d1117dc] py-1 flex items-center px-12 gap-2 text-[12px]"
                      >
                        {project.icon}
                        {project.name}
                      </li>
                    ))}
                </div>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

// export default SidebarWithBox;

const Sidebar = ({ toggleSidebar }) => {

  const navigate = useNavigate();

  return (
    <div className="h-[92vh] w-[14vw] md:w-[5vw] lg:w-[3.5vw] border-r border-[#ffffff32] flex flex-col justify-between px-2 py-4">
      
      {/* Top Icons */}
      <div className="space-y-9 flex flex-col items-center">
        <IconWrapper><VscFiles onClick={toggleSidebar}/></IconWrapper>
        <IconWrapper>< VscExtensions onClick={()=>{
          navigate("/projects")
        }} /></IconWrapper>
        <IconWrapper><VscSearch onClick={()=>{
          navigate("/")
        }}/></IconWrapper>
        <IconWrapper><GiDiamondTrophy onClick={()=>{
          navigate("/achievements")
        }}/></IconWrapper>
        <IconWrapper><a href="https://github.com/SauravDutta002" target='_blank'><VscGithub/></a></IconWrapper>
        <IconWrapper><VscFeedback  onClick={()=>{
          navigate("/contact")
        }}/></IconWrapper>

      </div>

      {/* Bottom Icons */}
      <div className="space-y-6 flex flex-col items-center">
        <IconWrapper><VscAccount /></IconWrapper>
        <IconWrapper><VscSettingsGear /></IconWrapper>
      </div>
      
    </div>
  )
}

// const Sidebar = ({ toggleSidebar }) => {
//   return (
//     <div className="h-[92vh] w-[3.5vw] border-r border-[#ffffff32] flex flex-col justify-between px-2 py-4">
//       {/* Top Icons */}
//       <div className="space-y-9 flex flex-col items-center">
//         <IconWrapper onClick={toggleSidebar}><FaRegCopy /></IconWrapper>
//         <IconWrapper onClick={toggleSidebar}><CgExtension /></IconWrapper>
//         <IconWrapper onClick={toggleSidebar}><VscSearch /></IconWrapper>
//         <IconWrapper onClick={toggleSidebar}><GiDiamondTrophy /></IconWrapper>
//         <IconWrapper onClick={toggleSidebar}><VscGithub /></IconWrapper>
//       </div>

//       {/* Bottom Icons */}
//       <div className="space-y-6 flex flex-col items-center">
//         <IconWrapper onClick={toggleSidebar}><VscAccount /></IconWrapper>
//         <IconWrapper onClick={toggleSidebar}><VscSettingsGear /></IconWrapper>
//       </div>
//     </div>
//   );
// };

// const IconWrapper = ({ children, onClick }) => (
//   <div
//     className="text-[#ffffff90] text-[26px] hover:text-white transition-transform duration-200 hover:scale-110 cursor-pointer"
//     onClick={onClick}
//   >
//     {children}
//   </div>
// );


// Icon wrapper with hover and transition
const IconWrapper = ({ children , onClick }) => (
  <div onClick={onClick} className="text-[#ffffff90] text-[26px] hover:text-white transition-transform duration-200 cursor-pointer">
    {children}
  </div>
)

export default SidebarWithBox
