import React from "react";

const Header = () => {
  return (
    <div className="px-6 py-5">
      <div className="flex flex-col gap-3 items-start xl:flex-row xl:justify-between xl:items-center">
        <div className="flex flex-col gap-1">
          <div className="text-[#181D27] text-2xl font-semibold ">
            Repositories
          </div>
          <div className="text-[#414651] text-sm font-normal">
            33 total repositories
          </div>
        </div>
        <div className="flex gap-[12px] ">
          <div className="rounded-lg flex justify-center gap-[2px] items-center px-[14px] py-[10px] border border-[#D5D7DA] hover:cursor-pointer text-sm">
            <img src="/assets/refresh.png" alt="" />
            Refresh All
          </div>
          <div className="bg-[#1570EF] text-white rounded-lg flex  gap-[2px] justify-center items-center px-[14px] py-[10px] hover:cursor-pointer text-sm">
            <img src="/assets/plus.png" alt="" />
            Add Repositories
          </div>
        </div>
      </div>
      <div className="relative w-[338px] h-[44px] mt-4">
        <img
          src="/assets/search.png"
          alt="search-icon"
          className="absolute top-1/2 left-3 transform -translate-y-1/2"
        />
        <input
          className="w-full h-full py-[10px] px-[40px] border border-[#D5D7DA] rounded-lg outline-none"
          type="text"
          placeholder="Search Repositories"
        />
      </div>
    </div>
  );
};

export default Header;
