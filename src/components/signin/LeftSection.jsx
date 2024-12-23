import React from "react";
import { StatsSection } from "./StatsSection";

const LeftSection = () => {
  return (
    <div
      className="border border-1 border-[#E9EAEB] bg-no-repeat bg-left-bottom flex-col justify-center items-center hidden xl:flex"
      style={{ backgroundImage: `url('/assets/Subtract.png')` }}
    >
      <div className="flex w-[474px] h-[322px]">
        <StatsSection />
      </div>
    </div>
  );
};

export default LeftSection;
