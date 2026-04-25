export const sportsData = {
  soccer_h: {
    categorie: "Soccer Homme",
    slug: "soccer-homme",
    lienInscriptionEquipe: "https://google.com", // lien formulaire d insciption
    lienHoraires: "https://google.com", // lien calendrier
    sections: [
      { nom: "Type", texte: "Compétition" },
      { nom: "Format", texte: "11 vs 11" },
      {
        nom: "Âge",
        texte: "Open",
      },
      {
        nom: "Frais",
        texte: "800$ par équipe, 40$ par personne",
      },
      { nom: "Conditions", texte: "Maximum 20 joueurs dans l'équipe" }, // lien JOM
      {
        nom: "Terrain(s)",
        texte: "Naturel (éliminatoires) et synthétique (Finale)",
      },
    ],
    equipes: [
      { nom: "ASC Zato", lienForm: "https://google.com" }, // lien liste de joueurs
      { nom: "Barea", lienForm: "https://google.com" },
    ],
  },

  soccer_v: {
    categorie: "Soccer Vétéran",
    slug: "soccer-veteran",
    lienInscriptionEquipe: "https://google.com", // lien formulaire d insciption
    lienInscriptionIndividuelle: "https://google.com", // lien formulaire d insciption
    lienHoraires: "https://google.com", // lien calendrier
    sections: [
      { nom: "Type", texte: "Compétition" },
      { nom: "Format", texte: "9 vs 9" },
      {
        nom: "Âge",
        texte: "Né(e) en 1986 ou avant",
      },
      {
        nom: "Frais",
        texte: "800$ par équipe, 40$ par personne",
      },
      { nom: "Conditions", texte: "Maximum 15 joueurs dans l'équipe" }, // lien JOM
      {
        nom: "Terrain(s)",
        texte: "Naturel (éliminatoires) et synthétique (Finale)",
      },
    ],
    equipes: [
      { nom: "Nostalgia", lienForm: "https://google.com" }, // lien liste de joueurs
      { nom: "Old Timers", lienForm: "https://google.com" },
    ],
  },

  soraTononina: {
    categorie: "Sora-Tononina",
    slug: "sora-tononina",
    lienInscription: "https://google.com", // lien formulaire d insciption
    lienHoraires: "https://google.com", // lien calendrier
    sections: [
      { nom: "Thème", texte: "La nature" },
      { nom: "Date Limite", texte: "12 Mai 2024" },
      { nom: "Règlement complet", lien: "https://lien-reglement.com" },
    ],
    equipes: [{ nom: "Michael B. Jordan" }, { nom: "Timothee Chalamet" }],
  },
};
