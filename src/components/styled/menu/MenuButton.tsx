import styled from "styled-components";

export const MenuButton = styled.button`
  z-index: 100;
  padding: 12px;
  cursor: pointer;
  position: absolute;
  left: 6px;
  top: 6px;
  outline: 0 none;
  border: 0 none;
  display: inline-flex;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.button};
  border-radius: 50%;
  background-color: transparent;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.07);
  }
`;
