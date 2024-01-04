import React from "react";
import { useSelector } from "react-redux";
import { isMobile as isMobileSelector } from "store/selectors";
import NavBarPC from "./NavBarPC/NavBarPc";
import NavBarMobile from "./NavBarMobile/NavBarMobile";

const NavBar = () => {
  const isMobile = useSelector(isMobileSelector);

  if (isMobile) {
    return <NavBarMobile />;
  }

  return <NavBarPC />;
};

export default NavBar;
