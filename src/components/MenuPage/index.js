import React from "react";
import { MenuContainer, Menu, Title, SubTitle } from "./styles";
import { MainDishes, Soups, Desserts } from "./categories";

const MenuPage = () => (
  <MenuContainer>
    <Menu>
      <Title>Menu</Title>
      <SubTitle>Lorem ipsum dolor sit amet</SubTitle>
      <Soups />
      <MainDishes />
      <Desserts />
    </Menu>
  </MenuContainer>
);

export default MenuPage;
