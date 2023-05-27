import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../views/Home";

// import { Layout } from "../components/Layout";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  );
};
