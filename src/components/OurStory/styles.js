import styled, { keyframes } from "styled-components";
import cracowimage from "assets/cracowimage.jpg";
import chef from "assets/chef.jpg";

const scrollAni = keyframes`
0% {
    opacity: 0;
    top: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    top: 20px;
  }
`;

export const ContentContainer = styled.section`
  overflow: hidden;

  & div {
    margin: 0 auto;
  }

  & p {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
  }

  & h2 {
    color: rgb(220, 55, 39);
    font-family: "Merriweather", serif;
    font-weight: 400;
    font-size: 40px;
    margin-top: 40px;
    text-align: center;
    letter-spacing: 2px;
  }

  @media (min-width: 768px) {
    & {
      overflow: visible;
    }
  }
`;

export const StoryTitle = styled.h2`
  color: rgb(220, 55, 39);
  font-family: "Merriweather", serif;
  font-weight: 400;
  font-size: 40px;
  margin-top: 40px;
  text-align: center;
  letter-spacing: 2px;
`;

export const StorySubtitle = styled.h3`
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  text-align: center;
  font-size: 24px;
`;

export const StoryContent = styled.p`
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 10%;
  width: 80%;
  text-align: justify;
`;

export const CityImage = styled.div`
  background-image: url(${cracowimage});
  background-position: -90px 0;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  margin-top: 50px;
  width: 100vw;

  @media (min-width: 768px) {
    & {
      height: 600px;
      width: 1000px;
      background-position: center;
    }
  }
`;

export const ChefImage = styled.div`
  background-image: url(${chef});
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  left: 0;
  margin: 0;
  position: relative;
  top: -25px;
  transform: none;
  width: 100vw;

  @media (min-width: 768px) {
    & {
      width: 750px;
      transform: translateX(50%);
      display: block;
    }
  }
`;
//widebar
export const Featured = styled.div`
  &&& {
      background-color: rgb(220, 55, 39);
      height: 450px;
      margin-bottom: 80px;
      margin-top: 100px;
      position: relative;
      width: 90vw;
      z-index: -1;
  }

  &  p {
    position: absolute;
    color: white;
    margin-left: 30%;
    }
  }
`;
///quote
export const QuoteContainer = styled.div`
  box-sizing: border-box;
  display: block;
  height: 100%;
  padding: 20px 40px;
  position: absolute;
  text-align: center;
  width: 80%;

  @media (min-width: 768px) {
    & {
      width: 49%;
    }
  }
`;

export const QuoteHeadline = styled.h2`
  &&& {
    color: white;
    letter-spacing: 3px;
    z-index: 3;
  }
`;

export const QuoteCopy = styled.p`
  &&& {
    font-family: "Lora", serif;
    margin-top: 50px;
    margin-left: 0;
    position: relative;
    font-size: 25px;
  }
`;

export const ScrollAnimation = styled.p`
  animation: ${scrollAni} 1.5s linear infinite;
  left: 50%;
  margin-top: 20px;
  margin-top: 40px;
  opacity: 0;
  position: relative;
  text-align: center;
  top: 72.5%;
  transform: translateX(-50%);
`;

export const ChefTitle = styled.h2`
  margin-top: 100px;
`;
