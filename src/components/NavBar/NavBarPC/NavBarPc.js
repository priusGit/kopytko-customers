import React, { Component } from "react";
import NavigationItem from "../Navitem/NavItem";
import classes from "./NavBarPC.module.css";
import Auxi from "../../../hoc/Auxi";
import { connect } from "react-redux";
class NavBar extends Component {
  componentDidMount() {
    window.addEventListener("resize", this.props.onScreenResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.props.onScreenResize);
  }
  render() {
    return (
      <Auxi>
        <ul className={classes.NavBar} id="NavBar">
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
          {/* <NavigationItem link="/checkout" active>Kasa</NavigationItem> */}
        </ul>
      </Auxi>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    lang: state.language,
  };
};

export default connect(mapStateToProps, null)(NavBar);
