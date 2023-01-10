import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-right: 1px, solid, black;
  padding: 10px;
`;

export const Nav = styled.nav`
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;
`;
export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: black;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  padding: 3px;
  border-radius: 5px;
  transition: 200ms ease;

  svg {
    margin-right: 5px;
  }
  &.active {
    color: #ffffff;
    background: #007bff;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #5500ff;
    scale: 1.05;
    transition-duration: 200ms;
  }
`;
