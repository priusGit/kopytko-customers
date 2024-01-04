import React from "react";
import MainPagePC from "./MainPagePC/MainPagePC";
import MainPageMobile from "./MainPageMobile/MainPageMobile";
import { useMainPage } from "./hooks";

const MainPage = () => {
  const { isMobile } = useMainPage();

  if (isMobile) {
    return <MainPageMobile />;
  }

  return <MainPagePC />;
};

export default MainPage;
