import React from "react";
import styled, { keyframes } from "styled-components";
import myImage from "../../images/coding.jpg";

const typing = keyframes`
  0% {
    width: 0;
  }
  30% {
    width: 100%;
  }
  50% {
    width: 100%;
    text-decoration: underline;
  }
  60% {
    width: 100%;
    text-decoration: none;
  }
  80% {
    width: 0%;
  }
  100% {
    width: 0%;
  }
`;

const blinkCaret = keyframes`
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: white;
    }
`;

const fadeIn = keyframes` 
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 55px);
  position: relative;
`;

const BackGround = styled.div`
  background-position: center center;
  background-size: cover;
  background-image: url(${myImage});
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  animation: ${fadeIn} 0.5s linear;
`;

const Title = styled.span`
  font-size: 50px;
  margin-bottom: 20px;
`;

const ChangingTitle = styled.span`
  overflow: hidden;
  border-right: 0.1em solid white;
  white-space: nowrap;
  letter-spacing: 0.1em;
  animation: ${typing} 7s steps(30, end) infinite,
    ${blinkCaret} 1s step-start infinite;
  max-width: 250px;
  font-size: 50px;
  margin-bottom: 50px;
`;

export default () => (
  <Container>
    <BackGround />
    <Title>발전을 즐기는 개발자 강기석의 포트폴리오</Title>
    <ChangingTitle>환영합니다.</ChangingTitle>
  </Container>
);