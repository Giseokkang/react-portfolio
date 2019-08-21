import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BgImg = styled.div`
  background-image: url(${probs => probs.imageUrl});
  background-position: center top;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: 9;
  border-radius: 20px;
  transition: transform 0.5s ease-in-out;
`;

const Container = styled.div`
  background-color: #273747;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 3;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    ${BgImg} {
      transform: scale(0.5) translateY(-100px);
    }
  }
`;

const Content = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
  background-color: black;
`;

const Title = styled.span`
  font-size: 30px;
`;

const Description = styled.span`
  margin-top: 10px;
  font-size: 15px;
`;

const Poster = ({ title, imageUrl, children }) => (
  <Container>
    {console.log(title, imageUrl, children)}
    <BgImg imageUrl={imageUrl} />
    <Content>
      <Title>{title}</Title>
      <Description>{children}</Description>
    </Content>
  </Container>
);

Poster.prototype = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Poster;
