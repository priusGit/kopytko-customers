import React from "react";
import { useSelector } from "react-redux";
import EmptyBasket from "../EmptyBasket";
import UsedBasket from "../UsedBasket";
import { isAnyItemsOrdered as isAnyItemsOrderedSelector } from "store/selectors";
import { BasketContainer } from "../styles";

const BasketPC = () => {
  const isAnyItemsOrdered = useSelector(isAnyItemsOrderedSelector);

  if (isAnyItemsOrdered) {
    return (
      <BasketContainer id="pcBasket">
        <EmptyBasket />
      </BasketContainer>
    );
  }

  return (
    <BasketContainer id="pcBasket">
      <UsedBasket />
    </BasketContainer>
  );
};

export default BasketPC;
