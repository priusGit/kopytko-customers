import React from "react";
import { useSelector } from "react-redux";
import EmptyBasket from "../EmptyBasket";
import UsedBasket from "../UsedBasket";
import { isAnyItemsOrdered as isAnyItemsOrderedSelector } from "store/selectors";
import { MobileBasketContainer } from "../styles";

const BasketMobile = () => {
  const isAnyItemsOrdered = useSelector(isAnyItemsOrderedSelector);

  if (isAnyItemsOrdered) {
    return (
      <MobileBasketContainer>
        <EmptyBasket />
      </MobileBasketContainer>
    );
  }

  return (
    <MobileBasketContainer>
      <UsedBasket />
    </MobileBasketContainer>
  );
};

export default BasketMobile;
