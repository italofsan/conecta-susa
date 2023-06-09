import { Location } from "react-router-dom";

export const onlyNumbers = (string: string) => {
  return string.replace(/[^0-9]/g, "");
};

// Check if the page should disable some fields
export const inCreationOrEditing = (location: Location) => {
  return (
    location.pathname.includes("new") || location.pathname.includes("edit")
  );
};

export const returnedPhraseToModalDelete = (location: Location) => {
  switch (location.pathname) {
    case "/animals/list-animals":
      return "animal";
    case "/clients":
      return "cliente";
    default:
      return "item";
  }
};
