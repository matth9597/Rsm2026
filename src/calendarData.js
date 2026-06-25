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
        { site: "cegepHeritage", terrain: "Pool C — Gym 1", activite: "JOMAKA vs RAVINALA — Table : ZATO Boys Apinga", disciplineId: "basket-homme"  },
        { site: "cegepHeritage", terrain: "Pool C — Gym 1", activite: "ZATO Boys Lefona vs ZATO Boys — Table : JOMAKA", disciplineId: "basket-homme"  },
        { site: "cegepHeritage", terrain: "Pool C — Gym 1", activite: "JOMAKA vs ZATO Boys Lefona — Table : FI.TE.FA CANADA", disciplineId: "basket-homme"  },
        { site: "cegepHeritage", terrain: "Pool C — Gym 1", activite: "ZATO Boys Apinga vs FI.TE.FA CANADA — Table : RAVINALA", disciplineId: "basket-homme"  },

        { site: "cegepHeritage", terrain: "Pool D — Gym 2", activite: "B-mi-1 vs Southwest — Table : Voay", disciplineId: "basket-homme"  },
        { site: "cegepHeritage", terrain: "Pool D — Gym 2", activite: "Voay vs Lôfo — Table : B-mi-1", disciplineId: "basket-homme"  },
        { site: "cegepHeritage", terrain: "Pool D — Gym 2", activite: "B-mi-1 vs Voay — Table : Lôfo", disciplineId: "basket-homme"  },
        { site: "cegepHeritage", terrain: "Pool D — Gym 2", activite: "Lôfo vs Air force — Table : Southwest", disciplineId: "basket-homme"  }
      ],
      "17:00": [
        { site: "cegepHeritage", terrain: "Studio", activite: "tennisDeTable" }
      ],
      "18:30": [
        { site: "cegepOutaouais", terrain: "Pool A — Gym 1", activite: "ZandryKely vs GASLAY — Table : Massalgy blanc", disciplineId: "basket-homme"  },
        { site: "cegepOutaouais", terrain: "Pool A — Gym 1", activite: "Massalgy blanc vs Massalgy bleu — Table : Gassikebs Nord", disciplineId: "basket-homme"  },
        { site: "cegepOutaouais", terrain: "Pool A — Gym 1", activite: "ZandryKely vs Massalgy blanc — Table : Gassikebs Nord", disciplineId: "basket-homme"  },
        { site: "cegepOutaouais", terrain: "Pool A — Gym 1", activite: "Massalgy bleu vs Gassikebs Nord — Table : GASLAY", disciplineId: "basket-homme"  },

        { site: "cegepOutaouais", terrain: "Pool B — Gym 2", activite: "Manal'Azy Squad vs GASSIKEBS WEST — Table : Remenabila", disciplineId: "basket-homme"  },
        { site: "cegepOutaouais", terrain: "Pool B — Gym 2", activite: "GASIX vs Remenabila — Table : Manal'Azy Squad", disciplineId: "basket-homme"  },
        { site: "cegepOutaouais", terrain: "Pool B — Gym 2", activite: "Manal'Azy Squad vs GASIX — Table : GASSIKEBS WEST", disciplineId: "basket-homme"  },
        { site: "cegepOutaouais", terrain: "Pool B — Gym 2", activite: "Remenabila vs MB3R — Table : GASIX", disciplineId: "basket-homme"  }
      ]
    },

    "samedi": {
      "08:00": [
        { site: "montBleu", terrain: "Gym 1", activite: "ceremonieOuverture", fin: "10:00" }
      ],

      "10:00": [
        { site: "montBleu", terrain: "Terrain Nat 1", activite: "FILADELFIA vs Gaslay", disciplineId: "soccer" },
        { site: "montBleu", terrain: "Terrain Nat 1", activite: "Gasy Kebs vs VALIHA FC", disciplineId: "soccer" },
        { site: "montBleu", terrain: "Terrain Nat 1", activite: "FILADELFIA vs FC Renala", disciplineId: "soccer" },
        { site: "montBleu", terrain: "Terrain Nat 1", activite: "TAFARAY City vs Zato", disciplineId: "soccer" },
        { site: "montBleu", terrain: "Terrain Nat 1", activite: "FC Renala vs Viking", disciplineId: "soccer" },
        { site: "montBleu", terrain: "Terrain Nat 1", activite: "Zato vs AS WARRIORS", disciplineId: "soccer" },
        { site: "montBleu", terrain: "Terrain Nat 1", activite: "Tselatra vs G M C", disciplineId: "soccer" },
        { site: "montBleu", terrain: "Terrain Nat 1", activite: "Gaslay vs FC Renala", disciplineId: "soccer" },
        { site: "montBleu", terrain: "Terrain Nat 1", activite: "Quart 1", disciplineId: "soccer" },
        { site: "montBleu", terrain: "Terrain Nat 1", activite: "Quart 3", disciplineId: "soccer" },

        { site: "montBleu", terrain: "Terrain Nat 2", activite: "TAFARAY City vs AS WARRIORS", disciplineId: "soccer" },
        { site: "montBleu", terrain: "Terrain Nat 2", activite: "Tselatra vs Kintana", disciplineId: "soccer" },
        { site: "montBleu", terrain: "Terrain Nat 2", activite: "Gaslay vs Viking", disciplineId: "soccer" },
        { site: "montBleu", terrain: "Terrain Nat 2", activite: "VALIHA FC vs Trois-rivières FC", disciplineId: "soccer" },
        { site: "montBleu", terrain: "Terrain Nat 2", activite: "Kintana vs G M C", disciplineId: "soccer" },
        { site: "montBleu", terrain: "Terrain Nat 2", activite: "Gasy Kebs vs Trois-rivières FC", disciplineId: "soccer" },
        { site: "montBleu", terrain: "Terrain Nat 2", activite: "FILADELFIA vs Viking", disciplineId: "soccer" },
        { site: "montBleu", terrain: "Terrain Nat 2", activite: "Quart 2", disciplineId: "soccer" },
        { site: "montBleu", terrain: "Terrain Nat 2", activite: "Quart 4", disciplineId: "soccer" },

        { site: "cegepHeritage", terrain: "Gym\\Terrain 1", activite: "ATRIKA 2 vs FORMATION — Table : Gassikeb", disciplineId: "volley-femme" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 1", activite: "ATRIKA 2 vs Gassikeb — Table : ZATO SMASHIES", disciplineId: "volley-femme" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 1", activite: "ZATO SMASHIES vs Gassikeb — Table : FORMATION", disciplineId: "volley-femme" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 2", activite: "ATRIKA 1 vs ZATO SMASHIES — Table : Gassikeb", disciplineId: "volley-femme" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 2", activite: "FORMATION vs ATRIKA 1 — Table : ZATO SMASHIES", disciplineId: "volley-femme" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 2", activite: "ATRIKA 2 vs ATRIKA 1 — Table : FORMATION", disciplineId: "volley-femme" },
        { site: "montBleu", terrain: "Gym 1", activite: "Quick Main Libre vs. VKebs — Table : Oye Oye", disciplineId: "volley" },
        { site: "montBleu", terrain: "Gym 1", activite: "VKebs vs. Oye Oye — Table : Quick Main Libre", disciplineId: "volley" },
        { site: "montBleu", terrain: "Gym 1", activite: "Quick Main Libre vs. Oye Oye — Table : VKebs", disciplineId: "volley" },
        { site: "montBleu", terrain: "Gym 2", activite: "Magic BAM vs. Zato Spikeys — Table : Tselatra", disciplineId: "volley" },
        { site: "montBleu", terrain: "Gym 2", activite: "Zato Spikeys vs. Tselatra — Table : Magic BAM", disciplineId: "volley" },
        { site: "montBleu", terrain: "Gym 2", activite: "Magic BAM vs. Tselatra — Table : Zato Spikeys", disciplineId: "volley" },
        { site: "nouvellesFrontieres", terrain: "Pool A — Gym 1", activite: "Gassikebs NG vs ZATO GIRLS — Table : Southwest", disciplineId: "basket-femme" },
        { site: "nouvellesFrontieres", terrain: "Pool A — Gym 1", activite: "ZATO GIRLS vs Southwest — Table : Gassikebs NG", disciplineId: "basket-femme" },
        { site: "nouvellesFrontieres", terrain: "Pool A — Gym 1", activite: "Gassikebs NG vs Southwest — Table : ZATO GIRLS", disciplineId: "basket-femme" },
        { site: "nouvellesFrontieres", terrain: "Pool B — Gym 2", activite: "Massalgy vs Gassikebs OG — Table : STK QC", disciplineId: "basket-femme" },
        { site: "nouvellesFrontieres", terrain: "Pool B — Gym 2", activite: "Gassikebs OG vs STK QC — Table : Massalgy", disciplineId: "basket-femme" },
        { site: "nouvellesFrontieres", terrain: "Pool B — Gym 2", activite: "Massalgy vs STK QC — Table : Gassikebs OG", disciplineId: "basket-femme" },
        { site: "montBleu", terrain: "Relais Plein-air", activite: "marche5Km", fin: "14:30" },
        { site: "cegepHeritage", terrain: "1/2 Nat 1", activite: "soccerKids", fin: "12:00" },
        { site: "cegepHeritage", terrain: "1/2 Nat 2", activite: "soccerMixte", fin: "12:00" },
        { site: "cegepOutaouais", terrain: "Stationnement 7A", activite: "Classement 1", disciplineId: "petanque" },
        { site: "cegepOutaouais", terrain: "Stationnement 7A", activite: "Classement 2", disciplineId: "petanque" },
        { site: "cegepOutaouais", terrain: "Stationnement 7A", activite: "Classement 3", disciplineId: "petanque" },
        { site: "cegepOutaouais", terrain: "Stationnement 7A", activite: "Quart de finale", disciplineId: "petanque" },
        { site: "cegepOutaouais", terrain: "Stationnement 7A", activite: "Demi-finale", disciplineId: "petanque" },
        { site: "cegepOutaouais", terrain: "Stationnement 7A", activite: "Finale", disciplineId: "petanque" },
        { site: "parcBisson", terrain: "Terrain de Tennis", activite: "tennisSimple", fin: "19:30" }
      ],

      "10:30": [
        { site: "cegepHeritage", terrain: "Studio", activite: "tennisDeTable", fin: "19:30" }
      ],
      "11:00": [
        { site: "cegepHeritage", terrain: "Classroom", activite: "soratononina", fin: "19:30" }
      ],
      "13:30": [
        // ---------- CÉGEP DE L'OUTAOUAIS (POOL A) ----------
        { site: "cegepOutaouais", terrain: "Pool A — Gym 1", activite: "ZandryKely vs Massalgy bleu — Table : CO", disciplineId: "basket-homme"  },
        { site: "cegepOutaouais", terrain: "Pool A — Gym 1", activite: "ZandryKely vs Gassikebs Nord — Table : Massalgy bleu", disciplineId: "basket-homme"  },
        { site: "cegepOutaouais", terrain: "Pool A — Gym 1", activite: "GASLAY vs Massalgy bleu — Table : ZandryKely", disciplineId: "basket-homme"  },
        { site: "cegepOutaouais", terrain: "Pool A — Gym 2", activite: "GASLAY vs Gassikebs Nord — Table : Massalgy blanc", disciplineId: "basket-homme"  },
        { site: "cegepOutaouais", terrain: "Pool A — Gym 2", activite: "GASLAY vs Massalgy blanc — Table : CO", disciplineId: "basket-homme"  },
        { site: "cegepOutaouais", terrain: "Pool A — Gym 2", activite: "Massalgy blanc vs Gassikebs Nord — Table : ZandryKely", disciplineId: "basket-homme"  },

        // ---------- ÉCOLE SECONDAIRE MONT-BLEU (POOL B) ----------
        { site: "montBleu", terrain: "Pool B — Gym 1", activite: "Manal'Azy Squad vs Remenabila — Table : GASIX", disciplineId: "basket-homme"  },
        { site: "montBleu", terrain: "Pool B — Gym 1", activite: "Manal'Azy Squad vs MB3R — Table : Remenabila", disciplineId: "basket-homme"  },
        { site: "montBleu", terrain: "Pool B — Gym 1", activite: "GASSIKEBS WEST vs Remenabila — Table : Manal'Azy Squad", disciplineId: "basket-homme"  },
        { site: "montBleu", terrain: "Pool B — Gym 2", activite: "GASSIKEBS WEST vs MB3R — Table : GASIX", disciplineId: "basket-homme"  },
        { site: "montBleu", terrain: "Pool B — Gym 2", activite: "GASSIKEBS WEST vs GASIX — Table : Remenabila", disciplineId: "basket-homme"  },
        { site: "montBleu", terrain: "Pool B — Gym 2", activite: "GASIX vs MB3R — Table : Manal'Azy Squad", disciplineId: "basket-homme"  },

        // ---------- ÉCOLE NOUVELLE-FRONTIÈRES (POOL C) ----------
        { site: "nouvellesFrontieres", terrain: "Pool C — Gym 1", activite: "JOMAKA vs ZATO Boys Apinga — Table : CO", disciplineId: "basket-homme"  },
        { site: "nouvellesFrontieres", terrain: "Pool C — Gym 1", activite: "JOMAKA vs FI.TE.FA CANADA — Table : ZATO Boys Apinga", disciplineId: "basket-homme"  },
        { site: "nouvellesFrontieres", terrain: "Pool C — Gym 1", activite: "RAVINALA vs ZATO Boys Apinga — Table : JOMAKA", disciplineId: "basket-homme"  },
        { site: "nouvellesFrontieres", terrain: "Pool C — Gym 2", activite: "RAVINALA vs FI.TE.FA CANADA — Table : ZATO Boys Lefona", disciplineId: "basket-homme"  },
        { site: "nouvellesFrontieres", terrain: "Pool C — Gym 2", activite: "RAVINALA vs ZATO Boys Lefona — Table : CO", disciplineId: "basket-homme"  },
        { site: "nouvellesFrontieres", terrain: "Pool C — Gym 2", activite: "ZATO Boys Lefona vs FI.TE.FA CANADA — Table : JOMAKA", disciplineId: "basket-homme"  },

        // ---------- COLLÈGE HERITAGE (POOL D) ----------
        { site: "cegepHeritage", terrain: "Pool D — Gym 1", activite: "B-mi-1 vs Lôfo — Table : Voay", disciplineId: "basket-homme"  },
        { site: "cegepHeritage", terrain: "Pool D — Gym 1", activite: "B-mi-1 vs Air force — Table : Lôfo", disciplineId: "basket-homme"  },
        { site: "cegepHeritage", terrain: "Pool D — Gym 1", activite: "Southwest vs Lôfo — Table : B-mi-1", disciplineId: "basket-homme"  },
        { site: "cegepHeritage", terrain: "Pool D — Gym 2", activite: "Southwest vs Air force — Table : Voay", disciplineId: "basket-homme"  },
        { site: "cegepHeritage", terrain: "Pool D — Gym 2", activite: "Southwest vs Voay — Table : Lôfo", disciplineId: "basket-homme"  },
        { site: "cegepHeritage", terrain: "Pool D — Gym 2", activite: "Voay vs Air force — Table : B-mi-1", disciplineId: "basket-homme"  }
      ],
      "14:30": [
        { site: "cegepHeritage", terrain: "1/2 Nat 1", activite: "soccerVeterans", fin: "19:30" },
        { site: "cegepHeritage", terrain: "1/2 Nat 2", activite: "soccerVeterans", fin: "19:30" }
      ],
      "17:00": [
        { site: "cegepOutaouais", terrain: "Gym 1", activite: "basketballJunior", fin: "18:00" },
        { site: "cegepOutaouais", terrain: "Gym 2", activite: "basketballKids", fin: "18:00" },
        { site: "montBleu", terrain: "Gym 1", activite: "defileMode", fin: "17:30" },
        { site: "nouvellesFrontieres", terrain: "Gym 1", activite: "zumba", fin: "17:30" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 1", activite: "kata", fin: "17:30" },
      ],
      "17:30": [
        { site: "cegepHeritage", terrain: "Gym\\Terrain 1", activite: "ATRIKA 2 vs ZATO SMASHIES — Table : ATRIKA 1", disciplineId: "volley-femme" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 1", activite: "ATRIKA 1 vs Gassikebs — Table : ATRIKA 2", disciplineId: "volley-femme" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 2", activite: "FORMATION vs Gassikeb — Table : ATRIKA 1", disciplineId: "volley-femme" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 2", activite: "FORMATION vs ZATO SMASHIES — Table : ATRIKA 2", disciplineId: "volley-femme" },

        { site: "nouvellesFrontieres", terrain: "Gym 1", activite: "basketFemmeSemi1", disciplineId: "basket-femme" },
        { site: "nouvellesFrontieres", terrain: "Gym 1", activite: "5e vs 6e : Pool A 3rd vs Pool B 3rd", disciplineId: "basket-femme" },
        { site: "nouvellesFrontieres", terrain: "Gym 2", activite: "basketFemmeSemi2", disciplineId: "basket-femme" },

        { site: "montBleu", terrain: "Gym 1", activite: "volleyHommeSemi1" }, 
        { site: "montBleu", terrain: "Gym 2", activite: "volleyHommeSemi2" },  
        { site: "montBleu", terrain: "Gym 1", activite: "volleyHomme5eVs6e" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 1", activite: "SF1 : 1st Place vs 4th Place", disciplineId: "volley-femme" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 2", activite: "SF2 : 2nd Place vs 3rd Place", disciplineId: "volley-femme" },
      ],

      "18:00": [
        { site: "cegepOutaouais", terrain: "Gym 1", activite: "QF1 : Pool A 1st vs Pool B 2nd", disciplineId: "basket-homme" },
        { site: "cegepOutaouais", terrain: "Gym 1", activite: "QF3 : Pool C 1st vs Pool D 2nd", disciplineId: "basket-homme" },
        { site: "cegepOutaouais", terrain: "Gym 2", activite: "QF2 : Pool B 1st vs Pool A 2nd", disciplineId: "basket-homme" },
        { site: "cegepOutaouais", terrain: "Gym 2", activite: "QF4 : Pool D 1st vs Pool C 2nd", disciplineId: "basket-homme" },
      ],
    },


    "dimanche": {
      "08:30": [
        { site: "montBleu", terrain: "Gym 1", activite: "SF1 : Winner QF1 vs Winner QF3", disciplineId: "basket-homme" },
        { site: "montBleu", terrain: "Gym 2", activite: "SF2 : Winner QF2 vs Winner QF4", disciplineId: "basket-homme" }
      ],
      "09:00": [
        { site: "montBleu", terrain: "1/2 Synth 1", activite: "soccerVeteransDemi1" }, 
        { site: "montBleu", terrain: "1/2 Synth 2", activite: "soccerVeteransDemi2" },
        { site: "parcBisson", terrain: "Terrain de Tennis", activite: "tennisSimple" }
      ],
      "10:00": [
        { site: "montBleu", terrain: "Terrain Nat 1", activite: "Demi-finale 1", disciplineId: "soccer" },
        { site: "montBleu", terrain: "Terrain Nat 1", activite: "soccer10eVs11e", disciplineId: "soccer" },
        { site: "montBleu", terrain: "Terrain Nat 2", activite: "Demi-finale 2", disciplineId: "soccer" },
        { site: "montBleu", terrain: "Terrain Nat 2", activite: "soccer12eVs13e", disciplineId: "soccer" }
      ],
      "10:30": [
        { site: "montBleu", terrain: "Gym 1", activite: "Final : Winner Semi-Final 1 vs Winner Semi-Final 2", disciplineId: "volley-femme" },
        { site: "montBleu", terrain: "Gym 2", activite: "basketballKids" }
      ],
      "12:00": [
        { site: "montBleu", terrain: "Gym 1", activite: "volleyballHommesFinale" },
        { site: "montBleu", terrain: "Gym 2", activite: "basketballJunior" }
      ],
      "13:30": [
        { site: "cegepHeritage", terrain: "Studio", activite: "tennisDeTable" }
      ],
      "14:00": [
        { site: "montBleu", terrain: "Gym 1", activite: "Final : Winner SF1 vs Winner SF2", disciplineId: "basket-femme" }
      ],
      "15:30": [
        { site: "montBleu", terrain: "Gym 1", activite: "Final : Winner SF1 vs Winner SF2", disciplineId: "basket-homme" },
        { site: "montBleu", terrain: "1/2 Synth 1", activite: "soccerVeteransFinale" }, 
        { site: "montBleu", terrain: "1/2 Synth 2", activite: "soccerKidsFinale" }
      ],
      "16:30": [
        { site: "montBleu", terrain: "1/2 Synth 1", activite: "soccerFinale" } 
      ],
      "17:30": [
        { site: "montBleu", terrain: "Gym 1", activite: "zumba" }
      ],
      "19:00": [
        { site: "montBleu", terrain: "Gym 1", activite: "ceremonieCloture" }
      ]
    }


  }
};
