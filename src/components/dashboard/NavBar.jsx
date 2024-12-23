import React from "react";
import NavHeader from "./NavHeader";
import NavNavigation from "./NavNavigation";
import NavFooter from "./NavFooter";

const NavBar = () => {
  return (
    <div className="fixed h-screen flex flex-col">
      <NavHeader />
      <div className="flex flex-col flex-1 justify-between">
        <div>
          <NavNavigation />
        </div>
        <div>
          <NavFooter />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
