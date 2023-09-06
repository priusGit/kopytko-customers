import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationItemContainer = styled.li`
  padding: 10px;
  @media (min-width: 768px) {
    & {
      display: inline-block;
      width: calc((100vw - 60px) / 6);
      height: 70px;
      text-align: center;
      padding-top: 20px;
      background-color: white;
    }
  }
`;

export const NavigationLink = styled(NavLink)`
  color: white;
  cursor: pointer;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 20px;

  &:hover {
    transition: 0.15s ease-in;
    color: black;
  }

  &.active {
    color: black;
  }

  @media (min-width: 768px) {
    & {
      background-color: transparent;
      color: rgb(220, 55, 39);
      display: inline-block;
      font-size: 17px;
      font-weight: 300;
      position: relative;
      top: 0;
    }
  }
`;
