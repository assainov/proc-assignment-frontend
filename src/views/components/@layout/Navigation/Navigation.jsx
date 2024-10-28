import React from 'react';
import { Header, Logo, Nav, StyledLink } from './Navigation.styles';
import { useAuthStore } from 'state/useAuthStore';
import { logout } from 'services/authService/logout';
import { useNavigate } from 'react-router-dom';

const Navigation = () =>  {

  const navigate = useNavigate();
  const user = useAuthStore(state => state.user);
  const setUser = useAuthStore(state => state.setUser);

  const onLogout = (e) => {
    e.preventDefault();

    navigate('/login');
    setUser(null);
    logout();
  };

  const renderLogout = () => (
    <StyledLink onClick={onLogout}>Log out</StyledLink>
  );

  const renderLoginOptions = () => (
    <>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/signup">Signup</StyledLink>
    </>
  );

  return (
    <Header>
      <Logo to="/">By Ilyas Assainov</Logo>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        {user ? renderLogout() : renderLoginOptions()}
      </Nav>
    </Header>
  );
};

export default Navigation;