import { Animal, Client } from "../types";

export const mockedListClient: Client[] = [
  {
    id: 1,
    name: "John Doe",
    cpf: "123.456.789-01",
    phone: "(12) 34567-8901",
    createdAt: new Date(),
  },
  {
    id: 2,
    name: "Jane Smith",
    cpf: "987.654.321-02",
    phone: "(98) 76543-2102",
    createdAt: new Date(),
  },
  {
    id: 3,
    name: "Alice Johnson",
    cpf: "456.123.789-03",
    phone: "(45) 61234-7890",
    createdAt: new Date(),
  },
  {
    id: 4,
    name: "Bob Anderson",
    cpf: "789.123.456-04",
    phone: "(78) 91234-5604",
    createdAt: new Date(),
  },
  {
    id: 5,
    name: "Sarah Williams",
    cpf: "321.654.987-05",
    phone: "(32) 16549-8705",
    createdAt: new Date(),
  },
  {
    id: 6,
    name: "Michael Brown",
    cpf: "654.789.123-06",
    phone: "(65) 47891-2306",
    createdAt: new Date(),
  },
  {
    id: 7,
    name: "Emily Davis",
    cpf: "987.321.654-07",
    phone: "(98) 73216-5407",
    createdAt: new Date(),
  },
  {
    id: 8,
    name: "David Johnson",
    cpf: "456.789.123-08",
    phone: "(45) 67891-2308",
    createdAt: new Date(),
  },
  {
    id: 9,
    name: "Olivia Martinez",
    cpf: "123.987.456-09",
    phone: "(12) 39874-5609",
    createdAt: new Date(),
  },
  {
    id: 10,
    name: "Daniel Wilson",
    cpf: "789.456.123-10",
    phone: "(78) 94561-2310",
    createdAt: new Date(),
  },
];

export const mockedListAnimal: Animal[] = [
  {
    id: 1,
    name: "Mel",
    race: "Vira-lata",
    species: "Cachorro",
    owner: "João Silva",
    sex: "F",
    coat: "Curto",
    weight: "10",
    dateOfBirth: "01/01/2019",
    size: "Médio",
    comments: "Muito dócil e brincalhona",
    allergies: "Nenhuma",
    castrated: "Sim",
    createdAt: new Date(),
  },
  {
    id: 2,
    name: "Mia",
    race: "SRD",
    species: "Gato",
    owner: "Maria Souza",
    sex: "F",
    coat: "Longo",
    weight: "5",
    dateOfBirth: "15/02/2020",
    size: "Pequeno",
    comments: "Adora brincar com bolinhas",
    allergies: "Nenhuma",
    castrated: "Sim",
    createdAt: new Date(),
  },
  {
    id: 3,
    name: "Thor",
    race: "Bulldog Francês",
    species: "Cachorro",
    owner: "Miguel Ferreira",
    sex: "M",
    coat: "Curto",
    weight: "8",
    dateOfBirth: "10/05/2021",
    size: "Pequeno",
    comments: "Muito protetor e brincalhão",
    allergies: "Nenhuma",
    castrated: "Não",
    createdAt: new Date(),
  },
  {
    id: 4,
    name: "Lola",
    race: "Persa",
    species: "Gato",
    owner: "Ana Rodrigues",
    sex: "F",
    coat: "Longo",
    weight: "4",
    dateOfBirth: "03/07/2019",
    size: "Pequeno",
    comments: "Gosta de dormir em lugares altos",
    allergies: "Nenhuma",
    castrated: "Sim",
    createdAt: new Date(),
  },
  {
    id: 5,
    name: "Max",
    race: "Labrador Retriever",
    species: "Cachorro",
    owner: "Pedro Almeida",
    sex: "M",
    coat: "Curto",
    weight: "12",
    dateOfBirth: "20/11/2020",
    size: "Grande",
    comments: "Adora correr e brincar no parque",
    allergies: "Nenhuma",
    castrated: "Sim",
    createdAt: new Date(),
  },
  {
    id: 6,
    name: "Nina",
    race: "Siamês",
    species: "Gato",
    owner: "Isabela Oliveira",
    sex: "F",
    coat: "Curto",
    weight: "3",
    dateOfBirth: "14/04/2020",
    size: "Pequeno",
    comments: "Muito carinhosa e brincalhona",
    allergies: "Nenhuma",
    castrated: "Sim",
    createdAt: new Date(),
  },
  {
    id: 7,
    name: "Rex",
    race: "Poodle",
    species: "Cachorro",
    owner: "Lucas Santos",
    sex: "M",
    coat: "Curto",
    weight: "6",
    dateOfBirth: "05/09/2018",
    size: "Médio",
    comments: "Muito inteligente e obediente",
    allergies: "Nenhuma",
    castrated: "Sim",
    createdAt: new Date(),
  },
  {
    id: 8,
    name: "Luna",
    race: "Maine Coon",
    species: "Gato",
    owner: "Carolina Lima",
    sex: "F",
    coat: "Longo",
    weight: "7",
    dateOfBirth: "30/06/2020",
    size: "Médio",
    comments: "Adora brincar com bolinhas de papel",
    allergies: "Nenhuma",
    castrated: "Sim",
    createdAt: new Date(),
  },
  {
    id: 9,
    name: "Bruce",
    race: "Bulldog Inglês",
    species: "Cachorro",
    owner: "Marcos Oliveira",
    sex: "M",
    coat: "Curto",
    weight: "15",
    dateOfBirth: "12/12/2017",
    size: "Grande",
    comments: "Muito brincalhão e energético",
    allergies: "Nenhuma",
    castrated: "Sim",
    createdAt: new Date(),
  },
  {
    id: 10,
    name: "Bela",
    race: "Persa",
    species: "Gato",
    owner: "Fernanda Castro",
    sex: "F",
    coat: "Longo",
    weight: "4",
    dateOfBirth: "02/03/2022",
    size: "Pequeno",
    comments: "Muito dócil e tranquila",
    allergies: "Nenhuma",
    castrated: "Sim",
    createdAt: new Date(),
  },
];
