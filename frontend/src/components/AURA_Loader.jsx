// // import React, { useEffect, useState } from "react";
// // import styled from "styled-components";

// // const IntroLoader = ({ onFinish }) => {
// //   const [hide, setHide] = useState(false);

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setHide(true);
// //       setTimeout(onFinish, 800); // fade-out duration
// //     }, 4200); // total animation time

// //     return () => clearTimeout(timer);
// //   }, [onFinish]);

// //   return (
// //     <LoaderWrapper className={hide ? "fade-out" : ""}>
// //       <div className="animation-box">
// //         <div className="loader triangle">
// //           <svg viewBox="0 0 86 80">
// //             <polygon points="43 8 79 72 7 72" />
// //           </svg>
// //         </div>

// //         <div className="ura-text">URA</div>
// //       </div>
// //     </LoaderWrapper>
// //   );
// // };

// // const LoaderWrapper = styled.div`
// //   position: fixed;
// //   inset: 0;
// //   background: black;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   z-index: 9999;
// //   transition: opacity 0.8s ease-in-out;

// //   &.fade-out {
// //     opacity: 0;
// //     pointer-events: none;
// //   }

// //   .animation-box {
// //     display: flex;
// //     align-items: center;
// //     opacity: 0;
// //     animation: fadeIn 0.8s ease forwards;
// //     animation-delay: 0.4s;
// //   }

// //   @keyframes fadeIn {
// //     to {
// //       opacity: 1;
// //     }
// //   }

// //   /* URA text */
// //   .ura-text {
// //     font-family: "Michroma", sans-serif;
// //     font-size: 26px;
// //     color: white;
// //     margin-left: 10px;
// //     letter-spacing: 3px;

// //     opacity: 0;
// //     transform: translateX(-25px);
// //     animation: revealText 0.8s ease-out forwards;
// //     animation-delay: 3s;
// //   }

// //   @keyframes revealText {
// //     0% {
// //       opacity: 0;
// //       transform: translateX(-25px) scale(0.9);
// //       filter: blur(6px);
// //     }
// //     100% {
// //       opacity: 1;
// //       transform: translateX(0) scale(1);
// //       filter: blur(0);
// //     }
// //   }

// //   /* Triangle Loader */
// //   .loader {
// //     --path: #ffffff;
// //     --dot: #ff3b3b;
// //     --duration: 3s;

// //     width: 58px;
// //     height: 58px;
// //     position: relative;
// //   }

// //   .loader:before {
// //     content: "";
// //     width: 8px;
// //     height: 8px;
// //     border-radius: 50%;
// //     background: var(--dot);
// //     position: absolute;
// //     top: 37px;
// //     left: 21px;

// //     transform: translate(-10px, -18px);
// //     animation: dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86);
// //     animation-fill-mode: forwards;
// //   }

// //   .loader svg polygon {
// //     fill: none;
// //     stroke: var(--path);
// //     stroke-width: 10px;
// //     stroke-linecap: round;
// //     stroke-linejoin: round;
// //     stroke-dasharray: 145 76 145 76;
// //     stroke-dashoffset: 0;

// //     animation: pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86);
// //     animation-fill-mode: forwards;
// //   }

// //   @keyframes pathTriangle {
// //     33% {
// //       stroke-dashoffset: 74;
// //     }
// //     66% {
// //       stroke-dashoffset: 147;
// //     }
// //     100% {
// //       stroke-dashoffset: 221;
// //     }
// //   }

// //   @keyframes dotTriangle {
// //     33% {
// //       transform: translate(0, 0);
// //     }
// //     66% {
// //       transform: translate(10px, -18px);
// //     }
// //     100% {
// //       transform: translate(-10px, -18px);
// //     }
// //   }
// // `;

// // export default IntroLoader;


// import React, { useEffect, useState } from "react";
// import styled from "styled-components";

// const IntroLoader = ({ onFinish }) => {
//   const [hide, setHide] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setHide(true);
//       setTimeout(onFinish, 900);
//     }, 4500);

