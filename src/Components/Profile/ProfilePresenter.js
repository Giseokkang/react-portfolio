import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const fadeIn = keyframes` 
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 50px;
  align-items: center;
  justify-items: center;
  padding: 100px 300px;
  animation: ${fadeIn} 0.5s linear;
`;

const SLink = styled(Link)`
  width: 100%;
  height: 100%;
`;

const ItemContainer = styled.div`
  border: 5px solid ${probs => probs.color};
  border-radius: 10px;
  width: 90%;
  height: 100%;
  cursor: pointer;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(0.95);
    opacity: 1;
    background-color: ${probs => probs.color};
    animation: ${fadeIn} 0.5s linear;
  }
`;

const ItemTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

const ProjectPresenter = () => (
  <Container>
    <SLink to="/profile/introduce">
      <ItemContainer color="#e74c3c">
        <ItemTitle>자기 소개</ItemTitle>
      </ItemContainer>
    </SLink>
    <SLink to="/profile/technologies">
      <ItemContainer color="#3498db">
        <ItemTitle>기술 스텍</ItemTitle>
      </ItemContainer>
    </SLink>
    <SLink to="/profile/interview">
      <ItemContainer color="#9b59b6">
        <ItemTitle>셀프 인터뷰</ItemTitle>
      </ItemContainer>
    </SLink>
    <SLink to="/profile/contact">
      <ItemContainer color="#2ecc71">
        <ItemTitle>Contact</ItemTitle>
      </ItemContainer>
    </SLink>
  </Container>
);

export default ProjectPresenter;