import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Circle } from "rc-progress";

import ProfileDetail from "../../ProfileDetail";
import myPhoto from "../../../images/me.jpg";

const Container = styled.div``;

const ProgressContainer = styled.div`
  width: 100px;
  height: 100px;
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
      {console.log(cssPercent)}
      <ProgressContainer>
        <Circle strokeWidth="4" strokeColor="red" percent={htmlPercent} />
        <Circle strokeWidth="4" strokeColor="red" percent={cssPercent} />
        <Circle strokeWidth="4" strokeColor="red" percent={javascriptPercent} />
        <Circle strokeWidth="4" strokeColor="red" percent={nodeJSPercent} />
        <Circle strokeWidth="4" strokeColor="red" percent={reactPercent} />
      </ProgressContainer>
    </ProfileDetail>
  </Container>
);

TechnologiesPresenter.prototype = {
  htmlPercent: PropTypes.number.isRequired
};

export default TechnologiesPresenter;
