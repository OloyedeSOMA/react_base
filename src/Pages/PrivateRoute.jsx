// components/PrivateRoute.jsx
import { useAuth } from '../Components/Context/AuthContext'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/Login" replace />;
};

export default PrivateRoute;
