import { useParams } from "react-router-dom";
import { sports } from "../data/sports";
import { globalRules } from "../data/global";

export default function Details() {
  const { id } = useParams();
  const sport = sports.find((s) => s.id === id);

  if (!sport) return <h1>Sport non trouvé</h1>;

  const typeLabels = {
    competition: "Compétition",
    exhibition: "Exhibition",
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>{sport.name}</h1>
      <p>{typeLabels[sport.type]}</p>

      <h2>Format</h2>
      <ul>
        <li>Matchs minimum: {sport.format.minMatches}</li>
        <li>{sport.format.structure}</li>
        <li>Éliminatoires: {sport.format.eliminatoire}</li>
        <li>Demi-Finale et Finale: {sport.format.finales}</li>
      </ul>

      <h2>Conditions</h2>
      <p>Date de naissance: {sport.dob_autorisees}</p>
      <p>
        Règles JOM:{" "}
        <a href={globalRules.jom.link} target="_blank">
          Voir document
        </a>
      </p>

      <h2>Inscription</h2>
      <ul>
        <li>Frais: {sport.fees}</li>
        <li>Date limite inscription: {sport.deadline_inscription}</li>
        <li>Date limite soumission liste joueurs: {sport.deadline_liste}</li>
      </ul>

      <p>
        Horaires:{" "}
        <a href={globalRules.calendrier.link} target="_blank">
          Calendrier officiel
        </a>
      </p>
      <a href={sport.signup_form} target="_blank">
        Inscrire une équipe
      </a>

      <br />

      <a href={sport.players_form} target="_blank">
        Soumettre liste de joueurs
      </a>

      <h2>Équipes inscrites</h2>
      {sport.equipes.length > 0 ? (
        <ul>
          {sport.equipes.map((team, i) => (
            <li key={i}>{team}</li>
          ))}
        </ul>
      ) : (
        <p>Aucune équipe inscrite</p>
      )}
    </div>
  );
}
