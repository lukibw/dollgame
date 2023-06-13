import styled from "styled-components";

export const DialogResume = styled.div`
  display: flex;

  & > * + * {
    margin-left: 16px;
  }
`;
