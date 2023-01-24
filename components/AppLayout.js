import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const DivWrapper = styled.div`
  display: flex;
  flex: 1;
  margin-top: 12px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const DivLeftStyle = styled.div`
  flex: 1;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const DivCenterStyle = styled.div`
  flex: 2;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const DivRightStyle = styled.div`
  flex: 1;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const AppLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Navigation />
      <DivWrapper>
        <DivLeftStyle></DivLeftStyle>
        <DivCenterStyle>{children}</DivCenterStyle>
        <DivRightStyle></DivRightStyle>
      </DivWrapper>
      <Footer />
    </Wrapper>
  );
};

export default AppLayout;
