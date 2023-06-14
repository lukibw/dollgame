import styled from "styled-components";

export const StartLabel = styled.p`
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 400;
  letter-spacing: 3px;
  margin-bottom: 24px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: 0.1s color ease;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 1000px) {
    font-size: 1.8rem;
  }

  @media (max-width: 500px) {
    font-size: 1.25rem;
  }
`;
