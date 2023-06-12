import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  overflow: auto;
  padding: 60px;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
