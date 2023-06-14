import styled from "styled-components";

export interface MenuNavigationProps {
  show?: boolean;
}

export const MenuNavigation = styled.nav<MenuNavigationProps>`
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 50;
  padding-top: 48px;
  padding-bottom: 12px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  box-shadow: 0px 12px 16px -8px rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) => theme.colors.background};

  & > * + * {
    margin-top: 12px;
  }
`;
