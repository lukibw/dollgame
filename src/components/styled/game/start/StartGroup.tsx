import styled from "styled-components";

export const StartGroup = styled.div`
  display: grid;
  grid-gap: 64px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 600px));

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 480px));
  }
`;
