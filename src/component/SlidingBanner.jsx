import React from "react";
import { MdSend } from "react-icons/md";

const SlidingBanner = () => {
  return (
    <div className="w-full bg-[#0c2d6f] text-white overflow-hidden relative">
      <div className="whitespace-nowrap flex animate-slide">
        <span className="flex items-center text-lg font-medium px-4">
          TNPSC & UPSC/IAS Entrance Cum Scholarship Test 2025
          <MdSend className="ml-2 text-white text-xl hover:text-yellow-400 cursor-pointer transition-colors duration-300" />
        </span>
      </div>
    </div>
  );
};

export default SlidingBanner;
