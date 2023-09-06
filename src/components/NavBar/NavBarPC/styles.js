import styled from "styled-components";

export const NavigationBar = styled.ul`
  background-color: white;
  display: flex;
  flex-direction: row;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  height: 90px;
  height: var(--topNavHeight);
  list-style: none;
  margin-left: 0;
  margin-top: 0;
  padding-left: 0;
  top: 0;
  transition: 0.2s linear;
  width: 100vw;
  z-index: 5;
  position: fixed;

  & > * {
    display: inline-block;
  }
`;
