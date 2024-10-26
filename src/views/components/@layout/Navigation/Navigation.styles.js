import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from 'views/styles/responsive';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  background-color: ${pr => pr.theme.backgrounds.white};

  @media ${device.tablet} {
    padding: 1rem 2rem;
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
  color: ${pr => pr.theme.colors.black};

  &, &:visited, &:active {
    color: ${pr => pr.theme.colors.black};
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const Logo = styled(StyledLink)`
  font-weight: bold;
`;