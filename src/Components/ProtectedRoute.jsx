import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, children, redirected = "/" }) => {
  if (!isAllowed) {
    return <Navigate to={redirected} />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
