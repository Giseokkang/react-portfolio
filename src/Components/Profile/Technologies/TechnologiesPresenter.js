import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { Circle } from "rc-progress";

import ProfileDetail from "../../ProfileDetail";
import myPhoto from "../../../images/santiago.jpg";

const transform = keyframes`
  from{
    transform: translateY(-300px);
    opacity: 0;
  }
  to{
    transform: translateY(0)
    opacity: 1;
  }
  `;

const Container = styled.div``;

const UpItemContainer = styled.div`
  padding: 0 80px;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 50px;
  animation: ${transform} 0.5s linear;
`;

const UnderItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
  animation: ${transform} 1.2s ease-in-out;
`;

const Title = styled.span`
  font-size: 30px;
  text-align: center;
`;

const ProgressContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  &:last-child {
    margin-bottom: 30px;
  }
  &:hover {
    transform: scale(0.95);
  }
`;

const SkillName = styled.span`
  font-size: 15px;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: -20px;
  right: 0;
  color: ${probs => probs.color};
`;

const License = styled.span`
  font-size: 20px;
  text-align: center;
  margin-top: 30px;
`;

const TechnologiesPresenter = ({
  htmlPercent,
  cssPercent,
  javascriptPercent,
  nodeJSPercent,
  reactPercent
}) => (
  <Container>
    <ProfileDetail title="기술 스텍" imageUrl={myPhoto}>
      <Title>Skills</Title>
      <UpItemContainer>
        <ProgressContainer>
          <Circle
            trailWidth="4"
            trailColor="#F9F9F9"
            strokeWidth="9"
            strokeColor="#ED1B23"
            percent={htmlPercent}
          />
          <SkillName color="#ED1B23">HTML5</SkillName>
        </ProgressContainer>
        <ProgressContainer>
          <Circle
            trailWidth="4"
            trailColor="#F9F9F9"
            strokeWidth="9"
            strokeColor="#FFB847"
            percent={cssPercent}
          />
          <SkillName color="#FFB847">CSS3</SkillName>
        </ProgressContainer>
      </UpItemContainer>
      <UnderItemContainer>
        <ProgressContainer>
          <Circle
            trailWidth="4"
            trailColor="#F9F9F9"
            strokeWidth="9"
            strokeColor="#F05B28"
            percent={javascriptPercent}
          />
          <SkillName color="#F05B28">JavaScript(ES6)</SkillName>
        </ProgressContainer>
        <ProgressContainer>
          <Circle
            trailWidth="4"
            trailColor="#F9F9F9"
            strokeWidth="9"
            strokeColor="#0984e3"
            percent={nodeJSPercent}
          />
          <SkillName color="#0984e3">NodeJS</SkillName>
        </ProgressContainer>
        <ProgressContainer>
          <Circle
            trailWidth="4"
            trailColor="#F9F9F9"
            strokeWidth="9"
            strokeColor="#55efc4"
            percent={reactPercent}
          />
          <SkillName color="#55efc4">ReactJS</SkillName>
        </ProgressContainer>
      </UnderItemContainer>
      <br />
      <Title>ETC</Title>
      <License>전자산업기사</License>
      <License>
        pug, express, MongoDB, WebSocket, heroku, AWS, Passport, REST API,
        Axios, AJAX, styled component, MVC, TypeScript, Reacthook
      </License>
    </ProfileDetail>
  </Container>
);

TechnologiesPresenter.prototype = {
  htmlPercent: PropTypes.number.isRequired
};

export default TechnologiesPresenter;
