import styled from "styled-components";

export interface ChapterBackgroundProps {
  source?: string;
}

export const ChapterBackground = styled.div<ChapterBackgroundProps>`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  top: 0;
  left: 0;
  position: absolute;
  pointer-events: none;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ source }) => (source ? `url(${source})` : "none")};
`;
