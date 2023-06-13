import styled from "styled-components";

export interface DialogCharacterProps {
  source?: string;
}

export const DialogCharacter = styled.div<DialogCharacterProps>`
  display: flex;
  width: 150px;
  height: 150px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ source }) => (source ? `url(${source})` : "none")};
`;
