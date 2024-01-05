import React from "react";
import Dish from "../../smallParts/Dish";
import Bar from "../../smallParts/Bar";
import { DESSERTS } from "constants/dishes";
import { CategoryTitle, DishesContainer } from "../styles";

const Desserts = () => (
  <>
    <CategoryTitle>Desery</CategoryTitle>
    <Bar />
    <DishesContainer>
      {DESSERTS.map(({ name, price, description }) => (
        <Dish key={name} title={name} price={price} description={description} />
      ))}
    </DishesContainer>
  </>
);

export default Desserts;
