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
    case "/modal-type":
      return "tipo de modal";
    case "/schedule-type":
      return "tipo de programação";
    case "/status":
      return "tipo de status";
    case "/occurrences":
      return "tipo de ocorrência";
    case "/checklist":
      return "checklist";
    case "/users":
      return "usuário";
    case "/vehicles":
      return "veículo";
    case "/drivers":
      return "motorista";
    default:
      return "ordem de serviço";
  }
};
