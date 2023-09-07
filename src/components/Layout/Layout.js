import React from "react";
import AsideIconBar from "../AsideIconBar/AsideIconBar";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children }) => (
  <>
    <NavBar />
    <AsideIconBar />
    <main>{children}</main>
  </>
);

export default Layout;
