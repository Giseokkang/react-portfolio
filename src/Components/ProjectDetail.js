import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const fadeIn = keyframes`
from {
  opacity:0;
}
to {
  opacity:1;
}
`;

const scale = keyframes`
  from{
    transform: translateX(-1000px) scale(0.1)
  }
  to{
     transform:translateX(0)
}
`;

const Container = styled.div`
  height: calc(100vh - 60px);
  animation: ${fadeIn} 0.5s linear;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e272e;
`;

const BgImg = styled.div`
  background-image: url(${probs => probs.imageUrl});
  background-size: cover;
  background-position: center top;
  filter: blur(5px);
  opacity: 0.3;
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;

const ContentContainer = styled.div`
  width: 50%;
  height: 90%;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  z-index: 5;
  border-radius: 50px;
  color: black;
  position: relative;
  animation: ${scale} 0.7s ease-in-out;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  width: 100%;
`;

const Title = styled.span`
  font-size: 40px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
  padding: 20px 0px;
`;

const ContentTitle = styled.span`
  font-size: 30px;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-bottom: 10px;
  width: 150px;
  border-bottom: 3px solid #1e272e;
  font-weight: 600;
`;

const Description = styled.span`
  font-size: 17px;
  line-height: 30px;
  margin-bottom: 30px;
`;

const LinkContaier = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 50px;
  right: 0;
`;

const WebLink = styled.div`
  text-align: center;
  padding: 10px 20px;
  width: 100px;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 10px;
  background-color: #3498db;
  color: white;
  opacity: 0.8;
  &:hover {
    transform: scale(0.98);
    opacity: 1;
  }
`;

const GitLink = styled.div`
  text-align: center;
  padding: 10px 20px;
  width: 100px;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 10px;
  background-color: #464646;
  color: white;

  opacity: 0.8;
  &:hover {
    transform: scale(0.98);
    opacity: 1;
  }
`;

const ProjectDetail = ({ title, imageUrl, children, webUrl, GithubUrl }) => (
  <Container>
    <BgImg imageUrl={imageUrl} />
    <ContentContainer>
      <Title>{title}</Title>
      <ItemContainer>
        <ContentTitle>제작 시기</ContentTitle>
        <Description>{children[0]}</Description>

        <ContentTitle>사용 기술</ContentTitle>
        <Description>{children[1]}</Description>

        <ContentTitle>주요 기능</ContentTitle>
        <Description>{children[2]}</Description>

        <ContentTitle>설명</ContentTitle>
        <Description>{children[3]}</Description>
        <LinkContaier>
          <a href={webUrl} target="_blank" rel="oopener noreferrer">
            <WebLink>WebSite</WebLink>
          </a>
          <a href={GithubUrl} target="_blank" rel="oopener noreferrer">
            <GitLink>Github</GitLink>
          </a>
        </LinkContaier>
      </ItemContainer>
    </ContentContainer>
  </Container>
);

ProjectDetail.prototype = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  webUrl: PropTypes.string.isRequired,
  GithubUrl: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default ProjectDetail;
