import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

// Redux Toolkit
import { useSelector, useDispatch } from "react-redux";
import { authState, setAuthLoading } from "../Features/Auth";

const PrivateRoutes = () => {
  //Redux
  const auth = useSelector(authState);

  const roles = auth.role.filter((data) => data[0] === "Author");

  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(auth.authLoading);
  }, [auth.authLoading]);

  if (load) {
    // Need to Make Loading Component
    return "Loading....";
  }

  return load === false && auth.isAuthenticated && roles.length > 0 ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
