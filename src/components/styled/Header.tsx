import styled from "styled-components";

export const Header = styled.h1`
  display: block;
  text-align: center;
  font-size: 10rem;
  line-height: 1.2;
  font-weight: 400;
  letter-spacing: 3px;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.text};
`;
