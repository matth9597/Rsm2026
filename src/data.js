export const sportsData = {
  soccer_h: {
    categorie: "Soccer Homme",
    slug: "soccer-homme",
    lienInscription: "https://google.com", // lien formulaire d insciption
    lienHoraires: "https://google.com", // lien calendrier
    sections: [
      { nom: "Type", texte: "Compétition" },
      { nom: "Format", texte: "11 vs 11" },
      {
        nom: "Âge",
        texte: "2006, 2005, 2004\n(Et toutes les années précédentes)",
      },
      {
        nom: "Conditions d'inscription",
        texte: "50$ par joueur - Paiement via virement",
      },
      { nom: "Conditions", lien: "https://google.com" }, // lien JOM
    ],
    equipes: [
      { nom: "ASC Zato", lienForm: "https://google.com" }, // lien liste de joueurs
      { nom: "Barea", lienForm: "https://google.com" },
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
