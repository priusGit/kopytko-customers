import React, { Component } from "react";
import NavigationItem from "../Navitem/NavItem";
import classes from "./NavBarMobile.module.css";
import { connect } from "react-redux";
class NavBar extends Component {
  componentDidMount() {
    window.addEventListener("resize", this.props.onScreenResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.props.onScreenResize);
  }
  toggleSideMenu() {
    document
      .getElementById("mobileMenu")
      .classList.toggle(classes.mobileMenuActive);
    document.getElementById("menuToggleIcon").classList.toggle(classes.open);
    document.getElementById("darkBG").classList.toggle(classes.activeBG);
  }
  render() {
    return (
      <>
        <ul className={classes.NavBar} id="NavBar">
          <div className={classes.navIconCont}>
            <div
              className={classes.navIcon4}
              id="menuToggleIcon"
              onClick={this.toggleSideMenu}
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
            <NavigationItem onClick={this.toggleSideMenu} link="/" active>
              Home
            </NavigationItem>
            <NavigationItem
              onClick={this.toggleSideMenu}
              link="/reservations"
              active
            >
              Zarezerwuj stolik
            </NavigationItem>
            <NavigationItem
              onClick={this.toggleSideMenu}
              link="/ourstory"
              active
            >
              Nasza historia
            </NavigationItem>
            <NavigationItem onClick={this.toggleSideMenu} link="/menu" active>
              Menu
            </NavigationItem>
            <NavigationItem
              onClick={this.toggleSideMenu}
              link="/orderonline"
              active
            >
              Zamów do domu!
            </NavigationItem>
            <NavigationItem onClick={this.toggleSideMenu} link="/faq" active>
              Jakieś pytania?
            </NavigationItem>
          </ul>

          <div className={classes.bar}></div>
        </div>
        <div className={classes.mobileMenuBackgroud} id="darkBG"></div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    lang: state.language,
  };
};
export default connect(mapStateToProps, null)(NavBar);
