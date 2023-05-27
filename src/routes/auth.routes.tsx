import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { AuthLayout } from "../components/AuthLayout";

import { HomePage } from "../pages/HomePage";
import { Login } from "../pages/Login";

export const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <AuthLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthLayout>
    </BrowserRouter>
  );
};
