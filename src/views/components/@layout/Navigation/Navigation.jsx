import React from 'react';
import { Header, Logo, Nav, StyledLink } from './Navigation.styles';

const Navigation = () => (
  <Header>
    <Logo to="/">By Ilyas Assainov</Logo>
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/signup">Signup</StyledLink>
    </Nav>
  </Header>
);

export default Navigation;