import { useParams, useNavigate } from "react-router-dom";
import { sportsData } from "../data";
import { UserIcon, UsersIcon } from "@phosphor-icons/react";

export default function Details() {
  const { slug } = useParams();
  const info = Object.values(sportsData).find((s) => s.slug === slug);

  if (!info)
    return (
      <div className="app-container">Sport non trouvé ou lien invalide.</div>
    );

  const navigate = useNavigate();
  const hasSpecificLinks =
    info.lienInscriptionIndividuelle || info.lienInscriptionEquipe;

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
                S'inscrire — Equipe
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
                S'inscrire — Individuel
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
          <p className="details-card__label">Informations</p>
          {info.sections.map((section, index) => (
            <div key={index} className="section-row">
              <span className="section-row__key">{section.nom}</span>
              {section.texte && (
                <span className="section-row__value">{section.texte}</span>
              )}
              {section.lien && section.nom == "Format" && (
                <button 
                  onClick={() => navigate(section.lien.url)} 
                  className="section-row__link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  {section.lien.texte} →
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ── Teams ── */}
      {info.equipes && info.equipes.length > 0 && (
        <div className="details-card">
          <p className="details-card__label">Équipes inscrites</p>
          {info.equipes.map((eq, i) => (
            <div key={i} className="team-row">
              <span className="team-row__name">{eq.nom}</span>
              <a
                href={eq.lienForm}
                target="_blank"
                rel="noreferrer"
                className="team-row__link"
              >
                Liste des joueurs →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
