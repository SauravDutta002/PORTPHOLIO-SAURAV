import React from 'react';
import { VscBellDot, VscThumbsupFilled, VscError } from "react-icons/vsc";
import { motion } from "framer-motion";

const Notification = ({ success }) => {
  if (success === null) return null;

  return (
    // <div className="absolute bottom-full mb-2 z-100 right-42 translate-x-1/2 border border-[#ffffff32] text-white text-sm px-2 py-2 rounded shadow-lg w-80 flex-col space-y-3 bg-[#1f1f1f]">
    //   <div className="flex justify-between text-[12px]">
    //     <span>NOTIFICATIONS</span>
    //     <span><VscBellDot /></span>
    //   </div>

    //   {success ? (
    //     <div className="flex gap-1 items-center border border-blue-500 py-1 px-1 rounded-xs">
    //       <VscThumbsupFilled className="text-blue-500 text-[18px]" />
    //       <span>Email Sent</span>
    //     </div>
    //   ) : (
    //      <div className="flex gap-1 items-center border border-red-500 py-1 px-1 rounded-xs">
    //       <VscError className="text-red-500 text-[18px]" />
    //       <span>Email Not Sent</span>
    //     </div>
    //   )}
    // </div>



     <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute bottom-full mb-2 z-100 right-42 translate-x-1/2 border border-[#ffffff32] text-white text-sm px-2 py-2 rounded shadow-lg w-80 flex-col space-y-3 bg-[#1f1f1f]"
    >
      <div className="flex justify-between text-[12px]">
        <span>NOTIFICATIONS</span>
        <span>
          <VscBellDot />
        </span>
      </div>

      {success ? (
        <div className="flex gap-1 items-center border border-blue-500 py-1 px-1 rounded-xs">
          <VscThumbsupFilled className="text-blue-500 text-[18px]" />
          <span>Email Sent</span>
        </div>
      ) : (
        <div className="flex gap-1 items-center border border-red-500 py-1 px-1 rounded-xs">
          <VscError className="text-red-500 text-[18px]" />
          <span>Email Not Sent</span>
        </div>
      )}
    </motion.div>
  );
};

export default Notification;

