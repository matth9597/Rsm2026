export const sportsData = {
  soccer_h: {
    categorie: "Soccer Hommes",
    slug: "soccer-homme",
    lienInscriptionEquipe:
      "https://docs.google.com/forms/d/e/1FAIpQLSeKssMyz6YTZtaXliDHH1vGWpy-VNpkxtXMZ9KYaqOIR9o8jQ/viewform?usp=dialog", // lien formulaire d insciption
    lienHoraires: "https://google.com", // lien calendrier
    sections: [
      { nom: "Type", texte: "Compétition" },
      {
        nom: "Format",
        texte: "11 vs 11",
        lien: { url: "reglements-soccer-h", texte: "Règlements" },
      },
      {
        nom: "Âge",
        texte: "Open",
      },
      {
        nom: "Frais",
        texte: "800$ par équipe, 40$ par personne",
      },
      {
        nom: "Conditions",
        texte: "Maximum 20 joueurs dans l'équipe",
        lien: { url: "lien-JOM", texte: "Conditions JOM" },
      }, // lien JOM
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
    categorie: "Soccer Vétérans",
    slug: "soccer-veteran",
    lienInscriptionEquipe:
      "https://docs.google.com/forms/d/e/1FAIpQLSfCO0faR6qc4D8oXjFg1skXPQOsAQco-yCdpcYjryBAoiLsZg/viewform?usp=dialog", // lien formulaire d insciption
    lienInscriptionIndividuelle:
      "https://docs.google.com/forms/d/e/1FAIpQLSdPU8TNFat0hiTM6pgyZiEYopx7pL5oyztgBKL7VBJ3kHXTfA/viewform?usp=dialog", // lien formulaire d insciption
    lienHoraires: "https://google.com", // lien calendrier
    sections: [
      { nom: "Type", texte: "Compétition" },
      {
        nom: "Format",
        texte: "9 vs 9 sans hors-jeux",
        lien: { url: "reglements-soccer-v", texte: "Règlements" },
      },
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

  basketball_f: {
    categorie: "Basketball Femmes",
    slug: "basketball-femmes",
    lienInscriptionEquipe: "https://google.com", // lien formulaire d insciption
    lienHoraires: "https://google.com", // lien calendrier
    sections: [
      { nom: "Type", texte: "Compétition" },
      {
        nom: "Format",
        texte: "5 vs 5",
        lien: { url: "reglements-basket-f", texte: "Règlements" },
      },
      {
        nom: "Âge",
        texte: "Open",
      },
      {
        nom: "Frais",
        texte: "600$ par équipe",
      },
      {
        nom: "Conditions",
        texte:
          "Maximum 15 joueurs dans l'équipe. Maximum 12 joueurs sur la feuille de match.",
      }, // lien JOM
      {
        nom: "Terrain(s)",
        texte: "Gymnase Intérieur",
      },
    ],
    equipes: [
      { nom: "Zato", lienForm: "https://google.com" }, // lien liste de joueurs
      { nom: "GasyKebs", lienForm: "https://google.com" },
    ],
  },

  basketball_h: {
    categorie: "Basketball Hommes",
    slug: "basketball-femmes",
    lienInscriptionEquipe: "https://google.com", // lien formulaire d insciption
    lienHoraires: "https://google.com", // lien calendrier
    sections: [
      { nom: "Type", texte: "Compétition" },
      {
        nom: "Format",
        texte: "5 vs 5",
        lien: { url: "reglements-basket-h", texte: "Règlements" },
      },
      {
        nom: "Âge",
        texte: "Open",
      },
      {
        nom: "Frais",
        texte: "600$ par équipe",
      },
      {
        nom: "Conditions",
        texte:
          "Maximum 15 joueurs dans l'équipe. Maximum 12 joueurs sur la feuille de match.",
      }, // lien JOM
      {
        nom: "Terrain(s)",
        texte: "Gymnase Intérieur",
      },
    ],
    equipes: [
      { nom: "Zato", lienForm: "https://google.com" }, // lien liste de joueurs
      { nom: "GasyKebs", lienForm: "https://google.com" },
    ],
  },

  basketball_j: {
    categorie: "Basketball Junior",
    slug: "basketball-junior",
    lienInscriptionEquipe: "https://google.com", // lien formulaire d insciption
    lienInscriptionIndividuelle: "https://google.com",
    lienHoraires: "https://google.com", // lien calendrier
    sections: [
      { nom: "Type", texte: "Compétition" },
      {
        nom: "Format",
        texte: "5 vs 5 mixte Garçons/Filles",
        lien: { url: "reglements-basket-h", texte: "Règlements" },
      },
      {
        nom: "Âge",
        texte: "202...",
      },
      {
        nom: "Frais",
        texte: "240$ par équipe ou 20$ par personne",
      },
      {
        nom: "Conditions",
        texte:
          "Maximum 15 joueurs dans l'équipe. Maximum 12 joueurs sur la feuille de match.",
      }, // lien JOM
      {
        nom: "Terrain(s)",
        texte: "Gymnase Intérieur",
      },
    ],
    equipes: [
      { nom: "Zato", lienForm: "https://google.com" }, // lien liste de joueurs
      { nom: "GasyKebs", lienForm: "https://google.com" },
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
