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
        { site: "cegepHeritage", terrain: "Gym\\Terrain 1", activite: "basketballHommes", fin: "17:30" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 2", activite: "basketballHommes", fin: "17:30" }
      ],
      "17:00": [
        { site: "cegepHeritage", terrain: "Studio", activite: "tennisDeTable", fin: "19:30" }
      ],
      "17:30": [
        { site: "cegepHeritage", terrain: "Gym\\Terrain 1", activite: "basketballHommes", fin: "18:30" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 2", activite: "basketballHommes", fin: "18:30" }
      ],
      "18:30": [
        { site: "cegepOutaouais", terrain: "Gym 1", activite: "basketballHommes", fin: "19:30" },
        { site: "cegepOutaouais", terrain: "Gym 2", activite: "basketballHommes", fin: "19:30" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 1", activite: "basketballHommes", fin: "19:30" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 2", activite: "basketballHommes", fin: "19:30" }
      ],
      "19:30": [
        { site: "cegepOutaouais", terrain: "Gym 1", activite: "basketballHommes", fin: "20:30" },
        { site: "cegepOutaouais", terrain: "Gym 2", activite: "basketballHommes", fin: "20:30" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 1", activite: "basketballHommes", fin: "20:30" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 2", activite: "basketballHommes", fin: "20:30" }
      ],
      "20:30": [
        { site: "cegepOutaouais", terrain: "Gym 1", activite: "basketballHommes", fin: "21:30" },
        { site: "cegepOutaouais", terrain: "Gym 2", activite: "basketballHommes", fin: "21:30" }
      ],
      "21:30": [
        { site: "cegepOutaouais", terrain: "Gym 1", activite: "basketballHommes", fin: "22:30" },
        { site: "cegepOutaouais", terrain: "Gym 2", activite: "basketballHommes", fin: "22:30" }
      ]
    },

    "samedi": {
      "08:00": [
        { site: "montBleu", terrain: "Gym 1", activite: "ceremonieOuverture", fin: "08:30" }
      ],
      "10:00": [
        { site: "montBleu", terrain: "Gym 1", activite: "volleyballFemmes", fin: "13:30" },
        { site: "montBleu", terrain: "Gym 2", activite: "volleyballFemmes", fin: "13:30" },
        { site: "nouvellesFrontieres", terrain: "Gym 1", activite: "basketballFemmes", fin: "13:30" },
        { site: "nouvellesFrontieres", terrain: "Gym 2", activite: "basketballFemmes", fin: "13:30" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 1", activite: "volleyballHommes", fin: "13:30" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 2", activite: "volleyballHommes", fin: "10:30" },
        { site: "montBleu", terrain: "Terrain Nat 1", activite: "soccerHommes", fin: "13:30" },
        { site: "montBleu", terrain: "Terrain Nat 2", activite: "soccerHommes", fin: "13:30" },
        { site: "montBleu", terrain: "1/2 Synth", activite: "marche5Km", fin: "11:00" },
        { site: "montBleu", terrain: "Relais Plein-air", activite: "soccerKids", fin: "11:00" },
        { site: "cegepHeritage", terrain: "1/2 Nat", activite: "soccerMixte", fin: "11:00" },
        { site: "cegepHeritage", terrain: "Stationnement 7A", activite: "petanque", fin: "17:30" }, // Corrigé : 10h00 à 17h30 en continu
        { site: "parcBisson", terrain: "Terrain de Tennis", activite: "tennisSimple", fin: "19:30" } // Corrigé : 10h00 à 19h30 en continu
      ],
      "10:30": [
        { site: "cegepHeritage", terrain: "Gym\\Terrain 2", activite: "volleyballHommes", fin: "13:30" },
        { site: "cegepHeritage", terrain: "Studio", activite: "tennisDeTable", fin: "13:30" },
        { site: "cegepHeritage", terrain: "Classroom", activite: "classement1", fin: "11:30" }
      ],
      "11:30": [
        { site: "cegepHeritage", terrain: "Classroom", activite: "classement2", fin: "12:30" }
      ],
      "12:30": [
        { site: "cegepHeritage", terrain: "Classroom", activite: "classement3", fin: "13:00" }
      ],
      "13:00": [
        { site: "cegepHeritage", terrain: "Classroom", activite: "soratononina", fin: "14:00" }
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
        { site: "cegepHeritage", terrain: "Classroom", activite: "quartFinale", fin: "15:30" }
      ],
      "15:00": [
        { site: "montBleu", terrain: "1/2 Synth", activite: "soccerVeterans", fin: "17:00" },
        { site: "montBleu", terrain: "Relais Plein-air", activite: "soccerVeterans", fin: "17:00" }
      ],
      "15:30": [
        { site: "cegepHeritage", terrain: "Classroom", activite: "demiFinale", fin: "17:00" }
      ],
      "17:00": [
        { site: "cegepOutaouais", terrain: "Gym 1", activite: "basketballJunior", fin: "18:00" },
        { site: "cegepOutaouais", terrain: "Gym 2", activite: "basketballKids", fin: "18:00" },
        { site: "montBleu", terrain: "Gym 1", activite: "defileMode", fin: "18:00" },
        { site: "montBleu", terrain: "Gym 2", activite: "zumba", fin: "18:00" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 1", activite: "kata", fin: "18:00" },
        { site: "montBleu", terrain: "Terrain Nat 1", activite: "soccerFinale", fin: "18:30" },
        { site: "cegepHeritage", terrain: "Classroom", activite: "finale", fin: "18:00" }
      ],
      "17:30": [
        { site: "montBleu", terrain: "Gym 1", activite: "volleyballFemmes", fin: "19:30" },
        { site: "montBleu", terrain: "Gym 2", activite: "volleyballFemmes", fin: "19:30" },
        { site: "nouvellesFrontieres", terrain: "Gym 1", activite: "basketballFemmes", fin: "19:00" },
        { site: "nouvellesFrontieres", terrain: "Gym 2", activite: "basketballFemmes", fin: "19:00" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 1", activite: "volleyballHommes", fin: "19:30" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 2", activite: "volleyballHommes", fin: "19:30" }
      ],
      "18:00": [
        { site: "cegepOutaouais", terrain: "Gym 1", activite: "demi1", fin: "18:30" },
        { site: "cegepOutaouais", terrain: "Gym 2", activite: "demi2", fin: "18:30" },
        { site: "montBleu", terrain: "Gym 1", activite: "semi1", fin: "19:30" },
        { site: "montBleu", terrain: "Gym 2", activite: "semi2", fin: "19:30" },
        { site: "montBleu", terrain: "Terrain Nat 2", activite: "soccerHommes", fin: "19:30" },
        { site: "montBleu", terrain: "1/2 Synth", activite: "soccerVeterans", fin: "19:30" },
        { site: "montBleu", terrain: "Relais Plein-air", activite: "soccerVeterans", fin: "19:30" }
      ],
      "18:30": [
        { site: "cegepOutaouais", terrain: "Gym 1", activite: "quart1", fin: "20:00" },
        { site: "cegepOutaouais", terrain: "Gym 2", activite: "quart2", fin: "20:00" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 1", activite: "quart1", fin: "20:00" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 2", activite: "quart2", fin: "20:00" }
      ],
      "19:00": [
        { site: "nouvellesFrontieres", terrain: "Gym 1", activite: "basketballFemmes", fin: "20:00" }
      ],
      "19:30": [
        { site: "montBleu", terrain: "Gym 1", activite: "volleyballFemmes", fin: "21:00" },
        { site: "montBleu", terrain: "Gym 2", activite: "volleyballFemmes", fin: "21:00" },
        { site: "montBleu", terrain: "Terrain Nat 1", activite: "soccerHommes", fin: "21:00" },
        { site: "montBleu", terrain: "Terrain Nat 2", activite: "soccerHommes", fin: "21:00" }
      ],
      "20:00": [
        { site: "cegepOutaouais", terrain: "Gym 1", activite: "quart3", fin: "21:30" },
        { site: "cegepOutaouais", terrain: "Gym 2", activite: "quart4", fin: "21:30" },
        { site: "montBleu", terrain: "Gym 1", activite: "demi1", fin: "21:30" },
        { site: "montBleu", terrain: "Gym 2", activite: "demi2", fin: "21:30" },
        { site: "nouvellesFrontieres", terrain: "Gym 1", activite: "basketballFemmes", fin: "21:30" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 1", activite: "quart3", fin: "21:30" },
        { site: "cegepHeritage", terrain: "Gym\\Terrain 2", activite: "quart4", fin: "21:30" }
      ],
      "23:00": [
        { site: "cegepOutaouais", terrain: "Gym 1", activite: "apresParty", fin: "02:00" },
        { site: "montBleu", terrain: "Gym 1", activite: "apresParty", fin: "02:00" },
{
   "site":"cegepHeritage",
   "terrain":"Gym\\Terrain 1",
   "activite":"apresParty",
   "fin":"02:00"
}
]
},
"dimanche":{
   "08:30":[
      {
         "site":"montBleu",
         "terrain":"Gym 1",
         "activite":"basketballHommes",
         "fin":"09:30"
      },
      {
         "site":"montBleu",
         "terrain":"Gym 2",
         "activite":"basketballHommes",
         "fin":"09:30"
      }
   ],
   "09:00":[
      {
         "site":"montBleu",
         "terrain":"1/2 Synth",
         "activite":"soccerVeterans",
         "fin":"11:30"
      },
      {
         "site":"montBleu",
         "terrain":"Relais Plein-air",
         "activite":"soccerVeterans",
         "fin":"11:30"
      },
      {
         "site":"parcBisson",
         "terrain":"Terrain de Tennis",
         "activite":"tennisSimple",
         "fin":"12:00"
      },
      {
         "site":"cegepOutaouais",
         "terrain":"Gym 1",
         "activite":"demi1",
         "fin":"09:30"
      },
      {
         "site":"cegepOutaouais",
         "terrain":"Gym 2",
         "activite":"demi2",
         "fin":"09:30"
      }
   ],
   "09:30":[
      {
         "site":"cegepOutaouais",
         "terrain":"Gym 1",
         "activite":"demi1",
         "fin":"11:00"
      },
      {
         "site":"cegepOutaouais",
         "terrain":"Gym 2",
         "activite":"demi2",
         "fin":"11:00"
      }
   ],
   "10:00":[
      {
         "site":"montBleu",
         "terrain":"Terrain Nat 1",
         "activite":"soccerHommes",
         "fin":"11:30"
      },
      {
         "site":"montBleu",
         "terrain":"Terrain Nat 2",
         "activite":"soccerHommes",
         "fin":"11:30"
      }
   ],
   "10:30":[
      {
         "site":"montBleu",
         "terrain":"Gym 1",
         "activite":"volleyballFemmes",
         "fin":"11:00"
      },
      {
         "site":"montBleu",
         "terrain":"Gym 2",
         "activite":"basketballKids",
         "fin":"11:00"
      },
      {
         "site":"cegepHeritage",
         "terrain":"Gym\\Terrain 1",
         "activite":"demi1",
         "fin":"11:00"
      },
      {
         "site":"cegepHeritage",
         "terrain":"Gym\\Terrain 2",
         "activite":"demi2",
         "fin":"11:00"
      }
   ],
   "11:00":[
      {
         "site":"montBleu",
         "terrain":"Gym 1",
         "activite":"finale",
         "fin":"12:00"
      },
      {
         "site":"montBleu",
         "terrain":"Gym 2",
         "activite":"finale",
         "fin":"12:00"
      }
   ],
   "11:30":[
      {
         "site":"montBleu",
         "terrain":"Terrain Nat 1",
         "activite":"soccerHommes",
         "fin":"12:30"
      },
      {
         "site":"montBleu",
         "terrain":"Terrain Nat 2",
         "activite":"soccerHommes",
         "fin":"12:30"
      }
   ],
   "12:00":[
      {
         "site":"montBleu",
         "terrain":"Gym 1",
         "activite":"volleyballHommes",
         "fin":"13:30"
      },
      {
         "site":"montBleu",
         "terrain":"Gym 2",
         "activite":"basketballJunior",
         "fin":"12:30"
      }
   ],
   "12:30":[
      {
         "site":"montBleu",
         "terrain":"Gym 2",
         "activite":"finale",
         "fin":"13:30"
      }
   ],
   "13:30":[
      {
         "site":"cegepHeritage",
         "terrain":"Studio",
         "activite":"tennisDeTable",
         "fin":"14:30"
      }
   ],
   "14:00":[
      {
         "site":"montBleu",
         "terrain":"Gym 1",
         "activite":"basketballFemmes",
         "fin":"14:30"
      }
   ],
   "14:30":[
      {
         "site":"montBleu",
         "terrain":"Gym 1",
         "activite":"finale",
         "fin":"15:30"
      }
   ],
   "15:30":[
      {
         "site":"montBleu",
         "terrain":"Gym 1",
         "activite":"basketballHommes",
         "fin":"16:00"
      },
      {
         "site":"montBleu",
         "terrain":"Terrain Nat 1",
         "activite":"soccerVeterans",
         "fin":"16:00"
      },
      {
         "site":"montBleu",
         "terrain":"Terrain Nat 2",
         "activite":"soccerKids",
         "fin":"16:00"
      }
   ],
   "16:00":[
      {
         "site":"montBleu",
         "terrain":"Gym 1",
         "activite":"finale",
         "fin":"17:00"
      },
      {
         "site":"montBleu",
         "terrain":"Terrain Nat 1",
         "activite":"finale",
         "fin":"17:30"
      },
      {
         "site":"montBleu",
         "terrain":"Terrain Nat 2",
         "activite":"finale",
         "fin":"17:00"
      }
   ],
   "16:30":[
      {
         "site":"montBleu",
         "terrain":"Gym 1",
         "activite":"soccerHommes",
         "fin":"17:00"
      }
   ],
   "17:00":[
      {
         "site":"montBleu",
         "terrain":"Gym 1",
         "activite":"finale",
         "fin":"17:30"
      }
   ],
   "17:30":[
      {
         "site":"montBleu",
         "terrain":"Gym 1",
         "activite":"zumba",
         "fin":"18:30"
      }
   ],
   "19:00":[
      {
         "site":"montBleu",
         "terrain":"Gym 1",
         "activite":"ceremonieCloture",
         "fin":"20:30"
      }
   ]
}
}
}