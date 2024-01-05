import styled, { keyframes, css } from "styled-components";

const topNavHeight = "65px";
const showBackdrop = keyframes`
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    100% {
      opacity: 0.6;
    }
  `;

export const MobileMenuContainer = styled.div`
  background-color: #b94040;
  height: calc(100vh - ${topNavHeight});
  left: -80vw;
  position: fixed;
  top: ${topNavHeight};
  transition: 0.1s linear;
  width: 80vw;
  z-index: 10;

  ${({ open }) => open && "left: 0;"}
`;

export const Bar = styled.div`
  margin-left: 10px;
  margin-top: 20px;
  height: 2px;
  width: 70%;
  background-color: black;
`;

export const MobileMenuBackdrop = styled.div`
  background-color: rgba(0, 0, 0);
  height: calc(100vh - ${topNavHeight});
  left: -100vw;
  opacity: 0.6;
  position: fixed;
  top: ${topNavHeight};
  width: 100vw;
  z-index: 2;

  ${({ open }) =>
    open &&
    css`
      left: 0;
      animation: ${showBackdrop} 0.3s;
    `}
`;
