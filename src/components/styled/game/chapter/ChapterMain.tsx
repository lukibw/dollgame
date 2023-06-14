import styled from "styled-components";

export const ChapterMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 2px;
  position: relative;
  overflow: auto;
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 64px;
  border: 3px solid ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 7.9px rgba(0, 0, 0, 0.042),
    0 4.8px 18.9px rgba(0, 0, 0, 0.061), 0 8.9px 35.6px rgba(0, 0, 0, 0.075),
    0 15.6px 63.4px rgba(0, 0, 0, 0.089), 0 28.9px 118.6px rgba(0, 0, 0, 0.108),
    0 69px 284px rgba(0, 0, 0, 0.15);

  @media (max-width: 1000px) {
    padding: 32px;
  }

  @media (max-width: 500px) {
    padding: 16px;
    border: none;
  }
`;
