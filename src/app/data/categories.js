import { CarFront, Home } from "lucide-react";

export const CATEGORIES = [
  {
    id: 1,
    name: "Immobilier",
    icon: <Home size={16} />,
    list: [
      {
        id: 1,
        name: "Tout Immobilier",
        subCategories: [],
      },
      {
        id: 2,
        name: "Ventes immobilières",
        subCategories: [
          {
            id: 1,
            name: "Appartement",
          },
          {
            id: 2,
            name: "Maison",
          },
          {
            id: 3,
            name: "Terrain",
          },
          {
            id: 4,
            name: "Voir tout",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Véhicules",
    icon: <CarFront />,
    list: [
      {
        id: 1,
        name: "Tout Véhicules",
        subCategories: [],
      },
      {
        id: 2,
        name: "Voitures",
        subCategories: [
          {
            id: 1,
            name: "Peugeot",
          },
          {
            id: 2,
            name: "Renault",
          },
          {
            id: 3,
            name: "Voir toutes les marques",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Location de vacances",
    list: [],
  },
  {
    id: 4,
    name: "Emploi",
    list: [],
  },
  {
    id: 5,
    name: "Mode",
    list: [],
  },
  {
    id: 6,
    name: "Maison & Jardin",
    list: [],
  },
  {
    id: 7,
    name: "Famille",
    list: [],
  },
  {
    id: 8,
    name: "Electronique",
    list: [],
  },
  {
    id: 9,
    name: "Loisirs",
    list: [],
  },
  {
    id: 10,
    name: "Autres",
    list: [],
  },
];
