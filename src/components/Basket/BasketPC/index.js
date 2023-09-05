import React from "react";
import { useSelector } from "react-redux";
import EmptyBasket from "../EmptyBasket";
import UsedBasket from "../UsedBasket";
import classes from "../Basket.module.css";

const BasketPC = () => {
  const isAnyItemsOrdered = useSelector(
    (state) => state.orderedItems.length === 0
  );

  if (isAnyItemsOrdered) {
    return (
      <aside className={classes.Basket} id="pcBasket">
        <EmptyBasket />
      </aside>
    );
  }

  return (
    <aside className={classes.Basket} id="pcBasket">
      <UsedBasket />
    </aside>
  );
};

export default BasketPC;
