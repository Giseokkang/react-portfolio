import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import star from "../images/star.jpg";
import { FiChevronsLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const fadeIn = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.3s linear;
  position: relative;
`;

// const BgImg = styled.div`
//   background-image: url(${star});
//   background-position: center center;
//   background-size: cover;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: -1;
//   opacity: 0.7;
// `;

const Title = styled.span`
  width: 300px;
  text-align: center;
  font-size: 50px;
  margin: 50px 0px 20px 0px;
  padding-bottom: 20px;
  border-bottom: 5px solid red;
`;

const DataContainer = styled.div`
  display: flex;
  padding: 50px 50px;
  border-radius: 20px;
`;

const Image = styled.div`
  background-image: url(${probs => probs.imageUrl});
  background-position: center center;
  background-size: cover;
  width: 330px;
  height: 550px;
  border-radius: 20px;
  margin-right: 30px;
  animation: ${fadeIn} 0.5s linear;
`;

const Description = styled.span`
  display: flex;
  flex-direction: column;
  width: 700px;
  font-size: 20px;
  margin-left: 30px;
`;

const BackLink = styled(Link)`
  font-size: 150px;
  position: absolute;
  left: 5%;
  top: 45%;
  opacity: 0.5;
  &:hover {
    opacity: 1;
    transform: scale(0.98);
  }
`;

const ProfileDetail = ({ title, imageUrl, children }) => (
  <Container>
    {/* <BgImg /> */}
    <BackLink to="/profile">
      <FiChevronsLeft />
    </BackLink>
    <Title>{title}</Title>
    <DataContainer>
      <Image imageUrl={imageUrl} />
      <Description>{children}</Description>
    </DataContainer>
  </Container>
);

ProfileDetail.prototype = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default ProfileDetail;
