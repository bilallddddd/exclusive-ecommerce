import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import "../components-css/loading-spinner.css";

const ProtectedRoute = ({ children }) => {
  const { session, loading } = useAuthContext();
  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="loader" aria-label="loading spiner"></span>
      </div>
    );
  }
  return session ? children : <Navigate to="/login" />;
};
export default ProtectedRoute;
