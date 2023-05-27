import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";

export const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
