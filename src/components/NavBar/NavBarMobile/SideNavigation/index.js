import React from "react";
import NavigationItem from "../../Navitem";
import { MobileMenuContainer, MobileMenuBackdrop, Bar } from "./styles";

const SideNavigation = ({ toggleOpened, sideMenuOpened }) => (
  <>
    <MobileMenuContainer open={sideMenuOpened}>
      <ul>
        <NavigationItem onClick={toggleOpened} link="/" active>
          Home
        </NavigationItem>
        <NavigationItem onClick={toggleOpened} link="/reservations" active>
          Zarezerwuj stolik
        </NavigationItem>
        <NavigationItem onClick={toggleOpened} link="/ourstory" active>
          Nasza historia
        </NavigationItem>
        <NavigationItem onClick={toggleOpened} link="/menu" active>
          Menu
        </NavigationItem>
        <NavigationItem onClick={toggleOpened} link="/orderonline" active>
          Zamów do domu!
        </NavigationItem>
        <NavigationItem onClick={toggleOpened} link="/faq" active>
          Jakieś pytania?
        </NavigationItem>
      </ul>
      <Bar />
    </MobileMenuContainer>
    <MobileMenuBackdrop open={sideMenuOpened} />
  </>
);

export default SideNavigation;
