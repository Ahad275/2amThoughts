import { Navigate } from "react-router-dom";
import { getUser } from "./services/authorize";

const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  if (!getUser()) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default ProtectedRoute;
