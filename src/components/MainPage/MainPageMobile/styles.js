import styled from "styled-components";

export const MainPageContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  padding: 0 30px;
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

export const ChefHat = styled.img.attrs({
  alt: "Chef hat",
})`
  width: 100px;
`;
