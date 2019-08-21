import React from "react";
import styled from "styled-components";
import ProfileDetail from "../../ProfileDetail";
import myPhoto from "../../../images/me.jpg";

const Container = styled.div``;

const IntroducePresenter = () => (
  <Container>
    <ProfileDetail title="자기 소개" imageUrl={myPhoto}>
      안녕하세요.저는
      강기석입니다.asdfjansdfkjansdklfnasdkljfnasdlkjfnasdlkjfnaslkasdfashdfjkdbfkjsahdbfakjhdsb
      강기석입니다.asdfjansdfkjansdklfnasdkljfnasdlkjfnasdlkjfnaslkasdfashdfjkdbfkjsahdbfakjhdsb
      강기석입니다.asdfjansdfkjansdklfnasdkljfnasdlkjfnasdlkjfnaslkasdfashdfjkdbfkjsahdbfakjhdsb
      강기석입니다.asdfjansdfkjansdklfnasdkljfnasdlkjfnasdlkjfnaslkasdfashdfjkdbfkjsahdbfakjhdsb
      강기석입니다.asdfjansdfkjansdklfnasdkljfnasdlkjfnasdlkjfnaslkasdfashdfjkdbfkjsahdbfakjhdsb
      강기석입니다.asdfjansdfkjansdklfnasdkljfnasdlkjfnasdlkjfnaslkasdfashdfjkdbfkjsahdbfakjhdsb
    </ProfileDetail>
  </Container>
);

export default IntroducePresenter;
