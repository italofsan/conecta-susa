import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { ProductsAndServices } from "../views/ProductsAndServices";
import { Registers } from "../views/Registers";
import { ListSpecies } from "../views/Registers/ListSpecies";
import { ListRaces } from "../views/Registers/ListRaces";
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
import { ResponsiveDrawer } from "../components/AppLayout/newIndex";
import { News } from "../views/News";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ResponsiveDrawer>
        <Routes>
          {/* <Route path="/home" element={<Home />} /> */}

          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/new" element={<ClientRegister />} />
          <Route path="/clients/:id" element={<ClientRegister />} />
          <Route path="/clients/:id/edit" element={<ClientRegister />} />

          <Route path="/animals" element={<Animals />} />
          <Route path="/animals/new" element={<AnimalRegister />} />
          <Route path="/animals/:id" element={<AnimalRegister />} />
          <Route path="/animals/:id/edit" element={<AnimalRegister />} />
          <Route path="/animals/list-animals" element={<ListAnimals />} />
          <Route path="/animals/service-history" element={<News />} />
          <Route path="/animals/appointment-schedule" element={<News />} />
          <Route path="/animals/feeding-control" element={<News />} />
          <Route path="/animals/vaccination-control" element={<News />} />
          <Route path="/animals/medication-management" element={<News />} />
          <Route path="/animals/adoption-control" element={<News />} />
          <Route path="/animals/hygiene-control" element={<News />} />
          <Route path="/animals/reports" element={<News />} />

          <Route path="/registers" element={<Registers />} />
          <Route path="/registers/establishments" element={<News />} />
          <Route path="/registers/adopters" element={<News />} />
          <Route path="/registers/volunteers" element={<News />} />
          <Route path="/registers/donors" element={<News />} />
          <Route path="/registers/suppliers" element={<News />} />
          <Route path="/registers/events" element={<News />} />
          <Route path="/registers/campaigns" element={<News />} />
          <Route path="/registers/vaccines" element={<News />} />
          <Route path="/registers/races" element={<ListRaces />} />
          <Route path="/registers/species" element={<ListSpecies />} />
          <Route path="/registers/exams" element={<News />} />
          <Route path="/registers/brands" element={<News />} />
          <Route path="/registers/pathologies" element={<News />} />
          <Route path="/registers/medical-prescriptions" element={<News />} />
          <Route path="/registers/service-types" element={<News />} />
          <Route path="/registers/products" element={<News />} />
          <Route path="/registers/schedule" element={<News />} />

          <Route path="/financial" element={<News />} />
          <Route path="/products-and-services" element={<News />} />
          <Route path="/shop" element={<News />} />
          <Route path="/reports" element={<News />} />
          <Route path="/profile" element={<News />} />
          <Route path="*" element={<Navigate to="/clients" />} />
        </Routes>
      </ResponsiveDrawer>
    </BrowserRouter>
  );
};
