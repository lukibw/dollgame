import styled from "styled-components";

export const ChapterWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: block;
  position: relative;
  padding: 50px;
  background-color: #000000;

  @media (max-width: 1000px) {
    padding: 25px;
  }

  @media (max-width: 500px) {
    padding: 0px;
  }
`;
