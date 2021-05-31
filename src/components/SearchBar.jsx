import React from "react";
import styled from "styled-components";

import COLORS from "../constants/colors";

const Container = styled.div`
  z-index: 999;
  position: absolute;
  top: 10px;
  width: 100vw;
  max-width: 500px;
  height: 36px;
  display: flex;
  justify-content: center;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 0 3px 1px ${COLORS.MAIN_GRAY};
  background-color: white;
`;

const SearchInput = styled.input`
  width: 85%;
  height: 100%;
  margin: auto;
  border: none;

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.span`
  font-size: 32px;
  font-weight: bold;
  color: ${COLORS.GRAY_TEXT};
`;

export default function SearchBar() {
  const input = document.querySelector(".search-input");
  const focusInput = () => {
    input.focus();
  };

  return (
    <Container onClick={focusInput}>
      <InputContainer>
        <SearchInput className="search-input" />
        <SearchIcon className="material-icons">search</SearchIcon>
      </InputContainer>
    </Container>
  );
}
