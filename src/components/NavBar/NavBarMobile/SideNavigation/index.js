import React from "react";
import NavigationItem from "../../Navitem";
import { MobileMenuContainer, MobileMenuBackdrop, Bar } from "./styles";

const SideNavigation = ({ toggleSideMenu, sideMenuOpened }) => (
  <>
    <MobileMenuContainer open={sideMenuOpened}>
      <ul>
        <NavigationItem onClick={toggleSideMenu} link="/" active>
          Home
        </NavigationItem>
        <NavigationItem onClick={toggleSideMenu} link="/reservations" active>
          Zarezerwuj stolik
        </NavigationItem>
        <NavigationItem onClick={toggleSideMenu} link="/ourstory" active>
          Nasza historia
        </NavigationItem>
        <NavigationItem onClick={toggleSideMenu} link="/menu" active>
          Menu
        </NavigationItem>
        <NavigationItem onClick={toggleSideMenu} link="/orderonline" active>
          Zamów do domu!
        </NavigationItem>
        <NavigationItem onClick={toggleSideMenu} link="/faq" active>
          Jakieś pytania?
        </NavigationItem>
      </ul>
      <Bar />
    </MobileMenuContainer>
    <MobileMenuBackdrop open={sideMenuOpened} />
  </>
);

export default SideNavigation;
