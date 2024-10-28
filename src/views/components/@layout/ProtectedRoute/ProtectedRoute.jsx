import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
  if (!user) return (
    <Navigate
      replace
      to="/signupwall"
    />
  );

  return children;
};

export default ProtectedRoute;