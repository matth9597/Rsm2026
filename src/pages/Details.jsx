import { useParams, useNavigate } from "react-router-dom";
import { sportsData } from "../data";
import { UserIcon, UsersIcon } from "@phosphor-icons/react";
import { useLanguage } from "../LanguageContext";
import { useTeams } from "../hooks/useTeams";
import { usePlayers } from "../hooks/usePlayers";

export default function Details() {
  const { slug } = useParams();
  const info = Object.values(sportsData).find((s) => s.slug === slug);
  const sportKey = Object.keys(sportsData).find(
    (k) => sportsData[k].slug === slug,
  );

  const { teams, loading: teamsLoading } = useTeams();
  const { players, loading: playersLoading } = usePlayers();

  if (!info) return <div className="app-container">ERROR</div>;

  const navigate = useNavigate();
  const { lang, t } = useLanguage();

  /** * DYNAMIC CHECK:
   * A sport is "Individual" if it has an individual link but NO team link.
   * This automatically covers Tennis Singles and any future individual sports.
   */
  const isIndividualSport =
    info.lienInscriptionIndividuelle && !info.lienInscriptionEquipe;

  const hasSpecificLinks =
    info.lienInscriptionIndividuelle || info.lienInscriptionEquipe;

  // Data for Team Sports
  const equipes = !teamsLoading && teams[sportKey] ? teams[sportKey] : [];

  // Data for Individual Sports (Flatten all "teams" into one list of players)
  const registeredPlayers =
    !playersLoading && players[sportKey]
      ? Object.values(players[sportKey]).flat()
      : [];

  const isLoading = teamsLoading || playersLoading;

  return (
    <div className="details-wrapper">
      {/* ── Action buttons ── */}
      <div className="details-actions">
        {hasSpecificLinks ? (
          <>
            {info.lienInscriptionEquipe && (
              <button
                className="btn-inscription"
                onClick={() =>
                  window.open(info.lienInscriptionEquipe, "_blank")
                }
              >
                <UsersIcon size={25} color="#ffffff" weight="duotone" />
                {t("sInscrire")} — {t("equipe")}
              </button>
            )}
            {info.lienInscriptionIndividuelle && (
              <button
                className="btn-inscription individuelle"
                onClick={() =>
                  window.open(info.lienInscriptionIndividuelle, "_blank")
                }
              >
                <UserIcon size={21} color="#ffffff" weight="duotone" />
                {t("sInscrire")} — {t("individuel")}
              </button>
            )}
          </>
        ) : (
          info.lienInscription && (
            <button
              className="btn-inscription"
              onClick={() => window.open(info.lienInscription, "_blank")}
            >
              S'inscrire
            </button>
          )
        )}
      </div>

      {/* ── Info sections ── */}
      {info.sections && info.sections.length > 0 && (
        <div className="details-card">
          <p className="details-card__label">{t("informations")}</p>
          {info.sections.map((section, index) => (
            <div key={index} className="section-row">
              <span className="section-row__key">{t(section.nom)}</span>
              <span className="section-row__value">
                {lang === "fr" ? section.texteFR : section.texteEN}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* ── Registered List ── */}
      <div className="details-card">
        <p className="details-card__label">
          {isIndividualSport
            ? lang === "fr"
              ? "Joueurs inscrits"
              : "Registered players"
            : t("equipesInscrites")}
        </p>
        <div className="teams-list">
          {isLoading ? (
            <p className="team-row__loading">
              {lang === "fr" ? "Chargement..." : "Loading..."}
            </p>
          ) : isIndividualSport ? (
            /* LIST PLAYERS DIRECTLY */
            registeredPlayers.length > 0 ? (
              registeredPlayers.map((p, i) => (
                <div key={i} className="team-row">
                  <span className="team-row__name">{p.fullName}</span>
                  {p.jomStatus && (
                    <span className="team-row__jom">{p.jomStatus}</span>
                  )}
                </div>
              ))
            ) : (
              <p className="team-row__empty">
                {lang === "fr"
                  ? "Aucun joueur inscrit."
                  : "No players registered."}
              </p>
            )
          ) : /* LIST TEAMS */
          equipes.length > 0 ? (
            equipes.map((eq, i) => (
              <div key={i} className="team-row">
                <span className="team-row__name">
                  {eq.nom} {eq.ville ? ` (${eq.ville})` : ""}
                </span>
                <button
                  className="team-row__link"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                  onClick={() =>
                    navigate(`/${slug}/equipe/${encodeURIComponent(eq.nom)}`)
                  }
                >
                  {t("listeJoueurs")} →
                </button>
              </div>
            ))
          ) : (
            <p className="team-row__empty">
              {lang === "fr"
                ? "Aucune équipe inscrite."
                : "No teams registered."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
