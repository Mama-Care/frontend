import { useAuth } from "@src/hooks/use-auth/use-auth";
import { ReactNode } from "react";

import { Navigate } from "react-router-dom"; 
import { PulseLoader } from "react-spinners";

const ProtectedRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <PulseLoader />; 

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
