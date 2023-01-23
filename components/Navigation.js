import React from "react";
import styled from "styled-components";

const NavStyle = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #263343;
  padding: 8px 12px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const UlStyle = styled.ul`
  display: flex;
  color: white;

  & li {
    padding: 8px 12px;
  }

  & li:hover {
    background-color: #d49466;
    border-radius: 5px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;

    & li {
      text-align: center;
      width: 100%;
    }
  }
`;

const Navigation = () => {
  return (
    <NavStyle>
      <UlStyle>
        <li>메뉴1</li>
        <li>메뉴2</li>
      </UlStyle>
    </NavStyle>
  );
};

export default Navigation;
