import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  background-color: #263343;
  color: white;
`;

const LogoStyle = styled.div`
  font-size: 40px;
  margin-top: 24px;
  margin-left: 24px;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <LogoStyle>로고</LogoStyle>
    </HeaderStyle>
  );
};

export default Header;
