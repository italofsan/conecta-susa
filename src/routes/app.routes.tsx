import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../views/Home";

// import { Layout } from "../components/Layout";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      {/* <Layout> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  );
};
