import React, { Component } from "react";
import AsideIconBar from "../AsideIconBar/AsideIconBar";
import NavBar from "../NavBar/NavBar";
// eslint-disable-next-line
import classes from './Layout.module.css'
class Layout extends Component {
  render() {
    return (
      <>
        <NavBar />
        <AsideIconBar />
        <main>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
