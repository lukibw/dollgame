import styled from "styled-components";

export const Button = styled.button`
  padding: 4px;
  text-transform: uppercase;
  padding: 8px 16px;
  letter-spacing: 1px;
  outline: 0 none;
  cursor: pointer;
  font-size: 1.125rem;
  transition-property: background-color, color;
  transition-duration: 0.1s;
  border-radius: 2px;
  white-space: nowrap;
  transition-timing-function: ease;
  font-family: ${({ theme }) => theme.fonts.button};
  border: 2px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 1000px) {
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    font-size: 0.875rem;
  }
`;
