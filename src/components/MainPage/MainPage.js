import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onScreenResize } from "store/actions/index";
import MainPagePC from "./MainPagePC/MainPagePC";
import MainPageMobile from "./MainPageMobile/MainPageMobile";
import { isMobile as isMobileSelector } from "store/selectors";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onScreenResize());
    window.scrollTo(0, 0);
    window.addEventListener("resize", onScreenResize);
    return () => window.removeEventListener("resize", onScreenResize);
  });

  const isMobile = useSelector(isMobileSelector);

  if (isMobile) {
    return <MainPageMobile />;
  }

  return <MainPagePC />;
};

export default MainPage;
