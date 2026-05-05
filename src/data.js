export const sportsData = {
  soccer_h: {
    categorie: "soccerHommes",
    slug: "soccer-homme",
    lienInscriptionEquipe:"https://docs.google.com/forms/d/e/1FAIpQLSeKssMyz6YTZtaXliDHH1vGWpy-VNpkxtXMZ9KYaqOIR9o8jQ/viewform?",
    lienInscriptionIndividuelle:"https://docs.google.com/forms/d/e/1FAIpQLSdPU8TNFat0hiTM6pgyZiEYopx7pL5oyztgBKL7VBJ3kHXTfA/viewform?",
    sections: [
      { nom: "type", texteFR: "Compétition", texteEN: "Competition" },
      {
        nom: "format",
        texteFR: "11 vs 11",
        texteEN: "11 vs 11",
        lien: { url: "reglement", texteFR: "reglements", texteEN: "regulations" },
      },
      {
        nom: "anneeNaissance",
        texteFR: "Ouvert",
        texteEN: "Open",
      },
      {
        nom: "frais",
        texteFR: "50$ par personne (Caution équipe: 100$)",
        texteEN: "$50 per person (Team deposit: $100)",
      },
      {
        nom: "conditions",
        texteFR: "Minimum 14 joueurs - Maximum 22 joueurs dans l'équipe",
        texteEN: "Minimum 14 players - Maximum 22 players on the team",
      },
      {
        nom: "terrain",
        texteFR: "Naturel (éliminatoires) et synthétique (Finale)",
        texteEN: "Natural (elimination rounds) and synthetic (final)",
      },
    ],
    equipes: [
      { nom: "ASC Zato", lienForm: "https://google.com" },
    ],
  },

  soccer_v: {
    categorie: "soccerVeterans",
    slug: "soccer-veteran",
    lienInscriptionEquipe:"https://docs.google.com/forms/d/e/1FAIpQLSeKssMyz6YTZtaXliDHH1vGWpy-VNpkxtXMZ9KYaqOIR9o8jQ/viewform?",
    lienInscriptionIndividuelle:"https://docs.google.com/forms/d/e/1FAIpQLSdPU8TNFat0hiTM6pgyZiEYopx7pL5oyztgBKL7VBJ3kHXTfA/viewform?",
    sections: [
      { nom: "type", texteFR: "Compétition", texteEN: "Competition" },
      {
        nom: "format",
        texteFR: "9vs9, sans hors-jeux",
        texteEN: "9v9, no offsides",
        lien: { url: "reglement", texteFR: "reglements", texteEN: "regulations" },
      },
      {
        nom: "anneeNaissance",
        texteFR: "Né en 1986 ou avant",
        texteEN: "Born in 1986 or earlier",
      },
      {
        nom: "frais",
        texteFR: "50$/personne (Caution de 100$/equipe retourne apres RSM)",
        texteEN: "$50/person (Deposit of $100/team returned after RSM)",
      },
      {
        nom: "conditions",
        texteFR: "Maximum 15 joueurs dans l'équipe",
        texteEN: "Maximum 15 players on the team",
      },
      {
        nom: "terrain",
        texteFR: "Terrain Naturel (Moitie) et synthetique (Moitie)",
        texteEN: "Natural grass (Half) and synthetic grass (Half)",
      },
    ],
    equipes: [
      { nom: "ASC Zato", lienForm: "https://google.com" },
    ],
  },
  
  soccer_m: {
    categorie: "soccerMixe",
    slug: "soccer-mixe",
    lienInscriptionEquipe:"https://docs.google.com/forms/d/e/1FAIpQLSeKssMyz6YTZtaXliDHH1vGWpy-VNpkxtXMZ9KYaqOIR9o8jQ/viewform?",
    lienInscriptionIndividuelle:"https://docs.google.com/forms/d/e/1FAIpQLSdPU8TNFat0hiTM6pgyZiEYopx7pL5oyztgBKL7VBJ3kHXTfA/viewform?",
    sections: [
      { nom: "type", texteFR: "Compétition", texteEN: "Competition" },
      {
        nom: "format",
        texteFR: "9vs9, sans hors-jeux",
        texteEN: "9v9, no offsides",
        lien: { url: "reglement", texteFR: "reglements", texteEN: "regulations" },
      },
      {
        nom: "anneeNaissance",
        texteFR: "Garcons(2011+) et Files(ouvert)",
        texteEN: "Boys (2011+) and Girls (open)",
      },
      {
        nom: "frais",
        texteFR: "30$/personne (Caution de 50$/equipe retourne apres RSM)",
        texteEN: "$30/person (Deposit of $50/team returned after RSM)",
      },
      {
        nom: "conditions",
        texteFR: "Maximum 15 joueurs dans l'équipe",
        texteEN: "Maximum 15 players on the team",
      },
      {
        nom: "terrain",
        texteFR: "Terrain Naturel (Moitie) et synthetique (Moitie)",
        texteEN: "Natural grass (Half) and synthetic grass (Half)",
      },
    ],
    equipes: [
      { nom: "ASC Zato", lienForm: "https://google.com" },
    ],
  },

  soccer_k: {
    categorie: "soccerKids",
    slug: "soccer-kids",
    lienInscriptionEquipe:"https://docs.google.com/forms/d/e/1FAIpQLSeKssMyz6YTZtaXliDHH1vGWpy-VNpkxtXMZ9KYaqOIR9o8jQ/viewform?",
    lienInscriptionIndividuelle:"https://docs.google.com/forms/d/e/1FAIpQLSdPU8TNFat0hiTM6pgyZiEYopx7pL5oyztgBKL7VBJ3kHXTfA/viewform?",
    sections: [
      { nom: "type", texteFR: "Compétition", texteEN: "Competition" },
      {
        nom: "format",
        texteFR: "7vs7, sans hors-jeux",
        texteEN: "7v7, no offsides",
        lien: { url: "reglement", texteFR: "reglements", texteEN: "regulations" },
      },
      {
        nom: "anneeNaissance",
        texteFR: "Né(e) entre 2013 et 2017",
        texteEN: "Born between 2013 and 2017",
      },
      {
        nom: "frais",
        texteFR: "Gratuit ",
        texteEN: "Free",
      },
      {
        nom: "conditions",
        texteFR: "Mixte et minimum de 2 filles sur le terrain en tout temps.",
        texteEN: "Mixed and a minimum of 2 girls on the field at all times.",
      },
      {
        nom: "terrain",
        texteFR: "Terrain Naturel  et synthetique",
        texteEN: "Natural and synthetic grass",
      },
    ],
    equipes: [
      { nom: "ASC Zato", lienForm: "https://google.com" },
    ],
  },

  basketball_f: {
    categorie: "basketballFemmes",
    slug: "basketball-femme",
    lienInscriptionEquipe:"https://docs.google.com/forms/d/e/1FAIpQLSeKssMyz6YTZtaXliDHH1vGWpy-VNpkxtXMZ9KYaqOIR9o8jQ/viewform?",
    lienInscriptionIndividuelle:"https://docs.google.com/forms/d/e/1FAIpQLSdPU8TNFat0hiTM6pgyZiEYopx7pL5oyztgBKL7VBJ3kHXTfA/viewform?",
    sections: [
      { nom: "type", texteFR: "Compétition", texteEN: "Competition" },
      {
        nom: "format",
        texteFR: "5 vs 5",
        texteEN: "5 vs 5",
        lien: { url: "reglement", texteFR: "reglements", texteEN: "regulations" },
      },
      {
        nom: "anneeNaissance",
        texteFR: "Ouvert",
        texteEN: "Open",
      },
      {
        nom: "frais",
        texteFR: "50$ par personne (Caution équipe: 100$)",
        texteEN: "$50 per person (Team deposit: $100)",
      },
      {
        nom: "conditions",
        texteFR: "(Minimum 8 joueurs - Maximum 15 joueurs) dans l'équipe",
        texteEN: "(Minimum 8 players - Maximum 15 players) in the team",
      },
      {
        nom: "terrain",
        texteFR: "Gymnase interieur",
        texteEN: "Indoor gymnasium",
      },
    ],
    equipes: [
      { nom: "ASC Zato", lienForm: "https://google.com" },
    ],
  },

  basketball_h: {
    categorie: "basketballHommes",
    slug: "basketball-femmes",
    lienInscriptionEquipe:"https://docs.google.com/forms/d/e/1FAIpQLSeKssMyz6YTZtaXliDHH1vGWpy-VNpkxtXMZ9KYaqOIR9o8jQ/viewform?",
    lienInscriptionIndividuelle:"https://docs.google.com/forms/d/e/1FAIpQLSdPU8TNFat0hiTM6pgyZiEYopx7pL5oyztgBKL7VBJ3kHXTfA/viewform?",
    sections: [
      { nom: "type", texteFR: "Compétition", texteEN: "Competition" },
      {
        nom: "format",
        texteFR: "5 vs 5",
        texteEN: "5 vs 5",
        lien: { url: "reglement", texteFR: "reglements", texteEN: "regulations" },
      },
      {
        nom: "anneeNaissance",
        texteFR: "Ouvert",
        texteEN: "Open",
      },
      {
        nom: "frais",
        texteFR: "50$ par personne (Caution équipe: 100$) ",
        texteEN: "$50 per person (Team deposit: $100)",
      },
      {
        nom: "conditions",
        texteFR: "(Minimum 8 joueurs - Maximum 15 joueurs) dans l'équipe",
        texteEN: "(Minimum 8 players - Maximum 15 players) in the team",
      },
      {
        nom: "terrain",
        texteFR: "Gymnase interieur",
        texteEN: "Indoor gymnasium",
      },
    ],
    equipes: [
      { nom: "ASC Zato", lienForm: "https://google.com" },
    ],
  },

  basketball_j: {
    categorie: "basketballJunior",
    slug: "basketball-junior",
    lienInscriptionEquipe:"https://docs.google.com/forms/d/e/1FAIpQLSeKssMyz6YTZtaXliDHH1vGWpy-VNpkxtXMZ9KYaqOIR9o8jQ/viewform?",
    lienInscriptionIndividuelle:"https://docs.google.com/forms/d/e/1FAIpQLSdPU8TNFat0hiTM6pgyZiEYopx7pL5oyztgBKL7VBJ3kHXTfA/viewform?",
    sections: [
      { nom: "type", texteFR: "Compétition", texteEN: "Competition" },
      {
        nom: "format",
        texteFR: "5 vs 5",
        texteEN: "5 vs 5",
        lien: { url: "reglement", texteFR: "reglements", texteEN: "regulations" },
      },
      {
        nom: "anneeNaissance",
        texteFR: " 2011+",
        texteEN: " 2011+",
      },
      {
        nom: "frais",
        texteFR: "50$ par personne (Caution équipe: 100$)",
        texteEN: "$50 per person (Team deposit: $100)",
      },
      {
        nom: "conditions",
        texteFR: "Maximum 15 joueurs.  ",
        texteEN: "Maximum 15 players.",
      },
      {
        nom: "terrain",
        texteFR: "Gymnase interieur",
        texteEN: "Indoor gymnasium",
      },
    ],
    equipes: [
      { nom: "ASC Zato", lienForm: "https://google.com" },
    ],
  },

  basketball_k: {
    categorie: "basketballKids",
    slug: "basketball-kids",
    lienInscriptionEquipe:"https://docs.google.com/forms/d/e/1FAIpQLSeKssMyz6YTZtaXliDHH1vGWpy-VNpkxtXMZ9KYaqOIR9o8jQ/viewform?",
    lienInscriptionIndividuelle:"https://docs.google.com/forms/d/e/1FAIpQLSdPU8TNFat0hiTM6pgyZiEYopx7pL5oyztgBKL7VBJ3kHXTfA/viewform?",
    sections: [
      { nom: "type", texteFR: "Mini-tournoi", texteEN: "Mini-tournament" },
      {
        nom: "format",
        texteFR: "5 vs 5",
        texteEN: "5 vs 5",
        lien: { url: "reglement", texteFR: "reglements", texteEN: "regulations" },
      },
      {
        nom: "anneeNaissance",
        texteFR: " 2011+",
        texteEN: " 2011+",
      },
      {
        nom: "frais",
        texteFR: "Gratuit",
        texteEN: "Free",
      },
      {
        nom: "conditions",
        texteFR: "Mixte",
        texteEN: "Mixt",
      },
      {
        nom: "terrain",
        texteFR: "Gymnase interieur",
        texteEN: "Indoor gymnasium",
      },
    ],
    equipes: [
      { nom: "ASC Zato", lienForm: "https://google.com" },
    ],
  },

  volleyball_f: {
    categorie: "volleyballFemmes",
    slug: "volleyball-femme",
    lienInscriptionEquipe:"https://docs.google.com/forms/d/e/1FAIpQLSeKssMyz6YTZtaXliDHH1vGWpy-VNpkxtXMZ9KYaqOIR9o8jQ/viewform?",
    lienInscriptionIndividuelle:"https://docs.google.com/forms/d/e/1FAIpQLSdPU8TNFat0hiTM6pgyZiEYopx7pL5oyztgBKL7VBJ3kHXTfA/viewform?",
    sections: [
      { nom: "type", texteFR: "Compétition", texteEN: "Competition" },
      {
        nom: "format",
        texteFR: "6 vs 6",
        texteEN: "6 vs 6",
        lien: { url: "reglement", texteFR: "reglements", texteEN: "regulations" },
      },
      {
        nom: "anneeNaissance",
        texteFR: "Ouvert",
        texteEN: "Open",
      },
      {
        nom: "frais",
        texteFR: "50$ par personne (Caution équipe: 100$)",
        texteEN: "$50 per person (Team deposit: $100)",
      },
      {
        nom: "conditions",
        texteFR: "(Minimum 7 joueurs - Maximum 12 joueurs) dans l'équipe",
        texteEN: "(Minimum 7 players - Maximum 12 players) in the team",
      },
      {
        nom: "terrain",
        texteFR: "Gymnase interieur",
        texteEN: "Indoor gymnasium",
      },
    ],
    equipes: [
      { nom: "ASC Zato", lienForm: "https://google.com" },
    ],
  },

  volleyball_h: {
    categorie: "volleyballHommes",
    slug: "volleyball-homme",
    lienInscriptionEquipe:"https://docs.google.com/forms/d/e/1FAIpQLSeKssMyz6YTZtaXliDHH1vGWpy-VNpkxtXMZ9KYaqOIR9o8jQ/viewform?",
    lienInscriptionIndividuelle:"https://docs.google.com/forms/d/e/1FAIpQLSdPU8TNFat0hiTM6pgyZiEYopx7pL5oyztgBKL7VBJ3kHXTfA/viewform?",
    sections: [
      { nom: "type", texteFR: "Compétition", texteEN: "Competition" },
      {
        nom: "format",
        texteFR: "6 vs 6",
        texteEN: "6 vs 6",
        lien: { url: "reglement", texteFR: "reglements", texteEN: "regulations" },
      },
      {
        nom: "anneeNaissance",
        texteFR: "Ouvert",
        texteEN: "Open",
      },
      {
        nom: "frais",
        texteFR: "50$ par personne (Caution équipe: 100$)",
        texteEN: "$50 per person (Team deposit: $100)",
      },
      {
        nom: "conditions",
        texteFR: "(Minimum 7 joueurs - Maximum 12 joueurs) dans l'équipe",
        texteEN: "(Minimum 7 players - Maximum 12 players) in the team",
      },
      {
        nom: "terrain",
        texteFR: "Gymnase interieur",
        texteEN: "Indoor gymnasium",
      },
    ],
    equipes: [
      { nom: "ASC Zato", lienForm: "https://google.com" },
    ],
  },

  tennis: {
    categorie: "tennis",
    slug: "tennis",
    lienInscriptionEquipe:"https://docs.google.com/forms/d/e/1FAIpQLSeKssMyz6YTZtaXliDHH1vGWpy-VNpkxtXMZ9KYaqOIR9o8jQ/viewform?",
    lienInscriptionIndividuelle:"https://docs.google.com/forms/d/e/1FAIpQLSdPU8TNFat0hiTM6pgyZiEYopx7pL5oyztgBKL7VBJ3kHXTfA/viewform?",
    sections: [
      { nom: "type", texteFR: "Compétition", texteEN: "Competition" },
      {
        nom: "format",
        texteFR: "1 vs 1",
        texteEN: "1 vs 1",
        lien: { url: "reglement", texteFR: "reglements", texteEN: "regulations" },
      },
      {
        nom: "anneeNaissance",
        texteFR: "Ouvert",
        texteEN: "Open",
      },
      {
        nom: "frais",
        texteFR: "50$ par personne (Caution : 100$)",
        texteEN: "$50 per person (Deposit: $100)",
      },
      {
        nom: "conditions",
        texteFR: "",
        texteEN: "",
      },
      {
        nom: "terrain",
        texteFR: "Surface acrylique",
        texteEN: "Acrylic surface",
      },
    ],
    equipes: [
      { nom: "ASC Zato", lienForm: "https://google.com" },
    ],
  },

  petanque: {
    categorie: "petanque",
    slug: "petanque",
    lienInscriptionEquipe:"https://docs.google.com/forms/d/e/1FAIpQLSeKssMyz6YTZtaXliDHH1vGWpy-VNpkxtXMZ9KYaqOIR9o8jQ/viewform?",
    lienInscriptionIndividuelle:"https://docs.google.com/forms/d/e/1FAIpQLSdPU8TNFat0hiTM6pgyZiEYopx7pL5oyztgBKL7VBJ3kHXTfA/viewform?",
    sections: [
      { nom: "type", texteFR: "Compétition", texteEN: "Competition" },
      {
        nom: "format",
        texteFR: "Triplette",
        texteEN: "Triplet",
        lien: { url: "reglement", texteFR: "reglements", texteEN: "regulations" },
      },
      {
        nom: "anneeNaissance",
        texteFR: "Ouvert",
        texteEN: "Open",
      },
      {
        nom: "frais",
        texteFR: "40$/personne (Caution de 50$/equipe retourne apres RSM)",
        texteEN: "$40/person (Deposit of $50/team returned after RSM)",
      },
      {
        nom: "conditions",
        texteFR: "Maximum 4 joueurs dans l'équipe (Minimum 2 joueurs pendant le jeu mais avec penalite - voir reglements)",
        texteEN: "Maximum 4 players in the team (Minimum 2 players during the game but with a penalty - see rules)",
      },
      {
        nom: "terrain",
        texteFR: "Gravier fin",
        texteEN: "Fine gravel",
      },
    ],
    equipes: [
      { nom: "ASC Zato", lienForm: "https://google.com" },
    ],
  },

  soraTononina: {
    categorie: "soraTononina",
    slug: "sora-tononina",
    lienInscriptionEquipe:"https://docs.google.com/forms/d/e/1FAIpQLSeKssMyz6YTZtaXliDHH1vGWpy-VNpkxtXMZ9KYaqOIR9o8jQ/viewform?",
    lienInscriptionIndividuelle:"https://docs.google.com/forms/d/e/1FAIpQLSdPU8TNFat0hiTM6pgyZiEYopx7pL5oyztgBKL7VBJ3kHXTfA/viewform?",
    sections: [
      {
        nom: "format",
        texteFR: "",
        texteEN: "",
        lien: { url: "reglement", texteFR: "reglements", texteEN: "regulations" },
      },
      {
        nom: "frais",
        texteFR: "",
        texteEN: "",
      },
      {
        nom: "conditions",
        texteFR: "",
        texteEN: "",
      }
    ],
    equipes: [
      { nom: "ASC Zato", lienForm: "https://google.com" },
    ],
  },
};
