import React from "react";
import styled, { keyframes } from "styled-components";
import ProfileDetail from "../../ProfileDetail";
import myPhoto from "../../../images/endoftheworld.jpg";
import Loader from "../../Loader";

const fadeIn = keyframes`
  from{
    opacity:0;
  }
  to {
    opacity:1;
  }
  `;

const Container = styled.div`
  background-image: url(${props => props.image});
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`;

const Title = styled.span`
  font-size: 70px;
  margin-top: 70px;
  margin-bottom: 50px;
`;

const Desc = styled.span`
  font-size: 35px;
  margin-bottom: 20px;
`;

const ContactPresenter = ({ image, loading }) => (
  <Container image={loading ? null : image.src}>
    {loading ? <Loader /> : null}
    <ProfileDetail title="Contact" imageUrl={myPhoto}>
      <ContentContainer>
        <Title>Email</Title>
        <Desc>river.key93@gmail.com</Desc>
        <Title>Phone</Title>
        <Desc>010 - 7511 - 1696</Desc>
      </ContentContainer>
    </ProfileDetail>
  </Container>
);

export default ContactPresenter;
