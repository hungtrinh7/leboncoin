import {
  Armchair,
  Bike,
  CarFront,
  CloudSun,
  GripHorizontal,
  Home,
  Luggage,
  Shirt,
  Smartphone,
  Users,
} from "lucide-react";

export const CATEGORIES = [
  {
    id: 1,
    name: "Immobilier",
    icon: <Home size={16} />,
    list: [
      {
        id: 1,
        name: "Tout Immobilier",
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
      {
        id: 3,
        name: "Immobilier Neuf",
        targetBlank: true,
        subCategories: [
          {
            id: 1,
            name: "Programmes logements neufs",
            targetBlank: true,
          },
          {
            id: 2,
            name: "Promoteurs immobiliers",
            targetBlank: true,
          },
          {
            id: 3,
            name: "Investir dans le neuf",
            targetBlank: true,
          },
        ],
      },
      {
        id: 4,
        name: "Location",
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
            name: "Parking",
          },
          {
            id: 4,
            name: "Voir tout",
          },
        ],
      },
      {
        id: 5,
        name: "Colocations",
      },
      {
        id: 6,
        name: "Bureaux & Commerces",
      },
    ],
  },
  {
    id: 2,
    name: "Véhicules",
    icon: <CarFront size={16} />,
    list: [
      {
        id: 1,
        name: "Tout Véhicules",
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
            name: "Volkswagen",
          },
          {
            id: 4,
            name: "Mercedes",
          },
          {
            id: 5,
            name: "BMW",
          },
          {
            id: 6,
            name: "Audi",
          },
          {
            id: 7,
            name: "Voir toutes les marques",
          },
        ],
      },
      {
        id: 3,
        name: "Motos",
        subCategories: [
          {
            id: 1,
            name: "Yamaha",
          },
          {
            id: 2,
            name: "Honda",
          },
          {
            id: 3,
            name: "BMW",
          },
          {
            id: 4,
            name: "Kawasaki",
          },
          {
            id: 5,
            name: "Suzuki",
          },
          {
            id: 6,
            name: "Voir toutes les marques",
          },
        ],
      },
      {
        id: 4,
        name: "Caravaning",
      },
      {
        id: 5,
        name: "Utilitaires",
      },
      {
        id: 6,
        name: "Camions",

        targetBlank: true,
      },
      {
        id: 7,
        name: "Nautisme",
      },
      {
        id: 8,
        name: "Equipement auto",
      },
      {
        id: 9,
        name: "Equipement moto",
      },
      {
        id: 10,
        name: "Equipement caravaning",
      },
      {
        id: 11,
        name: "Equipement nautisme",
      },
    ],
  },
  {
    id: 3,
    name: "Location de vacances",
    icon: <CloudSun size={36} />,
    list: [
      {
        id: 1,
        name: "Locations saisonnières",
      },
      {
        id: 2,
        name: "Hotels",
      },
      {
        id: 3,
        name: "Ventes flash vacances",

        targetBlank: true,
      },
      {
        id: 4,
        name: "Locations en Espagne",

        targetBlank: true,
      },
      {
        id: 5,
        name: "Locations en Europe",

        targetBlank: true,
      },
    ],
  },
  {
    id: 4,
    name: "Emploi",
    icon: <Luggage size={16} />,
    list: [
      {
        id: 1,
        name: "Tout Emploi",
        subCategories: [
          {
            id: 1,
            name: "Intérim",
          },
          {
            id: 2,
            name: "CDI",
          },
          {
            id: 3,
            name: "CDD",
          },
          {
            id: 4,
            name: "Autre (indépendant, apprentissage, stage...)",
          },
        ],
      },
      {
        id: 2,
        name: "Formations professionnelles",
      },
      {
        id: 3,
        name: "Profil Candidat",
      },
    ],
  },
  {
    id: 5,
    name: "Mode",
    icon: <Shirt size={16} />,
    list: [
      {
        id: 1,
        name: "Tout Mode",
      },
      {
        id: 2,
        name: "Vêtements",
        subCategories: [
          {
            id: 1,
            name: "Femme",
          },
          {
            id: 2,
            name: "Maternité",
          },
          {
            id: 3,
            name: "Homme",
          },
          {
            id: 4,
            name: "Enfant",
          },
        ],
      },
      {
        id: 3,
        name: "Chaussures",
        subCategories: [
          {
            id: 1,
            name: "Femme",
          },
          {
            id: 2,
            name: "Homme",
          },
          {
            id: 3,
            name: "Enfant",
          },
        ],
      },
      {
        id: 4,
        name: "Montres & Bijoux",
        subCategories: [
          {
            id: 1,
            name: "Femme",
          },
          {
            id: 2,
            name: "Homme",
          },
          {
            id: 3,
            name: "Enfant",
          },
          {
            id: 4,
            name: "Mixte",
          },
        ],
      },
      {
        id: 5,
        name: "Accessoires & Bagagerie",
        subCategories: [
          {
            id: 1,
            name: "Femme",
          },
          {
            id: 2,
            name: "Homme",
          },
          {
            id: 3,
            name: "Enfant",
          },
          {
            id: 4,
            name: "Mixte",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Maison & Jardin",
    icon: <Armchair size={16} />,
    list: [
      {
        id: 1,
        name: "Tout Maison & Jardin",
      },
      {
        id: 2,
        name: "Ameublement",
        subCategories: [
          {
            id: 1,
            name: "Table de salle à manger",
          },
          {
            id: 2,
            name: "Canapé",
          },
          {
            id: 3,
            name: "Chaise, tabouret et banc",
          },
          {
            id: 4,
            name: "Lit",
          },
          {
            id: 5,
            name: "Meuble de cuisine",
          },
          {
            id: 6,
            name: "Fauteuil",
          },
          {
            id: 7,
            name: "Armoire",
          },
          {
            id: 8,
            name: "Buffet",
          },
          {
            id: 9,
            name: "Voir tout",
          },
        ],
      },
      {
        id: 3,
        name: "Electroménager",
        subCategories: [
          {
            id: 1,
            name: "Réfrigérateur",
          },
          {
            id: 2,
            name: "Lave-linge",
          },
          {
            id: 3,
            name: "Lave-vaisselle",
          },
          {
            id: 4,
            name: "Congélateur",
          },
          {
            id: 5,
            name: "Four",
          },
          {
            id: 6,
            name: "Aspirateur",
          },
          {
            id: 7,
            name: "Micro-ondes",
          },
          {
            id: 8,
            name: "Voir tout",
          },
        ],
      },
      {
        id: 4,
        name: "Arts de la table",
        subCategories: [
          {
            id: 1,
            name: "Assiette",
          },
          {
            id: 2,
            name: "Verre",
          },
          {
            id: 3,
            name: "Service de vaisselle",
          },
          {
            id: 4,
            name: "Voir tout",
          },
        ],
      },
      {
        id: 5,
        name: "Décoration",
        subCategories: [
          {
            id: 1,
            name: "Miroir",
          },
          {
            id: 2,
            name: "Tableau et toile",
          },
          {
            id: 3,
            name: "Vase, cache pot et céramique",
          },
          {
            id: 4,
            name: "Sculpture et statue",
          },
          {
            id: 5,
            name: "Tapis",
          },
          {
            id: 6,
            name: "Lustre",
          },
          {
            id: 7,
            name: "Lampe à poser",
          },
          {
            id: 8,
            name: "Horloge, pendule et réveil",
          },
          {
            id: 9,
            name: "Applique",
          },
          {
            id: 10,
            name: "Rideaux, voilage et store",
          },
          {
            id: 11,
            name: "Lampadaire",
          },
          {
            id: 12,
            name: "Suspension",
          },
          {
            id: 13,
            name: "Voir tout",
          },
        ],
      },
      {
        id: 6,
        name: "Linge de maison",
        subCategories: [
          {
            id: 1,
            name: "Linge de lit",
          },
          {
            id: 2,
            name: "Linge de bain",
          },
          {
            id: 3,
            name: "Linge de table",
          },
          {
            id: 4,
            name: "Déco textile",
          },
          {
            id: 5,
            name: "Equipement du lit",
          },
          {
            id: 6,
            name: "Autre",
          },
        ],
      },
      {
        id: 7,
        name: "Bricolage",
      },
      {
        id: 8,
        name: "Jardin & Plantes",
      },
      {
        id: 9,
        name: "Papeterie & Fournitures scolaires",
      },
    ],
  },
  {
    id: 7,
    name: "Famille",
    icon: <Users size={16} />,
    list: [
      {
        id: 1,
        name: "Tout Famille",
      },
      {
        id: 2,
        name: "Vêtements bébé",
        subCategories: [
          {
            id: 1,
            name: "0 mois à 3 mois",
          },
          {
            id: 2,
            name: "3 mois à 6 mois",
          },
          {
            id: 3,
            name: "6 mois à 9 mois",
          },
          {
            id: 4,
            name: "9 mois à 12 mois",
          },
          {
            id: 5,
            name: "12 mois à 18 mois",
          },
          {
            id: 6,
            name: "18 mois à 24 mois",
          },
          {
            id: 7,
            name: "Plus de 24 mois",
          },
        ],
      },
      {
        id: 3,
        name: "Equipement bébé",
        subCategories: [
          {
            id: 1,
            name: "Poussette",
          },
          {
            id: 2,
            name: "Siège auto",
          },
          {
            id: 3,
            name: "Voir tout",
          },
        ],
      },
      {
        id: 4,
        name: "Mobilier enfant",
        subCategories: [
          {
            id: 1,
            name: "Baignoire",
          },
          {
            id: 2,
            name: "Chaise haute",
          },
          {
            id: 3,
            name: "Lit bébé",
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
    id: 8,
    name: "Electronique",
    icon: <Smartphone size={16} />,
    list: [
      {
        id: 1,
        name: "Tout Electronique",
      },
      {
        id: 2,
        name: "Ordinateurs",
      },
      {
        id: 3,
        name: "Accessoires informatique",
      },
      {
        id: 4,
        name: "Tablettes & Liseuses",
      },
      {
        id: 5,
        name: "Photo, audio & vidéo",
        subCategories: [
          {
            id: 1,
            name: "Télévision",
          },
          {
            id: 2,
            name: "Enceintes",
          },
          {
            id: 3,
            name: "Appareil photo et objectifs",
          },
          {
            id: 4,
            name: "Casque",
          },
          {
            id: 5,
            name: "Vidéoprojecteur",
          },
          {
            id: 6,
            name: "Accessoires",
          },
          {
            id: 7,
            name: "Ecouteurs",
          },
          {
            id: 8,
            name: "Voir tout",
          },
        ],
      },
      {
        id: 6,
        name: "Téléphones & Objets connectés",
        subCategories: [
          {
            id: 1,
            name: "Apple",
          },
          {
            id: 2,
            name: "Samsung",
          },
          {
            id: 3,
            name: "Huawei",
          },
          {
            id: 4,
            name: "Sony",
          },
          {
            id: 5,
            name: "One Plus",
          },
          {
            id: 6,
            name: "Google",
          },
          {
            id: 7,
            name: "Voir tout",
          },
        ],
      },
      {
        id: 7,
        name: "Accessoires téléphone & Objets connectés",
      },
      {
        id: 8,
        name: "Consoles",
      },
      {
        id: 9,
        name: "Jeux vidéo",
      },
    ],
  },
  {
    id: 9,
    name: "Loisirs",
    icon: <Bike size={16} />,
    list: [
      {
        id: 1,
        name: "Tout Loisirs",
      },
      {
        id: 2,
        name: "Antiquités",
      },
      {
        id: 3,
        name: "Collection",
      },
      {
        id: 4,
        name: "CD - Musique",
      },
      {
        id: 5,
        name: "DVD - Films",
      },
      {
        id: 6,
        name: "Livres",
      },
      {
        id: 7,
        name: "Modélisme",
      },
      {
        id: 8,
        name: "Instruments de musique",
      },
      {
        id: 9,
        name: "Vins & Gastronomie",
      },
      {
        id: 10,
        name: "Jeux & Jouets",
        subCategories: [
          {
            id: 1,
            name: "Jeux de société",
          },
          {
            id: 2,
            name: "Poupées et accessoires",
          },
          {
            id: 3,
            name: "Porteurs, trotteurs et draisiennes",
          },
          {
            id: 4,
            name: "Jouets d'éveil",
          },
          {
            id: 5,
            name: "Cuisines et dînettes",
          },
          {
            id: 6,
            name: "Jeux de construction",
          },
          {
            id: 7,
            name: "Voitures et circuits",
          },
          {
            id: 8,
            name: "Puzzle",
          },
          {
            id: 9,
            name: "Voir tout",
          },
        ],
      },
      {
        id: 11,
        name: "Loisirs & créatifs",
      },
      {
        id: 12,
        name: "Sport & Plein air",
      },
      {
        id: 13,
        name: "Vélos",
        subCategories: [
          {
            id: 1,
            name: "Vélo de course",
          },
          {
            id: 2,
            name: "VTT",
          },
          {
            id: 3,
            name: "Vélo électrique",
          },
          {
            id: 4,
            name: "Vélo enfant",
          },
          {
            id: 5,
            name: "VTC",
          },
          {
            id: 6,
            name: "Vélo de ville",
          },
          {
            id: 7,
            name: "Voir tout",
          },
        ],
      },
      {
        id: 14,
        name: "Equipements vélos",
      },
    ],
  },
  {
    id: 10,
    name: "Autres",
    icon: <GripHorizontal size={16} />,
    list: [
      {
        id: 1,
        name: "Matériel professionnel",
        subCategories: [
          {
            id: 1,
            name: "Tracteurs",
          },
          {
            id: 2,
            name: "Matériel agricole",
          },
          {
            id: 3,
            name: "BTP - Chantier gros-oeuvre",
          },
          {
            id: 4,
            name: "Poids lourds",
          },
          {
            id: 5,
            name: "Manutention - Levage",
          },
          {
            id: 6,
            name: "Equipements industriels",
          },
          {
            id: 7,
            name: "Equipements pour restaurants & hôtels",
          },
          {
            id: 8,
            name: "Equipements & Fournitures de bureau",
          },
          {
            id: 9,
            name: "Equipements pour commerces & marchés",
          },
          {
            id: 10,
            name: "Matériel médical",
          },
          {
            id: 11,
            name: "Matériel professionel",
          },
        ],
      },
      {
        id: 2,
        name: "Services",
        subCategories: [
          {
            id: 1,
            name: "Services de déménagement",
          },
          {
            id: 2,
            name: "Services de réparations mécaniques",
          },
          {
            id: 3,
            name: "Service de jardinerie & bricolage",
          },
          {
            id: 4,
            name: "Services à la personne",
          },
          {
            id: 5,
            name: "Services aux animaux",
          },
          {
            id: 6,
            name: "Baby-sitting",
          },
          {
            id: 7,
            name: "Artistes & Musiciens",
          },
          {
            id: 8,
            name: "Services évènementiels",
          },
          {
            id: 9,
            name: "Services de réparations électroniques",
          },
          {
            id: 10,
            name: "Entraide entre voisins",
          },
          {
            id: 11,
            name: "Billeterie",
          },
          {
            id: 12,
            name: "Evènements",
          },
          {
            id: 13,
            name: "Covoiturage",
          },
          {
            id: 14,
            name: "Cours particuliers",
          },
          {
            id: 15,
            name: "Autres services",
          },
        ],
      },
      {
        id: 3,
        name: "Animaux",
        subCategories: [
          {
            id: 1,
            name: "Animaux",
          },
          {
            id: 2,
            name: "Accessoires animaux",
          },
          {
            id: 3,
            name: "Animaux perdus",
          },
        ],
      },
      {
        id: 4,
        name: "Autres",
      },
    ],
  },
];
