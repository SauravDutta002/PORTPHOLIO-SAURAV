

// import { FaReact } from "react-icons/fa";
// import { IoIosMore } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import { FiPlay } from "react-icons/fi";
// import { VscSplitHorizontal } from "react-icons/vsc";



// const tabs = [
//   { name: "Home.jsx", icon: <FaReact />, path: "/" },
//   { name: "About.jsx", icon: <FaReact />, path: "/about" },
//   { name: "Skills.jsx", icon: <FaReact />, path: "/skills" },
//   { name: "Projects.jsx", icon: <FaReact />, path: "/projects" },
//   { name: "Achievements.jsx", icon: <FaReact />, path: "/achievements" },
//   { name: "contact.jsx", icon: <FaReact />, path: "/contact" },

// ];


// const Header = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-black  text-gray-300 h-10 flex items-center justify-between font-sans align-middle  ">
//       {/* Tabs container */}
//       <ul className="flex overflow-x-auto whitespace-nowrap max-w-[70vw] sm:max-w-[80vw] lg:max-w-[60vw]">
//         {tabs.map((tab, idx) => (
//           <li
//             key={idx}
//             onClick={() => navigate(tab.path)}
//             className="cursor-pointer inline-flex items-center gap-2 text-[12px] sm:text-[14px]  border-r border-b border-[#ffffff32] px-3 py-2.5 hover:bg-[#ffffff10] transition whitespace-nowrap"
//           >
//             <span className="text-[#3577e7] -ml-1">
//               {tab.icon}
//             </span>
//             {tab.name}
//           </li>
//         ))}
//       </ul>

//       {/* Right Side Icons */}
 

//       <div className="flex justify-end items-center gap-2 sm:gap-3 px-2 sm:px-4 border-b py-3 border-[#ffffff32] text-lg sm:text-xl flex-grow min-w-fit ">
//         <span className="text-[16px]"><FiPlay /></span>
//         <span className="text-[16px]" ><VscSplitHorizontal /></span>
//         <span className="text-[16px]" ><IoIosMore /></span>
//       </div>


//     </div>
//   );
// };


// export default Header;


import { FaReact } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import { FiPlay } from "react-icons/fi";
import { VscSplitHorizontal } from "react-icons/vsc";

const tabs = [
  { name: "Home.jsx", icon: <FaReact />, path: "/" },
  { name: "About.jsx", icon: <FaReact />, path: "/about" },
  { name: "Skills.jsx", icon: <FaReact />, path: "/skills" },
  { name: "Projects.jsx", icon: <FaReact />, path: "/projects" },
  { name: "Achievements.jsx", icon: <FaReact />, path: "/achievements" },
  { name: "contact.jsx", icon: <FaReact />, path: "/contact" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="bg-black text-gray-300 h-10 flex items-center justify-between font-sans">
      {/* Tabs container */}
      <ul className="flex overflow-x-auto whitespace-nowrap max-w-[70vw] sm:max-w-[80vw] lg:max-w-[60vw]">
        {tabs.map((tab, idx) => {
          const isActive = location.pathname === tab.path;

          return (
            <li
              key={idx}
              onClick={() => navigate(tab.path)}
             className={`cursor-pointer inline-flex items-center gap-2 text-[12px] sm:text-[14px] border-r border-b border-[#ffffff32] px-3 py-2.5 transition whitespace-nowrap 
  ${isActive ? "bg-[#0d1117] text-white border-t border-t-[#ff7b00] mt-[0.2px] border-b-0" : "hover:bg-[#ffffff10]"}`}

            >
              <span className="text-[#3577e7] -ml-1">{tab.icon}</span>
              {tab.name}
            </li>
          );
        })}
      </ul>

      {/* Right Side Icons */}
      <div className="flex justify-end items-center gap-2 sm:gap-3 px-2 sm:px-4 border-b py-3 border-[#ffffff32] text-lg sm:text-xl flex-grow min-w-fit cursor-pointer">
        <span className="text-[16px]">
          <FiPlay />
        </span>
        <span className="text-[16px]">
          <VscSplitHorizontal />
        </span>
        <span className="text-[16px]">
          <IoIosMore />
        </span>
      </div>
    </div>
  );
};

export default Header;
