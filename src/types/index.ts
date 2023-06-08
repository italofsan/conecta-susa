export type Animal = {
  id: number;
  name: string;
  race: string;
  species: string;
  owner: string;
  sex: string;
  coat: string;
  weight: string;
  dateOfBirth: string;
  size: "small" | "medium" | "large";
  comments: string;
  allergies: string;
  castrated: string;
  createdAt: Date;
};

export type Client = {
  id: number;
  name: string;
  cpf: string;
  phone: string;
  createdAt: Date;
};
