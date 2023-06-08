import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { ProductsAndServices } from "../views/ProductsAndServices";
import { Registers } from "../views/Registers";
import { Financial } from "../views/Financial";

import { Animals } from "../views/Animals";
import { AnimalRegister } from "../views/Animals/AnimalRegister";
import { ListAnimals } from "../views/Animals/ListAnimals";

import { Profile } from "../views/Profile";
import { Reports } from "../views/Reports";

import { Clients } from "../views/Clients";
import { ClientRegister } from "../views/Clients/ClientRegister";

import { Shop } from "../views/Shop";
import { Home } from "../views/Home";

import { AppLayout } from "../components/AppLayout";
import { News } from "../views/News";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/new" element={<ClientRegister />} />
          <Route path="/clients/:id" element={<ClientRegister />} />
          <Route path="/clients/:id/edit" element={<ClientRegister />} />

          <Route path="/animals" element={<Animals />} />
          <Route path="/animals/new" element={<AnimalRegister />} />
          <Route path="/animals/:id" element={<AnimalRegister />} />
          <Route path="/animals/:id/edit" element={<AnimalRegister />} />
          <Route path="/animals/list-animals" element={<ListAnimals />} />

          <Route path="/registers" element={<Registers />} />
          <Route path="/financial" element={<News />} />
          <Route path="/products-and-services" element={<News />} />
          <Route path="/shop" element={<News />} />
          <Route path="/reports" element={<News />} />
          <Route path="/profile" element={<News />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};
