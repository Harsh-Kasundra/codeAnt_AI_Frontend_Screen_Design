import React from "react";

const MobileHeader = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <img
            src="/assets/logo.png"
            alt="CodeAnt AI Logo"
            width={28}
            height={32}
          />
          <div className="text-[#181d27] text-2xl font-normal font-satoshi">
            CodeAnt AI
          </div>
        </div>
        <div>
          <img src="/assets/ham.png" alt="" />
        </div>
        <div>
          <img src="/assets/cross.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
