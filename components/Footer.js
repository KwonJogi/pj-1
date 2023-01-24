import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #263343;
  color: white;
  padding-top: 24px;
  padding-bottom: 24px;
  margin-top: 12px;
`;

const Footer = () => {
  return (
    <FooterStyle>Copyright 2023. JeongIn All rights reserved.</FooterStyle>
  );
};

export default Footer;
