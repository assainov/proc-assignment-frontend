import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Container } from './Layout.styles';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <Navigation />
    <Container>
      <Outlet />
    </Container>
  </>
);

export default Layout;