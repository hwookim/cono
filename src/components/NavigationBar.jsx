import React from "react";
import styled from "styled-components";

import NavigationBarItem from "./NavigationBarItem";

import { NAV_ITEMS } from "../constants/constants";
import COLORS from "../constants/colors";

const Container = styled.nav`
  z-index: 999;
  position: fixed;
  bottom: 0;
  width: 90vw;
  max-width: calc(500px - 10vw);
  height: 48px;
  padding: 2px 5vw;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 -3px 5px 2px ${COLORS.MAIN_GRAY};
  background-color: white;
`;

export default function NavigationBar() {
  return (
    <Container>
      {NAV_ITEMS.map(({ name, to, active, inactive, disabled }) => (
        <NavigationBarItem
          key={name}
          to={to}
          activeImg={active}
          inactiveImg={inactive}
          disabled={disabled}
        />
      ))}
    </Container>
  );
}
