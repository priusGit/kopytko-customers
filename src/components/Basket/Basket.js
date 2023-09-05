import React from "react";
import { useSelector } from "react-redux";
import BasketPC from "./BasketPC";
import BasketMobile from "./BasketMobile";

const Basket = () => {
  const isMobile = useSelector((state) => state.windowWidth < 768);

  if (isMobile) {
    return <BasketMobile />;
  }

  return <BasketPC />;
};

export default Basket;
