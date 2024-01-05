import React from "react";
import NavBar from "components/NavBar";
import { Main } from "./styles";

const Layout = ({ children }) => (
  <>
    <NavBar />
    <Main>{children}</Main>
  </>
);

export default Layout;
