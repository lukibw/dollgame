import styled from "styled-components";

export interface StartWindowProps {
  background?: string;
}

export const StartWindow = styled.div<StartWindowProps>`
  flex: 1;
  width: 100%;
  display: block;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: visible;
  height: 0;
  padding-top: 56.25%;
  transition: 0.1s border-color ease;
  border-width: 3px;
  border-radius: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  background-image: ${({ background }) =>
    background ? `url(${background})` : "none"};
`;
