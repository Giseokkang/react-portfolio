import React from "react";
import styled from "styled-components";
import ProfileDetail from "../../ProfileDetail";
import myPhoto from "../../../images/santiago.jpg";

const Container = styled.div``;

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

const ContactPresenter = () => (
  <Container>
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
