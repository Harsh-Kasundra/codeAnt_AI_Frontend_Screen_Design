import React from "react";
import { useNavigate } from "react-router-dom";

const NavFooter = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col gap- px-4 items-start mb-6">
        <div className="text-[#414651] text-base font-semibold">
          <div className="flex gap-2 px-[14px] py-[10px] hover:cursor-pointer hover:bg-[#eaf1fa] rounded-lg">
            <img src="/assets/call.png" alt="" />
            Support
          </div>
          <div
            className="flex gap-2 px-[14px] py-[10px] hover:cursor-pointer hover:bg-[#eaf1fa] rounded-lg"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src="/assets/logout.png" alt="" />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavFooter;
