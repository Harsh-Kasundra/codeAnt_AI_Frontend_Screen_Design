import React from "react";

const MobileNavBar = ({ value }) => {
  return (
    <div>
      {value && (
        <div className="w-screen p-4 ">
          {/* Nav Header Starts */}
          <div className="flex flex-col gap-5 items-start w-full">
            <div className="flex justify-between items-center gap-2 w-full h-[40px] px-3 py-2 pr-4 border border-[#D5D7DA] rounded-lg shadow-custom2">
              <div className="overflow-hidden whitespace-nowrap text-ellipsis truncate">
                UtkarshDhairyaPanwar
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                className="ml-2"
              >
                <path
                  d="M13.7616 1.68173L7.79282 7.40048C7.60532 7.55673 7.41782 7.61923 7.26157 7.61923C7.07407 7.61923 6.88657 7.55673 6.73032 7.43173L0.730318 1.68173C0.417818 1.40048 0.417818 0.900484 0.699068 0.619234C0.980318 0.306734 1.48032 0.306734 1.76157 0.587984L7.26157 5.83798L12.7303 0.587984C13.0116 0.306734 13.5116 0.306734 13.7928 0.619234C14.0741 0.900484 14.0741 1.40048 13.7616 1.68173Z"
                  fill="#181D27"
                />
              </svg>
            </div>
          </div>
          {/* Nav Header Ends */}
          {/* Nav Navigation starts */}
          <div className="flex flex-col gap-2 items-start mt-5 w-full">
            <div className="text-[#414651] text-base font-semibold flex flex-col w-full">
              <div className="flex gap-2 py-2 px-1 hover:cursor-pointer hover:bg-[#eaf1fa] rounded-lg">
                <img
                  src="/assets/homeMobile.png"
                  alt=""
                  height={24}
                  width={24}
                />
                Repositories
              </div>
              <div className="flex gap-2 py-2 px-1  hover:cursor-pointer hover:bg-[#eaf1fa] rounded-lg">
                <img src="/assets/code.png" alt="" />
                AI Code Review
              </div>
              <div className="flex gap-2 py-2 px-1 hover:cursor-pointer hover:bg-[#eaf1fa] rounded-lg">
                <img src="/assets/cloud.png" alt="" />
                Cloud Security
              </div>
              <div className="flex gap-2 py-2 px-1  hover:cursor-pointer hover:bg-[#eaf1fa] rounded-lg">
                <img src="/assets/use.png" alt="" />
                How to Use
              </div>
              <div className="flex gap-2 py-2 px-1 hover:cursor-pointer hover:bg-[#eaf1fa] rounded-lg">
                <img src="/assets/setting.png" alt="" />
                Settings
              </div>
              <div className="flex gap-2 py-2 px-1 hover:cursor-pointer hover:bg-[#eaf1fa] rounded-lg">
                <img src="/assets/call.png" alt="" />
                Support
              </div>
              <div className="flex gap-2 py-2 px-1 hover:cursor-pointer hover:bg-[#eaf1fa] rounded-lg">
                <img src="/assets/logout.png" alt="" />
                Logout
              </div>
            </div>
          </div>
          {/* Nav Navigation Ends */}
        </div>
      )}
    </div>
  );
};

export default MobileNavBar;
