import React from "react";

const RepoCard = ({ title, type, lang, size, updated }) => {
  return (
    <div>
      <div className="flex flex-col py-6 justify-center items-start gap-3 self-stretch border-b border-[#D5D7DA] hover:bg-[#F5F5F5]">
        <div className="flex px-4 md:px-6 flex-col items-start gap-3">
          <div className="flex justify-center items-center gap-2">
            <div className="text-[#181D27] text-lg md:text-xl font-medium">
              {title}
            </div>
            <div className="border border-[#B2DDFF] bg-[#EFF8FF] flex items-center gap-1 py-[2px] px-2 rounded-full text-[#175CD3] text-sm font-normal">
              {type}
            </div>
          </div>
          <div className="flex items-start gap-10 text-[#181D27] font-normal text-sm md:text-base">
            <div className="flex justify-center items-center gap-2 ">
              {lang}
              <img src="/assets/Ellipse 1.png" alt="" />
            </div>
            <div className="flex justify-center items-center gap-2">
              <img src="/assets/database.png" alt="" />
              {size} KB
            </div>
            <div className="flex justify-center items-center gap-2">
              Updated {updated} day ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
