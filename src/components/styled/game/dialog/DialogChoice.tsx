import styled from "styled-components";

export const DialogChoice = styled.button`
  padding: 4px;
  text-transform: uppercase;
  width: 100%;
  padding: 16px 32px;
  letter-spacing: 1px;
  outline: 0 none;
  cursor: pointer;
  font-size: 1.125rem;
  transition-property: background-color, color;
  transition-duration: 0.1s;
  border-radius: 3px;
  transition-timing-function: ease;
  font-family: ${({ theme }) => theme.fonts.button};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  line-height: 1.5;
  margin: 8px 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 1000px) {
    font-size: 1rem;
    padding: 12px 20px;
  }

  @media (max-width: 500px) {
    font-size: 0.875rem;
    padding: 8px 16px;
  }
`;
