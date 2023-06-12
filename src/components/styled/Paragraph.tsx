import styled from "styled-components";

export interface ParagraphProps {
  gutter?: boolean;
  small?: boolean;
}

export const Paragraph = styled.p<ParagraphProps>`
  font-size: ${({ small }) => (small ? 1.75 : 2.125)}rem;
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: ${({ gutter }) => (gutter ? 32 : 0)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
`;
