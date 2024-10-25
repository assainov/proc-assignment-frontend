import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from 'views/styles/responsive';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media ${device.tablet} {
    padding: 1rem 2rem;
  }
`;

export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;

  &, &:visited, &:active {
    color: black;
  }

  &:hover {
    text-decoration: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media ${device.tablet} {
    gap: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;

  &, &:visited, &:active {
    color: black;
  }

  &:hover {
    text-decoration: underline;
  }
`;