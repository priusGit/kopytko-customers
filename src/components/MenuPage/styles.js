import styled from "styled-components";

const mediaQueryWidth = "768px";

const BaseTitleStyles = `
display: block;
text-align: center;
width: 100%;
`;

export const MenuContainer = styled.section`
  padding: 0 20px;

  @media (min-width: ${mediaQueryWidth}) {
    border: 60px solid rgba(220, 55, 39);
  }
`;

export const Menu = styled.div`
  ${BaseTitleStyles}

  @media (min-width: ${mediaQueryWidth}) {
    width: 70%;
    margin-left: 15%;
  }
`;

export const Title = styled.h1`
  color: rgba(220, 55, 39);
  font-family: "Lora", serif;
  font-size: 30px;
  font-weight: 400;
  margin-top: 80px;
  ${BaseTitleStyles}

  @media (min-width: ${mediaQueryWidth}) {
    margin-top: 60px;
  }
`;

export const SubTitle = styled.p`
  font-family: "Poppins", serif;
  font-size: 17px;
  margin-top: 40px;
  ${BaseTitleStyles}
`;

export const CategoryTitle = styled.h2`
  color: rgba(220, 55, 39);
  font-family: "Lora", serif;
  font-size: 30px;
  font-weight: 400;
  margin-top: 60px;
  ${BaseTitleStyles}
`;

export const DishesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 60px;

  @media (min-width: ${mediaQueryWidth}) {
    flex-direction: row;
  }
`;
