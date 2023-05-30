import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { ProductsAndServices } from "../views/ProductsAndServices";
import { Registers } from "../views/Registers";
import { Financial } from "../views/Financial";
import { Animals } from "../views/Animals";
import { Profile } from "../views/Profile";
import { Reports } from "../views/Reports";
import { Clients } from "../views/Clients";
import { Shop } from "../views/Shop";
import { Home } from "../views/Home";

import { AppLayout } from "../components/AppLayout";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/registers" element={<Registers />} />
          <Route path="/financial" element={<Financial />} />
          <Route
            path="/products-and-services"
            element={<ProductsAndServices />}
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};
