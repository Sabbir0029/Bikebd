import React from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();
      if (isLoading)
      {
        return <div className="d-flex align-items-center">
          <strong>Loading...</strong>
          <div
            className="spinner-border ms-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      }
      if (user.email) {
      return children ;
      }
      return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
