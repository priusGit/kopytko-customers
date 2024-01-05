import styled from "styled-components";
import Background from "assets/bgMain.jpg";

export const MainPageContainer = styled.section`
  background-image: url(${Background});
  background-position: top;
  background-size: cover;
  display: flex;
  flex-flow: row;
  height: 100%;
  padding-top: 60px;
  overflow: hidden;
`;

export const LeftRibbon = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.95);
  display: flex;
  padding: 40px;
`;

export const Title = styled.h1`
  color: rgb(220, 55, 39);
  font-family: "Oswald", sans-serif;
  font-size: 90px;
  letter-spacing: 3px;
  margin-bottom: 0;
  text-align: center;
`;

export const SubTitle = styled.p`
  color: black;
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: 300;
  margin-top: 0;
  text-align: center;
`;

export const LeftRibbonContent = styled.div`
  text-align: center;
`;
