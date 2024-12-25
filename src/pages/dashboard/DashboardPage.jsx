import React, { useState } from "react";
import NavBar from "../../components/dashboard/NavBar";
import Header from "../../components/dashboard/Header";
import Main from "../../components/dashboard/Main";
import MobileNavBar from "../../components/dashboard/MobileNavBar";

const DashboardPage = () => {
  const [value, setValue] = useState(false);
  const toggleValue = () => {
    setValue((prev) => !prev);
  };
  return (
    <div className="xl:grid xl:grid-cols-12 h-screen">
      {/* // Computer Screen Navbar starts */}
      <div className="col-span-2 border-r border-[#E9EAEB] hidden xl:flex">
        <NavBar />
      </div>
      {/* //computer screen Navbar ends */}
      {/* //mobile screen nabbar starts */}
      {/* // logo/name + Toggle Button */}
      <div className="flex flex-col xl:hidden">
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
            {!value && (
              <div onClick={toggleValue}>
                <img src="/assets/ham.png" alt="" />
              </div>
            )}
            {value && (
              <div onClick={toggleValue}>
                <img src="/assets/cross.png" alt="" />
              </div>
            )}
          </div>
        </div>
        {/* // All the navigation buttons */}
        <MobileNavBar value={value} />
      </div>
      {/* //mobile screen nabbar ends */}
      <div className="col-span-10 bg-[#FAFAFA] xl:p-6">
        <div className="bg-[#ffffff] h-full w-full border border-[#E9EAEB] xl:rounded-xl shadow-custom2 ">
          <div className="border-b border-[#D5D7DA]">
            <Header />
          </div>
          <Main />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
