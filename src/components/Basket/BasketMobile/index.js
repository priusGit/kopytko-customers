import React from "react";
import { useSelector } from "react-redux";
import EmptyBasket from "../EmptyBasket";
import UsedBasket from "../UsedBasket";
import classes from "../Basket.module.css";

const BasketMobile = () => {
  const isAnyItemsOrdered = useSelector(
    (state) => state.orderedItems.length === 0
  );

  if (isAnyItemsOrdered) {
    return (
      <section className={classes.MobileBasket}>
        <EmptyBasket />
      </section>
    );
  }

  return (
    <section className={classes.MobileBasket}>
      <UsedBasket />
    </section>
  );
};

export default BasketMobile;
