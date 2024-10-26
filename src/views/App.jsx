import { Routes, Route } from 'react-router-dom';

import 'views/styles/global.css';
import Home from './pages/home';
import Layout from 'components/@layout/Layout/Layout';
import Login from './pages/login';
import Signup from './pages/signup';
import Page404 from './pages/page-404';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes>
      <Route
        element={<Layout />}
        path="/"
      >
        <Route
          element={<Home />}
          index
        />
        <Route
          element={<Login />}
          path="login"
        />
        <Route
          element={<Signup />}
          path="signup"
        />
        <Route
          element={<Page404 />}
          path="*"
        />
      </Route>
    </Routes>
  </ThemeProvider>
);

export default App;
