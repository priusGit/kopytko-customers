import React from "react";
import MainPagePC from "./MainPagePC";
import MainPageMobile from "./MainPageMobile";
import { useMainPage } from "./hooks";

const MainPage = () => {
  const { isMobile } = useMainPage();

  if (isMobile) {
    return <MainPageMobile />;
  }

  return <MainPagePC />;
};

export default MainPage;
