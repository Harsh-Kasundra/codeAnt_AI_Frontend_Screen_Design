import React from "react";

const NavNavigation = () => {
  return (
    <div className="flex flex-col gap-2 px-4 items-start mt-5">
      <div className="text-[#414651] text-base font-semibold flex flex-col gap-2">
        <div className="bg-[#1570EF] px-[14px] py-[10px] rounded-lg  flex gap-2 text-white hover:cursor-pointer ">
          <img src="/assets/repo.png" alt="" height={24} width={24} />
          Repositories
        </div>

        <div className="flex gap-2 px-[14px] py-[10px] hover:cursor-pointer hover:bg-[#eaf1fa] rounded-lg">
          <img src="/assets/code.png" alt="" />
          AI Code Review
        </div>
        <div className="flex gap-2 px-[14px] py-[10px] hover:cursor-pointer hover:bg-[#eaf1fa] rounded-lg">
          <img src="/assets/cloud.png" alt="" />
          Cloud Security
        </div>
        <div className="flex gap-2 px-[14px] py-[10px] hover:cursor-pointer hover:bg-[#eaf1fa] rounded-lg">
          <img src="/assets/use.png" alt="" />
          How to Use
        </div>
        <div className="flex gap-2 px-[14px] py-[10px] hover:cursor-pointer hover:bg-[#eaf1fa] rounded-lg">
          <img src="/assets/setting.png" alt="" />
          Settings
        </div>
      </div>
    </div>
  );
};

export default NavNavigation;
