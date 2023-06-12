import styled from "styled-components";

export interface HeaderProps {
  gutter?: boolean;
  small?: boolean;
}

export const Header = styled.h1<HeaderProps>`
  display: block;
  text-align: center;
  font-size: ${({ small }) => (small ? 5 : 10)}rem;
  margin-bottom: ${({ gutter }) => (gutter ? 64 : 0)}px;
  line-height: 1.2;
  font-weight: 400;
  letter-spacing: 3px;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.text};
`;
