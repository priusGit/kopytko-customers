import React from "react";
import Hat from "assets/svg/hat.svg";
import MainPageAnchor from "../MainPageAnchor";
import { MainPageContainer, Title, SubTitle, ChefHat } from "./styles";

const MainPage = () => (
  <MainPageContainer>
    <ChefHat src={Hat} />
    <Title>KOPYTKO</Title>
    <SubTitle>Rodzinnie i ciepło - po polsku!</SubTitle>
    <MainPageAnchor />
  </MainPageContainer>
);

export default MainPage;
