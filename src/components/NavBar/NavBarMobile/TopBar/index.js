import React from "react";
import {
  TopBarContainer,
  HamburgerContainer,
  TopLogo,
  Hamburger,
  FirstBar,
  SecoundBar,
  ThirdBar,
} from "./styles";

const TopBar = ({ toggleSideMenu, sideMenuOpened }) => (
  <TopBarContainer>
    <HamburgerContainer>
      <Hamburger onClick={toggleSideMenu}>
        <FirstBar open={sideMenuOpened} />
        <SecoundBar open={sideMenuOpened} />
        <ThirdBar open={sideMenuOpened} />
      </Hamburger>
    </HamburgerContainer>
    <TopLogo>
      <a href="/">KOPYTKO</a>
    </TopLogo>
  </TopBarContainer>
);

export default TopBar;
