import React from "react";
import Dish from "../../smallParts/Dish";
import Bar from "../../smallParts/Bar";
import { MAIN_DISHES } from "constants/dishes";
import { CategoryTitle, DishesContainer } from "../styles";

const MainDishes = () => (
  <>
    <CategoryTitle>Dania Główne</CategoryTitle>
    <Bar />
    <DishesContainer>
      {MAIN_DISHES.map(({ name, price, description }) => (
        <Dish key={name} title={name} price={price} description={description} />
      ))}
    </DishesContainer>
  </>
);

export default MainDishes;
