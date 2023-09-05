import React from "react";
import { useSelector } from "react-redux";
import BasketPC from "./BasketPC";
import BasketMobile from "./BasketMobile";
import { isMobile as isMobileSelector } from "../../store/selectors";

const Basket = () => {
  const isMobile = useSelector(isMobileSelector);

  if (isMobile) {
    return <BasketMobile />;
  }

  return <BasketPC />;
};

export default Basket;
