import styled from "styled-components";

export interface LinkProps {
  active?: boolean;
}

export const Link = styled.a<LinkProps>`
  display: inline-block;
  font-size: 1.125rem;
  cursor: pointer;
  text-decoration: none;
  padding: 2px;
  font-weight: 600;
  letter-spacing: 0.75px;
  outline: 0 none;
  transition: 0.1s border-bottom-color ease;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({ active, theme }) =>
    active ? theme.colors.text : "transparent"};
  font-family: ${({ theme }) => theme.fonts.button};
  color: ${({ theme }) => theme.colors.text};

  &:hover,
  &:focus {
    border-bottom-color: ${({ theme }) => theme.colors.text};
  }
`;
