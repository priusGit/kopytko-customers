import React from "react";
import {
  EmptyBasketParapgraph,
  BasketIcon,
  BasketTitle,
  BasketContentTitle,
  EndLine,
} from "./styles";

const EmptyBasket = () => (
  <>
    <BasketTitle>Koszyk</BasketTitle>
    <EndLine />
    <BasketIcon
      viewBox="0 0 24 24"
      width="42px"
      height="42px"
      role="presentation"
      focusable="false"
      aria-hidden="true"
    >
      <path
        d="M6.91 6.222v3.636c0 .389.324.704.726.704a.716.716 0 00.728-.704V6.222h7.272v3.636c0 .389.325.704.728.704a.716.716 0 00.727-.704V6.222H20v12.022C20 19.76 18.719 21 17.152 21H6.848C5.281 21 4 19.76 4 18.244V6.222h2.91zM13.938 2c1.739 0 3.152 1.368 3.152 3.05v1.172h-1.455V5.05c0-.905-.761-1.642-1.697-1.642H10.06c-.936 0-1.697.737-1.697 1.642v1.173H6.909V5.05C6.91 3.368 8.322 2 10.061 2z"
        fillRule="evenodd"
      ></path>
    </BasketIcon>
    <BasketContentTitle>Wypełnij swój koszyk</BasketContentTitle>
    <EmptyBasketParapgraph>
      Kliknij na danie które chcesz dodać do zamówienia, i ciesz się pysznym
      jedzeniem!
    </EmptyBasketParapgraph>
  </>
);

export default EmptyBasket;
