import React from "react";
import NavigationItem from "../Navitem/NavItem";
import classes from "./NavBarMobile.module.css";

const NavBar = () => {
  const toggleSideMenu = () => {
    document
      .getElementById("mobileMenu")
      .classList.toggle(classes.mobileMenuActive);
    document.getElementById("menuToggleIcon").classList.toggle(classes.open);
    document.getElementById("darkBG").classList.toggle(classes.activeBG);
  };

  return (
    <>
      <ul className={classes.NavBar} id="NavBar">
        <div className={classes.navIconCont}>
          <div
            className={classes.navIcon4}
            id="menuToggleIcon"
            onClick={toggleSideMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={classes.niewiem}>
          <a href="/">KOPYTKO</a>
        </div>
        <div className={classes.navIconCont}>
          <span
            className={classes.langPicker}
            onClick={() => console.log("Language Change Clicked")}
          >
            EN
          </span>
        </div>
      </ul>

      <div className={classes.mobileMenu} id="mobileMenu">
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

        <div className={classes.bar}></div>
      </div>
      <div className={classes.mobileMenuBackgroud} id="darkBG"></div>
    </>
  );
};

export default NavBar;
