import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const NavImg = styled.div`
  width: 36px;
  height: 36px;
  background: url(${({ defaultImg }) => defaultImg}) no-repeat;
  background-size: 36px;

  &:hover {
    background: url(${({ active }) => active}) no-repeat;
    background-size: 36px;
  }
`;

export default function NavigationBarItem({ to, activeImg, inactiveImg }) {
  const isActive = location.pathname.includes(to);

  return (
    <NavItem to={to}>
      <NavImg
        defaultImg={isActive ? activeImg : inactiveImg}
        active={activeImg}
      />
    </NavItem>
  );
}
