import React, { useState } from "react";
import TopBar from "./TopBar";
import SideNavigation from "./SideNavigation";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const toggleOpened = () => setOpen(!open);

  return (
    <>
      <TopBar toggleSideMenu={toggleOpened} sideMenuOpened={open} />
      <SideNavigation toggleSideMenu={toggleOpened} sideMenuOpened={open} />
    </>
  );
};

export default NavBar;
