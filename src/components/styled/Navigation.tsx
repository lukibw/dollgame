import styled from "styled-components";

export const Navigation = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 50;
  min-height: 64px;
  padding-left: 24px;
  padding-right: 24px;

  & > * + * {
    margin-left: 24px;
  }
`;
