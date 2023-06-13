import styled from "styled-components";
import { StartButton } from "./StartButton";
import { StartWindow } from "./StartWindow";
import { StartLabel } from "./StartLabel";

export const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  outline: 0 none;
  transition: 0.1s transform ease;
  transform: scale(1);

  &:hover ${StartButton}, &:focus ${StartButton} {
    background-color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  &:hover ${StartLabel}, &:focus ${StartLabel} {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover ${StartWindow}, &:focus ${StartWindow} {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