//     return () => clearTimeout(timer);
//   }, [onFinish]);

//   return (
//     <LoaderWrapper className={hide ? "fade-out" : ""}>
//       <div className="animation-box">
//         <div className="loader-wrapper">
//           <div className="loader">
//             <svg viewBox="0 0 86 80">
//               <polygon points="43 8 79 72 7 72" />
//             </svg>
//           </div>
//           <div className="ura-text">URA</div>
//         </div>
//       </div>
//     </LoaderWrapper>
//   );
// };

// const LoaderWrapper = styled.div`
//   position: fixed;
//   inset: 0;
//   background: black;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 9999;
//   transition: opacity 0.9s ease-in-out;
//   overflow: hidden;

//   &.fade-out {
//     opacity: 0;
//     pointer-events: none;
//   }

//   /* fade in whole animation box */
//   .animation-box {
//     opacity: 0;
//     animation: fadeIn 0.8s ease forwards;
//     animation-delay: 0.3s;
//   }

//   @keyframes fadeIn {
//     to { opacity: 1; }
//   }

//   /* WRAPPER TO SLIDE TRIANGLE LEFT */
//   .loader-wrapper {
//     display: flex;
//     align-items: center;
//     position: relative;

//     /* Triangle starts center → slides left */
//     animation: shiftLeft 0.8s ease forwards;
//     animation-delay: 3s;
//   }

//   @keyframes shiftLeft {
//     0% { transform: translateX(0); }
//     100% { transform: translateX(-40px); }
//   }

//   /* UPDATED URA TEXT — clean, premium */
//   .ura-text {
//     font-family: "Michroma", sans-serif;
//     font-size: 28px;
//     font-weight: 800;
//     color: white;
//     margin-left: 10px;
//     letter-spacing: 2px;
//     line-height: 1;
//     margin-top: 20px;


//     opacity: 0;
//     transform: translateX(22px) translateY(4px);
//     animation: textReveal 0.85s ease-out forwards;
//     animation-delay: 3.15s;
//   }

// //   @keyframes textReveal {
// //     0% {
// //       opacity: 0;
// //       transform: translateX(22px) translateY(6px) scale(0.94);
// //       filter: blur(6px);
// //     }
// //     60% {
// //       opacity: 1;
// //       transform: translateX(-1px) translateY(2px) scale(1.02);
// //       filter: blur(1px);
// //     }
// //     100% {
// //       opacity: 1;
// //       transform: translateX(0) translateY(0) scale(1);
// //       filter: blur(0);
// //     }
// //   }

// @keyframes textReveal {
//   0% {
//     opacity: 0;
//     transform: translateX(-40px) translateY(6px) scale(0.94);
//     filter: blur(6px);
//   }
//   60% {
//     opacity: 1;
//     transform: translateX(6px) translateY(2px) scale(1.02);
//     filter: blur(1px);
//   }
//   100% {
//     opacity: 1;
//     transform: translateX(0) translateY(0) scale(1);
//     filter: blur(0);
//   }
// }


//   /* TRIANGLE LOADER (NO GLOW) */
//   .loader {
//     --path: #ffffff;
//     --dot: #ff3b3b;
//     --duration: 3s;

//     width: 62px;
//     height: 62px;
//     position: relative;

//     animation: triangleScale 0.5s ease-out forwards;
//   }

//   @keyframes triangleScale {
//     0% { transform: scale(0.8); opacity: 0.5; }
//     100% { transform: scale(1); opacity: 1; }
//   }

//   /* dot movement */
//   .loader:before {
//     content: "";
//     width: 8px;
//     height: 8px;
//     border-radius: 50%;
//     background: var(--dot);
//     position: absolute;
//     top: 44px;
//     left: 28px;

//     transform: translate(-10px, -18px);
//     animation: dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86);
//     animation-fill-mode: forwards;
//   }

