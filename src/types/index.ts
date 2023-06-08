export type Animal = {
  id: number;
  name: string;
  race: string;
  species: string;
  owner: string;
  sex: "M" | "F";
  coat: string;
  weight: string;
  dateOfBirth: string;
  size: "Pequeno" | "Médio" | "Grande";
  comments: string;
  allergies: string;
  castrated: "Sim" | "Não";
  createdAt: Date;
};

export type Client = {
  id: number;
  name: string;
  cpf: string;
  phone: string;
  createdAt: Date;
};
