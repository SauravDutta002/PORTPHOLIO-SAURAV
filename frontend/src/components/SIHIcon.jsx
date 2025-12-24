// import React from 'react'
// import SIHLogo from "../assets/UI/SIHLOGO.png"

// const SIHIcon = ({ size = "w-16 h-16", className = "" }) => {
//   return (
//     <img
//       src={SIHLogo}
//       alt="SIH Logo"
//       className={`${size} object-contain ${className} bg-white rounded-full`}
      
//     />
//   );
// };


// export default SIHIcon


import React from 'react';
import SIHLogo from "../assets/UI/SIHLOGO.png";

const SIHIcon = ({ 
  size = "w-16 h-16", 
  className = "", 
  animation = "animate-pulse"   // default animation
}) => {
  return (
    <img
      src={SIHLogo}
      alt="SIH Logo"
      className={`${size} object-contain ${animation} ${className} bg-white rounded-full`}
    />
  );
};

export default SIHIcon;
