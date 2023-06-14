import styled from "styled-components";

export const DialogLabel = styled.label`
  font-size: 2.25rem;
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 1.5;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.heading};

  @media (max-width: 1000px) {
    font-size: 1.875rem;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
