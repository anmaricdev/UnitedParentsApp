import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Header from "./Header";
import Sidebar from "./Sidebar";

function ProtectedRoutes({ children }) {
  const GetUser = async () => {
    let { user } = await useUserAuth();

    if (!user) {
      return <Navigate to="/" />;
    }
  };

  useEffect(() => {
    GetUser();
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      {children}
    </div>
  );
}

export default ProtectedRoutes;
