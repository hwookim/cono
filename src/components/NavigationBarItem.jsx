import React from "react";
import styled, { css } from "styled-components";

import { Link, useHistory } from "react-router-dom";

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

  ${({ disabled }) =>
    disabled ??
    css`
      &:hover {
        background: url(${({ active }) => active}) no-repeat;
        background-size: 36px;
      }
    `}
`;

export default function NavigationBarItem({
  to,
  activeImg,
  inactiveImg,
  disabled,
}) {
  const history = useHistory();
  const isActive = location.pathname.includes(to);

  const link = () => {
    if (disabled) {
      return;
    }
    history.push(to);
  };

  return (
    <NavItem onClick={link}>
      <NavImg
        defaultImg={isActive ? activeImg : inactiveImg}
        active={activeImg}
        disabled={disabled}
      />
    </NavItem>
  );
}
