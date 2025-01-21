import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
console.log(location);
  if (loading) return <p>Loading</p>;
  if (user) return children;
  return <Navigate to="/auth/signin" state={{ from: location }} replace="true" />;
};

export default PrivateRoute;
