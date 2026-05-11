import { useParams, useNavigate } from "react-router-dom";
import { sportsData } from "../data";
import { useLanguage } from "../LanguageContext";
import { usePlayers } from "../hooks/usePlayers";

export default function TeamPlayers() {
  const { slug, teamName } = useParams();
  const decodedTeam = decodeURIComponent(teamName);
  const sportKey = Object.keys(sportsData).find(
    (k) => sportsData[k].slug === slug,
  );
  const info = Object.values(sportsData).find((s) => s.slug === slug);
  const { lang, t } = useLanguage();
  const { players, loading } = usePlayers();

  if (!info) return <div className="app-container">ERROR</div>;

  const teamPlayers = (!loading && players[sportKey]?.[decodedTeam]) || [];

  return (
    <div className="details-wrapper">
      <div className="details-card">
        <p className="details-card__label">{decodedTeam}</p>
        <div className="teams-list">
          {loading ? (
            <p className="team-row__loading">
              {lang === "fr"
                ? "Chargement des joueurs..."
                : "Loading players..."}
            </p>
          ) : teamPlayers.length > 0 ? (
            teamPlayers.map((player, i) => (
              <div key={i} className="team-row">
                <span className="team-row__name">{player.fullName}</span>
                <div
                  style={{ display: "flex", gap: "8px", alignItems: "center" }}
                >
                  {player.sex && (
                    <span className="team-row__badge">{player.sex}</span>
                  )}
                  {player.jomStatus && (
                    <span className="team-row__jom">{player.jomStatus}</span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="team-row__empty">
              {lang === "fr"
                ? "Aucun joueur confirmé pour le moment."
                : "No confirmed players yet."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
