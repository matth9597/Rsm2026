export const calendarData = {
  version: "19 Juin 2026 - 12h30am",
  
  sites: {
    all: { nom: "Tous les sites" },
    montBleu: { nom: "École Secondaire Mont-Bleu", adresse: "389 Boulevard de la Cité-des-Jeunes, Gatineau, Quebec J8Z 1W6" },
    cegepOutaouais: { nom: "Cégep de l'Outaouais", adresse: "333 Boulevard de la Cité-des-Jeunes, Gatineau, Quebec J8Y 6L5" },
    cegepHeritage: { nom: "Cégep Heritage", adresse: "325 Boulevard de la Cité-des-Jeunes, Gatineau, Quebec J8Y 6T3" },
    nouvellesFrontieres: { nom: "Collège Nouvelle Frontières", adresse: "250 Rue Gamelin, Gatineau, QC J8Y 1W9" },
    parcBisson: { nom: "Parc Bisson", adresse: "Rue Froment, Gatineau, QC J8Y 6G2" }
  },

  programme: {
   "vendredi": {
      "16:30": [
        { site: "cegepHeritage", terrain: "Gym\\Terrain 1", activite: "basketballHommes", fin: "20:00" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 2", activite: "basketballHommes", fin: "20:00" }
      ],
      "17:00": [
        { site: "cegepHeritage", terrain: "Studio", activite: "tennisDeTable", fin: "19:30" }
      ],
      "18:30": [
        { site: "cegepOutaouais", terrain: "Gym 1", activite: "basketballHommes", fin: "22:00" },
        { site: "cegepOutaouais", terrain: "Gym 2", activite: "basketballHommes", fin: "22:00" }
      ]
    },

    "samedi": {
      "08:00": [
        { site: "montBleu", terrain: "Gym 1", activite: "ceremonieOuverture", fin: "10:00" }
      ],
      "10:00": [
        { site: "montBleu", terrain: "Gym 1", activite: "volleyballFemmes", fin: "13:30" },
        { site: "montBleu", terrain: "Gym 2", activite: "volleyballFemmes", fin: "13:30" },
        { site: "nouvellesFrontieres", terrain: "Gym 1", activite: "basketballFemmes", fin: "13:30" },
        { site: "nouvellesFrontieres", terrain: "Gym 2", activite: "basketballFemmes", fin: "13:30" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 1", activite: "volleyballHommes", fin: "13:30" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 2", activite: "volleyballHommes", fin: "13:30" },
        { site: "montBleu", terrain: "Terrain Nat 1", activite: "soccerHommes", fin: "16:30" },
        { site: "montBleu", terrain: "Terrain Nat 2", activite: "soccerHommes", fin: "16:30" },
        { site: "montBleu", terrain: "Relais Plein-air", activite: "marche5Km", fin: "14:30" },
        { site: "cegepHeritage", terrain: "1/2 Nat 1", activite: "soccerKids", fin: "12:00" },
        { site: "cegepHeritage", terrain: "1/2 Nat 2", activite: "soccerMixte", fin: "12:00" },
        { site: "cegepOutaouais", terrain: "Stationnement 7A", activite: "petanqueClassement1", fin: "11:30" },
        { site: "parcBisson", terrain: "Terrain de Tennis", activite: "tennisSimple", fin: "19:30" }
      ],
      "10:30": [
        { site: "cegepHeritage", terrain: "Studio", activite: "tennisDeTable", fin: "19:30" }
      ],
      "11:00": [
        { site: "cegepHeritage", terrain: "Classroom", activite: "soratononina", fin: "19:30" }
      ],
      "11:30": [
        { site: "cegepOutaouais", terrain: "Stationnement 7A", activite: "petanqueClassement2", fin: "12:30" }
      ],
      "12:30": [
        { site: "cegepOutaouais", terrain: "Stationnement 7A", activite: "petanqueClassement3", fin: "14:00" }
      ],
      "13:30": [
        { site: "cegepOutaouais", terrain: "Gym 1", activite: "basketballHommes", fin: "17:00" },
        { site: "cegepOutaouais", terrain: "Gym 2", activite: "basketballHommes", fin: "17:00" },
        { site: "montBleu", terrain: "Gym 1", activite: "basketballHommes", fin: "17:00" },
        { site: "montBleu", terrain: "Gym 2", activite: "basketballHommes", fin: "17:00" },
        { site: "nouvellesFrontieres", terrain: "Gym 1", activite: "basketballHommes", fin: "17:00" },
        { site: "nouvellesFrontieres", terrain: "Gym 2", activite: "basketballHommes", fin: "17:00" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 1", activite: "basketballHommes", fin: "17:00" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 2", activite: "basketballHommes", fin: "17:00" }
      ],
      "14:00": [
        { site: "cegepOutaouais", terrain: "Stationnement 7A", activite: "petanqueQuart", fin: "15:30" }
      ],
      "14:30": [
        { site: "cegepHeritage", terrain: "1/2 Nat 1", activite: "soccerVeterans", fin: "19:30" },
        { site: "cegepHeritage", terrain: "1/2 Nat 2", activite: "soccerVeterans", fin: "19:30" }
      ],
      "15:30": [
        { site: "cegepOutaouais", terrain: "Stationnement 7A", activite: "petanqueDemi", fin: "17:00" }
      ],
      "17:00": [
        { site: "cegepOutaouais", terrain: "Gym 1", activite: "basketballJunior", fin: "18:00" },
        { site: "cegepOutaouais", terrain: "Gym 2", activite: "basketballKids", fin: "18:00" },
        { site: "montBleu", terrain: "Gym 1", activite: "defileMode", fin: "17:30" },
        { site: "nouvellesFrontieres", terrain: "Gym 1", activite: "zumba", fin: "17:30" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 1", activite: "kata", fin: "17:30" },
        { site: "montBleu", terrain: "Terrain Nat 1", activite: "soccerHommes", fin: "17:30" }
      ],
      "17:30": [
        { site: "montBleu", terrain: "Gym 1", activite: "volleyballFemmes", fin: "19:30" },
        { site: "montBleu", terrain: "Gym 2", activite: "volleyballFemmes", fin: "19:30" },
        { site: "nouvellesFrontieres", terrain: "Gym 1", activite: "basketFemmeSemi1", fin: "19:00" },
        { site: "nouvellesFrontieres", terrain: "Gym 2", activite: "basketFemmeSemi2", fin: "19:00" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 1", activite: "volleyHommeSemi1", fin: "19:00" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 2", activite: "volleyHommeSemi2", fin: "19:00" }
      ],
      "18:00": [
        { site: "cegepOutaouais", terrain: "Gym 1", activite: "basketHommeQuart1", fin: "19:30" },
        { site: "cegepOutaouais", terrain: "Gym 2", activite: "basketHommeQuart2", fin: "19:30" },
        { site: "montBleu", terrain: "Terrain Nat 1", activite: "soccerQuart1", fin: "19:30" },
        { site: "montBleu", terrain: "Terrain Nat 2", activite: "soccerQuart2", fin: "19:30" }
      ],
      "19:00": [
        { site: "nouvellesFrontieres", terrain: "Gym 1", activite: "basketFemme5eVs6e", fin: "21:00" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 1", activite: "volleyHomme3ePlace", fin: "21:00" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 2", activite: "volleyHomme5eVs6e", fin: "21:00" }
      ],
      "19:30": [
        { site: "cegepOutaouais", terrain: "Gym 1", activite: "basketHommeQuart3", fin: "21:00" },
        { site: "cegepOutaouais", terrain: "Gym 2", activite: "basketHommeQuart4", fin: "21:00" },
        { site: "montBleu", terrain: "Gym 1", activite: "volleyFemmeSemi1", fin: "21:00" },
        { site: "montBleu", terrain: "Gym 2", activite: "volleyFemmeSemi2", fin: "21:00" },
        { site: "montBleu", terrain: "Terrain Nat 1", activite: "soccerQuart3", fin: "21:00" },
        { site: "montBleu", terrain: "Terrain Nat 2", activite: "soccerQuart4", fin: "21:00" }
      ]
    }

,


    "dimanche": {
      "08:30": [
        { site: "montBleu", terrain: "Gym 1", activite: "basketDemi1", fin: "10:30" },
        { site: "montBleu", terrain: "Gym 2", activite: "basketDemi2", fin: "10:30" }
      ],
      "09:00": [
        { site: "montBleu", terrain: "1/2 Synth 1", activite: "soccerVeteransDemi1", fin: "11:00" }, 
        { site: "montBleu", terrain: "1/2 Synth 2", activite: "soccerVeteransDemi2", fin: "11:00" },
        { site: "parcBisson", terrain: "Terrain de Tennis", activite: "tennisSimple", fin: "11:30" }
      ],
      "10:00": [
        { site: "montBleu", terrain: "Terrain Nat 1", activite: "soccerDemi1", fin: "11:30" },
        { site: "montBleu", terrain: "Terrain Nat 2", activite: "soccerDemi2", fin: "11:30" }
      ],
      "10:30": [
        { site: "montBleu", terrain: "Gym 1", activite: "volleyballFemmesFinale", fin: "12:00" },
        { site: "montBleu", terrain: "Gym 2", activite: "basketballKids", fin: "12:00" }
      ],
      "11:30": [
        { site: "montBleu", terrain: "Terrain Nat 1", activite: "soccer10eVs11e", fin: "15:00" },
        { site: "montBleu", terrain: "Terrain Nat 2", activite: "soccer12eVs13e", fin: "15:00" }
      ],
      "12:00": [
        { site: "montBleu", terrain: "Gym 1", activite: "volleyballHommesFinale", fin: "14:00" },
        { site: "montBleu", terrain: "Gym 2", activite: "basketballJunior", fin: "14:00" }
      ],
      "13:30": [
        { site: "cegepHeritage", terrain: "Studio", activite: "tennisDeTable", fin: "15:30" }
      ],
      "14:00": [
        { site: "montBleu", terrain: "Gym 1", activite: "basketballFemmesFinale", fin: "15:30" }
      ],
      "15:30": [
        { site: "montBleu", terrain: "Gym 1", activite: "basketballHommesFinale", fin: "17:30" },
        { site: "montBleu", terrain: "1/2 Synth 1", activite: "soccerVeteransFinale", fin: "16:30" }, 
        { site: "montBleu", terrain: "1/2 Synth 2", activite: "soccerKidsFinale", fin: "16:30" }
      ],
      "16:30": [
        { site: "montBleu", terrain: "1/2 Synth 1", activite: "soccerFinale", fin: "18:00" } 
      ],
      "17:30": [
        { site: "montBleu", terrain: "Gym 1", activite: "zumba", fin: "18:00" }
      ],
      "19:00": [
        { site: "montBleu", terrain: "Gym 1", activite: "ceremonieCloture", fin: "21:00" }
      ]
    }




  }
};