//   /* triangle stroke animation */
//   .loader svg polygon {
//     fill: none;
//     stroke: var(--path);
//     stroke-width: 10px;
//     stroke-linecap: round;
//     stroke-linejoin: round;
//     stroke-dasharray: 145 76 145 76;
//     stroke-dashoffset: 0;

//     animation: pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86);
//     animation-fill-mode: forwards;
//   }

//   @keyframes pathTriangle {
//     33% { stroke-dashoffset: 74; }
//     66% { stroke-dashoffset: 147; }
//     100% { stroke-dashoffset: 221; }
//   }

//   @keyframes dotTriangle {
//     33% { transform: translate(0, 0); }
//     66% { transform: translate(10px, -18px); }
//     100% { transform: translate(-10px, -18px); }
//   }
// `;

// export default IntroLoader;


import React, { useEffect, useState } from "react";
import styled from "styled-components";

const IntroLoader = ({ onFinish }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
      setTimeout(onFinish, 900);
    }, 4500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <LoaderWrapper className={hide ? "fade-out" : ""}>
      <div className="animation-box flex justify-center align-middle">
        <div className="loader-wrapper">
          <div className="loader">
            <svg viewBox="0 0 86 80">
              <polygon points="43 8 79 72 7 72" />
            </svg>
          </div>
          <div className="ura-text">URA</div>
        </div>
      </div>
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.9s ease-in-out;

  &.fade-out {
    opacity: 0;
    pointer-events: none;
  }

  /* Smooth fade-in */
  .animation-box {
    opacity: 0;
    animation: fadeIn 0.8s ease forwards;
    animation-delay: 0.3s;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  /* Triangle slides left smoothly */

  .loader-wrapper {
    display: flex;
    align-items: center;
    position: relative;

    /* FIX: Keep loader centered even after shifting left */
    left: 36px;

    animation: shiftLeft 0.7s ease forwards;
    animation-delay: 3s;
}


  @keyframes shiftLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-36px);
    }
  }

  /* URA text — smooth left → right */
  .ura-text {
    font-family: "Michroma", sans-serif;
    font-size: 28px;
    font-weight: 800;
    color: white;
    margin-left: 10px;
    letter-spacing: 2px;
    margin-top: 20px;

    opacity: 0;
    transform: translateX(-35px);
    animation: textReveal 0.2s ease-out forwards;
    animation-delay: 3.1s; /* slightly after triangle */
  }

  /* Clean smooth slide-in, no bounce */
  @keyframes textReveal {
    0% {
      opacity: 0;
      transform: translateX(-35px);
      filter: blur(6px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
      filter: blur(0);
    }
  }

  /* Triangle loader */
  .loader {
    --path: #ffffff;
    --dot: #ff3b3b;
    --duration: 3s;

    width: 62px;
    height: 62px;
    position: relative;

    animation: triangleScale 0.45s ease-out forwards;
  }

  @keyframes triangleScale {
    0% {
      transform: scale(0.85);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  /* Dot movement */
  .loader:before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--dot);
    position: absolute;
    top: 44px;
    left: 28px;
    transform: translate(-10px, -18px);
    animation: dotTriangle var(--duration) ease-in-out;
    animation-fill-mode: forwards;
  }

  /* Triangle path stroke animation */
  .loader svg polygon {
    fill: none;
    stroke: var(--path);
    stroke-width: 10px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 145 76 145 76;
    stroke-dashoffset: 0;

    animation: pathTriangle var(--duration) ease-in-out;
    animation-fill-mode: forwards;
  }

  @keyframes pathTriangle {
    33% {
      stroke-dashoffset: 74;
    }
    66% {
      stroke-dashoffset: 147;
    }
    100% {
      stroke-dashoffset: 221;
    }
  }

  @keyframes dotTriangle {
    33% {
      transform: translate(0, 0);
    }
    66% {
      transform: translate(10px, -18px);
    }
    100% {
      transform: translate(-10px, -18px);
    }
  }
`;

export default IntroLoader;
