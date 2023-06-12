import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;

  > * + * {
    margin-top: 8px;
  }
`;
