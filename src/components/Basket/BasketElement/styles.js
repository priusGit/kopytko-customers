import styled from "styled-components";

export const ValueButton = styled.p`
  background-color: #ddd;
  cursor: pointer;
  display: inline-block;
  font-family: "Poppins";
  font-size: 30px;
  font-weight: 200;
  line-height: 35px;
  text-align: center;
  transition: 0.15s linear;
  width: 35px;

  &:hover {
    background-color: #bbb;
  }
`;

export const BasketElementContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`;

export const AmountContainer = styled.div`
  flex-basis: 5%;
  text-align: center;
`;

export const TitleContainer = styled.div`
  flex-basis: 70%;
  text-align: left;
`;

export const SummaryContainer = styled.div`
  flex-basis: 25%;
  text-align: right;

  @media (min-width: 768px) {
    & {
      flex-basis: 50%;
      text-align: right;
    }
  }
`;

export const ActionContainer = styled.div`
  & > :first-child {
    margin-right: 8px;
  }
`;
