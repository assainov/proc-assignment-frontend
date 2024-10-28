import { Routes, Route } from 'react-router-dom';

import 'views/styles/global.css';
import Home from './pages/home';
import Layout from 'components/@layout/Layout/Layout';
import Login from './pages/login';
import Signup from './pages/signup';
import Page404 from './pages/page-404';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import ProtectedRoute from './components/@layout/ProtectedRoute/ProtectedRoute';
import { useAuthStore } from 'state/useAuthStore';
import SignupWall from './pages/signupwall';

const App = () => {
  const user = useAuthStore(state => state.user);
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          element={<Layout />}
          path="/"
        >
          <Route
            element={
              <ProtectedRoute user={user}>
                <Home />
              </ProtectedRoute>
            }
            index
          />
          <Route
            element={<SignupWall />}
            path="signupwall"
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
};

export default App;
