import React from "react";
import NavigationItem from "../Navitem";
import { NavigationBar } from "./styles";

const NavBar = () => (
  <>
    <NavigationBar id="NavBar">
      <NavigationItem link="/" active>
        Home
      </NavigationItem>
      <NavigationItem link="/reservations" active>
        Zarezerwuj stolik
      </NavigationItem>
      <NavigationItem link="/ourstory" active>
        Nasza historia
      </NavigationItem>
      <NavigationItem link="/menu" active>
        Menu
      </NavigationItem>
      <NavigationItem link="/orderonline" active>
        Zamów do domu!
      </NavigationItem>
      <NavigationItem link="/faq" active>
        Jakieś pytania?
      </NavigationItem>
    </NavigationBar>
  </>
);

export default NavBar;
