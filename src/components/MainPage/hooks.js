import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onScreenResize } from "store/actions/index";
import { isMobile as isMobileSelector } from "store/selectors";

export const useMainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onScreenResize());
    window.scrollTo(0, 0);
    window.addEventListener("resize", onScreenResize);
    return () => window.removeEventListener("resize", onScreenResize);
  });

  const isMobile = useSelector(isMobileSelector);

  return { isMobile };
};
