import React from "react";
import styled from "styled-components";

const Container = styled.nav`
  z-index: 999;
  height: 48px;
  padding: 2px 10%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 -3px 5px 2px #bababa;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  color: #bababa;

  &:hover {
    color: #da3b62;
  }
`;

const NavIcon = styled.span`
  font-size: 36px;
`;

export default function NavigationBar() {
  return (
    <Container>
      <NavItem>
        <NavIcon className="material-icons">place</NavIcon>
      </NavItem>
      <NavItem>
        <NavIcon className="material-icons">play_circle_filled</NavIcon>
      </NavItem>
      <NavItem>
        <NavIcon className="material-icons">leaderboard</NavIcon>
      </NavItem>
      <NavItem>
        <NavIcon className="material-icons">account_circle</NavIcon>
      </NavItem>
    </Container>
  );
}
