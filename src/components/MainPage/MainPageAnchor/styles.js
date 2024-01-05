import styled from "styled-components";

export const MenuAnchor = styled.a`
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
  margin-top: 32px;
  padding: 9px 55px;
  text-decoration: none;
  transition: 0.15s ease-in;

  &:hover {
    background-color: rgb(220, 55, 39);
    color: white;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;
