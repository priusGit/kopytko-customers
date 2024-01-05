import styled from "styled-components";

export const TopBarContainer = styled.ul`
  background-color: white;
  border-bottom: 2px solid #b94040;
  display: flex;
  flex-direction: row;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  height: 65px;
  list-style: none;
  margin-left: 0;
  margin-top: 0;
  padding-left: 0;
  position: fixed;
  top: 0;
  transition: 0.2s linear;
  width: 100vw;
  z-index: 5;
`;

export const HamburgerContainer = styled.div`
  flex-basis: 20%;
  text-align: center;
`;

export const TopLogo = styled.div`
  flex-basis: 60%;
  text-align: center;

  & > a {
    color: rgb(220, 55, 39);
    font-family: "Oswald", sans-serif;
    font-size: 40px;
    letter-spacing: 1px;
    margin-bottom: 0;
    position: absolute;
    text-decoration: none;
    transform: translateX(-50%);
  }
`;

export const Hamburger = styled.div`
  cursor: pointer;
  height: 45px;
  left: -10px;
  margin-left: 8px;
  margin-top: 8px;
  position: relative;
  transform: scale(0.65);
  transition: 0.5s ease-in-out;
  width: 60px;
`;

export const HamburgerBar = styled.span`
  background: #d3531a;
  border-radius: 9px;
  display: block;
  height: 9px;
  left: 0;
  opacity: 1;
  position: absolute;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
  transform-origin: left center;
  width: 100%;
`;

export const FirstBar = styled(HamburgerBar)`
  top: 0px;

  ${({ open }) =>
    open &&
    `transform: rotate(45deg);
    top: -3px;
    left: 8px;`}
`;

export const SecoundBar = styled(HamburgerBar)`
  top: 18px;

  ${({ open }) =>
    open &&
    `width: 0%;
    opacity: 0;`}
`;

export const ThirdBar = styled(HamburgerBar)`
  top: 36px;

  ${({ open }) =>
    open &&
    `transform: rotate(-45deg);
    top: 39px;
    left: 8px;`}
`;
