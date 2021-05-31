import React from "react";
import styled from "styled-components";

import NavigationBarItem from "./NavigationBarItem";

import { NAV_ITEMS } from "../constants/constants";
import COLORS from "../constants/colors";

const Container = styled.nav`
  z-index: 999;
  height: 48px;
  padding: 2px 10%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 -3px 5px 2px ${COLORS.MAIN_GRAY};
  background-color: white;
`;

export default function NavigationBar() {
  return (
    <Container>
      {NAV_ITEMS.map(({ name, to, active, inactive }) => (
        <NavigationBarItem
          key={name}
          to={to}
          activeImg={active}
          inactiveImg={inactive}
        />
      ))}
    </Container>
  );
}
