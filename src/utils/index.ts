import { Location } from "react-router-dom";

// Funções Auxiliares que ajudam em formatação
export const onlyNumbers = (string: string) => {
  return string.replace(/[^0-9]/g, "");
};

// Check if the page should disable some fields
export const inCreationOrEditing = (location: Location) => {
  return (
    location.pathname.includes("new") || location.pathname.includes("edit")
  );
};
