import React from "react";
import { string, number } from "prop-types";
import { useBasket } from "../hooks";
import { EndLine } from "../styles";
import {
  ActionContainer,
  AmountContainer,
  BasketElementContainer,
  SummaryContainer,
  TitleContainer,
  ValueButton,
} from "./styles";

const BasketElement = ({ id, title, price, amount }) => {
  const { handleAddItem, handleDeleteItem } = useBasket();
  const isFirst = id === 0;

  return (
    <div>
      {isFirst && <EndLine />}
      <BasketElementContainer>
        <AmountContainer>
          <p>{amount}</p>
        </AmountContainer>
        <TitleContainer>
          <p>{title}</p>
        </TitleContainer>
        <SummaryContainer>
          <p>{amount * price}zł</p>
          <ActionContainer>
            <ValueButton onClick={() => handleAddItem(title, price, id)}>
              +
            </ValueButton>
            <ValueButton onClick={() => handleDeleteItem(title, price, id)}>
              -
            </ValueButton>
          </ActionContainer>
        </SummaryContainer>
      </BasketElementContainer>
      <EndLine />
    </div>
  );
};

BasketElement.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  price: string.isRequired,
  amount: number.isRequired,
};

export default BasketElement;
