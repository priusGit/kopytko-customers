import React from "react";
import Dish from "../../smallParts/Dish";
import Bar from "../../smallParts/Bar";
import { SOUPS } from "constants/dishes";
import { CategoryTitle, DishesContainer } from "../styles";

const Soups = () => (
  <>
    <CategoryTitle>Zupy</CategoryTitle>
    <Bar />
    <DishesContainer>
      {SOUPS.map(({ name, price, description }) => (
        <Dish key={name} title={name} price={price} description={description} />
      ))}
    </DishesContainer>
  </>
);

export default Soups;
