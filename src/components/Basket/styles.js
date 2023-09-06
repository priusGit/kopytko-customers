import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BasketContainer = styled.aside`
  background-color: #fff;
  border: 1px solid #c0c0c0;
  height: 100vh;
  overflow-y: auto;
  padding: 0 10px;
  position: fixed;
  right: 0;
  top: 75px;
  transition: 0.2s linear;
  width: 250px;
`;

export const BasketContentTitle = styled.h1`
  margin: 10px 0;
  text-align: center;
`;

export const BasketTitle = styled(BasketContentTitle)``;

export const OrderButton = styled(NavLink)`
  background-color: transparent;
  border: solid rgba(220, 55, 39, 1) 1px;
  color: rgb(220, 55, 39);
  cursor: pointer;
  display: inline-block;
  font-family: "Poppins", sans-serif;
  font-family: Arial;
  font-size: 16px;
  font-weight: 300;
  font-weight: bold;
  margin-bottom: 80px;
  margin-left: 10px;
  margin-top: 25px;
  outline: none;
  padding: 9px 55px;
  text-align: center;
  text-decoration: none;
  transition: 0.15s ease-in;
  width: calc(100% - 20px);

  &:focus {
    border: solid rgba(220, 55, 39, 1) 1px;
  }

  @media (min-width: 768px) {
    & {
      background-color: rgb(236, 51, 34);
      border-radius: 4px;
      border: 1px solid rgb(189, 46, 33);
      color: #ffffff;
      cursor: pointer;
      display: inline-block;
      font-family: "Poppins";
      font-size: 17px;
      margin-left: 1%;
      padding: 8px 35px;
      text-align: center;
      text-decoration: none;
      width: 98%;
    }

    &:active {
      background-color: rgba(220, 55, 39);
      top: 1px;
    }
  }
`;

export const MobileBasketContainer = styled.section`
  box-sizing: border-box;
  padding: 0 20px;
  width: 100vw;
`;

export const MobileBasketHeading = styled.h1`
  color: rgb(220, 55, 39);
  font-family: "Merriweather", serif;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 15px;
  margin-top: 80px;
  text-align: center;
`;

export const MobileBasketParagraph = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 400;
`;

export const EmptyBasketParapgraph = styled.p`
  color: grey;
  text-align: center;
`;

export const BasketIcon = styled.svg`
  margin-left: 50%;
  margin-top: 50%;
  transform: translateX(-50%);
`;

export const EndLine = styled.div`
  background-color: lightgray;
  height: 1px;
  margin: 0 auto;
  width: 90%;
`;
