import React from "react";
import {
  MainPageContainer,
  LeftRibbon,
  Title,
  SubTitle,
  MenuAnchor,
  LeftRibbonContent,
} from "./styles";

const MainPage = () => (
  <MainPageContainer>
    <LeftRibbon>
      <LeftRibbonContent>
        <Title>KOPYTKO</Title>
        <SubTitle>Rodzinnie i cieple - po polsku!</SubTitle>
        <MenuAnchor href="/menu">Zobacz Menu</MenuAnchor>
      </LeftRibbonContent>
    </LeftRibbon>
  </MainPageContainer>
);

export default MainPage;
