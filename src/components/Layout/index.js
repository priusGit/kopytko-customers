import React from "react";
import AsideIconBar from "components/AsideIconBar";
import NavBar from "components/NavBar";
import { Main } from "./styles";

const Layout = ({ children }) => (
  <>
    <NavBar />
    <AsideIconBar />
    <Main>{children}</Main>
  </>
);

export default Layout;
